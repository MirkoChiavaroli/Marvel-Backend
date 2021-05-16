const express = require("express");
const router = express.Router();
const axios = require("axios");
const cors = require("cors");
router.use(cors());

router.get("/comics", async (req, res) => {
  try {
    const limit = req.query.limit || 100;
    const skip = req.query.skyp || 0;

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.MARVEL_API}&limit=${limit}&skip=${skip}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/comics/characterId", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params.characterId}?apiKey=${process.env.MARVEL_API}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
