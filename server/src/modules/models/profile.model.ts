import { DataTypes } from 'sequelize';
import {sequelize} from "../db/sequelizeConnection";

export const Profile =  sequelize.define('profile', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
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
}, {
});


