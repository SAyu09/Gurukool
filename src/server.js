const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const routes = require('./routes');
const errorHandler = require('./utils/errorHandler');

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/', routes);

// Error handler middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
