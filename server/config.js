require("dotenv").config({ path: "../.env" });

const { Pool } = require('pg')
const isProduction = process.env.NODE_ENV === 'production'

// const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

// Basic / dev vars. Redo into better structure.
const user = process.env.DB_USER;
const host = process.env.DB_HOST;
const database = process.env.DB_DATABASE;
const pw = process.env.DB_PASSWORD;
const port = process.env.DB_PORT;

// redo connection string on production
const pool = new Pool({
//   connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
//   ssl: isProduction,
    user: user,
    host: host,
    database: database,
    password: pw,
    port: port,
})

module.exports = { pool }