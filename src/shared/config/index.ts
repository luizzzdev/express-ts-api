import convict from 'convict';
require('dotenv').config();

export const config = convict({
  db: {
    host: {
      doc: 'Database host name/IP',
      format: '*',
      default: 'server1.dev.test',
      env: 'DATABASE_URL',
    },
    name: {
      doc: 'Database name',
      format: String,
      default: 'users',
      env: 'DATABASE_DB',
    },
    user: {
      doc: 'Database user',
      format: String,
      default: 'users',
      env: 'DATABASE_USER',
    },
    password: {
      doc: 'Database password',
      format: String,
      default: 'users',
      env: 'DATABASE_PASSWORD',
    },
  },
});
