// Field names must match public/__forms.html, which lets Netlify detect the form at deploy time.
export const FORM_NAME = "pigmentation-enquiry";

export const CONCERN_OPTIONS = [
  "Patches on the cheeks, forehead or upper lip",
  "Sun spots or age spots",
  "Freckles",
  "Dark marks after acne or injury",
  "Pigmentation after pregnancy or hormonal changes",
  "Uneven or dull skin tone",
  "Dark circles under the eyes",
  "Underarms, inner thighs, knees or elbows",
  "Hands, neck or chest",
  "Lips or around the mouth",
  "White or pale patches",
  "Interested in a specific treatment",
  "Not sure / general advice",
] as const;

export const TIME_OPTIONS = ["Any time", "Morning", "Afternoon", "Evening"] as const;
