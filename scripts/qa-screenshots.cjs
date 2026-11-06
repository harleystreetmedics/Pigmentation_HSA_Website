/* eslint-disable @typescript-eslint/no-require-imports */
// Screenshots: node scripts/qa-screenshots.cjs docs/screens <name> <url> ... (env: SIZES, FULL=0, JPG=1, SKIPBANNER=1).
// Needs playwright-core and Chrome.
// usage: node shots.js <outDir> <name|url> ...   (pairs of name and url)
const { chromium } = require('playwright-core');
const path = require('path');
const sizes = { mobile: { width: 390, height: 844 }, tablet: { width: 820, height: 1180 }, desktop: { width: 1440, height: 900 } };
(async () => {
  const [outDir, ...rest] = process.argv.slice(2);
  const only = process.env.SIZES ? process.env.SIZES.split(',') : Object.keys(sizes);
  const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
  for (let i = 0; i < rest.length; i += 2) {
    const name = rest[i], url = rest[i + 1];
    for (const s of only) {
      const ctx = await browser.newContext({ viewport: sizes[s], deviceScaleFactor: 1 });
      if (process.env.SKIPBANNER) await ctx.addInitScript(() => localStorage.setItem('hsw-cookie-consent', JSON.stringify({ analytics: false, marketing: false, ts: 'qa', v: 1 })));
      const page = await ctx.newPage();
      try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
      } catch (e) { console.log('warn', name, s, e.message.split('\n')[0]); }
      await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 500) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); } window.scrollTo(0, 0); });
      await page.waitForTimeout(1200);
      const full = process.env.FULL !== '0';
      const jpg = Boolean(process.env.JPG);
      await page.screenshot({ path: path.join(outDir, `${name}-${s}.${jpg ? 'jpg' : 'png'}`), fullPage: full, ...(jpg ? { type: 'jpeg', quality: 55 } : {}) });
      console.log('ok', name, s);
      await ctx.close();
    }
  }
  await browser.close();
})();



