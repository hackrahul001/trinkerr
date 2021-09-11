
const homeData = require('../schemas/home.schema')
var ObjectId = require('mongoose').Types.ObjectId;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { APP_CONFIG } = require('../config/app.config')
//Secret key to be kept in Environment variable
const SECRET_KEY = APP_CONFIG.SECRET_KEY;
const interests = require('../schemas/interest.schema')


exports.home = async function(req,res){
    try{
        homeData.find({},function(er,data){
            if(!err){
                res.send({
                    "message": "ok", "status": 1, "data": data
                 })
            }else{
                res.send({
                    "message": "failed", "status": -1, "data": {}
                 })
            }
        })

    }catch(e){
        res.send({ "message": "Internal Server Error", "status": 500 })
    }
}




exports.interest = async function(req,res){
    if (!req.body) return res.sendStatus(400);
    try{
        const {imageId,interest} = req.body;
        const userId = req.userId
        var data = { userId: userId, imageId:imageId,interest:interest}
        interests.findOneAndUpdate(data,{$inc: {count: 1}},{upsert: true},function(er,data) {

            if(!er){
                res.send({"message": "ok", "status": 1, "data": data})
            }else{
                res.send({"message": "failed", "status": -1, "data": {} })
            }
        })
        // const inv = new interests(data)
        // inv.save(function (err, doc) {
        //     if(!err){
        //         res.send({params
        //             "message": "ok", "status": 1, "data": data
        //          })
        //     }else{
        //         res.send({
        //             "message": "failed", "status": -1, "data": {}
        //          })
        //     }
        // })

    }catch(e){
        res.send({ "message": "Internal Server Error", "status": 500 })
    }
}



