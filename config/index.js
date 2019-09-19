require('dotenv').config();

module.exports = {
    ENV: process.env.NODE_ENV || 'development',
    BASE_URL: process.env.BASE_URL || "http://localhost",
    PORT: process.env.PORT || 80,
    JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'abc123',
    SALT_ROUNDS: process.env.SALT_ROUNDS || 10,
    DB_CONFIG: require('./db.config')
  };