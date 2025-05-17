const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const connectDB = require('./config/db');
require('dotenv').config();
const cors = require('cors');
const uploadRoute = require("./routes/UploadRoutes");

app.use("/api/upload", uploadRoute);

app.use(cors());
const authRoutes = require('./routes/auth');

// Middleware to parse JSON
app.use(express.json());

// Auth route
app.use('/auth', authRoutes);

// Connect MongoDB
connectDB();

// Root route
app.get('/', (req, res) => {
  res.send('🔥 Welcome to CodeBrawl backend server!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
