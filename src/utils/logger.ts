import winston from 'winston';
import fs from 'fs';
import path from 'path';

// Define log directory
const logDir = path.join(__dirname, 'logs');

// Create logs directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

const { combine, timestamp, printf, errors } = winston.format;

// Define the log format
const logFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} [${level}]: ${stack || message}`;
});

// Create the logger instance
const logger = winston.createLogger({
  level: 'info', // Adjust the log level as needed
  format: combine(
    timestamp(),
    errors({ stack: true }), // Handle error stack traces
    logFormat
  ),
  transports: [
    new winston.transports.Console(), // Log to console
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }), // Log errors to file
    new winston.transports.File({ filename: 'logs/combined.log' }) // Log all messages to file
  ],
});

export default logger;
