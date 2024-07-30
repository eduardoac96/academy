const mongoose = require('mongoose');

exports.connect = () =>{
    mongoose.connect('mongodb://0.0.0.0:27017/academydb').then(()=> console.log('Mongodb connected...'))
.catch(err => console.log(err));

}
 