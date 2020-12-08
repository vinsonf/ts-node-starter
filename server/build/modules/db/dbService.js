"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbService = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var trucks_model_1 = require("../models/trucks.model");
var DbService = /** @class */ (function () {
    function DbService() {
        var uri = process.env.DB_URI || '';
        mongoose_1.default.connect(uri, { useNewUrlParser: true }).then(function () {
            console.log('connected');
        });
        this.db = mongoose_1.default.connection;
        this.db.on('error', console.error.bind(console, 'connection error:'));
        this.db.once('open', function () {
            console.log('connected');
        });
    }
    DbService.prototype.getTrucks = function () {
        console.log('getting trucks ');
        return new Promise(function (resolve, reject) {
            trucks_model_1.Truck.find({}).then(function (trucks) {
                resolve(trucks);
            }).catch(function (e) { return reject(e); });
        });
    };
    return DbService;
}());
exports.DbService = DbService;
