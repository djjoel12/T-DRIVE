# Design Guidelines - SaaS Bus Reservation Platform (MVP)

## Design Approach

**Selected Approach:** Modern B2B SaaS Design System
**Inspiration:** Linear's clean interface + Stripe Dashboard's clarity + Notion's intuitive layouts

**Rationale:** This is a utility-focused business tool for transport companies requiring efficiency, clear data presentation, and professional credibility. The design should prioritize usability over visual flair while maintaining modern aesthetics.

## Typography

**Font Selection:** 
- Primary: Inter (via Google Fonts CDN)
- Headings: Inter Semi-Bold (600) and Bold (700)
- Body: Inter Regular (400) and Medium (500)
- Accent: Inter Tight for numbers/stats

**Hierarchy:**
- Page titles: text-3xl/text-4xl font-semibold
- Section headings: text-xl/text-2xl font-semibold
- Card titles: text-lg font-medium
- Body text: text-base
- Secondary text: text-sm
- Captions/labels: text-xs font-medium uppercase tracking-wide

## Layout System

**Spacing Primitives:** Tailwind units of 3, 4, 6, 8, 12, 16
- Component padding: p-4, p-6, p-8
- Section spacing: space-y-6, space-y-8
- Grid gaps: gap-4, gap-6
- Margins: m-3, m-4, m-6, m-8

**Container Strategy:**
- Dashboard shell: Full viewport height with sidebar
- Content areas: max-w-7xl mx-auto with px-6 lg:px-8
- Cards: Consistent p-6 internal padding
- Form containers: max-w-2xl for focused input areas

**Grid Patterns:**
- Stats/metrics: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Content cards: grid-cols-1 lg:grid-cols-2 xl:grid-cols-3
- Always single column on mobile

## Component Library

### Authentication Pages
**Layout:** Centered card approach (max-w-md mx-auto)
- Logo at top
- Form card with subtle border and shadow
- Clean white background with minimal decoration
- "Créer un compte" / "Se connecter" toggle links
- Social proof element: "Rejoignez 50+ compagnies de transport"

### Dashboard Shell
**Structure:**
- Fixed sidebar (w-64) with company logo, navigation, profile section
- Main content area with header bar containing page title, search, notifications, user menu
- Breadcrumb navigation below header
- Content area with proper scrolling

**Sidebar Navigation:**
- Icon + label format (use Heroicons via CDN)
- Active state: subtle background treatment
- Sections: Tableau de bord, Trajets, Réservations, Clients, Paramètres
- Bottom section: Support, Profil

### Dashboard Overview
**Key Sections:**
1. Welcome header with company name and quick action button
2. Stats grid (4 cards): Réservations aujourd'hui, Revenus du mois, Taux d'occupation, Trajets actifs
3. Recent activity table
4. Quick actions panel

**Stat Cards:**
- Large number display (text-3xl font-bold)
- Label (text-sm)
- Trend indicator with icon
- Minimal decoration, emphasis on data clarity

### Profile Management
**Layout:** Two-column form layout on desktop
- Left: Company logo upload area (square placeholder with upload button)
- Right: Form fields in single column
- Fields: Nom de la compagnie, Email, Téléphone, Adresse, Ville, Description
- Action buttons at bottom: Annuler (secondary), Enregistrer (primary)

### Tables
**Structure:**
- Clean header row with column labels
- Alternating row treatment for readability
- Action buttons/icons right-aligned
- Pagination controls at bottom
- Empty state with icon and helpful message

### Forms
**Pattern:**
- Label above input (text-sm font-medium mb-2)
- Input fields: Full width, h-10/h-11, rounded borders
- Helper text below (text-xs)
- Error states with red accent and icon
- Required field indicators (*)
- Form sections with subtle dividers

### Buttons
**Hierarchy:**
- Primary: Bold, prominent (px-6 py-2.5 rounded-lg font-medium)
- Secondary: Outlined or subtle background
- Tertiary: Text-only with hover state
- Icon buttons: Square, p-2, rounded

### Cards
**Standard Pattern:**
- Subtle border and shadow
- Rounded corners (rounded-lg)
- Internal padding p-6
- Clear title section
- Action area when needed (top-right or bottom)

## Icons
**Library:** Heroicons (via CDN - outline style for nav, solid for emphasis)
**Usage:**
- Navigation: 20px icons
- Stat cards: 24px icons
- Action buttons: 16-20px icons
- Consistent stroke-width across interface

## Images

### Logo Areas:
- Dashboard sidebar: Company logo placeholder (rectangular, 40h)
- Profile page: Square logo upload area (w-32 h-32) with dashed border placeholder
- Auth pages: Platform logo centered at top

### Empty States:
- Illustrations for empty tables/lists (use placeholder comments for custom illustrations)
- Simple, friendly visual indicating "Aucun trajet pour le moment"

**No hero images needed** - This is a functional dashboard application, not a marketing site.

## Accessibility
- All form inputs with associated labels
- Focus states clearly visible on all interactive elements
- Sufficient contrast ratios throughout
- Keyboard navigation support for all actions
- ARIA labels for icon-only buttons

## Animations
**Minimal approach:**
- Smooth transitions on hover states (transition-colors duration-200)
- Fade-in for modals/dropdowns
- No complex scroll animations or page transitions
- Loading spinners for async operations

This design prioritizes clarity, efficiency, and professional appearance suitable for transport company administrators managing their daily operations.