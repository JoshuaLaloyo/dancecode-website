# DanceCode Website

A modern, minimal one-page website for DanceCode - where movement meets technology.

## Features

- 🎨 Modern UI with black and dark navy background
- ⚡ Electric blue accents with smooth gradients
- 🪟 Glassmorphism effects on service cards
- 📱 Fully responsive design
- 🎭 Smooth scroll navigation
- 💬 WhatsApp integration (main CTA + floating button)
- 👥 Team profiles with circular images
- 🚀 Built with React + Vite

## Color Theme

- **Background**: Black (#000000) and Dark Navy (#0a1128)
- **Accents**: Electric Blue (#00d9ff) and Blue Glow (#0099ff)
- **Text**: White (#ffffff) and Gray (#a0aec0)

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd dancecode-website
```

2. Install dependencies:
```bash
npm install
```

3. Update WhatsApp number:
   - Open `src/components/Hero.jsx`
   - Open `src/components/Contact.jsx`
   - Open `src/components/FloatingWhatsApp.jsx`
   - Replace `'1234567890'` with your actual WhatsApp number (include country code without +)

4. Update team images:
   - Replace placeholder images in `src/components/About.jsx` with your actual images
   - You can use local images by placing them in `public` folder or use external URLs

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

Build the project:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Customization

### Changing Colors

Edit color variables in `src/index.css`:
```css
:root {
  --color-black: #000000;
  --color-dark-navy: #0a1128;
  --color-navy: #1a2332;
  --color-electric-blue: #00d9ff;
  --color-blue-glow: #0099ff;
  --color-white: #ffffff;
  --color-gray: #a0aec0;
}
```

### Updating Content

- **Hero Section**: Edit `src/components/Hero.jsx`
- **Services**: Edit the `services` array in `src/components/Services.jsx`
- **Team Info**: Edit the `team` array in `src/components/About.jsx`
- **Contact**: Edit text in `src/components/Contact.jsx`

### Adding Team Photos

Replace the placeholder images in `src/components/About.jsx`:
```jsx
const team = [
  {
    id: 1,
    name: 'Your Name',
    role: 'Your Role',
    image: '/path-to-your-image.jpg', // or use URL
    description: 'Your description'
  },
  // ...
];
```

## Sections

1. **Navigation** - Sticky header with smooth scroll
2. **Hero** - Bold headline with developer illustrations
3. **Services** - Three cards with glassmorphism effects
4. **About** - Team profiles with circular images
5. **Contact** - Large WhatsApp CTA
6. **Floating Button** - Bottom-right WhatsApp button

## Technologies Used

- React 18
- Vite 5
- CSS3 (Custom Properties, Flexbox, Grid)
- SVG Icons

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this for your projects!

## Support

For issues or questions, reach out via WhatsApp using the button on the website.

---

Built with ❤️ by DanceCode
