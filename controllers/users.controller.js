import { UsersModel } from "../models/users.model.js";

export const getUsers = async (req, res) => {
  try {
    const allUsers = await UsersModel.findAll();
    res.json(allUsers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createUser = async (req, res) => {
  try {
    // throw new Error("Hay un error");

    const { email, name, lastName, role } = req.body;

    const newUser = await UsersModel.create({
      email,
      name,
      lastName,
      role,
    });

    res.json(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
