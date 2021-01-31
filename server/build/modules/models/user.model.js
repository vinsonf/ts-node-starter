"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var sequelize_1 = require("sequelize");
var sequelizeConnection_1 = require("../db/sequelizeConnection");
exports.User = sequelizeConnection_1.sequelize.define('user', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING
    },
    hash: {
        type: sequelize_1.DataTypes.STRING
    },
    reset_hash: {
        type: sequelize_1.DataTypes.STRING
    },
    locked: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    enable_notification: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
}, {});
