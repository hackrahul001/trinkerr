
const homeData = require('../schemas/home.schema')
var ObjectId = require('mongoose').Types.ObjectId;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { APP_CONFIG } = require('../config/app.config')
//Secret key to be kept in Environment variable
const SECRET_KEY = APP_CONFIG.SECRET_KEY;
const interests = require('../schemas/interest.schema')


exports.home = async function (req, res) {
    try {
        homeData.find({}, function (er, data) {
            if (!er) {
                res.send({
                    "error": false, "message": "ok", "status": 1, "data": data
                })
            } else {
                res.send({
                    "error": true, "message": "failed", "status": 500, "data": {}
                })
            }
        })
    } catch (e) {
        res.send({ "error": true, "message": "Internal Server Error", "status": 500 })
    }
    return;
}




exports.interest = async function (req, res) {
    if (!req.body) return res.sendStatus(400);
    try {
        const { imageId, interest } = req.body;
        const userId = req.userId
        var data = { userId: ObjectId(userId), imageId: ObjectId(imageId), interest: interest }
        interests.findOneAndUpdate(data, { $inc: { count: 1 } }, { upsert: true }, function (er, data) {
            if (!er) {
                res.send({ "error": false, "message": "ok", "status": 1, "data": {} })
            } else {
                res.send({ "error": true, "message": "failed", "status": 500, "data": {} })
            }
        })

    } catch (e) {
        res.send({ "error": true, "message": "Internal Server Error", "status": 500 })
    }
    return;
}



exports.history = async function (req, res) {
    try {
        const userId = req.userId
        interests.aggregate([
            {
                "$match": { "userId": ObjectId(userId) }
            },
            {
                "$lookup": {
                    "from": "homes", // collection name in db
                    "localField": "imageId",
                    "foreignField": "_id",
                    "as": "history"
                }
            }, {
                "$project": {
                    "_id": 0,
                    "interest": 1,
                    "count": 1,
                    "history.imageName": 1,
                    "history.imageUrl": 1,
                    "history.createdAt": 1
                }
            },
            {
                "$unwind": {
                    "path": "$history",
                    "preserveNullAndEmptyArrays": true
                }
            },
        ]).exec(function (err, data) {
            if (!err) {
                res.send({
                    "error": false, "message": "ok", "status": 1, "data": data
                })
            } else {
                res.send({
                    "error": true, "message": "failed", "status": 500, "data": {}
                })
            }
        });


    } catch (e) {
        res.send({ "error": true, "message": "Internal Server Error", "status": 500 })
    }
    return;
}
