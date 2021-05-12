const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const comicsRoutes = require("./routes/comics");
const charactersRoutes = require("./routes/characters");

app.use(comicsRoutes);
app.use(charactersRoutes);

app.all("*", (req, res) => {
  console.log("Welcome to Marvel Server");
  res.status(400).json("Page Not Found");
});

app.listen(process.env.PORT, () => {
  console.log("Server started 🕸");
});
