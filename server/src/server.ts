import express from 'express';
import { config } from './config';
import { db } from './config/database';
import { securityMiddleware, rateLimitMiddleware, corsMiddleware } from './middleware/security';
import { errorHandler, notFound } from './middleware/errorHandler';
import contactRoutes from './routes/contactRoutes';
import contentRoutes from './routes/contentRoutes';
import chatRoutes from './routes/chatRoutes';

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
app.use('/api/chat', chatRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = config.port;

const startServer = async () => {
  try {
    await db.query('SELECT NOW()');
    console.log('✓ Database connected');
  } catch (error) {
    console.warn('⚠ Database not available, server starting without DB');
  }

  app.listen(PORT, () => {
    console.log(`✓ Server running on http://localhost:${PORT}`);
    console.log(`✓ Environment: ${config.nodeEnv}`);
    console.log(`✓ DeepSeek API: ${config.deepseek.apiKey ? 'configured' : 'NOT CONFIGURED'}`);
  });
};

startServer();

export default app;
