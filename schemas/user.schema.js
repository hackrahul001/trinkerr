
const { ObjectID } = require('mongodb');
var mongoose = require('mongoose');                                            

var Schema = mongoose.Schema;
var user = new Schema({
        url:String,
        urlparameter : String,
        projectName : String,
        aboutProject: String,
        errormessage: String, //error title like Cannot read property 'replace' of undefined
        sectionname:String, // like unhandle rejection
        error:String,
        source:{
           default: "Website",
           type:String
        },
    
        whenentered: {
        type: Date,
        default : Date.now()
      },
      resolved : {
         default : 0,
         type:Number,
         enum:[0,1]
      }
});



const users = mongoose.model('user', user)
// //console.log.log("userProfile21",userProfile)
module.exports = users;






