require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const courseRoutes = require('./routes/course');
const hackathonRoutes = require('./routes/hackathon');
const internshipRoutes = require('./routes/internship');

const app = express();
const PORT = process.env.PORT || 5000;




// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/hackathons', hackathonRoutes);
app.use('/api/internships', internshipRoutes);
app.use('/api', require('./routes/Team'));
const MONGO_URI = "mongodb+srv://nipungoel15:qahxnwKHzNPGrUwF@cluster0.p7n6x.mongodb.net/nft-certificate";




// MongoDB connection
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});
