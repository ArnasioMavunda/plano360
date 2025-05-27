const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Conexão com o MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // coloque sua senha, se tiver
  database: "Plano360"
});

// Rota teste
app.get("/", (req, res) => {
  res.send("API conectada com MySQL!");
