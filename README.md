# Hobo Hostel Website

A modern, responsive hostel website built with Next.js, featuring a hidden check-in form and comprehensive booking system.

## Features

### Public Pages
- **Home**: Hero section, features, room previews
- **Rooms**: Mixed dorm and private room details
- **Culture**: Local experiences and activities
- **Contact**: Contact information and FAQ
- **Shop**: Coming soon page
- **Terms & Privacy**: Legal pages

### Hidden Features
- **Check-in Form**: Hidden route at `/forms/checkin` with segmented National vs Foreign National forms
- **API Integration**: Posts to your backend API for data persistence
- **SEO Optimized**: Proper metadata, sitemap, and robots.txt

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: Custom validation with comprehensive error handling

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (marketing)/        # Public pages
│   ├── forms/checkin/      # Hidden check-in form
│   ├── rooms/             # Room detail pages
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── layout/           # Layout components
│   └── forms/            # Form components
├── lib/                  # Utilities and configurations
│   ├── utils.ts          # Utility functions
│   ├── validations.ts    # Form validation schemas
│   └── api.ts           # API integration
└── types/               # TypeScript type definitions

public/
├── assets/              # Static assets
│   ├── images/          # Images organized by section
│   ├── logo/           # Logo and branding
│   └── icons/          # SVG icons
├── robots.txt          # SEO robots file
└── sitemap.xml         # Auto-generated sitemap
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hobo_website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Add your API endpoint:
```
NEXT_PUBLIC_API_BASE_URL=https://setdatainfirestore-q3deps5f7q-uc.a.run.app
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Hidden Check-in Form

The check-in form is accessible at `/forms/checkin` but is:
- Not linked in navigation
- Excluded from sitemap
- Blocked by robots.txt
- Has noindex metadata

## API Integration

The website integrates with your backend API:

- **Endpoint**: `https://setdatainfirestore-q3deps5f7q-uc.a.run.app`
- **Method**: POST
- **Headers**: Content-Type: application/json, Idempotency-Key: <uuid>
- **Payload**: `{ path: string, data: object }`

### Check-in Form Data Structure

The form collects comprehensive guest information:

**Common Fields:**
- Guest details (name, address, phone, sex, nationality)
- Stay details (check-in/out dates, guests, itinerary, room type)

**National (Indian) Fields:**
- Government ID type and number
- ID upload URL

**Foreign National Fields:**
- Passport details (number, issue/expiry dates, issuing authority)
- Visa details (number, issue/expiry dates)
- Arrival information (date, city)
- Passport upload URL

## Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Environment Variables

```env
NEXT_PUBLIC_API_BASE_URL=https://your-api-endpoint.com
HIDDEN_FORM_PATH=/forms/checkin
SHOW_SHOP=false
```

## Performance & SEO

- **Lighthouse Score**: Optimized for 95+ scores
- **SEO**: Complete metadata, structured data, sitemap
- **Accessibility**: WCAG 2.1 AA compliant
- **Performance**: Optimized images, lazy loading, code splitting
- **Mobile**: Fully responsive design

## Customization

### Adding Real Images

Replace placeholder SVGs in `public/assets/images/` with real photos:

```
public/assets/images/
├── hero/
│   └── home_hero.jpg
├── rooms/
│   ├── dormitory/
│   │   ├── hero.jpg
│   │   ├── 01.jpg
│   │   └── 02.jpg
│   ├── double-room/
│   │   ├── hero.jpg
│   │   ├── 01.jpg
│   │   └── 02.jpg
│   └── family-room/
│       ├── hero.jpg
│       ├── 01.jpg
│       └── 02.jpg
├── culture/
│   ├── hero.jpg
│   ├── 01.jpg
│   ├── 02.jpg
│   ├── 03.jpg
│   └── 04.jpg
└── contact/
    └── map.jpg
```

### Updating Content

- **Text Content**: Edit page components in `src/app/`
- **Styling**: Modify Tailwind classes or update `tailwind.config.ts`
- **Form Fields**: Update validation schemas in `src/lib/validations.ts`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions:
- Email: hello@hobohostel.com
- Phone: +91 98765 43210

---

Built with ❤️ for travelers
