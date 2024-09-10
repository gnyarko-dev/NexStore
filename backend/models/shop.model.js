import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './user.model.js';

/**
 * Shop model definition
 */
const Shop = sequelize.define('Shop', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  latitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  longitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  userId: {
    type: DataTypes.STRING(6),
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
});

// Set up the relationship between User and Shop
User.hasMany(Shop, { foreignKey: 'userId' });
Shop.belongsTo(User, { foreignKey: 'userId' });

export default Shop;
