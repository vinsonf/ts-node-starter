"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_model_1 = require("../models/user.model");
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.createNewUser = function (user) {
        return user_model_1.User.create(user);
    };
    return UserService;
}());
