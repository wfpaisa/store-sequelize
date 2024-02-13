import { CartsModel } from "../models/carts.model.js";

/**
 * Esto obtiene los Carritos
 * @param {import("express").Request} req Este es el request
 * @param {import("express").Response} res Esta es la respuesta
 */
export const getCarts = async (req, res) => {
  try {
    const allCarts = await CartsModel.findAll();

    res.json(allCarts);
  } catch (error) {

    res.status(500).json({ message: error.message });
  }
};


/**
 * Esto crea un Carrito
 * @param {import("express").Request} req Este es el request
 * @param {import("express").Response} res Esta es la respuesta
 */
export const createCarts = async (req, res) => {
  try {
    // throw new Error("Hay un error");

    const { products } = req.body;

    const newCart = await CartsModel.create({
      products,
    });

    res.json(newCart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * Esto actualiza un Carrito
 * @param {import("express").Request} req Este es el request
 * @param {import("express").Response} res Esta es la respuesta
 */
export const updateCarts = async (req, res) => {
  try {
    const { id } = req.params;

    const updateCarts = await CartsModel.findByPk(id);
    updateCarts.set(req.body);
    updateCarts.save();

    res.json(updateCarts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


/**
 * Esto Elimina un Carrito
 * @param {import("express").Request} req Este es el request
 * @param {import("express").Response} res Esta es la respuesta
 */
export const deleteCarts = async (req, res) => {
  try {
    const { id } = req.params;

    const delCart = await CartsModel.destroy({
      where: {
        id,
      },
    });

    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};