import { Op } from 'sequelize';
import Shop from '../models/shop.model.js';
import User from '../models/user.model.js';
import Product from '../models/product.model.js';
import * as geocodeService from '../services/opencage.service.js';

// Create a new shop
export const createShop = async (req, res) => {
  try {
    const { userId, address, lat, lng } = req.body;

    // Check if the user exists
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // If lat and lng are provided, use them; otherwise, geocode the address
    let location;
    if (lat && lng) {
      location = { lat, lng };
    } else if (address) {
      location = await geocodeService.getGeocode(address);
    } else {
      return res.status(400).json({ message: 'Either address or coordinates (lat, lng) are required' });
    }

    const shop = await Shop.create({ ...req.body, latitude: location.lat, longitude: location.lng });
    res.status(201).json(shop);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message || 'Error creating shop' });
  }
};

// Update an existing shop
export const updateShop = async (req, res) => {
  try {
    const { id } = req.params;
    const { address, lat, lng } = req.body;
    const shop = await Shop.findByPk(id);

    if (!shop) {
      return res.status(404).json({ message: 'Shop not found' });
    }

    let location;
    if (lat && lng) {
      location = { lat, lng };
    } else if (address) {
      location = await geocodeService.getGeocode(address);
    } else {
      location = { lat: shop.latitude, lng: shop.longitude };
    }

    await shop.update({ ...req.body, latitude: location.lat, longitude: location.lng });
    res.status(200).json(shop);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating shop' });
  }
};

// Get a shop by its ID
export const getShopById = async (req, res) => {
  try {
    const { id } = req.params;
    const shop = await Shop.findByPk(id);

    if (!shop) {
      return res.status(404).json({ message: 'Shop not found' });
    }

    // Example of reverse geocoding if you want to return the address
    const address = await geocodeService.getReverseGeocode(shop.latitude, shop.longitude);
    res.status(200).json({ ...shop.toJSON(), address });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching shop' });
  }
};

// Get all shops with pagination and sorting
export const getAllShops = async (req, res) => {
  try {
    const { page = 1, limit = 10, sort = 'name' } = req.query;

    const offset = (page - 1) * limit;
    const shops = await Shop.findAndCountAll({
      limit: parseInt(limit),
      offset: parseInt(offset),
      order: [[sort, 'ASC']],
    });

    res.status(200).json({
      totalPages: Math.ceil(shops.count / limit),
      currentPage: parseInt(page),
      shops: shops.rows,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching shops' });
  }
};

// Delete a shop
export const deleteShop = async (req, res) => {
  try {
    const { id } = req.params;
    const shop = await Shop.findByPk(id);

    if (!shop) {
      return res.status(404).json({ message: 'Shop not found' });
    }

    await shop.destroy();
    res.status(204).json({ message: 'Shop deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting shop' });
  }
};

// Search shops by name
export const searchShops = async (req, res) => {
  try {
    const { search = '' } = req.query;

    const shops = await Shop.findAll({
      where: {
        name: {
          [Op.like]: `%${search}%`, // Search by partial match
        },
      },
    });

    res.status(200).json(shops);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error searching shops' });
  }
};

// Get statistics for shops and products
export const getStatistics = async (req, res) => {
  try {
    const totalShops = await Shop.count();
    const totalProducts = await Product.count();

    res.status(200).json({
      totalShops,
      totalProducts,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching statistics' });
  }
};
