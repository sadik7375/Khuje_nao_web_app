const mongoose = require('mongoose');

//mongoose connection
const dbUrl = "mongodb://127.0.0.1:27017/postforsell";
mongoose.connect(dbUrl, { useNewUrlParser: true });
const db = mongoose.connection; //if connected url then db object connection check and return the connection

//check connection with server
db.on('error', (error) => {
    console.error("MongoDB connection error:", error); //if connection fail show error
});
db.once('open', () => {
    console.log("MongoDB connected successfully"); //conenction success
});

db.on('disconnected', () => {
    console.log("MongoDB disconnected"); //connection fail
})
module.exports = db;

//open datbase name>copy url form mongodb ex:url/databasename>create object check mongoose.connection ok or not