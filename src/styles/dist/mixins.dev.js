"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    list-style: none;\n    padding: 0;\n    margin: 0;\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    padding: 0;\n    margin: 0;\n    list-style: none;\n    font-size: var(--fz-lg);\n    li {\n      position: relative;\n      padding-left: 30px;\n      margin-bottom: 10px;\n      &:before {\n        content: '\u25B9';\n        position: absolute;\n        left: 0;\n        color: var(--green);\n      }\n    }\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    box-shadow: 0 10px 30px -15px var(--navy-shadow);\n    transition: var(--transition);\n\n    &:hover,\n    &:focus {\n      box-shadow: 0 20px 30px -15px var(--navy-shadow);\n    }\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    color: var(--green);\n    background-color: transparent;\n    border: 1px solid var(--green);\n    border-radius: var(--border-radius);\n    padding: 1.25rem 1.75rem;\n    font-size: var(--fz-sm);\n    font-family: var(--font-mono);\n    line-height: 1;\n    text-decoration: none;\n    cursor: pointer;\n    transition: var(--transition);\n    &:hover,\n    &:focus,\n    &:active {\n      background-color: var(--green-tint);\n      outline: none;\n    }\n    &:after {\n      display: none !important;\n    }\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    color: var(--green);\n    background-color: transparent;\n    border: 1px solid var(--green);\n    border-radius: var(--border-radius);\n    padding: 0.75rem 1rem;\n    font-size: var(--fz-xs);\n    font-family: var(--font-mono);\n    line-height: 1;\n    text-decoration: none;\n    cursor: pointer;\n    transition: var(--transition);\n    &:hover,\n    &:focus,\n    &:active {\n      background-color: var(--green-tint);\n      outline: none;\n    }\n    &:after {\n      display: none !important;\n    }\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    text-decoration: none;\n    text-decoration-skip-ink: auto;\n    position: relative;\n    transition: var(--transition);\n    color: var(--green);\n    &:hover,\n    &:focus,\n    &:active {\n      color: var(--green);\n      outline: 0;\n      &:after {\n        width: 100%;\n      }\n      & > * {\n        color: var(--green) !important;\n        transition: var(--transition);\n      }\n    }\n    &:after {\n      content: '';\n      display: block;\n      width: 0;\n      height: 1px;\n      position: relative;\n      bottom: 0.37em;\n      background-color: var(--green);\n      transition: var(--transition);\n      opacity: 0.5;\n    }\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    text-decoration: none;\n    text-decoration-skip-ink: auto;\n    color: inherit;\n    position: relative;\n    transition: var(--transition);\n    &:hover,\n    &:active,\n    &:focus {\n      color: var(--green);\n      outline: 0;\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: var(--green);\n  background-color: transparent;\n  border: 1px solid var(--green);\n  border-radius: var(--border-radius);\n  font-size: var(--fz-xs);\n  font-family: var(--font-mono);\n  line-height: 1;\n  text-decoration: none;\n  cursor: pointer;\n  transition: var(--transition);\n  padding: 1.25rem 1.75rem;\n\n  &:hover,\n  &:focus,\n  &:active {\n    background-color: var(--green-tint);\n    outline: none;\n  }\n  &:after {\n    display: none !important;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var button = (0, _styledComponents.css)(_templateObject());
var mixins = {
  flexCenter: (0, _styledComponents.css)(_templateObject2()),
  flexBetween: (0, _styledComponents.css)(_templateObject3()),
  link: (0, _styledComponents.css)(_templateObject4()),
  inlineLink: (0, _styledComponents.css)(_templateObject5()),
  button: button,
  smallButton: (0, _styledComponents.css)(_templateObject6()),
  bigButton: (0, _styledComponents.css)(_templateObject7()),
  boxShadow: (0, _styledComponents.css)(_templateObject8()),
  fancyList: (0, _styledComponents.css)(_templateObject9()),
  resetList: (0, _styledComponents.css)(_templateObject10())
};
var _default = mixins;
exports["default"] = _default;