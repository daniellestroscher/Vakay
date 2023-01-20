'use-strict';
import mongoose from 'mongoose';

const uri =
  process.env.MONGODB_URI !== undefined
    ? process.env.MONGODB_URI
    : 'mongodb://127.0.0.1:27017/vacay-db';

mongoose.connect(uri).catch((error) => console.log(error));

export default mongoose;
