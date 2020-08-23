"use strict";

var _model = require("./model");

require("./styles/main.css");

_model.model.forEach(function (block) {
  var html;

  if (block.type === "title") {
    html = title(block);
  } else if (block.type === "text") {
    html = text(block);
  } else if (block.type === "textColumns") {
    html = textColumns(block);
  }

  document.querySelector("#site").insertAdjacentHTML("beforeend", html);
});

function title(block) {
  return "\n    <div class=\"row\">\n        <div class=\"col-sm\">\n            <h1>\n                ".concat(block.value, "\n            </h1>\n        </div>\n    </div>\n    ");
}

function text(block) {
  return "\n    <div class=\"col-sm\">\n        <p>\n        ".concat(block.value, "\n        </p>\n    </div>\n    ");
}

function textColumns(block) {
  var html = block.value.map(function (item) {
    return "<div class=\"col-sm\">".concat(item, "</div>");
  });
  return "\n      <div class=\"row\">\n          ".concat(html.join(""), "\n      </div>\n      ");
}