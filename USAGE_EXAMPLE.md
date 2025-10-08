# How to Use the Cloned Surgery Section

## Quick Start

### 1. Copy Required Files
Copy these files to your new project:
- `ClonedSurgerySection.tsx` - The main component
- `STYLE_GUIDE.md` - Complete styling reference

### 2. Install Dependencies

```bash
# Using pnpm
pnpm add framer-motion lucide-react

# Or using npm
npm install framer-motion lucide-react

# Or using yarn
yarn add framer-motion lucide-react
```

### 3. Ensure Tailwind CSS is Configured

Make sure your `tailwind.config.js` includes:

```javascript
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Add your component paths
  ],
  theme: {
    extend: {
      // Optional: Add custom colors
      colors: {
        'brand-blue': '#00217a',
        'brand-light-blue': '#2381d2',
      }
    },
  },
}
```

### 4. Basic Usage

```tsx
import { ClonedSurgerySection } from './ClonedSurgerySection';

export default function MyPage() {
  return (
    <div>
      <ClonedSurgerySection />
    </div>
  );
}
```

## Customization Examples

### Change the Data

Edit the `surgerySpecialties` array in `ClonedSurgerySection.tsx`:

```typescript
const surgerySpecialties = [
  {
    id: 'cardiology',
    name: 'Cardiología',
    icon: Heart,  // Import from lucide-react
    procedures: [
      'Bypass coronario',
      'Angioplastia',
      'Reemplazo de válvulas'
    ]
  },
  // Add more specialties...
];
```

### Change Colors

Replace color codes throughout the component:

```typescript
// Find and replace these colors:
'#00217a' → Your primary color
'#2381d2' → Your secondary color
'#c7d7ee' → Your gradient color 1
'#bcd0eb' → Your gradient color 2
```

### Add a Real Image

Replace the fallback div with your image:

```tsx
{/* Replace the fallback div with: */}
<img
  src="/your-image.jpg"
  alt="Your description"
  className="w-full h-full object-cover"
/>

{/* Or with Next.js Image: */}
<Image
  src="/your-image.jpg"
  alt="Your description"
  fill
  className="object-cover"
/>
```

### Modify the Title

Change the main heading:

```tsx
<h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#00217a] drop-shadow-sm">
  Your Custom Title Here
</h2>
```

### Adjust Animation Speed

Modify transition durations:

```tsx
// Slower entrance:
transition={{ duration: 1.2, delay: 0.5 }}

// Faster entrance:
transition={{ duration: 0.4, delay: 0.1 }}

// No delay:
transition={{ duration: 0.6 }}
```

## Advanced Customization

### Use Different Icons

Import different icons from lucide-react:

```tsx
import { 
  Stethoscope, 
  Brain, 
  Eye, 
  Pill,
  Syringe 
} from 'lucide-react';

const surgerySpecialties = [
  {
    id: 'neurology',
    name: 'Neurología',
    icon: Brain,  // Use the new icon
    procedures: [...]
  }
];
```

### Remove Mobile Accordion

If you don't need the mobile "Ver todas" feature, remove this section:

```tsx
{/* Remove or comment out lines for showAll state and accordion */}
```

### Change Border Radius

Modify rounded corners:

```tsx
// Original: rounded-3xl (24px)
className="rounded-3xl"

// More rounded: rounded-[32px]
className="rounded-[32px]"

// Less rounded: rounded-xl (12px)
className="rounded-xl"
```

### Disable Animations

Replace framer-motion components with regular divs:

```tsx
{/* Original: */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>

{/* Static version: */}
<div>
```

## Integration Examples

### Next.js App Router

```tsx
// app/page.tsx
import { ClonedSurgerySection } from '@/components/ClonedSurgerySection';

export default function Home() {
  return (
    <main>
      <ClonedSurgerySection />
    </main>
  );
}
```

### Next.js Pages Router

```tsx
// pages/index.tsx
import { ClonedSurgerySection } from '../components/ClonedSurgerySection';

export default function Home() {
  return (
    <div>
      <ClonedSurgerySection />
    </div>
  );
}
```

### React App

```tsx
// App.tsx
import { ClonedSurgerySection } from './components/ClonedSurgerySection';

function App() {
  return (
    <div className="App">
      <ClonedSurgerySection />
    </div>
  );
}
```

## Troubleshooting

### Styles Not Appearing
- Ensure Tailwind CSS is properly configured
- Check that the content path includes your component files
- Verify all dependencies are installed

### Animations Not Working
- Make sure `framer-motion` is installed
- Check for console errors
- Verify motion components are properly imported

### Icons Not Showing
- Confirm `lucide-react` is installed
- Check icon imports at the top of the file
- Verify icon names are correct

### Background Not Full Width
- The `-mx-[50vw] left-1/2 right-1/2 w-screen` trick requires specific parent structure
- Ensure parent containers don't have overflow hidden
- May need to adjust based on your layout

## Performance Tips

1. **Lazy Load Images**: Use Next.js Image component with lazy loading
2. **Reduce Motion**: Add `viewport={{ once: true }}` to prevent re-animations
3. **Optimize Bundle**: Import only needed icons: `import { Heart } from 'lucide-react'`
4. **Tree Shaking**: Use ES modules for Framer Motion

## Browser Support

This component uses modern CSS features:
- `backdrop-filter` (for glassmorphism)
- CSS Grid
- Flexbox
- CSS Custom Properties

Supported in all modern browsers (Chrome, Firefox, Safari, Edge).

## Need Help?

Refer to:
- `STYLE_GUIDE.md` for complete styling details
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/)

