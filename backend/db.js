const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://hashirr:343713343713@cluster0.qgy3b.mongodb.net/Gradicious?retryWrites=true&w=majority';
const connectToMongo = () =>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully")
    })
}
module.exports = connectToMongo;