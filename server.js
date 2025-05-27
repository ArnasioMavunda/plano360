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
  password: "", // Coloca sua senha se tiver
  database: "Plano360";
});

// Testar conexão
db.connect(err => {
  if (err) {
    console.log("Erro ao conectar com o banco de dados:", err);
  } else {
    console.log("Conectado ao MySQL!");
  }
});

// Rota para pegar todos os usuários
app.get("/usuarios", (req, res) => {
  const sql = "SELECT * FROM usuarios";
  db.query(sql, (err, result) => {
    if (err) return res.json({ Error: err });
    return res.json(result);
  });
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
