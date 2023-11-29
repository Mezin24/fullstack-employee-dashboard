const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

const indexRoute = require('./routes/users');
const employeesRoute = require('./routes/employees');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/user', indexRoute);
app.use('/api/employees', employeesRoute);

app.listen(PORT, () => console.log(`Port ${PORT}`));
