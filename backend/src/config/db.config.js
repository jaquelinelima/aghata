require('dotenv').config()

module.exports = {
  local: {
    localDatabaseUrl: process.env.DB_URI,
    secret: "password"
  }
}
