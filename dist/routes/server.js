"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("./index.routes"));

var _tasks = _interopRequireDefault(require("./tasks.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); //Settings

app.set('port', process.env.PORT || 3000); //Middlewares

app.use(_express["default"].json()); //Routes

app.use(_index["default"]);
app.use('/tasks', _tasks["default"]);
var _default = app;
exports["default"] = _default;