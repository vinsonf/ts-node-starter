import { DataTypes } from 'sequelize';
import {sequelize} from "../db/sequelizeConnection";

export const PropertyManager =  sequelize.define('propertyManager', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
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
    county: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    property_id: {
        type: DataTypes.STRING
    },

}, {
});


