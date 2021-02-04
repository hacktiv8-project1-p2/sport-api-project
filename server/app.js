require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./routes/index');

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.listen(port, () => {
  console.log(`Listening no port: ${port}...`);
})