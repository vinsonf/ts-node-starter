"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbService = exports.DbService = void 0;
var sequelizeConnection_1 = require("./sequelizeConnection");
var user_model_1 = require("../models/user.model");
var profile_model_1 = require("../models/profile.model");
var role_type_model_1 = require("../models/role_type.model");
// Associations
// User
user_model_1.User.hasOne(profile_model_1.Profile);
user_model_1.User.belongsTo(role_type_model_1.RoleType);
// Profile
profile_model_1.Profile.belongsTo(user_model_1.User);
var DbService = /** @class */ (function () {
    // private db: Connection;
    function DbService() {
        var uri = process.env.DB_URI || '';
    }
    DbService.prototype.sync = function () {
        var _this = this;
        sequelizeConnection_1.sequelize.sync({ force: true }).then(function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log('SYNC SUCCESS');
                setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                    var roleType, user, profile, users;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, role_type_model_1.RoleType.create({
                                    nicename: 'System Admin'
                                })];
                            case 1:
                                roleType = _a.sent();
                                return [4 /*yield*/, user_model_1.User.create({
                                        email: 'jane',
                                        // @ts-ignore
                                        roleTypeId: roleType.id,
                                    })];
                            case 2:
                                user = _a.sent();
                                return [4 /*yield*/, profile_model_1.Profile.create({
                                        firstName: 'jane\'s profile',
                                        // @ts-ignore
                                        userId: user.id
                                    })];
                            case 3:
                                profile = _a.sent();
                                return [4 /*yield*/, profile_model_1.Profile.findAll({
                                        include: [user_model_1.User],
                                    })];
                            case 4:
                                users = _a.sent();
                                users.forEach(function (user) { return console.log(user.toJSON()); });
                                return [2 /*return*/];
                        }
                    });
                }); }, 6000);
                return [2 /*return*/];
            });
        }); });
    };
    DbService.prototype.getTrucks = function () {
        console.log('getting trucks ');
        return new Promise(function (resolve, reject) {
            // Truck.find({}).then( trucks => {
            //     resolve(trucks);
            // }).catch((e) => reject(e))
            resolve([]);
        });
    };
    DbService.prototype.getUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, user_model_1.User.findAll({
                            include: [profile_model_1.Profile, role_type_model_1.RoleType],
                        })];
                    case 1:
                        users = _a.sent();
                        console.log('user', users);
                        return [2 /*return*/, users];
                }
            });
        });
    };
    return DbService;
}());
exports.DbService = DbService;
exports.dbService = new DbService();
