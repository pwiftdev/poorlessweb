# $POORLESS - Official Website

> Get rich or meme trying. Be $POORLESS.

A fully immersive, modern one-pager website for the $POORLESS token, built with Next.js 14, React, TypeScript, and Tailwind CSS.

## Features

- ⚡ Built with Next.js 14 (App Router)
- ⚛️ React 18 with TypeScript
- 🎨 Tailwind CSS for styling
- 🎭 React Icons for beautiful iconography
- 📱 Fully responsive design
- ✨ Smooth animations and transitions
- 🎯 Parallax scrolling effects
- 🚀 Static export ready for deployment
- ♿ Accessible and SEO optimized

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

Create an optimized production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Start Production Server

After building, you can start the production server:

```bash
npm run start
# or
yarn start
# or
pnpm start
```

## Deployment

This project is configured for static export, making it perfect for deployment on:

- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**
- **Any static hosting service**

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Deploy to GitHub Pages

1. Build the project: `npm run build`
2. Push the `out` folder to your `gh-pages` branch

## Project Structure

```
poorless-web/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── CopyButton.tsx      # Contract address copy functionality
│   ├── Features.tsx        # Features grid section
│   ├── Ticker.tsx          # Animated ticker tape
│   ├── Toast.tsx           # Toast notification component
│   └── WojakFloat.tsx      # Floating Wojak characters
├── public/
│   └── assets/             # Images and static assets
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.js          # Next.js configuration
```

## Customization

### Colors

The brand colors are defined in `tailwind.config.ts`:

- **Mint**: `#5FCEA7`
- **Gold**: `#FFD700`
- **Dark**: `#0a0a0a`

### Contract Address

Update the contract address in `app/page.tsx`:

```typescript
const CONTRACT_ADDRESS = 'YOUR_CONTRACT_ADDRESS_HERE'
```

### Links

Update social and chart links in `app/page.tsx`:

- Twitter/X Community link
- Dexscreener link

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Deployment**: Static Export

## Performance

- Optimized images with Next.js Image component
- Static export for fast loading
- Minimal JavaScript bundle size
- Lazy loading and code splitting
- Smooth 60fps animations

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

© 2025 $POORLESS | Built by degens, for degens

---

**Disclaimer**: This is not financial advice. DYOR (Do Your Own Research).

