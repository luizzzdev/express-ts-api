import sequelize from 'sequelize';
import { config } from '../config';

const dbConfig = config.get('db');

// @ts-ignore
export const Sequelize = new sequelize(
  dbConfig.name,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: 'mysql',
  }
);
