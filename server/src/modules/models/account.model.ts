import { DataTypes } from 'sequelize';
import {sequelize} from "../db/sequelizeConnection";

export const Account =  sequelize.define('account', {
  user_id: {
      type: DataTypes.INTEGER,
  },
}, {
});
