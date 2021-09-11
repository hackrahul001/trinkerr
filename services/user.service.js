
const errors = require('../schemas/user.schema')
var ObjectId = require('mongoose').Types.ObjectId; 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { APP_CONFIG } = require('../config/app.config')
//Secret key to be kept in Environment variable
const SECRET_KEY = APP_CONFIG.SECRET_KEY;



