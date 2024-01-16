const express = require('express')
const app = express() 
const db = require('./queries')

//-----------------------------------------------------Root
app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

//-----------------------------------------------------メモ取得
app.get('/memos/:memoid', db.getMemoById)

module.exports = app;
