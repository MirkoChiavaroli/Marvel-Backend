require("dotenv").config();
const express = require("express");
const cors = require("cors");
const formidable = require("express-formidable");

const app = express();
app.use(cors());

const comicsRoutes = require("./routes/comics");
const charactersRoutes = require("./routes/characters");

app.use(comicsRoutes);
app.use(charactersRoutes);

app.all("*", (req, res) => {
  console.log("Your request is not good");
  res.status(400).json("Page Not Found");
});

app.listen(process.env.PORT, () => {
  console.log("Server started 🕸");
});

// process.env.PORT- -3001
