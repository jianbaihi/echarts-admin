/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  "root": true,
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier"
  ],
  rules:{
    "prettier/prettier": "off",
    "semi":"off",
    "quotes": "off",
    "vue/multi-word-component-names": "off",
    
  }
}
