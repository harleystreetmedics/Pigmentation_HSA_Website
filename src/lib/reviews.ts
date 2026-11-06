// Patient reviews. Empty until verified pigmentation reviews with permission are supplied
// (docs/open-questions.md #21). The main website's review block can't be verified, so it isn't reused.
// When reviews are added, the carousel on the home and results pages appears automatically.

export type Review = { name: string; service: string; quote: string; source: string };

export const REVIEW_RATING = "";

export const REVIEWS: Review[] = [];
