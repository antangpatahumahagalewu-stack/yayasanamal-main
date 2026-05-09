# DEVELOPMENT_SETUP.md

## 🎯 Complete Development Setup Guide

### System Requirements

- **OS**: Windows 10+, macOS 10.15+, or Linux
- **Node.js**: 18.0.0 or higher
- **npm**: 9.0.0 or higher
- **PostgreSQL**: 15.0 or higher
- **Git**: 2.30.0 or higher
- **RAM**: 4GB minimum (8GB recommended)
- **Disk Space**: 5GB minimum

### Installation Steps

#### 1. Install Prerequisites

**Windows:**
```bash
# Install Node.js from https://nodejs.org/
# Install PostgreSQL from https://www.postgresql.org/download/windows/
# Install Git from https://git-scm.com/download/win
```

**macOS:**
```bash
# Using Homebrew
brew install node postgresql git
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt update
sudo apt install nodejs npm postgresql git
```

#### 2. Clone Repository

```bash
git clone <repository-url>
cd yayasanamal
```

#### 3. Install Dependencies

```bash
# Frontend dependencies
npm install

# Backend dependencies
cd server
npm install
cd ..
```

#### 4. Setup PostgreSQL Database

```bash
# Start PostgreSQL service
# Windows: Services > PostgreSQL
# macOS: brew services start postgresql
# Linux: sudo systemctl start postgresql

# Create database
psql -U postgres
CREATE DATABASE yayasan_amal;
\q

# Run migrations
psql -U postgres -d yayasan_amal -f server/migrations/001_init_schema.sql

# Verify tables
psql -U postgres -d yayasan_amal -c "\dt"
```

#### 5. Configure Environment Variables

**Frontend (.env.local):**
```bash
cp .env.local.example .env.local
# Edit with your settings
```

**Backend (server/.env):**
```bash
cd server
cp .env.example .env
# Edit with your settings
cd ..
```

#### 6. Start Development Servers

**Terminal 1 - Frontend:**
```bash
npm run dev
# Runs on http://localhost:5173
```

**Terminal 2 - Backend:**
```bash
cd server
npm run dev
# Runs on http://localhost:5000
```

**Terminal 3 - Database (optional):**
```bash
# Monitor database
psql -U postgres -d yayasan_amal
```

### Verification Checklist

- [ ] Frontend loads on http://localhost:5173
- [ ] Backend API responds on http://localhost:5000/health
- [ ] Database connection successful
- [ ] Contact form submits without errors
- [ ] Donation form displays correctly
- [ ] Smooth scroll works
- [ ] PWA installable
- [ ] No console errors

### Common Issues & Solutions

#### Issue: "Port 5173 already in use"
```bash
# Kill process using port
# Windows: netstat -ano | findstr :5173
# macOS/Linux: lsof -i :5173 | kill -9 <PID>

# Or use different port
npm run dev -- --port 5174
```

#### Issue: "PostgreSQL connection refused"
```bash
# Check if PostgreSQL is running
# Windows: Services > PostgreSQL
# macOS: brew services list
# Linux: sudo systemctl status postgresql

# Start PostgreSQL
# macOS: brew services start postgresql
# Linux: sudo systemctl start postgresql
```

#### Issue: "Module not found"
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Issue: "Email not sending"
```bash
# Verify Gmail App Password
# 1. Enable 2FA on Gmail
# 2. Generate App Password at https://myaccount.google.com/apppasswords
# 3. Update EMAIL_PASSWORD in server/.env
```

### IDE Setup

#### VS Code Extensions (Recommended)

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "eamodio.gitlens",
    "ms-azuretools.vscode-docker",
    "ms-vscode-remote.remote-containers"
  ]
}
```

#### VS Code Settings (.vscode/settings.json)

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true
}
```

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "feat: add your feature"

# Push to remote
git push origin feature/your-feature-name

# Create Pull Request on GitHub
```

### Testing

```bash
# Frontend tests
npm run test

# Backend tests
cd server
npm run test
cd ..

# Lint code
npm run lint
cd server && npm run lint && cd ..

# Build for production
npm run build
cd server && npm run build && cd ..
```

### Performance Monitoring

```bash
# Frontend bundle analysis
npm run build -- --analyze

# Backend performance
cd server
npm run dev -- --inspect
# Open chrome://inspect in Chrome DevTools
```

### Database Management

```bash
# Backup database
pg_dump -U postgres yayasan_amal > backup_$(date +%Y%m%d).sql

# Restore database
psql -U postgres yayasan_amal < backup_20260509.sql

# Reset database
psql -U postgres -d yayasan_amal -c "DROP SCHEMA public CASCADE; CREATE SCHEMA public;"
psql -U postgres -d yayasan_amal -f server/migrations/001_init_schema.sql
```

### Docker Development

```bash
# Build Docker image
docker build -t yayasan-amal .

# Run with Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Clean up
docker-compose down -v
```

### Debugging

#### Frontend Debugging
```bash
# Chrome DevTools
# 1. Open http://localhost:5173
# 2. Press F12
# 3. Use Console, Network, Performance tabs

# React DevTools
# Install extension from Chrome Web Store
```

#### Backend Debugging
```bash
# Node Inspector
cd server
npm run dev -- --inspect

# Open chrome://inspect in Chrome
# Click "inspect" on the process
```

#### Database Debugging
```bash
# Connect to database
psql -U postgres -d yayasan_amal

# Useful commands
\dt                    # List tables
\d table_name          # Describe table
SELECT * FROM table;   # Query data
\q                     # Quit
```

### Performance Tips

1. **Frontend**
   - Use React DevTools Profiler
   - Check bundle size with `npm run build -- --analyze`
   - Enable PWA caching
   - Lazy load images

2. **Backend**
   - Use database indexes
   - Enable Redis caching
   - Monitor query performance
   - Use connection pooling

3. **Database**
   - Regular backups
   - Index frequently queried columns
   - Vacuum and analyze tables
   - Monitor disk space

### Security Checklist

- [ ] Never commit `.env` files
- [ ] Use strong passwords
- [ ] Enable 2FA on accounts
- [ ] Keep dependencies updated
- [ ] Review security headers
- [ ] Test CORS configuration
- [ ] Validate all inputs
- [ ] Use HTTPS in production

### Useful Commands

```bash
# Frontend
npm run dev              # Start dev server
npm run build            # Build for production
npm run lint             # Lint code
npm run preview          # Preview production build

# Backend
cd server
npm run dev              # Start dev server
npm run build            # Build for production
npm run lint             # Lint code

# Database
psql -U postgres         # Connect to PostgreSQL
pg_dump -U postgres db   # Backup database

# Docker
docker-compose up        # Start services
docker-compose down      # Stop services
docker-compose logs -f   # View logs

# Git
git status               # Check status
git add .                # Stage changes
git commit -m "msg"      # Commit changes
git push                 # Push to remote
git pull                 # Pull from remote
```

### Resources

- [Node.js Documentation](https://nodejs.org/docs/)
- [React Documentation](https://react.dev)
- [Express Documentation](https://expressjs.com)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

### Support

For issues or questions:
1. Check [IMPLEMENTATION_GUIDE.md](IMPLEMENTATION_GUIDE.md)
2. Check [PROJECT_DOCUMENTATION.md](PROJECT_DOCUMENTATION.md)
3. Open GitHub Issue
4. Email: info@antang.org

---

**Last Updated:** 9 Mei 2026
**Version:** 1.0.0
