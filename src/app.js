const express = require('express');
const cors= require('cors');
const routes= require('./routes');
const connectDB = require('./config/db.js');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api',routes);

module.exports=app;