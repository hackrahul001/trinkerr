
const { ObjectID } = require('mongodb');
var mongoose = require('mongoose');                                            

var Schema = mongoose.Schema;
var home = new Schema({
        imageUrl:String,
        imageName:String,
        createdAt: {
        type: Date,
        default : Date.now()
      }
});



const homes = mongoose.model('home', home)
// //console.log.log("userProfile21",userProfile)
module.exports = homes;






