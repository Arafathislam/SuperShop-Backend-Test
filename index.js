const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connect= require("./database/config/connectionDB.js");
const router = require("./routerManager.js");
const useragent = require('express-useragent');
dotenv.config();
const PORT = process.env.PORT || 8000;

//middlewares
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(useragent.express());


// const corsOptions = {
//   origin: 'http://localhost:3000', 
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true, 
// };

app.use(cors());



app.get("/", (req, res) => {
  return res.status(200).send("Super Store Management by Arafath");
});

async function main() {
  try {
    this.app = app;
  } catch (err) {
    console.log(err);
  }
}
main();

//Connection
app.listen(PORT, (req, res) => {
  console.log(`Listening on ${PORT}`);
  connect();
  router();
});