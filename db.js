



require('dotenv').config();
const mongoose = require('mongoose');

const mongoURL = process.env.MONGODB_URI;
mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db.on('connected', () => {
  console.log('Database connection successfully established');
});

db.on('error', (error) => {
  console.log('Database connection failed:', error);
});

module.exports = mongoose;

