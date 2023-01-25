const  mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ecom-website').then(()=>{
    console.log('connection successfull')
}).catch(()=>{
    console.log('connection failed');
});

let productData = mongoose.Model('product');
console.log(productData)