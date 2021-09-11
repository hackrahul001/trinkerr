
const jwt = require('jsonwebtoken');
const {APP_CONFIG} = require("../config/app.config")
exports.auth = async (req, res, next) => {
  try {
    const authToken = req.get('x-auth');
    var decodedToken = jwt.verify(authToken, APP_CONFIG.SECRET_KEY);
    const userId = decodedToken.userId;
    req.userId = userId
    next()
  } catch (err) {
    res.status(401).send({ message:"Invalid token received", status: 401 })
  }
}