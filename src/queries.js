const pg = require('pg')
require('dotenv').config();

//-----------------------------------------------------DB接続
const pool = new pg.Pool({
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
})

//-----------------------------------------------------メモ取得
const getMemoById = (request, response) => {
  pool.query('SELECT * FROM memo WHERE memoid = $1', [request.params.memoid], (error, results) => {
    if (error) {
      response.status(500).json('DB Error')
    } else if(results.rowCount == 0) {
      response.status(500).json('No Data')
    } else {
      response.status(200).json(results.rows)
    }
  })
}

module.exports = {
  getMemoById,
}