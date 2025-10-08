# 🎨 Cloned Surgery Section Package

Complete style clone of the "Se recomienda la autotransfusión en las siguientes cirugías" section, ready to use in any website.

## 📦 Package Contents

| File | Description |
|------|-------------|
| `ClonedSurgerySection.tsx` | Complete React component with all functionality |
| `STYLE_GUIDE.md` | Comprehensive styling documentation |
| `USAGE_EXAMPLE.md` | Step-by-step integration guide |
| `CSS_QUICK_REFERENCE.css` | Vanilla CSS reference for all styles |
| `CLONED_SECTION_README.md` | This file |

## ⚡ Quick Start

### 1. Install Dependencies
```bash
pnpm add framer-motion lucide-react
```

### 2. Copy Component
Copy `ClonedSurgerySection.tsx` to your project's components folder.

### 3. Import and Use
```tsx
import { ClonedSurgerySection } from './components/ClonedSurgerySection';

export default function Page() {
  return <ClonedSurgerySection />;
}
```

## 🎯 What's Included

### ✅ Exact Visual Match
- ✓ Radial gradient background (#c7d7ee → #ffffff)
- ✓ Glassmorphic image card with backdrop-blur
- ✓ Tab navigation with rounded pills
- ✓ Icon badges with gradient backgrounds
- ✓ CheckCircle procedure list items
- ✓ Mobile accordion functionality
- ✓ Responsive 2-column layout

### ✅ All Animations
- ✓ Entrance animations (fade + slide)
- ✓ Hover effects (scale, lift)
- ✓ Tab switching transitions
- ✓ Staggered list item animations
- ✓ Mobile expand/collapse

### ✅ Complete Styling
- ✓ Colors: #00217a, #2381d2, slate-* 
- ✓ Typography: font sizes, weights, line heights
- ✓ Spacing: padding, gaps, margins
- ✓ Borders: rounded corners, borders, shadows
- ✓ Effects: blur, gradients, shadows

## 📚 Documentation Files

### `STYLE_GUIDE.md`
**Best for:** Understanding the design system
- Complete color palette
- Layout specifications
- Animation details
- Typography system
- Component anatomy

### `USAGE_EXAMPLE.md`
**Best for:** Integration and customization
- Installation steps
- Framework examples (Next.js, React)
- Customization recipes
- Troubleshooting guide
- Performance tips

### `CSS_QUICK_REFERENCE.css`
**Best for:** Non-React implementations
- Pure CSS classes
- Custom properties (CSS variables)
- Vanilla CSS animations
- Copy-paste ready styles

## 🔧 Tech Stack

| Dependency | Version | Purpose |
|------------|---------|---------|
| React | 18+ | Component framework |
| TypeScript | 4.5+ | Type safety |
| Framer Motion | 10+ | Animations |
| Lucide React | Latest | Icons |
| Tailwind CSS | 3+ | Utility classes |

## 🎨 Color Reference

```css
#00217a  /* Primary Dark Blue */
#2381d2  /* Primary Light Blue */
#c7d7ee  /* Gradient Blue 1 */
#bcd0eb  /* Gradient Blue 2 */
#eef5fd  /* Gradient Blue 3 */
```

## 📱 Features

### Desktop
- ✓ 2-column grid layout
- ✓ Hover effects on all interactive elements
- ✓ Smooth tab switching
- ✓ Glassmorphic cards

### Mobile
- ✓ Single column, stacked layout
- ✓ "Ver todas" expandable accordion
- ✓ Touch-optimized buttons
- ✓ Responsive typography

### Accessibility
- ✓ Semantic HTML
- ✓ ARIA labels on icons
- ✓ Keyboard navigation
- ✓ Focus indicators

## 🔄 Customization Points

### Easy Changes
1. **Data**: Edit `surgerySpecialties` array
2. **Colors**: Find/replace hex codes
3. **Title**: Change h2 text
4. **Icons**: Swap lucide-react icons

### Medium Changes
1. **Layout**: Modify grid columns
2. **Animations**: Adjust transition timing
3. **Typography**: Change font classes
4. **Spacing**: Update padding/gap values

### Advanced Changes
1. **Background**: Customize gradient
2. **Card Design**: Modify glassmorphic effects
3. **Tab Style**: Redesign navigation
4. **Mobile UX**: Change accordion behavior

## 📖 Usage Examples

### Basic
```tsx
<ClonedSurgerySection />
```

### With Custom Data
```tsx
// Edit the surgerySpecialties array inside the component
const surgerySpecialties = [
  {
    id: 'custom',
    name: 'Your Specialty',
    icon: YourIcon,
    procedures: ['Item 1', 'Item 2']
  }
];
```

### With Different Colors
```tsx
// Find and replace throughout component:
'#00217a' → '#YOUR_COLOR'
'#2381d2' → '#YOUR_COLOR'
```

## 🐛 Common Issues

### Styles Not Working
- ✓ Check Tailwind config includes component path
- ✓ Verify all dependencies installed
- ✓ Ensure no CSS conflicts

### Animations Choppy
- ✓ Add `viewport={{ once: true }}` to motion components
- ✓ Check for heavy re-renders
- ✓ Enable hardware acceleration

### Background Not Full Width
- ✓ Verify parent has no `overflow: hidden`
- ✓ Check container structure
- ✓ May need layout adjustments

## 🎯 File Recommendations

| Your Goal | Start Here |
|-----------|-----------|
| Copy exact component | `ClonedSurgerySection.tsx` |
| Understand styling | `STYLE_GUIDE.md` |
| Learn how to use | `USAGE_EXAMPLE.md` |
| Use without React | `CSS_QUICK_REFERENCE.css` |
| Quick reference | This file |

## 💡 Pro Tips

1. **Performance**: Use `viewport={{ once: true }}` on animations
2. **Bundle Size**: Import only needed icons from lucide-react
3. **Customization**: Use CSS variables for easy color changes
4. **Testing**: Test on mobile devices, not just browser DevTools
5. **Accessibility**: Keep semantic HTML structure

## 🔗 Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Lucide Icons Gallery](https://lucide.dev/icons/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

## 📄 License

Free to use in any project. No attribution required.

## ✨ Features Checklist

- [x] Full component code
- [x] Complete styling documentation
- [x] Integration examples
- [x] Vanilla CSS reference
- [x] Customization guide
- [x] Troubleshooting tips
- [x] Performance optimizations
- [x] Accessibility considerations
- [x] Mobile responsive
- [x] TypeScript types
- [x] Framer Motion animations
- [x] Icon system
- [x] State management
- [x] Hover effects
- [x] Tab navigation
- [x] Glassmorphic design
- [x] Gradient backgrounds

---

**Created**: 2025
**Component Source**: ServiciosSection.tsx (lines 125-382)
**Original Website**: Coquí Blood Salvage, Inc.

