import { Sequelize } from 'sequelize';
import initModels from './models/init-models.js';

const sqlDB = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST || 'localhost',
  dialect: 'mssql',
  port: Number(process.env.DB_PORT) || 1433,
});

(async () => {
  try {
    sqlDB.authenticate();
    console.log('Connection has been established successfully');
  } catch (error) {
    console.log('Unnable to connect to the database:', error);
  }
})();

initModels(sqlDB);
