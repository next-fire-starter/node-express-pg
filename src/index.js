const app = require("./app");
require('dotenv').config();

app.listen(process.env.EXPRESS_PORT, () => {
  console.log(`App running on Express.`)
})