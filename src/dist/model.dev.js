"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.model = void 0;
var model = [{
  type: "title",
  value: "Test Title",
  options: {
    tag: "h2",
    styles: "background-color: darkred; color: #fff; text-align: center"
  }
}, {
  type: "text",
  value: "loLorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, temporerem",
  options: {
    styles: "background: darkblue; color: yellow"
  }
}, {
  type: "textColumns",
  value: ["text 1", "text 2", "text 3"],
  options: {
    styles: "padding: 1rem"
  }
}];
exports.model = model;