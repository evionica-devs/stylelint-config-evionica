'use strict';

const path = require('path')

module.exports = {
  extends: ['stylelint-config-standard'],
  customSyntax: "postcss-html",
  ignoreFiles: [path.join(process.cwd(), "/dist/**/*"), path.join(process.cwd(), "/coverage/**/*")],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
  },
};
