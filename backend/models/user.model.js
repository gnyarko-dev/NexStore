import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

/**
 * User Model
 */
const User = sequelize.define('User', {
  id: {
    type: DataTypes.STRING(6), // Ensure it's 6 characters long
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  resetToken: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  resetTokenExpiry: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  verificationToken: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  isVerified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  hooks: {
    beforeValidate: (user, options) => {
      // Only generate the ID if it's not already set (e.g., when updating a user)
      if (!user.id) {
        const year = new Date().getFullYear().toString().slice(-2); // Get the last two digits of the year
        const randomNumber = Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit number
        user.id = `${year}${randomNumber}`; // Combine them to form the ID
      }
    },
  },
});

export default User;
