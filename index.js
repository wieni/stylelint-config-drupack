"use strict";

module.exports = {
  extends: "stylelint-config-twbs-bootstrap/scss",
  plugins: ["stylelint-prettier"],
  rules: {
    "prettier/prettier": true,
    "color-hex-length": "long",
  },
};
