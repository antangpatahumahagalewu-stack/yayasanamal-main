import express from 'express';
import { config } from './config';
import { db } from './config/database';
import { securityMiddleware, rateLimitMiddleware, corsMiddleware } from './middleware/security';
import { errorHandler, notFound } from './middleware/errorHandler';
import contactRoutes from './routes/contactRoutes';
import contentRoutes from './routes/contentRoutes';

const app = express();

app.use(securityMiddleware);
app.use(corsMiddleware);
app.use(rateLimitMiddleware);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.use('/api/contact', contactRoutes);
app.use('/api/content', contentRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = config.port;

const startServer = async () => {
  try {
    await db.query('SELECT NOW()');
    console.log('✓ Database connected');

    app.listen(PORT, () => {
      console.log(`✓ Server running on http://localhost:${PORT}`);
      console.log(`✓ Environment: ${config.nodeEnv}`);
    });
  } catch (error) {
    console.error('✗ Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

export default app;
