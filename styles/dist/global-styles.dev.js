"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalStyle = void 0;

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t*{\n\t\tmargin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        list-style: none;\n        text-decoration: none;\n        \n\t}\n\t\n\thtml{\n\t\t\n\t\t@media (max-width: 1199.92px) {\n\t\t\tfont-size: 93.75%; // 16px\n\t\t}\n\t\t\n\t\t@media (max-width: 767.92px) {\n\t\t\tfont-size: 87.5%; // 14px\n\t\t}\n\t}\n\n\tbody {\n\t\tfont-family: ", ";\n\t\tcolor: white;\n        font-size: 1.2rem;\n        font-weight: 400;\n        background-color: #03091F;\n        ::-webkit-scrollbar{\n            width: 8px;\n        }\n        ::-webkit-scrollbar-track{\n            background: #ccc;\n        }\n        ::-webkit-scrollbar-thumb{\n            background: linear-gradient(180deg, #7F41DB 0%, #022894 100%);\n            border-radius: 24px;\n        }\n\t}\n\n\t.full-h{\n\t\tmin-height: 100vh;\n\t}\n\n\t.flex{\n\t\tdisplay: flex;\n\n\t\t&.y-center{\n\t\t\talign-items: center;\n\t\t}\n\n\t\t&.one{\n\t\t\tflex: 1\n\t\t}\n\t}\n\ta{\n        color: inherit;\n        font-family: inherit;\n    }\n    p{\n        line-height: 2rem;\n    }\n\n    .GradientText{\n        background: linear-gradient(120deg, rgb(132, 111, 244), rgb(241, 118, 116));\n        background-clip: text;\n        display: inline-block;\n        -webkit-text-fill-color: transparent;\n        -webkit-background-clip: text;\n    }\n\n    .Before{\n        padding-left: 3rem;\n        position: relative;\n        &::before{\n            content: '';\n            position: absolute;\n            left: 0;\n            top: 50%;\n            transform: translateY(-50%);\n            width: 35px;\n            height: 2px;\n            background-color: #395FF6 ;\n        }\n    }\n\n    .title-con{\n        width: 50%;\n        margin: 0 auto;\n        text-align: center;\n    }\n\n    .gradient-cards-con{\n        display: grid;\n        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n        grid-gap: 2rem;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.fonts.font1;
});
exports.GlobalStyle = GlobalStyle;