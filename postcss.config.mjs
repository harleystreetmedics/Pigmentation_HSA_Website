// PostCSS config for the webpack build (Hostinger's build environment can't run Turbopack's CSS loader process).
const config = { plugins: { '@tailwindcss/postcss': {} } };

export default config;
