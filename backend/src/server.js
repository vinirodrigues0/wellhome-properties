const express = require('express');
const cors = require('cors');
const propertyRoutes = require('./routes/propertyRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api', propertyRoutes);

// Rota de teste
app.get('/', (req, res) => {
  res.json({ message: 'API Welhome Properties está rodando!' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});