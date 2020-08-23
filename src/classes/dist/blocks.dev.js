"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextColumnsBlock = exports.TextBlock = exports.ImageBlock = exports.TitleBlock = void 0;

var _utils = require("../utils");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Block =
/*#__PURE__*/
function () {
  function Block(value, options) {
    _classCallCheck(this, Block);

    this.value = value;
    this.options = options;
  }

  _createClass(Block, [{
    key: "toHTML",
    value: function toHTML() {
      throw new Error("Method toHTML must be implemented!");
    }
  }]);

  return Block;
}();

var TitleBlock =
/*#__PURE__*/
function (_Block) {
  _inherits(TitleBlock, _Block);

  function TitleBlock(value, options) {
    _classCallCheck(this, TitleBlock);

    return _possibleConstructorReturn(this, _getPrototypeOf(TitleBlock).call(this, value, options));
  }

  _createClass(TitleBlock, [{
    key: "toHTML",
    value: function toHTML() {
      var _this$options = this.options,
          tag = _this$options.tag,
          styles = _this$options.styles;
      return (0, _utils.row)((0, _utils.col)("<".concat(tag, ">").concat(this.value, "</").concat(tag, ">")), styles);
    }
  }]);

  return TitleBlock;
}(Block);

exports.TitleBlock = TitleBlock;

var ImageBlock =
/*#__PURE__*/
function (_Block2) {
  _inherits(ImageBlock, _Block2);

  function ImageBlock(value, options) {
    _classCallCheck(this, ImageBlock);

    return _possibleConstructorReturn(this, _getPrototypeOf(ImageBlock).call(this, value, options));
  }

  _createClass(ImageBlock, [{
    key: "toHTML",
    value: function toHTML() {
      var _this$options2 = this.options,
          styles = _this$options2.styles,
          alt = _this$options2.alt,
          imageStyles = _this$options2.imageStyles;
      var html = "<img src=\"".concat(this.value, "\" alt=\"").concat(alt, "\" style=\"").concat(imageStyles, "\">");
      return (0, _utils.row)(html, styles);
    }
  }]);

  return ImageBlock;
}(Block);

exports.ImageBlock = ImageBlock;

var TextBlock =
/*#__PURE__*/
function (_Block3) {
  _inherits(TextBlock, _Block3);

  function TextBlock(value, options) {
    _classCallCheck(this, TextBlock);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextBlock).call(this, value, options));
  }

  _createClass(TextBlock, [{
    key: "toHTML",
    value: function toHTML() {
      return (0, _utils.row)((0, _utils.col)("<p>".concat(this.value, "</p>")), this.options.styles);
    }
  }]);

  return TextBlock;
}(Block);

exports.TextBlock = TextBlock;

var TextColumnsBlock =
/*#__PURE__*/
function (_Block4) {
  _inherits(TextColumnsBlock, _Block4);

  function TextColumnsBlock(value, options) {
    _classCallCheck(this, TextColumnsBlock);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextColumnsBlock).call(this, value, options));
  }

  _createClass(TextColumnsBlock, [{
    key: "toHTML",
    value: function toHTML() {
      var html = this.value.map(function (item) {
        return (0, _utils.col)(item);
      });
      return (0, _utils.row)(html.join(""), this.options.styles);
    }
  }]);

  return TextColumnsBlock;
}(Block);

exports.TextColumnsBlock = TextColumnsBlock;