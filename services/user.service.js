const userProfile = require('../schemas/user.schema')
var ObjectId = require('mongoose').Types.ObjectId;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { APP_CONFIG } = require('../config/app.config')
//Secret key to be kept in Environment variable
const SECRET_KEY = APP_CONFIG.SECRET_KEY;



exports.registerUser = async function (req,res) {
    if (!req.body) return res.sendStatus(400)
    try {
        const { mobileNumber } = req.body;
        userProfile.find({ mobileNumber: mobileNumber }, function (err, docs) {
            if (docs.length == 0) {
                var data = { mobileNumber: mobileNumber }
                const inv = new userProfile(data)
                inv.save(function (err, doc) {
                    //console.log.log(err)
                    if (!err) {
                        res.send({
                            "message": "Otp sent successfully", "status": 1, "data": {}
                        })
                    } else {
                        res.send({ "message": "some error occured", "status": -1, "data": {} })
                    }
                })
            } else {
                res.send({ "message": "user found with same mobile number", "status": -1, "data": {} })
            }
        })
    } catch (e) {
        res.send({ "message": "Internal Server Error", "status": 500 })
    }
}



exports.otpVerification = async (req, res) => {
    if (!req.body) return res.sendStatus(400)
    try {
        const { mobileNumber, otp } = req.body;
        userProfile.find({ mobileNumber: mobileNumber }, function (err, doc) {
            if (doc != 0) {
                if (doc[0].otp == otp) {
                    userProfile.updateOne({ mobileNumber: mobileNumber }, { verified: 1 }, function (err, data) {
                        if (!err) {
                            var access = 'auth';
                            var token = jwt.sign({ userId: doc[0]._id, access }, SECRET_KEY).toString();
                            res.header('x-auth', token).send({
                                "message": "otp verified successfully",
                                "status": 1,
                                "data": {userName : doc[0].userName}
                            })
                        } else {
                            res.send({ "message": "some error occured", "status": -1, "data": {} })
                        }
                    });
                } else {
                    res.send({ status: -1, message: "otp is not valid", data: {} })
                }
            } else {
                res.send({ status: -1, message: "user not found", data: {} })
            }
        })
    } catch (e) {
        res.send({ "message": "Internal Server Error", "status": 500 })
    }

}


exports.signUpDetail = async function (req,res) {
    if (!req.body) return res.sendStatus(400)
    try {
        const  userId  = req.userId;
        const {userName} = req.body;
        const update = {userName : userName};
        userProfile.updateOne({_id:ObjectId(userId)},update,{new:true},function (err,data) {
            if (!err) {
                    res.send({
                        "message": "sign up deatils updated successfully", "status": 1, "data": {}
                    })
            } else {
                res.send({ "message": "user not found", "status": -1, "data": {} })
            }
        })
    } catch (e) {
        res.send({ "message": "Internal Server Error", "status": 500 })
    }
}




exports.login = async function (req,res) {
    if (!req.body) return res.sendStatus(400)
    try {
        const { mobileNumber } = req.body;
        userProfile.find({ mobileNumber: mobileNumber }, function (err, docs) {
            if (docs.length != 0) {
                    //console.log.log(err)
                        res.send({
                            "message": "Otp sent successfully", "status": 1, "data": {}
                        })
            } else {
                res.send({ "message": "user not found with this mobile number", "status": -1, "data": {} })
            }
        })
    } catch (e) {
        res.send({ "message": "Internal Server Error", "status": 500 })
    }
}
