const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');

// Definir as rotas
router.get('/properties', propertyController.getAllProperties);
router.post('/properties', propertyController.createProperty);
router.put('/properties/:id', propertyController.updateProperty);
router.delete('/properties/:id', propertyController.deleteProperty);

module.exports = router;