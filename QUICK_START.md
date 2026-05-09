# 🚀 Quick Start Guide

## 5-Minute Setup for Developers

### Prerequisites
- Node.js 18+
- PostgreSQL 15+
- npm or yarn

### Step 1: Clone & Install (2 min)

```bash
git clone <repository-url>
cd yayasanamal
npm install
cd server && npm install && cd ..
```

### Step 2: Setup Database (2 min)

```bash
# Create database
psql -U postgres -c "CREATE DATABASE yayasan_amal;"

# Run migrations
psql -U postgres -d yayasan_amal -f server/migrations/001_init_schema.sql
```

### Step 3: Configure Environment (1 min)

```bash
# Backend
cd server
cp .env.example .env
# Edit .env with your PostgreSQL credentials
cd ..

# Frontend
cp .env.local.example .env.local
# Edit .env.local with your API URL
```

### Step 4: Start Development

```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
cd server && npm run dev
```

### Step 5: Test

Open http://localhost:5173 in your browser

---

## 📋 Quick Reference

### Common Commands

```bash
# Frontend
npm run dev      # Start dev server
npm run build    # Build for production
npm run lint     # Lint code

# Backend
cd server
npm run dev      # Start backend
npm run build    # Build backend
npm run lint     # Lint backend

# Database
psql -U postgres -d yayasan_amal -c "\dt"  # List tables
```

### API Endpoints

```
GET  /api/content/programs
GET  /api/content/news
GET  /api/content/gallery
GET  /api/content/faqs
POST /api/contact/submit
POST /api/donation/create
GET  /api/donation/stats
```

### Environment Variables

**Frontend (.env.local)**
```env
VITE_API_URL=http://localhost:5000/api
```

**Backend (server/.env)**
```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=yayasan_amal
```

---

## 🐛 Quick Troubleshooting

### Port already in use
```bash
# Kill process on port 5173
lsof -i :5173 | kill -9 <PID>
```

### Database connection failed
```bash
# Check PostgreSQL is running
# Windows: Services > PostgreSQL
# macOS: brew services list
# Linux: sudo systemctl status postgresql
```

### Email not sending
```bash
# Verify Gmail App Password
# Generate at: https://myaccount.google.com/apppasswords
```

---

## 📚 Next Steps

1. Read [DEVELOPMENT_SETUP.md](DEVELOPMENT_SETUP.md) for detailed setup
2. Read [IMPLEMENTATION_GUIDE.md](IMPLEMENTATION_GUIDE.md) for next features
3. Read [PROJECT_DOCUMENTATION.md](PROJECT_DOCUMENTATION.md) for technical details

---

**Need help?** Check the documentation files or open an issue on GitHub.
