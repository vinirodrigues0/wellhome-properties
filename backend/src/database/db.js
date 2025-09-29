const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Criar/conectar ao banco de dados
const db = new sqlite3.Database(path.join(__dirname, '../../database.sqlite'), (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados SQLite');
  }
});

// Criar tabela de imóveis se não existir
db.run(`
  CREATE TABLE IF NOT EXISTS properties (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    address TEXT NOT NULL,
    status TEXT NOT NULL CHECK(status IN ('active', 'inactive'))
  )
`, (err) => {
  if (err) {
    console.error('Erro ao criar tabela:', err);
  } else {
    console.log('Tabela properties criada/verificada');
  }
});

module.exports = db;