"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  /* Fade up */\n  .fadeup-enter {\n    opacity: 0.01;\n    transform: translateY(20px);\n    transition: opacity 300ms var(--easing), transform 300ms var(--easing);\n  }\n\n  .fadeup-enter-active {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms var(--easing), transform 300ms var(--easing);\n  }\n\n  /* Fade down */\n  .fadedown-enter {\n    opacity: 0.01;\n    transform: translateY(-20px);\n    transition: opacity 300ms var(--easing), transform 300ms var(--easing);\n  }\n\n  .fadedown-enter-active {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms var(--easing), transform 300ms var(--easing);\n  }\n\n  /* Fade */\n  .fade-enter {\n    opacity: 0;\n  }\n  .fade-enter-active {\n    opacity: 1;\n    transition: opacity 300ms var(--easing);\n  }\n  .fade-exit {\n    opacity: 1;\n  }\n  .fade-exit-active {\n    opacity: 0;\n    transition: opacity 300ms var(--easing);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// https://reactcommunity.org/react-transition-group/css-transition
var TransitionStyles = (0, _styledComponents.css)(_templateObject());
var _default = TransitionStyles;
exports["default"] = _default;