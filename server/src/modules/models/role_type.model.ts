import { DataTypes } from 'sequelize';
import {sequelize} from "../db/sequelizeConnection";

export const RoleType =  sequelize.define('roleType', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nicename: {
        type: DataTypes.STRING
    },
    enable_notifications: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },

}, {
});


