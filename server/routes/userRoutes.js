const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Crear un nuevo Usuario
router.post('/', async (req, res) => {
  try {
    const User = new User(req.body);
    await User.save();
    res.status(201).json(User);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Obtener todos los Usuarios
router.get('/', async (req, res) => {
  try {
    const Users = await User.find();
    res.json(Users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;