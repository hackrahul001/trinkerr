const { RSP_MSG, RSP_CODE } = require('../config/response.config')

/**
 * 
 * @param {Express resp object} expRsp 
 * @param {Object} data
 * @param {String} message Default value 'success'
 * @param {Number} status Default value 200
 */
const sendSuccessRsp = (expRsp, data, message = RSP_MSG.success, status = RSP_CODE.success) => {
  expRsp.status(status).send(
    {
      status: status,
      message: message,
      data: data
    }
  )
  expRsp.end()
}

/**
 * 
 * @param {Express resp object} expRsp 
 * @param {Object} error 
 * @param {String} message 
 * @param {Number} status Default value 500
 */
const sendErrorRsp = (expRsp, error, message = RSP_MSG.server_error, status = RSP_CODE.server_error) => {
  if (typeof error === 'string') {
    error = {
      name: error.name,
      message: error.message
    }
  }
  expRsp.status(status).send(
    {
      status: status,
      message: message,
      extra: error
    }
  )
  expRsp.end()
}

module.exports = { sendSuccessRsp, sendErrorRsp }