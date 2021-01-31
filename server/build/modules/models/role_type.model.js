"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleType = void 0;
var sequelize_1 = require("sequelize");
var sequelizeConnection_1 = require("../db/sequelizeConnection");
exports.RoleType = sequelizeConnection_1.sequelize.define('roleType', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nicename: {
        type: sequelize_1.DataTypes.STRING
    },
    enable_notifications: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true
    },
}, {});
