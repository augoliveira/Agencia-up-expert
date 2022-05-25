"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  :root {\n    --dark-navy: #020c1b;\n    --navy: #0a192f;\n    --light-navy: #112240;\n    --lightest-navy: #233554;\n    --navy-shadow: rgba(2, 12, 27, 0.7);\n    --dark-slate: #495670;\n    --slate: #8892b0;\n    --light-slate: #a8b2d1;\n    --lightest-slate: #ccd6f6;\n    --white: #e6f1ff;\n    --green: #64ffda;\n    --green-tint: rgba(100, 255, 218, 0.1);\n    --pink: #f57dff;\n    --blue: #57cbff;\n\n    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,\n      sans-serif;\n    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;\n\n    --fz-xxs: 12px;\n    --fz-xs: 13px;\n    --fz-sm: 14px;\n    --fz-md: 16px;\n    --fz-lg: 18px;\n    --fz-xl: 20px;\n    --fz-xxl: 22px;\n    --fz-heading: 32px;\n\n    --border-radius: 4px;\n    --nav-height: 100px;\n    --nav-scroll-height: 70px;\n\n    --tab-height: 42px;\n    --tab-width: 120px;\n\n    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);\n    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n\n    --hamburger-width: 30px;\n\n    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;\n    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;\n    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    --ham-after-active: bottom 0.1s ease-out,\n      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var variables = (0, _styledComponents.css)(_templateObject());
var _default = variables;
exports["default"] = _default;