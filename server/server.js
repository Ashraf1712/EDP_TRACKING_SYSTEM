const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

//Routes Import
const userRoutes = require('./routes/userRoutes.js');
const goalsRoutes = require('./routes/goalsRoutes.js');
const planRoutes = require('./routes/planRoutes.js');
const statusRoutes = require('./routes/statusRoutes.js');
const edpRoutes = require('./routes/edpRoutes.js');

// Load environment variables from .env file
dotenv.config();

// Create an instance of the Express application
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
    if (req.headers['content-length']) {
        console.log(req.path, req.method, 'req_size: ' + req.headers['content-length'] + 'bytes')
    } else {
        console.log(req.path, req.method)
    }
    next()
})

// Connect to MongoDB using the MONGO_URI from the .env file
mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'edpDB',
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

//Routes
app.use('/api/user', userRoutes);
app.use('/api/goals', goalsRoutes);
app.use('/api/plan', planRoutes);
app.use('/api/status', statusRoutes);
app.use('/api/edp', edpRoutes);

const absolutePath = path.join(process.cwd(), 'public', 'uploads');
app.use('/uploads', express.static(absolutePath));

const port = parseInt(process.env.PORT, 10) || 3000;
app.listen(port, () => {
    console.log(`Server is running: Port ${port}`);
});