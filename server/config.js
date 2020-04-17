require("dotenv").config({ path: "../.env" });

/**
 * Contains all default db operations for GPU's
 */

const { Pool } = require('pg');
const isProduction = process.env.NODE_ENV === 'production'

// const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

// Basic / dev vars. Redo into better structure.
const user = process.env.DB_USER;
const host = process.env.DB_HOST;
const database = process.env.DB_DATABASE;
const pw = process.env.DB_PASSWORD;
const port = process.env.DB_PORT;

// redo connectionString on production
const pool = new Pool({
//   connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
//   ssl: isProduction,
  user: user,
  host: host,
  database: database,
  password: pw,
  port: port,
})

const getGpus = (req, res) => {
  pool.query('SELECT * FROM gpus ORDER BY id ASC', (err, results) => {
    if(err) {
      throw err;
    }
    res.status(200).json(res.rows);
  })
}

const getGpuById = (req, res) => {
  const id = parseInt(req.params.id)
  
  pool.query('SELECT * FROM gpus WHERE id = $1', [id], (err, res) => {
    if (err) {
      throw err
    }
    res.status(200).json(res.rows)
  })
}

const createGpu = (req, res) => {
  // Get the data from the request body
  const { name, designer, manufacturer, type, length, memory_type } = req.body
  
  // Add data to db
  pool.query('INSERT INTO gpus (name, designer, manufacturer, type, length, memory_type) VALUES ($1, $2, $3, $4, $5, $6)', [name, designer, manufacturer, type, length, memory_type], (err, res) => {
    if (err) {
      throw err
    }
    res.status(201).send(`GPU added with ID: ${res.insertId}`)
  })
}

// const updateGpu = (req, res) => {
//   const id = parseInt(req.params.id)
//   const { name, email } = req.body

//   pool.query(
//     'UPDATE users SET name = $1, email = $2 WHERE id = $3',
//     [name, email, id],
//     (err, res) => {
//       if (err) {
//         throw err
//       }
//       res.status(200).send(`GPU modified with ID: ${id}`)
//     }
//   )
// }

const deleteGpu = (req, res) => {
  const id = parseInt(req.params.id)

  pool.query('DELETE FROM users WHERE id = $1', [id], (err, res) => {
    if (err) {
      throw err
    }
    res.status(200).send(`GPU deleted with ID: ${id}`)
  })
}

module.exports = {
  getGpus,
  getGpuById,
  createGpu,
  deleteGpu
}