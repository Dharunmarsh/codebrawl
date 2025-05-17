const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('🌍 MongoDB connected...');
  } catch (err) {
    console.error('⚡ MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
