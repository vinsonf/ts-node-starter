"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
var bcryptjs_1 = require("bcryptjs");
var SALT_WORK_FACTOR = 10;
var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.passwordHashString = function (candidatePassword) {
        return new Promise(function (resolve, reject) {
            bcryptjs_1.genSalt(SALT_WORK_FACTOR, function (err, salt) {
                if (err) {
                    reject(err);
                }
                bcryptjs_1.hash(candidatePassword, salt, function (errorHash, hash) {
                    if (errorHash) {
                        reject(errorHash);
                    }
                    resolve(hash);
                });
            });
        });
    };
    AuthService.prototype.passwordCompareToHash = function (candidatePassword, hash) {
        return new Promise(function (resolve, reject) {
            bcryptjs_1.compare(candidatePassword, hash, function (err, isMatch) {
                if (err) {
                    reject(err);
                }
                resolve(isMatch);
            });
        });
    };
    return AuthService;
}());
exports.authService = new AuthService();
