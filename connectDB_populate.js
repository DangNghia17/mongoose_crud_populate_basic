const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/testdb');


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const accountSchema = new Schema({
    username: String,
    password: String,
    age: Number,
    salary: Number,
    course: {
        type : String,
        ref : 'coursemodel' // ref to name model
    },
    list_course: {
        course: {
            type : String,
            ref : 'coursemodel' // ref to name model not name schema in mongo compass
        }
    }
},{
    collection : "Account"
});

const courseSchema = new Schema({
    name: String,
    teacher: {
        type : String,
        ref : 'account' // ref to name model not name schema in mongo compass
    },
    lesson: Array,
    salary: {}, // object
    the_ngan_hang: {}, // object

},{
    collection : "Course"
});

const AccountModel = mongoose.model('account', accountSchema);
const CourseModel = mongoose.model('coursemodel', courseSchema);

AccountModel.find({
    username : "alice"
})
    .populate('course')
    // 2 nested
    .populate({
        path : 'course',
        populate : {path : 'teacher'}
    })
    // nested father child
    .populate('list_course.course')
    .then( data =>{
    console.log(data)
}).catch( err => {
    console.log(err)
})