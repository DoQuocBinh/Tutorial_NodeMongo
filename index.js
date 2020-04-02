const express = require('express');
//const engines = require('consolidate');
var MongoClient = require('mongodb').MongoClient;

//var url = 'mongodb://localhost:27017';
var url = 'mongodb+srv://binhdq:abc@123@cluster0-lkrga.mongodb.net/test?retryWrites=true&w=majority';

var router = express.Router();

router.get('/', async(req,res)=>{
    let data = '';
    let client= await MongoClient.connect(url);
    let dbo = client.db("EmployeeDB");
    let results = await dbo.collection("Employee").find({["Employee Name"]: "Guru99"}).toArray();
    res.render('allEmployee',{employees:results});
})
module.exports = router;


