import { Request, Response } from 'express';
import { getGreetingMessage } from '../services/userService';
import logger from '../utils/logger';

// Controller function
export const getUserGreeting = (req: Request, res: Response): void => {
  try {
    const message = getGreetingMessage();
    logger.info('Greeting message sent');
    res.json({ message });
  } catch (error:any) {
    logger.error(`Error in getUserGreeting: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
