# Indito Blog — SPEC.md

## 1. Concept & Vision

A warm, inviting Colombian family recipe blog celebrating the cooking of Carlos's mother. The aesthetic blends **Latin American warmth** with **modern editorial food photography** sensibilities — think cozy kitchen vibes translated to the web. No corporate sterility, no Instagram excess. Real food, real family, beautifully presented.

**Two clear sections**: *Recetas de Mamá* (heirloom recipes, warm badge treatment) and *Recetas* (the rest). No "Acerca de" or "Contacto" — the food speaks.

---

## 2. Design Language

### Aesthetic Direction
Warm editorial food blog — inspired by Latin American kitchens. Clean but not cold. Generous whitespace, beautiful typography, photography-forward.

### Color Palette
```
--cream:        #FAF7F2   (page background)
--white:        #FFFFFF   (card surfaces)
--terracotta:   #C4613A   (primary accent — badges, links, hover)
--terracotta-dark: #A84E2B (hover states)
--sage:         #6B7C5C   (secondary accent, tags)
--charcoal:     #2D2926   (primary text)
--warm-gray:    #7A6F68   (secondary text, metadata)
--border:       #E8E0D8   (dividers, card borders)
--mama-accent:  #D4A853   (Receta de Mamá gold badge)
```

### Typography
- **Display**: `Playfair Display` (Google Fonts) — serif, elegant, warm
- **Body**: `DM Sans` (Google Fonts) — clean, modern, readable
- **Accent/Metadata**: `DM Mono` — for time/servings numbers, tags
- Scale: 14px base, 1.7 line-height for body, tighter for headings

### Spatial System
- Container max-width: 1200px
- Card grid: 3 columns desktop, 2 tablet, 1 mobile
- Section padding: 80px vertical
- Card padding: 24px
- Border-radius: 12px (cards), 8px (buttons), 24px (badges)

### Motion Philosophy
- Page load: staggered fade-up for cards (opacity 0→1, translateY 20px→0, 400ms ease-out, 80ms stagger)
- Hover: subtle lift on cards (translateY -4px, shadow increase, 200ms)
- Smooth scrolling throughout
- Badge pulse on "Receta de Mamá" — subtle glow animation

### Visual Assets
- Food photography: `https://images.unsplash.com/photo-[id]?w=800&q=80` placeholders
- Icons: inline SVG (clock, users, chef-hat, tag)
- Decorative: subtle grain texture overlay on hero

---

## 3. Layout & Structure

### Home Page
```
[Sticky Navigation Bar]
  Logo: "Indito" (wordmark in Playfair Display)
  Links: Recetas de Mamá | Recetas

[Hero Section]
  Large typography: "Recetas de Mamá" or "Bienvenidos"
  Subtitle: short tagline
  Background: warm gradient overlay on food image

[Recent Recipes — 3 cards]

[Section Divider]

[Recetas de Mamá Section]
  Section title + description
  3-column card grid
  "Ver todas →" link

[Section Divider]

[Recetas Section]
  Section title + description
  3-column card grid
  "Ver todas →" link

[Footer]
  Simple, minimal — copyright only
```

### Recipe Page
```
[Navigation Bar — same as home]

[Hero Section]
  Full-width image with overlay
  Recipe name + badge (if mama)
  Category breadcrumb

[Recipe Metadata Bar]
  Prep time | Cook time | Servings | Difficulty

[Content — 2 column on desktop]
  Left (sticky on scroll):
    - Ingredient list grouped by section (Para X / Para Y)
    - Tags
  Right:
    - Numbered step-by-step instructions
    - Tips (if any)

[Footer]
```

### Responsive Strategy
- Mobile-first CSS
- Breakpoints: 768px (tablet), 1024px (desktop)
- Navigation collapses to hamburger on mobile
- Single column layout on mobile

---

## 4. Features & Interactions

### Navigation
- Sticky on scroll with subtle shadow
- Active section highlight
- Mobile: hamburger menu slides in from right

### Recipe Cards
- Image (16:9 aspect ratio, object-fit cover)
- Category tag (top-left overlay)
- "Receta de Mamá" badge if applicable (gold, top-right)
- Recipe name (Playfair Display)
- Short description (2 lines, truncated)
- Metadata row: time + servings
- Hover: lift + shadow

### Recipe Page
- Sticky ingredient sidebar on desktop
- Step numbers in large terracotta circles
- Ingredient check-off (localStorage persistence)
- Smooth scroll to sections

### Tags
- Pill-shaped, sage green background
- Click filters (future-proof, for now just visual)

---

## 5. Component Inventory

### NavBar
- States: default (transparent-ish), scrolled (white + shadow), mobile-open
- Logo: Playfair Display, 24px
- Links: DM Sans medium, 14px, uppercase letter-spacing

### RecipeCard
- Default: white bg, subtle border, rounded-12
- Hover: translateY(-4px), deeper shadow
- Badge: gold background, dark text, rounded-24, small cap text

### MetaItem
- Icon (inline SVG) + value + label
- DM Mono for numbers

### IngredientGroup
- Section heading (Para X) in Playfair italic
- Bullet list with custom terracotta bullets

### Step
- Large step number (terracotta circle)
- Step text
- Optional tip callout box

### Badge ("Receta de Mamá")
- Gold background, charcoal text
- Small caps, DM Sans bold
- Subtle box-shadow glow
- Positioned top-right of hero

### Tag
- Pill shape, sage/10 background, sage text
- 12px DM Sans

---

## 6. Technical Approach

### Stack
- Pure HTML5 + CSS3 + Vanilla JS
- No build step, no frameworks
- Google Fonts via CDN
- CSS custom properties for theming
- CSS Grid + Flexbox for layout

### File Structure
```
/Indito-blog/
  index.html
  css/
    style.css
  js/
    main.js
  recipes/
    arepas-rellenas.html
    ajiaco.html
    natilla.html
    ...
  data/
    recipes.json
```

### recipes.json Schema
```json
{
  "mama_recipes": [
    {
      "slug": "arepas-rellenas",
      "name": "Arepas Rellenas",
      "description": "...",
      "category": "platos_fuertes",
      "prepTime": "20 min",
      "cookTime": "30 min",
      "servings": 4,
      "difficulty": "Fácil",
      "image": "https://...",
      "tags": ["colombiano", "maíz"],
      "isMamaRecipe": true,
      "ingredients": [
        { "section": "Para la masa", "items": [...] },
        { "section": "Para el relleno", "items": [...] }
      ],
      "steps": ["...", "..."],
      "tips": "..."
    }
  ],
  "other_recipes": [...]
}
```

### JS Functionality
- Ingredient checkbox with localStorage
- Mobile nav toggle
- Card stagger animation on load
- Smooth scroll for anchor links
