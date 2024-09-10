import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Shop from './shop.model.js';

// Define the Product model
const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  shopId: {
    type: DataTypes.INTEGER,
    references: {
      model: Shop,
      key: 'id',
    },
  },
});

// Set up relationship between Product and Shop
Shop.hasMany(Product, { foreignKey: 'shopId' });
Product.belongsTo(Shop, { foreignKey: 'shopId' });

export default Product;
