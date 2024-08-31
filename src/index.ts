import express from 'express';
import userRoutes from './routes/userRoutes';
import logger from './utils/logger';
import fs from 'fs';
import path from 'path';

// Define log directory
const logDir = path.join(__dirname, 'logs');

// Create logs directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  logger.info(`Received ${req.method} request for ${req.url}`);
  next();
});

// Use routes
app.use('/api/users', userRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  logger.error(`Unhandled error: ${err.message}`);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
  logger.info(`Server is running on http://localhost:${port}`);
});
