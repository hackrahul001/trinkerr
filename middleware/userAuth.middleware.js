
const jwt = require('jsonwebtoken');
const { RSP_MSG, RSP_CODE } = require('../config/response.config')


exports.auth = async (req, res, next) => {
  try {
    const authToken = req.get('x-auth');
    var decodedToken = jwt.verify(authToken, APP_CONFIG.SECRET_KEY);
    const userId = decodedToken.userId;
    req.userId = userId
    next()
  } catch (err) {
    res.status(RSP_CODE.token_missing).send({ message: RSP_MSG.token_missing, status: RSP_CODE.token_missing })
  }
}