"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

var _CalibreRegular = _interopRequireDefault(require("../fonts/Calibre/Calibre-Regular.woff"));

var _CalibreRegular2 = _interopRequireDefault(require("../fonts/Calibre/Calibre-Regular.woff2"));

var _CalibreMedium = _interopRequireDefault(require("../fonts/Calibre/Calibre-Medium.woff"));

var _CalibreMedium2 = _interopRequireDefault(require("../fonts/Calibre/Calibre-Medium.woff2"));

var _CalibreSemibold = _interopRequireDefault(require("../fonts/Calibre/Calibre-Semibold.woff"));

var _CalibreSemibold2 = _interopRequireDefault(require("../fonts/Calibre/Calibre-Semibold.woff2"));

var _CalibreRegularItalic = _interopRequireDefault(require("../fonts/Calibre/Calibre-RegularItalic.woff"));

var _CalibreRegularItalic2 = _interopRequireDefault(require("../fonts/Calibre/Calibre-RegularItalic.woff2"));

var _CalibreMediumItalic = _interopRequireDefault(require("../fonts/Calibre/Calibre-MediumItalic.woff"));

var _CalibreMediumItalic2 = _interopRequireDefault(require("../fonts/Calibre/Calibre-MediumItalic.woff2"));

var _CalibreSemiboldItalic = _interopRequireDefault(require("../fonts/Calibre/Calibre-SemiboldItalic.woff"));

var _CalibreSemiboldItalic2 = _interopRequireDefault(require("../fonts/Calibre/Calibre-SemiboldItalic.woff2"));

var _SFMonoRegular = _interopRequireDefault(require("../fonts/SFMono/SFMono-Regular.woff"));

var _SFMonoRegular2 = _interopRequireDefault(require("../fonts/SFMono/SFMono-Regular.woff2"));

var _SFMonoSemibold = _interopRequireDefault(require("../fonts/SFMono/SFMono-Semibold.woff"));

var _SFMonoSemibold2 = _interopRequireDefault(require("../fonts/SFMono/SFMono-Semibold.woff2"));

var _SFMonoRegularItalic = _interopRequireDefault(require("../fonts/SFMono/SFMono-RegularItalic.woff"));

var _SFMonoRegularItalic2 = _interopRequireDefault(require("../fonts/SFMono/SFMono-RegularItalic.woff2"));

var _SFMonoSemiboldItalic = _interopRequireDefault(require("../fonts/SFMono/SFMono-SemiboldItalic.woff"));

var _SFMonoSemiboldItalic2 = _interopRequireDefault(require("../fonts/SFMono/SFMono-SemiboldItalic.woff2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var calibreNormalWeights = {
  400: [_CalibreRegular["default"], _CalibreRegular2["default"]],
  500: [_CalibreMedium["default"], _CalibreMedium2["default"]],
  600: [_CalibreSemibold["default"], _CalibreSemibold2["default"]]
};
var calibreItalicWeights = {
  400: [_CalibreRegularItalic["default"], _CalibreRegularItalic2["default"]],
  500: [_CalibreMediumItalic["default"], _CalibreMediumItalic2["default"]],
  600: [_CalibreSemiboldItalic["default"], _CalibreSemiboldItalic2["default"]]
};
var sfMonoNormalWeights = {
  400: [_SFMonoRegular["default"], _SFMonoRegular2["default"]],
  600: [_SFMonoSemibold["default"], _SFMonoSemibold2["default"]]
};
var sfMonoItalicWeights = {
  400: [_SFMonoRegularItalic["default"], _SFMonoRegularItalic2["default"]],
  600: [_SFMonoSemiboldItalic["default"], _SFMonoSemiboldItalic2["default"]]
};
var calibre = {
  name: 'Calibre',
  normal: calibreNormalWeights,
  italic: calibreItalicWeights
};
var sfMono = {
  name: 'SF Mono',
  normal: sfMonoNormalWeights,
  italic: sfMonoItalicWeights
};

var createFontFaces = function createFontFaces(family) {
  var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'normal';
  var styles = '';

  for (var _i = 0, _Object$entries = Object.entries(family[style]); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        weight = _Object$entries$_i[0],
        formats = _Object$entries$_i[1];

    var woff = formats[0];
    var woff2 = formats[1];
    styles += "\n      @font-face {\n        font-family: '".concat(family.name, "';\n        src: url(").concat(woff2, ") format('woff2'),\n            url(").concat(woff, ") format('woff');\n        font-weight: ").concat(weight, ";\n        font-style: ").concat(style, ";\n        font-display: auto;\n      }\n    ");
  }

  return styles;
};

var calibreNormal = createFontFaces(calibre);
var calibreItalic = createFontFaces(calibre, 'italic');
var sfMonoNormal = createFontFaces(sfMono);
var sfMonoItalic = createFontFaces(sfMono, 'italic');
var Fonts = (0, _styledComponents.css)(_templateObject(), calibreNormal + calibreItalic + sfMonoNormal + sfMonoItalic);
var _default = Fonts;
exports["default"] = _default;