"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Todo = void 0;
var User_1 = require("./User");
var Todo = /** @class */ (function (_super) {
    __extends(Todo, _super);
    function Todo(userId, username, password, id, title, description, deadline, created_at, category, complete, updated_at) {
        if (complete === void 0) { complete = false; }
        var _this = _super.call(this, userId, username, password) || this;
        _this.id = id;
        _this.title = title;
        _this.description = description;
        _this.deadline = deadline;
        _this.created_at = created_at;
        _this.category = category;
        _this.complete = complete;
        _this.updated_at = updated_at;
        return _this;
    }
    Todo.prototype.displayList = function () {
        return "The Title of this task is :".concat(this.title, " \n") +
            "You have to do the following : ".concat(this.description, " \n") +
            "The task was created on : ".concat(this.created_at, "  and supposed to be completed on ").concat(this.deadline, " \n") +
            "This task was updated on : ".concat(this.updated_at, " \n") +
            "Task completed : ".concat(this.complete, " \n") +
            "This task was created by : ".concat(this.username, " \n");
    };
    Todo.prototype.setTitle = function (newTitle) {
        return this.title = newTitle;
    };
    Todo.prototype.getTitleTask = function () {
        return "".concat(this.title);
    };
    Todo.prototype.getDescription = function () {
        return "".concat(this.description);
    };
    Todo.prototype.setDescription = function (newDescription) {
        return this.description = newDescription;
    };
    Todo.prototype.setDeadline = function (newDeadline) {
        return this.deadline = newDeadline;
    };
    Todo.prototype.setEmploye = function (name) {
        return this.username = name;
    };
    Todo.prototype.markAsDone = function (isTaskCompleted) {
        return isTaskCompleted;
    };
    Todo.prototype.removeTask = function (taskName) {
    };
    return Todo;
}(User_1.User));
exports.Todo = Todo;
