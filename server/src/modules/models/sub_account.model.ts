import { DataTypes } from 'sequelize';
import {sequelize} from "../db/sequelizeConnection";

export const SubAccount =  sequelize.define('subAccount', {
  user_id: {
      type: DataTypes.INTEGER,
  },
  account_id: {
      type: DataTypes.INTEGER,
  },
}, {
});
