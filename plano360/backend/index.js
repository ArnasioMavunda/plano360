const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Conexão à base de dados
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // deixar vazio se não colocaste senha no XAMPP
  database: 'plano360'
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar à base de dados:', err);
    return;
  }
  console.log('Conectado ao MySQL!');
});

// Rota para login
app.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    const query = 'SELECT * FROM utilizadores WHERE email = ? AND senha = ?';

    db.query(query, [email, password], (err, results) => {
      if (err) {
        console.error('Erro ao verificar login:', err);
        return res.status(500).json({ success: false, message: 'Erro no servidor' });
      }
  
      if (results.length > 0) {
        res.json({ success: true });
      } else {
        res.json({ success: false });
      }
    });
  });
  
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor a correr em http://localhost:${PORT}`);
});
app.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    const query = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?';
    db.query(query, [email, password], (err, results) => {
      if (err) {
        console.error('Erro ao verificar login:', err);
        return res.status(500).json({ success: false, message: 'Erro no servidor' });
      }
  
      if (results.length > 0) {
        res.json({ success: true });
      } else {
        res.json({ success: false });
      }
    });
  });
  