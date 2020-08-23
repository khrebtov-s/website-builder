"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = void 0;

var _utils = require("./utils");

function title(block) {
  var _block$options = block.options,
      tag = _block$options.tag,
      styles = _block$options.styles;
  return (0, _utils.row)((0, _utils.col)("<".concat(tag, ">").concat(block.value, "</").concat(tag, ">")), styles);
}

function text(block) {
  return (0, _utils.row)((0, _utils.col)("<p>".concat(block.value, "</p>")), block.options.styles);
}

function textColumns(block) {
  var html = block.value.map(function (item) {
    return (0, _utils.col)(item);
  });
  return (0, _utils.row)(html.join(""), block.options.styles);
}

var templates = {
  title: title,
  text: text,
  textColumns: textColumns
};
exports.templates = templates;