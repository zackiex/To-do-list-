"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(userId, username, password, userLastName, userFirstName, userPhone, userEmail) {
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.userLastName = userLastName;
        this.userFirstName = userFirstName;
        this.userPhone = userPhone;
        this.userEmail = userEmail;
    }
    User.prototype.displayUserInfo = function () {
        return "Username :".concat(this.username, " \n") +
            "Last name : ".concat(this.userLastName, " First name : ").concat(this.userFirstName, " \n") +
            "Phone : ".concat(this.userPhone, " \n") +
            "E-mail: ".concat(this.userEmail, " \n");
    };
    User.prototype.setPassword = function (oldPassword, newPassword) {
        var ps = true;
        while (ps) {
            if (oldPassword == this.password) {
                ps = false;
                console.log("Password successfully changed");
                return this.password = newPassword;
            }
            else {
                console.log("Old password is incorrect");
            }
        }
    };
    User.prototype.setUserName = function (name) {
        return this.username = name;
    };
    return User;
}());
exports.User = User;
