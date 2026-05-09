# Yayasan AMAL Backend API

Backend API untuk website Yayasan AMAL yang dibangun dengan Express.js, TypeScript, dan PostgreSQL.

## Fitur

- ✅ Contact Form Management
- ✅ Donation System
- ✅ Content Management (Programs, News, Gallery, FAQs)
- ✅ Email Integration (Nodemailer)
- ✅ Security Middleware (Helmet, Rate Limiting)
- ✅ CORS Support
- ✅ Input Validation

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL
- **Email**: Nodemailer
- **Security**: Helmet, Rate Limiter Flexible
- **Validation**: Express Validator

## Setup

### Prerequisites

- Node.js 16+
- PostgreSQL 12+
- npm atau yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Setup environment variables:
```bash
cp .env.example .env
```

3. Configure `.env` dengan database credentials Anda:
```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=yayasan_amal
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

4. Setup database schema:
```bash
psql -U postgres -d yayasan_amal -f migrations/001_init_schema.sql
```

5. Start development server:
```bash
npm run dev
```

Server akan berjalan di `http://localhost:5000`

## API Endpoints

### Contact
- `POST /api/contact/submit` - Submit contact form
- `GET /api/contact/list` - Get all contacts (admin only)

### Donation
- `POST /api/donation/create` - Create donation
- `GET /api/donation/list` - Get donations list
- `GET /api/donation/stats` - Get donation statistics
- `PUT /api/donation/:transactionId/status` - Update donation status

### Content
- `GET /api/content/programs` - Get all programs
- `GET /api/content/programs/:id` - Get program by ID
- `GET /api/content/news` - Get news list
- `GET /api/content/news/:id` - Get news by ID
- `GET /api/content/gallery` - Get gallery
- `GET /api/content/faqs` - Get FAQs

## Database Schema

### Tables
- `contacts` - Contact form submissions
- `donations` - Donation records
- `programs` - Program information
- `news` - News articles
- `gallery` - Gallery images
- `faqs` - FAQ entries
- `users` - User accounts
- `newsletter_subscriptions` - Newsletter subscribers

## Development

### Build
```bash
npm run build
```

### Lint
```bash
npm run lint
```

### Production
```bash
npm run build
npm start
```

## Security

- HTTPS/SSL recommended for production
- Rate limiting enabled (100 requests per 60 seconds)
- Input validation on all endpoints
- CORS configured
- Security headers via Helmet

## Email Configuration

Untuk menggunakan Gmail:
1. Enable 2-factor authentication
2. Generate App Password di https://myaccount.google.com/apppasswords
3. Gunakan App Password di `EMAIL_PASSWORD`

## Error Handling

API mengembalikan response dengan format:
```json
{
  "success": false,
  "message": "Error message",
  "errors": []
}
```

## Support

Untuk pertanyaan atau issues, hubungi tim development.
