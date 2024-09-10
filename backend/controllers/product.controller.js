import Product from '../models/product.model.js';
import { Op } from 'sequelize';

// Create a new product for a shop
export const createProduct = async (req, res) => {
  try {
    const { shopId, name, description, price, stock } = req.body;

    console.log(req.file);  // Log the file object

    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;  // Get image path

    // Create the product with the image URL
    const product = await Product.create({
      shopId,
      name,
      description,
      price,
      stock,
      imageUrl,
    });

    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating product' });
  }
};

// Get products for a shop with pagination and sorting
export const getProductsByShop = async (req, res) => {
  try {
    const { shopId } = req.params;
    const { page = 1, limit = 10, sort = 'name' } = req.query;

    const offset = (page - 1) * limit;
    const products = await Product.findAndCountAll({
      where: { shopId },
      limit: parseInt(limit),
      offset: parseInt(offset),
      order: [[sort, 'ASC']],
    });

    res.status(200).json({
      totalPages: Math.ceil(products.count / limit),
      currentPage: parseInt(page),
      products: products.rows,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching products' });
  }
};

// Update a product
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, stock } = req.body;

    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    await product.update({ name, description, price, stock });

    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating product' });
  }
};

// Delete a product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    await product.destroy();

    res.status(204).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting product' });
  }
};

// Search products by name in a shop
export const searchProducts = async (req, res) => {
  try {
    const { shopId } = req.params;
    const { search = '' } = req.query;

    const products = await Product.findAll({
      where: {
        shopId,
        name: {
          [Op.like]: `%${search}%`,
        },
      },
    });

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error searching products' });
  }
};
