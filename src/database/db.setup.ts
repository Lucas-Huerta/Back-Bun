import mongoose from 'mongoose';

// Connect to the MongoDB database
const mongoDBURI = process.env.MONGODB_URI ?? 'mongodb://localhost:27017';


mongoose.connect(mongoDBURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

export default mongoose;