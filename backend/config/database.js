import { Sequelize } from 'sequelize';

// Create a new Sequelize instance for connecting to the database
const sequelize = new Sequelize('NextStore', 'samson', 'samson', {
  host: '127.0.0.1',
  dialect: 'mysql',
  logging: false,
});

export default sequelize;
