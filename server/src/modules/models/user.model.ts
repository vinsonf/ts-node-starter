import { DataTypes } from 'sequelize';
import {sequelize} from "../db/sequelizeConnection";

export const User =  sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING
    },
    hash: {
        type: DataTypes.STRING
    },
    reset_hash: {
        type: DataTypes.STRING
    },
    locked: {
        type: DataTypes.BOOLEAN
    },
    enable_notification: {
        type: DataTypes.BOOLEAN
    },
    isActive: {
        type: DataTypes.BOOLEAN
    },
}, {
});


