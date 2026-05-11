import { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import { config } from '../config';

const rateLimiter = new RateLimiterMemory({
  keyPrefix: 'api',
  points: 100,
  duration: 60,
});

const chatRateLimiter = new RateLimiterMemory({
  keyPrefix: 'chat',
  points: 10,
  duration: 60,
});

export const securityMiddleware = (req: Request, res: Response, next: NextFunction) => {
  helmet()(req, res, next);
};

export const rateLimitMiddleware = (req: Request, res: Response, next: NextFunction) => {
  rateLimiter.consume(req.ip || '')
    .then(() => {
      next();
    })
    .catch(() => {
      res.status(429).json({
        success: false,
        message: 'Too many requests, please try again later',
      });
    });
};

export const chatRateLimitMiddleware = (req: Request, res: Response, next: NextFunction) => {
  chatRateLimiter.consume(req.ip || '')
    .then(() => {
      next();
    })
    .catch(() => {
      res.status(429).json({
        success: false,
        message: 'Terlalu banyak pesan. Silakan tunggu sebentar ya.',
      });
    });
};

export const corsMiddleware = (req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', config.cors.origin);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  next();
};
