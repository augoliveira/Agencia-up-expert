"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mixins = _interopRequireDefault(require("./mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var theme = {
  bp: {
    mobileS: "max-width: 330px",
    mobileM: "max-width: 400px",
    mobileL: "max-width: 480px",
    tabletS: "max-width: 600px",
    tabletL: "max-width: 768px",
    desktopXS: "max-width: 900px",
    desktopS: "max-width: 1080px",
    desktopM: "max-width: 1200px",
    desktopL: "max-width: 1400px"
  },
  mixins: _mixins["default"]
};
var _default = theme;
exports["default"] = _default;