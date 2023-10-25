const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/testdb');


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const accountSchema = new Schema({
    username: String,
    password: String,
    age: Number,
    salary: Number,
},{
    collection : "Account"
});

const AccountModel = mongoose.model('account', accountSchema);

//Create data
    // AccountModel.create({
    //     username : "Meaning3",
    //     password : "xzczxcz"
    // }).then(function (data) {
    //     console.log(data)
    // })
    //     .catch(function(err) {
    //     console.log("Error")
    // })

//Update data
//other - updateMany
    // AccountModel.updateOne({
    //     username: "Meaning3",
    //     password: "xzczxcz"
    // }, {
    //     password :'updatedPassword'
    // }).then( data => {
    //     console.log(data)
    // }).catch(err => {
    //     console.log("Lỗi" , err)
    // })

//Delete data
    // AccountModel.deleteOne({
    //     username: "Meaning3",
    //     password: "xzczxcz"
    // }, {
    //     password :'updatedPassword'
    // }).then( data => {
    //     console.log(data)
    // }).catch(err => {
    //     console.log("Lỗi" , err)
    // })


//Find all (no condition)
    AccountModel.find({})
        .then(function (data) {
    console.log("data :" ,data);
        })
        .catch(function (err) {
    console.log("error : ",err);
        })


// Find with many condition
//     AccountModel.find({
//         age : {$lte : 20 },
//         salary : {$gte : 2200}
//     })
//         .then(function (data) {
//     console.log("data :" ,data);
//         })
//         .catch(function (err) {
//     console.log("error : ",err);
//         })

// Find with or, in condition
//     AccountModel.find({
//         // $or : [
//         //     {age : {$lte : 20 }},
//         //     {salary : {$gte : 2200}}
//         // ]
//         // 'in' condition
//         salary :{ $in : [2500 ,2800] }
//     })
//         .then(function (data) {
//     console.log("data :" ,data);
//         })
//         .catch(function (err) {
//     console.log("error : ",err);
//         })


//Find with like condition , limit ,skip, sort
    // AccountModel.find({
    //     username : /Meaning/
    // })
    //     .limit(3)
    //     .skip(0)
    //     .sort('age')
    //     .then(function (data) {
    // console.log("data :" ,data);
    //     })
    //     .catch(function (err) {
    // console.log("error : ",err);
    //     })

