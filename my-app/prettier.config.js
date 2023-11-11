// prettier.config.js, .prettierrc.js, prettier.config.cjs, or .prettierrc.cjs

/** @type {import("prettier").Config} */
const config = {
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  plugins: ['prettier-plugin-tailwindcss'],
};

module.exports = config;
