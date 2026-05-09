# Yayasan AMAL - Website Enterprise

[![Build Status](https://img.shields.io/github/workflow/status/yayasanamal/yayasanamal/CI/CD%20Pipeline)](https://github.com/yayasanamal/yayasanamal/actions)
[![License](https://img.shields.io/github/license/yayasanamal/yayasanamal)](LICENSE)
[![Version](https://img.shields.io/github/package-json/v/yayasanamal/yayasanamal)](https://github.com/yayasanamal/yayasanamal)

Website enterprise untuk **Yayasan AntangPatahu Mahaga Lewu (AMAL)** - Pengelolaan hutan berkelanjutan dan pemberdayaan masyarakat di Indonesia.

## 🌟 Fitur Utama

- ✅ **Smooth Scrolling** - Lenis untuk pengalaman scroll premium
- ✅ **Parallax Animations** - GSAP untuk animasi interaktif
- ✅ **PWA Support** - Installable web app dengan offline support
- ✅ **SEO Optimized** - Meta tags, sitemap, structured data
- ✅ **Contact Form** - Formulir kontak dengan email integration
- ✅ **Donation System** - Sistem donasi lengkap
- ✅ **Mobile Responsive** - Design mobile-first
- ✅ **Security** - Helmet, rate limiting, input validation
- ✅ **Docker Ready** - Containerization untuk deployment
- ✅ **CI/CD** - Automated testing & deployment

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- PostgreSQL 15+
- npm atau yarn

### Installation

```bash
# Clone repository
git clone <repository-url>
cd yayasanamal

# Install dependencies
npm install
cd server && npm install && cd ..

# Setup database
psql -U postgres -d yayasan_amal -f server/migrations/001_init_schema.sql

# Configure environment
cp server/.env.example server/.env
# Edit server/.env dengan credentials Anda

# Start development
npm run dev          # Frontend (port 5173)
cd server && npm run dev  # Backend (port 5000)
```

## 📁 Struktur Proyek

```
yayasanamal/
├── src/                    # Frontend (React + TypeScript)
│   ├── components/        # UI Components
│   ├── pages/            # Page Components
│   ├── hooks/            # Custom Hooks
│   ├── services/         # API Services
│   └── utils/            # Utilities
├── server/               # Backend API (Express)
│   ├── src/
│   │   ├── controllers/  # Business Logic
│   │   ├── routes/       # API Routes
│   │   ├── services/     # Services
│   │   ├── models/       # Models
│   │   ├── middleware/   # Middleware
│   │   └── config/       # Configuration
│   └── migrations/       # Database Migrations
├── public/               # Static Assets
├── .github/              # CI/CD Workflows
├── docker-compose.yml    # Docker Config
└── Dockerfile            # Docker Image
```

## 🛠️ Tech Stack

### Frontend
- **React 18** + TypeScript
- **Vite** (Build Tool)
- **Tailwind CSS** + Custom Theme
- **React Router** v6
- **GSAP** (Animations)
- **Lenis** (Smooth Scroll)
- **PWA** (vite-plugin-pwa)

### Backend
- **Node.js** + Express
- **TypeScript**
- **PostgreSQL**
- **Redis** (Caching)
- **Nodemailer** (Email)
- **Helmet** (Security)
- **Express Validator**

### DevOps
- **Docker** & Docker Compose
- **GitHub Actions**
- **Vercel** (Frontend)
- **Railway** (Backend)

## 📊 Database Schema

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
POST   /api/contact/submit    Submit contact form
GET    /api/contact/list      Get all contacts
```

### Donation
```
POST   /api/donation/create           Create donation
GET    /api/donation/list             Get donations list
GET    /api/donation/stats            Get donation statistics
PUT    /api/donation/:id/status       Update donation status
```

### Content
```
GET    /api/content/programs          Get all programs
GET    /api/content/programs/:id      Get program by ID
GET    /api/content/news              Get news list
GET    /api/content/news/:id          Get news by ID
GET    /api/content/gallery           Get gallery
GET    /api/content/faqs              Get FAQs
```

## 🔒 Security Features

- HTTPS/SSL recommended
- Rate limiting (100 req/60s)
- Input validation
- CORS configuration
- Security headers (Helmet)
- Environment variables
- SQL injection prevention

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
```bash
npm i -g vercel
vercel login
vercel --prod
```

### Backend (Railway)
```bash
npm i -g @railway/cli
railway login
railway up
```

## 📝 Development

### Scripts

```bash
# Frontend
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Lint code
npm run preview  # Preview production build

# Backend
cd server
npm run dev      # Start backend development
npm run build    # Build backend
npm run lint     # Lint backend code
```

### Branching Strategy

- `main` - Production
- `develop` - Staging
- `feature/*` - New features
- `fix/*` - Bug fixes

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
JWT_SECRET=your-secret-key
CORS_ORIGIN=http://localhost:5173
```

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 📞 Support

- GitHub Issues: [Report bugs](https://github.com/yayasanamal/yayasanamal/issues)
- Email: info@antang.org
- Website: https://yayasanamal.org

## 🙏 Acknowledgments

- Design inspired by Apple quality standards
- Built with focus on sustainability and social impact
- Community-driven development

---

**Built with ❤️ for a sustainable future**

*Yayasan AntangPatahu Mahaga Lewu (AMAL)*
