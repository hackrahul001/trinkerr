
const { ObjectID } = require('mongodb');
var mongoose = require('mongoose');                                            

var Schema = mongoose.Schema;
var user = new Schema({
        mobileNumber : String,
        otp : "0000",
        userName : {
           type:String,
           default:""
        },
        createdAt: {
        type: Date,
        default : Date.now()
      },
      verified : {
         default : 0,
         type:Number,
         enum:[0,1]
      }
});



const users = mongoose.model('user', user)
// //console.log.log("userProfile21",userProfile)
module.exports = users;






