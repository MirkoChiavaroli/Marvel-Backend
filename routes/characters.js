const express = require("express");
const router = express.Router();
const axios = require("axios");
const cors = require("cors");
router.use(cors());

router.get("/characters", async (req, res) => {
  try {
    const { name, limit, skip } = req.query;
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MARVEL_API}&name=${name}&limit=${limit}&skip=${skip}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
