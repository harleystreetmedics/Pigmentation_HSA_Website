/* eslint-disable @typescript-eslint/no-require-imports */
// Browser QA: cookie consent, clinic switcher, quiz, enquiry form, FAQ and console errors.
// Needs playwright-core (npm i -D playwright-core) and Chrome; serve ./out on port 4173 first (npx serve out -l 4173).
const { chromium } = require('playwright-core');
const B = 'http://127.0.0.1:4173';
const ok = (c, m) => console.log((c ? 'PASS ' : 'FAIL ') + m);
(async () => {
  const b = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 } });
  const p = await ctx.newPage();
  const errors = [];
  p.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
  const requests = [];
  p.on('request', (r) => requests.push(r.url()));

  // Cookie banner + no trackers before consent
  await p.goto(B + '/', { waitUntil: 'networkidle' });
  ok(await p.getByRole('dialog', { name: 'Your privacy' }).isVisible(), 'cookie banner shows on first visit');
  ok(!requests.some((u) => /googletagmanager|facebook\.net/.test(u)), 'no analytics/pixel requests before consent');
  await p.getByRole('button', { name: 'Reject non-essential' }).click();
  ok(!(await p.getByRole('dialog', { name: 'Your privacy' }).isVisible().catch(() => false)), 'banner closes on reject');
  const stored = await p.evaluate(() => localStorage.getItem('hsw-cookie-consent'));
  ok(stored && JSON.parse(stored).analytics === false, 'rejection stored');

  // Location switcher changes sticky call link
  await p.goto(B + '/', { waitUntil: 'networkidle' });
  await p.getByRole('button', { name: 'Open menu' }).click();
  await p.locator('#mobile-menu').getByRole('button', { name: 'Glasgow' }).click();
  await p.keyboard.press('Escape');
  const callHref = await p.getByRole('link', { name: /Call our Glasgow clinic/ }).getAttribute('href');
  ok(callHref === 'tel:+441414888985', 'Glasgow selection updates sticky call link: ' + callHref);
  await p.reload({ waitUntil: 'networkidle' });
  ok((await p.getByRole('link', { name: /Call our Glasgow clinic/ }).count()) === 1, 'clinic choice persists after reload');

  // Quiz: red-flag path
  await p.goto(B + '/which-treatment/', { waitUntil: 'networkidle' });
  await p.getByRole('button', { name: 'Woman' }).click();
  await p.getByRole('button', { name: 'Round or smooth bald patches' }).click();
  await p.getByRole('button', { name: 'Less than 3 months' }).click();
  await p.getByRole('button', { name: /started suddenly/ }).click();
  await p.getByRole('button', { name: 'Next' }).click();
  await p.getByRole('button', { name: "I'm not sure yet" }).click();
  const txt = await p.locator('main').innerText();
  ok(txt.includes('should be medically assessed'), 'quiz red-flag answers show medical assessment warning');
  ok(txt.includes('Alopecia areata') && !txt.includes('Options you could ask about'), 'quiz red-flag path suggests condition reading, no treatments');
  ok(await p.getByRole('link', { name: 'Book consultation' }).first().isVisible(), 'quiz ends with Book consultation');
  // Quiz: standard path
  await p.getByRole('button', { name: 'Start again' }).click();
  await p.getByRole('button', { name: 'Man', exact: true }).click();
  await p.getByRole('button', { name: 'My hairline is moving back' }).click();
  await p.getByRole('button', { name: 'More than a year' }).click();
  await p.getByRole('button', { name: 'None of these' }).click();
  await p.getByRole('button', { name: 'Next' }).click();
  await p.getByRole('button', { name: /open to in-clinic/ }).click();
  const txt2 = await p.locator('main').innerText();
  ok(txt2.includes('PRP hair treatment') && txt2.includes('Male pattern baldness'), 'quiz standard path suggests PRP and male pattern reading');
  const quizReq = requests.filter((u) => u.includes('which-treatment') === false && /\/api|__forms/.test(u));
  ok(quizReq.length === 0, 'quiz sends no network requests');

  // Enquiry form validation + submit
  await p.goto(B + '/book/', { waitUntil: 'networkidle' });
  await p.getByRole('button', { name: 'Request my consultation' }).click();
  const errs = await p.locator('form [aria-invalid="true"]').count();
  ok(errs === 5, 'empty form shows 5 field errors (got ' + errs + ')');
  await p.getByLabel('Full name').fill('Test Person');
  await p.getByLabel('Phone', { exact: true }).fill('07700 900123');
  await p.getByLabel('Email', { exact: true }).fill('test@example.com');
  await p.getByLabel('Main concern').selectOption('Thinning crown');
  await p.getByRole('checkbox').check();
  let posted = null;
  await p.route('**/__forms.html', async (route) => {
    if (route.request().method() === 'POST') { posted = route.request().postData(); return route.fulfill({ status: 200, body: 'ok' }); }
    return route.continue();
  });
  await p.getByRole('button', { name: 'Request my consultation' }).click();
  await p.getByRole('status').waitFor({ timeout: 5000 });
  ok(posted && posted.includes('form-name=hair-enquiry') && posted.includes('concern=Thinning+crown') && posted.includes('consent=yes'), 'form posts Netlify-encoded data');
  ok((await p.getByRole('status').innerText()).includes('Thank you'), 'thank-you message shown');

  // FAQ accordion
  await p.goto(B + '/faq/', { waitUntil: 'networkidle' });
  const d = p.locator('details').first();
  await d.locator('summary').click();
  ok(await d.evaluate((el) => el.open), 'FAQ accordion opens');

  // Client-side navigation has no 404 payloads
  await p.goto(B + '/', { waitUntil: 'networkidle' });
  await p.getByRole('link', { name: /Learn more about PRP/ }).first().click();
  await p.waitForURL('**/treatments/prp-hair-treatment/');
  ok(true, 'client navigation to PRP page');
  ok(errors.length === 0, 'no console errors' + (errors.length ? ': ' + errors.slice(0, 3).join(' | ') : ''));
  await b.close();
})();



