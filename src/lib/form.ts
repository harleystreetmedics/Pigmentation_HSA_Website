// Shared with scripts/gen-forms-html.mjs, which writes public/__forms.html so Netlify can detect the form.
export const FORM_NAME = "hair-enquiry";

export const CONCERN_OPTIONS = [
  "Receding hairline",
  "Thinning crown",
  "Wider parting / thinning on top",
  "All-over thinning",
  "Sudden or heavy shedding",
  "Patchy hair loss",
  "Hair loss after pregnancy",
  "Hair loss around the menopause",
  "Thinning with PCOS or hormonal changes",
  "Hair breakage or damaged hair",
  "Itchy, flaky or sore scalp",
  "Beard or eyebrow thinning",
  "Interested in a specific treatment",
  "Not sure / general advice",
] as const;

export const TIME_OPTIONS = ["Any time", "Morning", "Afternoon", "Evening"] as const;
