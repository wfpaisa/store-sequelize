import { UsersModel } from "../models/users.model.js";
import { CartsModel } from "../models/carts.model.js";

/**
 * Esto obtiene los usuarios
 * @param {import("express").Request} req Este es el request
 * @param {import("express").Response} res Esta es la respuesta
 */
export const getUsers = async (req, res) => {
  try {
    const query = req.query;
    // console.log("Filtros:", query);

    // Inicializamos un objeto vacío para almacenar los filtros
    const where = {};

    // Verificamos si existe un filtro 'name' en la consulta
    if (query.filter?.name) where.name = query.filter.name;
    if (query.filter?.role) where.role = query.filter.role;

    const allUsers = await UsersModel.findAll({
      where,
    });

    res.json(allUsers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * Esto crea un usuario
 * @param {import("express").Request} req Este es el request
 * @param {import("express").Response} res Esta es la respuesta
 */
export const createUser = async (req, res) => {
  try {
    // throw new Error("Hay un error");
    console.log("APIKEY desde cliente es:", req.headers.authorization);

    const { email, name, lastName, role } = req.body;

    const newUser = await UsersModel.create({
      email,
      name,
      lastName,
      role,
    });

    res.set("XTEST", "Valor de xtest");
    res.json(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * Esto actualiza un usuario
 * @param {import("express").Request} req Este es el request
 * @param {import("express").Response} res Esta es la respuesta
 */
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Opción 1
    // const { email, name, lastName, role } = req.body;

    // const updateUser = await UsersModel.findByPk(id);

    // updateUser.email = email;
    // updateUser.name = name;
    // updateUser.lastName = lastName;
    // updateUser.role = role;

    // await updateUser.save();

    //------------------
    const updateUser = await UsersModel.findByPk(id);
    updateUser.set(req.body);
    updateUser.save();

    res.json(updateUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * Esto Elimina un usuario
 * @param {import("express").Request} req Este es el request
 * @param {import("express").Response} res Esta es la respuesta
 */
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const delUser = await UsersModel.destroy({
      where: {
        id,
      },
    });

    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * Esto obtiene a un usuario
 * @param {import("express").Request} req Este es el request
 * @param {import("express").Response} res Esta es la respuesta
 */
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    const findUser = await UsersModel.findOne({
      where: {
        id,
      },
    });

    if (!findUser) return res.json({});

    res.json(findUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * Esto crea usuarios
 * @param {import("express").Request} req Este es el request
 * @param {import("express").Response} res Esta es la respuesta
 */
export const createUsers = async (req, res) => {
  try {
    const usersData = req.body; // Array de objetos de usuario

    // Crear un nuevo array de usuarios utilizando map y Promise.all para realizar operaciones asincrónicas en paralelo
    const newUsers = await Promise.all(
      usersData.map(async (userData) => {
        const { email, name, lastName, role } = userData;
        return await UsersModel.create({
          email,
          name,
          lastName,
          role,
        });
      })
    );

    res.json(newUsers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * Esto obtiene los los carritos de un usuartio
 * @param {import("express").Request} req Este es el request
 * @param {import("express").Response} res Esta es la respuesta
 */
export const getUserCarts = async (req, res) => {
  try {
    const query = req.query;
    const { id } = req.params;
    // console.log("Filtros:", query);

    // Inicializamos un objeto vacío para almacenar los filtros
    const where = {
      userId: id,
    };

    const allCarts = await CartsModel.findAll({
      where,
    });

    res.json(allCarts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
