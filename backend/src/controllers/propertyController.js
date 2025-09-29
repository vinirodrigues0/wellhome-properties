const db = require('../database/db');

// GET - Listar todos os imóveis
exports.getAllProperties = (req, res) => {
  db.all('SELECT * FROM properties', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
};

// POST - Criar novo imóvel
exports.createProperty = (req, res) => {
  const { title, address, status } = req.body;

  if (!title || !address || !status) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  if (status !== 'active' && status !== 'inactive') {
    return res.status(400).json({ error: 'Status deve ser active ou inactive' });
  }

  db.run(
    'INSERT INTO properties (title, address, status) VALUES (?, ?, ?)',
    [title, address, status],
    function(err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ id: this.lastID, title, address, status });
    }
  );
};

// PUT - Atualizar imóvel
exports.updateProperty = (req, res) => {
  const { id } = req.params;
  const { title, address, status } = req.body;

  if (!title || !address || !status) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  if (status !== 'active' && status !== 'inactive') {
    return res.status(400).json({ error: 'Status deve ser active ou inactive' });
  }

  db.run(
    'UPDATE properties SET title = ?, address = ?, status = ? WHERE id = ?',
    [title, address, status, id],
    function(err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (this.changes === 0) {
        return res.status(404).json({ error: 'Imóvel não encontrado' });
      }
      res.json({ id, title, address, status });
    }
  );
};

// DELETE - Remover imóvel
exports.deleteProperty = (req, res) => {
  const { id } = req.params;

  db.run('DELETE FROM properties WHERE id = ?', [id], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Imóvel não encontrado' });
    }
    res.json({ message: 'Imóvel deletado com sucesso' });
  });
};