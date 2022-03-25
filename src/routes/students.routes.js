const route = require('express').Router();

const { list, create, getByDni } = require('../controllers/students.controllers');

route.get('/', list);
route.get('/dni/:dni', getByDni);
route.post('/', create);

module.exports = route;
