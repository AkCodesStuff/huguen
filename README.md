# Huguen - Hospitality Technology Solutions Website

A fully responsive, modern website built with Next.js 14, TypeScript, and TailwindCSS for Huguen - a Delhi-based hospitality technology agency. Features smooth animations, SEO optimization, and a beautiful user interface showcasing our comprehensive digital solutions for hotels, resorts, villas, and homestays.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, and TailwindCSS
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Framer Motion animations and transitions
- **SEO Optimized**: Meta tags, OpenGraph, sitemap, and structured data
- **Component-Based**: Modular, reusable components
- **Custom Theme**: Honeycomb yellow color palette with CSS variables
- **Interactive Navigation**: Smooth scrolling with active link highlighting
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Next.js Image optimization and best practices

## 🎨 Design Features

- **Custom Color Palette**: 
  - Primary: #FFB300 (Honeycomb Yellow)
  - Secondary: #FFFFFF (White)
  - Tertiary: #F9F9F9 (Light Gray)
- **Typography**: Inter font family for modern readability
- **Animations**: Fade-in, slide-in, and hover effects
- **Responsive Grid**: CSS Grid and Flexbox layouts
- **Custom Scrollbar**: Styled scrollbar matching the theme

## 📱 Sections

1. **Hero Section**: Full-screen landing showcasing Huguen's digital transformation services
2. **Services**: Comprehensive hospitality technology solutions (websites, payment gateways, channel management, etc.)
3. **Pricing**: Website plans and subscription tiers with transparent pricing
4. **About**: Huguen's mission, promise, and vision for the hospitality industry
5. **Testimonials**: Client reviews from hotel owners and hospitality professionals
6. **Contact**: Project inquiry form and contact information
7. **Footer**: Links, social media, and newsletter signup

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Images**: Next.js Image component
- **SEO**: Next.js Metadata API

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hotel-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with SEO metadata
│   ├── page.tsx             # Main page component
│   ├── robots.ts            # Robots.txt configuration
│   └── sitemap.ts           # Sitemap configuration
├── components/
│   ├── Navigation/          # Navigation component
│   ├── Hero/               # Hero section
│   ├── Services/           # Services section
│   ├── Pricing/            # Pricing section
│   ├── About/              # About section
│   ├── Testimonials/       # Testimonials section
│   ├── GetInTouch/         # Contact section
│   └── Footer/             # Footer component
public/
├── favicon.ico             # Favicon
└── site.webmanifest        # PWA manifest
```

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts
- Touch-friendly interactions

### SEO Optimization
- Meta tags and OpenGraph
- Structured data (JSON-LD)
- Sitemap and robots.txt
- Semantic HTML structure
- Image optimization

### Performance
- Next.js Image optimization
- Code splitting
- Lazy loading
- Optimized animations
- Minimal bundle size

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus management
- Color contrast compliance

## 🎨 Customization

### Colors
Update the CSS variables in `src/app/globals.css`:

```css
:root {
  --color-primary: #FFB300;    /* Honeycomb yellow */
  --color-on-primary: #000000; /* Black text on primary */
  --color-secondary: #FFFFFF;  /* White */
  --color-on-secondary: #1A1A1A; /* Dark text on secondary */
  --color-tertiary: #F9F9F9;   /* Light gray */
  --color-on-tertiary: #333333; /* Dark text on tertiary */
}
```

### Content
- Update hotel information in components
- Replace placeholder images with actual photos
- Modify pricing and services as needed
- Update contact information

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy
The project is ready to deploy on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any static hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support or questions, please contact:
- Email: info@luxury-hotel.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ using Next.js, TypeScript, and TailwindCSS
