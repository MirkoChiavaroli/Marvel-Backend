const express = require("express");
const router = express.Router();
const formidable = require("express-formidable");
const axios = require("axios");
const cors = require("cors");
router.use(cors());

router.get("/characters", async (req, res) => {
  try {
    const limit = req.query.limit || 100;
    const skip = req.query.skyp || 0;

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=g8KZrFEfPmqoXUft&limit=${limit}&skip=${skip}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;

// /comics/?apiKey=g8KZrFEfPmqoXUft
