const express = require('express');
const barRoutes = express.Router();
const barsController = require('../controllers/bars-controller');

barRoutes.get('/:id', barsController.index);
barRoutes.post('/', barsController.create);
barRoutes.delete('/:id', barsController.delete);

module.exports = barRoutes;
