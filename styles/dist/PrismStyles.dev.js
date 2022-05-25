"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  /**\n  * Add back the container background-color, border-radius, padding, margin\n  * and overflow that we removed from <pre>.\n  */\n  .gatsby-highlight {\n    background-color: ", ";\n    color: ", ";\n    border-radius: var(--border-radius);\n    margin: 2em 0;\n    padding: 1.25em;\n    overflow: auto;\n    position: relative;\n    font-family: var(--font-mono);\n    font-size: var(--fz-md);\n  }\n\n  .gatsby-highlight code[class*='language-'],\n  .gatsby-highlight pre[class*='language-'] {\n    height: auto !important;\n    font-size: var(--fz-sm);\n    line-height: 1.5;\n    white-space: pre;\n    word-spacing: normal;\n    word-break: normal;\n    word-wrap: normal;\n    tab-size: 2;\n    hyphens: none;\n  }\n\n  /**\n  * Remove the default PrismJS theme background-color, border-radius, margin,\n  * padding and overflow.\n  * 1. Make the element just wide enough to fit its content.\n  * 2. Always fill the visible space in .gatsby-highlight.\n  * 3. Adjust the position of the line numbers\n  */\n  .gatsby-highlight pre[class*='language-'] {\n    background-color: transparent;\n    margin: 0;\n    padding: 0;\n    overflow: initial;\n    float: left; /* 1 */\n    min-width: 100%; /* 2 */\n    padding-top: 2em;\n  }\n\n  /* File names */\n  .gatsby-code-title {\n    padding: 1em 1.5em;\n    font-family: var(--font-mono);\n    font-size: var(--fz-xs);\n    background-color: ", ";\n    color: ", ";\n    border-top-left-radius: var(--border-radius);\n    border-top-right-radius: var(--border-radius);\n    border-bottom: 1px solid ", ";\n\n    & + .gatsby-highlight {\n      margin-top: 0;\n      border-top-left-radius: 0;\n      border-top-right-radius: 0;\n    }\n  }\n\n  /* Line highlighting */\n  .gatsby-highlight-code-line {\n    display: block;\n    background-color: ", ";\n    border-left: 2px solid var(--green);\n    padding-left: calc(1em + 2px);\n    padding-right: 1em;\n    margin-right: -1.35em;\n    margin-left: -1.35em;\n  }\n\n  /* Language badges */\n  .gatsby-highlight pre[class*='language-']::before {\n    background: var(--lightest-navy);\n    color: var(--white);\n    font-size: var(--fz-xxs);\n    font-family: var(--font-mono);\n    line-height: 1.5;\n    letter-spacing: 0.1em;\n    text-transform: uppercase;\n    border-radius: 0 0 3px 3px;\n    position: absolute;\n    top: 0;\n    left: 1.25rem;\n    padding: 0.25rem 0.5rem;\n  }\n  .gatsby-highlight pre[class='language-javascript']::before {\n    content: 'js';\n  }\n  .gatsby-highlight pre[class='language-js']::before {\n    content: 'js';\n  }\n  .gatsby-highlight pre[class='language-jsx']::before {\n    content: 'jsx';\n  }\n  .gatsby-highlight pre[class='language-graphql']::before {\n    content: 'GraphQL';\n  }\n  .gatsby-highlight pre[class='language-html']::before {\n    content: 'html';\n  }\n  .gatsby-highlight pre[class='language-css']::before {\n    content: 'css';\n  }\n  .gatsby-highlight pre[class='language-mdx']::before {\n    content: 'mdx';\n  }\n  .gatsby-highlight pre[class='language-shell']::before {\n    content: 'shell';\n  }\n  .gatsby-highlight pre[class='language-sh']::before {\n    content: 'sh';\n  }\n  .gatsby-highlight pre[class='language-bash']::before {\n    content: 'bash';\n  }\n  .gatsby-highlight pre[class='language-yaml']::before {\n    content: 'yaml';\n  }\n  .gatsby-highlight pre[class='language-markdown']::before {\n    content: 'md';\n  }\n  .gatsby-highlight pre[class='language-json']::before,\n  .gatsby-highlight pre[class='language-json5']::before {\n    content: 'json';\n  }\n  .gatsby-highlight pre[class='language-diff']::before {\n    content: 'diff';\n  }\n  .gatsby-highlight pre[class='language-text']::before {\n    content: 'text';\n  }\n  .gatsby-highlight pre[class='language-flow']::before {\n    content: 'flow';\n  }\n\n  /* Prism Styles */\n  .token {\n    display: inline;\n  }\n  .token.comment,\n  .token.block-comment,\n  .token.prolog,\n  .token.doctype,\n  .token.cdata {\n    color: ", ";\n  }\n  .token.punctuation {\n    color: ", ";\n  }\n  .token.namespace,\n  .token.deleted {\n    color: ", ";\n  }\n  .token.function-name,\n  .token.function,\n  .token.class-name,\n  .token.constant,\n  .token.symbol {\n    color: ", ";\n  }\n  .token.attr-name,\n  .token.operator,\n  .token.rule {\n    color: ", ";\n  }\n  .token.keyword,\n  .token.boolean,\n  .token.number,\n  .token.property {\n    color: ", ";\n  }\n  .token.tag,\n  .token.selector,\n  .token.important,\n  .token.atrule,\n  .token.builtin,\n  .token.entity,\n  .token.url {\n    color: ", ";\n  }\n  .token.string,\n  .token.char,\n  .token.attr-value,\n  .token.regex,\n  .token.variable,\n  .token.inserted {\n    color: ", ";\n  }\n  .token.important,\n  .token.bold {\n    font-weight: 600;\n  }\n  .token.italic {\n    font-style: italic;\n  }\n  .token.entity {\n    cursor: help;\n  }\n  .namespace {\n    opacity: 0.7;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var prismColors = {
  bg: "#112340",
  lineHighlight: "#1d2d50",
  blue: "#5ccfe6",
  purple: "#c3a6ff",
  green: "#bae67e",
  yellow: "#ffd580",
  orange: "#ffae57",
  red: "#ef6b73",
  grey: "#a2aabc",
  comment: "#8695b799"
}; // https://www.gatsbyjs.org/packages/gatsby-remark-prismjs

var PrismStyles = (0, _styledComponents.css)(_templateObject(), prismColors.bg, prismColors.variable, prismColors.bg, prismColors.grey, prismColors.lineHighlight, prismColors.lineHighlight, prismColors.comment, prismColors.grey, prismColors.red, prismColors.yellow, prismColors.orange, prismColors.purple, prismColors.blue, prismColors.green);
var _default = PrismStyles;
exports["default"] = _default;