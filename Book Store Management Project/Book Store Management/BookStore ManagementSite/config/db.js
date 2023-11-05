const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://LepakshiReddy:<Lep@k$hi>@cluster0.xwa7wpw.mongodb.net/book_store');

const db = mongoose.connection;

db.on('error',(error)=>{
    console.log('error to connecting with database')
})

db.once('open',function(){
    console.log('Successfully connected to database');
})