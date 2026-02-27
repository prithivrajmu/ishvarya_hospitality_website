# Ishvarya Hospitality Solutions

Premium B2B hospitality supplies website for hotels, hospitals & resorts across Tamil Nadu.

## 🌐 Live Site

Deployed on [Vercel](https://vercel.com) — link will be available after deployment.

## 🛠 Tech Stack

- **Vite** — Build tool & dev server
- **Vanilla HTML/CSS/JS** — No frameworks, fast & lightweight
- **Web3Forms** — Contact & quote form submissions
- **Google Fonts** — Outfit (headings) + Inter (body)

## 📁 Project Structure

```
├── index.html          # Home page
├── about.html          # About Us
├── products.html       # Product catalog (3 categories)
├── clients.html        # Client showcase & testimonials
├── contact.html        # Contact form & Google Maps
├── quote.html          # Request a Quote form
├── css/
│   └── style.css       # Complete design system
├── js/
│   └── main.js         # Navbar, animations, forms
├── images/             # All site images & logo
├── vite.config.js      # Multi-page Vite config
└── package.json
```

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔑 Web3Forms Setup

1. Go to [web3forms.com](https://web3forms.com) and sign up
2. Get your **Access Key**
3. Replace `YOUR_WEB3FORMS_KEY` in these files:
   - `index.html` (home contact form)
   - `contact.html` (contact page form)
   - `quote.html` (quote request form)

Search for `YOUR_WEB3FORMS_KEY` to find all instances.

## ☁️ Deploy to Vercel

### Option 1: Vercel Dashboard (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repository
4. Vercel auto-detects Vite — settings will be:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy** — done! 🎉

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (follow prompts)
vercel

# Deploy to production
vercel --prod
```

## 📞 Contact

- **Phone:** +91 94875 19401
- **Email:** ishvaryahospitality@gmail.com
- **Location:** Salem, Tamil Nadu, India
