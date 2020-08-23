"use strict";

var _model = require("./model");

var _templates = require("./templates");

require("./styles/main.css");

var site = document.querySelector("#site");

_model.model.forEach(function (block) {
  var generate = _templates.templates[block.type];

  if (generate) {
    var html = generate(block);
    site.insertAdjacentHTML("beforeend", html);
  }
});