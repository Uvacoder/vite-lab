module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    /* 'plugin:vue/vue3-essential', */
    'eslint:recommended',
    '@vue/prettier',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    sourceType: 'module',
  },
};
