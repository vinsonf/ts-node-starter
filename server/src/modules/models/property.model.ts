import { DataTypes } from 'sequelize';
import {sequelize} from "../db/sequelizeConnection";

export const Property =  sequelize.define('property', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name_of_property: {
        type: DataTypes.STRING
    },
    enable_notifications: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    street: {
        type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.STRING
    },
    zip: {
        type: DataTypes.STRING
    },
    country: {
        type: DataTypes.STRING
    },
    principal: {
        type: DataTypes.FLOAT
    },
    interest: {
        type: DataTypes.FLOAT
    },
    MIP: {
        type: DataTypes.FLOAT
    },
    IRP: {
        type: DataTypes.FLOAT
    },
    other_debt: {
        type: DataTypes.FLOAT
    },
    DUNS: {
        type: DataTypes.STRING
    },
    reviewed: {
        type: DataTypes.BOOLEAN
    },
}, {
});
