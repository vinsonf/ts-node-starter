"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Truck = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var truckSchema = new mongoose_1.default.Schema({
    name: String,
    email: String,
    password: String,
    coords: { latitude: Number, longitude: Number },
    pictureBinary: String,
    menu: {
        type: mongoose_1.default.Schema['Types'].ObjectId,
        ref: 'Menu'
    }
});
exports.Truck = mongoose_1.default.model('Truck', truckSchema);
