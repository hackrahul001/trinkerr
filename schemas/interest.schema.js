
const { ObjectID } = require('mongodb');
var mongoose = require('mongoose');                                            

var Schema = mongoose.Schema;
var interest = new Schema({
        imageId:{
            type:Schema.ObjectId 
         },
         userId:{
            type:Schema.ObjectId 
         },
         interest: {
            type:Number,
            enum:[-1,1]
         },
         count:{
             type:Number,
             default:1
           },
        createdAt: {
        type: Date,
        default : Date.now()
      }
});



const interests = mongoose.model('interest', interest)
// //console.log.log("userProfile21",userProfile)
module.exports = interests;






