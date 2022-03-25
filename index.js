const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { verify } = require('./src/connections/sequelize');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(verify());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Settings
app.set('port', process.env.PORT || 4000);

// Routes
app.use('/students', require('./src/routes/students.routes'));

// Run server
app.listen(app.get('port'), async () => {
  console.log('app running successfully!!');
  console.log(`http://localhost:${app.get('port')}`);
});
