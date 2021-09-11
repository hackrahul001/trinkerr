var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var promise = mongoose.connect("mongodb+srv://rahul:rahul@cluster0.c6xbt.mongodb.net/trinkerr?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    /* other options */
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongo DB connection error:'));
db.once('open', function () {
console.log('Connected to MongoDB');
});