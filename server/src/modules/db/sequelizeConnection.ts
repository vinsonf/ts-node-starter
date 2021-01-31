import {Sequelize} from "sequelize";

export const sequelize = new Sequelize( 'testdb', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres',
});
