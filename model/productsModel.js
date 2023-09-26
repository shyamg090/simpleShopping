const mongoose = require('mongoose'); //to use mongoose
const { Schema } = mongoose;

// ------------------------connect mongoose to the database--------------------------------------
main().catch(err => console.log(err));

async function main() {
 await mongoose.connect(process.env.MONGO_URL);
  console.log('database connected');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//-------------------------------schema for the database--------------------------------------

const productsSchema = new Schema({
  id: Number,
  title: {
    type: String
    // required: true
  },
  description: {
    type: String
    // required: true
  },
  price: {
    type: Number,
    required: true
    // min : [0 , 'must be some value']
  },
  discountPercentage: Number,
  rating: Number,
  stock: Number,
  brand: String,
  category: String,
  thumbnail: String,
  images: [String]
})

exports.Product = mongoose.model('Product', productsSchema);