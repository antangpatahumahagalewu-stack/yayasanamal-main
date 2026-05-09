# Yayasan AMAL - Project Documentation

## 📋 Overview

Website enterprise untuk Yayasan AntangPatahu Mahaga Lewu (AMAL) dengan fitur lengkap untuk pengelolaan hutan berkelanjutan dan pemberdayaan masyarakat.

## 🏗️ Architecture

```
yayasanamal/
├── src/                    # Frontend (React + TypeScript)
│   ├── components/        # Reusable UI components
│   ├── pages/            # Page components
│   ├── hooks/            # Custom React hooks
│   ├── services/         # API services
│   └── utils/            # Utility functions
├── server/               # Backend API (Express + TypeScript)
│   ├── src/
│   │   ├── controllers/  # Business logic
│   │   ├── routes/       # API routes
│   │   ├── services/     # Service layer
│   │   ├── models/       # Database models
│   │   ├── middleware/   # Express middleware
│   │   └── config/       # Configuration
│   └── migrations/       # Database migrations
├── public/               # Static assets
├── .github/              # CI/CD workflows
├── docker-compose.yml    # Docker configuration
└── Dockerfile            # Docker image
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 15+
- Redis (optional)
- npm or yarn

### Installation

1. **Clone repository**
```bash
git clone <repository-url>
cd yayasanamal
```

2. **Install dependencies**
```bash
npm install
cd server && npm install && cd ..
```

3. **Setup environment**
```bash
cp server/.env.example server/.env
# Edit server/.env with your configuration
```

4. **Setup database**
```bash
psql -U postgres -d yayasan_amal -f server/migrations/001_init_schema.sql
```

5. **Start development**
```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
cd server && npm run dev
```

## 📦 Features Implemented

### ✅ Completed

1. **Backend API**
   - Contact form submission
   - Donation management
   - Content management (Programs, News, Gallery, FAQs)
   - Email integration (Nodemailer)
   - Security middleware (Helmet, Rate Limiting)
   - Input validation

2. **Frontend**
   - Smooth scroll with Lenis
   - Parallax animations with GSAP
   - PWA support
   - SEO optimization
   - Mobile responsive design
   - Contact & Donation forms

3. **DevOps**
   - Docker configuration
   - GitHub Actions CI/CD
   - Environment configuration

### 🔄 In Progress

- Payment gateway integration (Midtrans)
- Security hardening
- Multi-language support

### 📋 To Do

- Strapi CMS integration
- Member portal
- Admin dashboard
- Email automation (SendGrid)
- Sentry monitoring
- Google Analytics 4

## 🛠️ Tech Stack

### Frontend
- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS
- React Router
- GSAP (animations)
- Lenis (smooth scroll)
- PWA (vite-plugin-pwa)

### Backend
- Node.js + Express
- TypeScript
- PostgreSQL
- Redis (caching)
- Nodemailer (email)
- Helmet (security)
- Express Validator

### DevOps
- Docker & Docker Compose
- GitHub Actions
- Vercel (frontend deployment)
- Railway (backend deployment)

## 📁 Database Schema

### Tables
- `contacts` - Contact form submissions
- `donations` - Donation records
- `programs` - Program information
- `news` - News articles
- `gallery` - Gallery images
- `faqs` - FAQ entries
- `users` - User accounts
- `newsletter_subscriptions` - Newsletter subscribers

## 🔌 API Endpoints

### Contact
```
POST   /api/contact/submit    - Submit contact form
GET    /api/contact/list      - Get all contacts
```

### Donation
```
POST   /api/donation/create           - Create donation
GET    /api/donation/list             - Get donations list
GET    /api/donation/stats            - Get donation statistics
PUT    /api/donation/:id/status       - Update donation status
```

### Content
```
GET    /api/content/programs          - Get all programs
GET    /api/content/programs/:id      - Get program by ID
GET    /api/content/news              - Get news list
GET    /api/content/news/:id          - Get news by ID
GET    /api/content/gallery           - Get gallery
GET    /api/content/faqs              - Get FAQs
```

## 🔒 Security Features

- HTTPS/SSL recommended
- Rate limiting (100 req/60s)
- Input validation
- CORS configuration
- Security headers (Helmet)
- Environment variables
- SQL injection prevention (parameterized queries)

## 📊 Environment Variables

### Frontend (.env.local)
```env
VITE_API_URL=http://localhost:5000/api
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
```

### Backend (server/.env)
```env
PORT=5000
NODE_ENV=development
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=yayasan_amal
REDIS_HOST=localhost
REDIS_PORT=6379
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=noreply@yayasanamal.org
JWT_SECRET=your-secret-key
CORS_ORIGIN=http://localhost:5173
```

## 🐳 Docker Setup

```bash
# Start all services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f

# Run migrations
docker-compose exec postgres psql -U postgres -d yayasan_amal -f /docker-entrypoint-initdb.d/001_init_schema.sql
```

## 🚢 Deployment

### Frontend (Vercel)
1. Push to GitHub
2. Import project to Vercel
3. Add environment variables
4. Deploy

### Backend (Railway)
1. Push to GitHub
2. Connect repository to Railway
3. Add environment variables
4. Deploy

## 📝 Development Guidelines

### Code Style
- TypeScript strict mode
- ESLint with TypeScript plugin
- Prettier for formatting
- Commit messages follow Conventional Commits

### Branching Strategy
- `main` - Production
- `develop` - Staging
- Feature branches - `feature/branch-name`
- Bug fixes - `fix/issue-name`

### Testing
- Unit tests with Vitest
- E2E tests with Playwright
- API tests with Supertest

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Make changes
4. Run tests
5. Submit pull request

## 📄 License

MIT License - see LICENSE file for details

## 📞 Support

For issues and questions:
- GitHub Issues: <repository>/issues
- Email: info@antang.org

---

**Built with ❤️ for a sustainable future**
