# Cloned Surgery Section Style Guide

This document details all styling elements from the "Se recomienda la autotransfusión en las siguientes cirugías" section.

## 🎨 Color Palette

```css
/* Primary Colors */
--primary-dark-blue: #00217a;
--primary-light-blue: #2381d2;
--accent-red: #d2232a;

/* Gradient Colors */
--gradient-blue-1: #c7d7ee;
--gradient-blue-2: #bcd0eb;
--gradient-blue-3: #eef5fd;

/* Text Colors */
--text-primary: rgb(15 23 42);    /* slate-900 */
--text-secondary: rgb(71 85 105); /* slate-600 */
--text-muted: rgb(100 116 139);   /* slate-500 */
```

## 📐 Layout Structure

### Container
- Max width: `1280px` (max-w-7xl)
- Padding: `px-4 sm:px-6 lg:px-20`
- Section padding: `py-20 lg:py-28`

### Grid System
- Desktop: 2 columns (`lg:grid-cols-2`)
- Mobile: 1 column
- Gap: `gap-8 lg:gap-12`

## 🌟 Key Design Elements

### 1. Radial Gradient Background
```css
background: radial-gradient(
  ellipse 90% 50% at 50% 40%,
  #c7d7ee 0%,
  #bcd0eb 25%,
  rgba(199,215,238,0.9) 40%,
  #eef5fd 55%,
  #ffffff 70%,
  #ffffff 100%
);
```

### 2. Glassmorphic Card
```css
background: rgba(255, 255, 255, 0.4);
backdrop-filter: blur(4px);
border-radius: 24px; /* lg:rounded-3xl */
border: 1px solid rgba(255, 255, 255, 0.3);
box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
```

### 3. Tab Buttons

**Active State:**
```css
background: #00217a;
color: white;
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
padding: 0.5rem 1rem;
border-radius: 9999px;
```

**Inactive State:**
```css
background: white;
color: #00217a;
border: 1px solid rgba(255, 255, 255, 0.5);
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
```

### 4. Icon Badge
```css
width: 48px;
height: 48px;
background: linear-gradient(to bottom right, #00217a, #2381d2);
border-radius: 50%;
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
```

### 5. Checkmark Items
- Icon: `CheckCircle` from lucide-react
- Icon size: `w-5 h-5`
- Icon color: `#2381d2`
- Text: `text-slate-700 text-base`
- Spacing: `space-y-3`

## ✨ Animation Effects

### Entrance Animations (using Framer Motion)

**Section Container:**
```javascript
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.8, delay: 0.8 }}
```

**Header:**
```javascript
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: 0.2 }}
```

**Left Column (Content):**
```javascript
initial={{ opacity: 0, x: -30 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.6, delay: 0.6 }}
```

**Right Column (Image):**
```javascript
initial={{ opacity: 0, x: 30 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.6, delay: 0.4 }}
```

**List Items (Staggered):**
```javascript
initial={{ opacity: 0, y: 10 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.3, delay: index * 0.05 }}
```

### Hover Effects

**Tab Buttons:**
```javascript
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}
```

**Content Panel:**
```javascript
whileHover={{ y: -4 }}
```

**Icon Badge:**
```javascript
whileHover={{ scale: 1.03 }}
```

## 🔤 Typography

### Headings
- Main heading: `text-3xl lg:text-4xl font-bold text-[#00217a]`
- Section title: `text-xl font-bold text-[#00217a]`
- Mobile heading: `text-lg font-semibold text-[#00217a]`

### Body Text
- Description: `text-lg text-slate-600 leading-relaxed`
- List items: `text-slate-700 text-base leading-relaxed`
- Mobile text: `text-slate-700 text-sm`

### Font Weights
- Bold: `font-bold` (700)
- Semibold: `font-semibold` (600)
- Medium: `font-medium` (500)

## 📦 Dependencies

```json
{
  "framer-motion": "^10.x.x",
  "lucide-react": "^0.x.x",
  "tailwindcss": "^3.x.x"
}
```

## 🎯 Icons Used

From `lucide-react`:
- `CheckCircle` - For procedure list items
- `Activity` - Cirugías Generales
- `Heart` - Obstetricia y Ginecología
- `Zap` - Urología
- `Bone` - Ortopedia
- `Users` - Fallback image icon

## 📱 Responsive Breakpoints

```css
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
```

### Mobile-Specific Features
- Show "Ver todas/Ver menos" button (hidden on desktop with `lg:hidden`)
- Collapsible accordion for all specialties
- Single column layout
- Reordered columns (image first, content second)

## 🎨 Special Effects

### Full-Width Background Trick
```css
.relative -mx-[50vw] left-1/2 right-1/2 w-screen
```
This breaks out of the container to create a full-width background while keeping content centered.

### Image Overlay
```css
background: linear-gradient(
  to top,
  rgba(0, 33, 122, 0.2),
  transparent,
  transparent
);
```

### Border Effects
- Outer border: `border border-white/30`
- Inner border: `border border-white/20` (subtle layering)

## 🔄 State Management

Uses React `useState` for:
- `activeTab` - Currently selected specialty tab
- `showAll` - Mobile accordion expansion state

## 💡 Usage Tips

1. **Customization**: Replace data in `surgerySpecialties` array with your content
2. **Images**: Replace the fallback div with your actual image component
3. **Colors**: Search and replace color codes to match your brand
4. **Icons**: Import and use different icons from lucide-react or your icon library
5. **Animation timing**: Adjust `delay` values in transitions for different pacing

## 📋 Complete Component File

The complete cloned component is available in `ClonedSurgerySection.tsx`.

