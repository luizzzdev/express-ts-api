import { Sequelize } from '../../../shared/services/sequelize';
import sequelize, { Model } from 'sequelize';

export const MessageModel = <Message>Sequelize.define(
  'Message',
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    message: {
      type: sequelize.STRING,
    },
  },
  {
    tableName: 'message',
    timestamps: false,
  }
);

export interface Message extends Model {
  id: number;
  message: string;
}
