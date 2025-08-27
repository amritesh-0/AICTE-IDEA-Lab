# React Component Enhancement Prompts

## Overview
Create enhanced versions of the following React components with modern UI while preserving all content. Use TypeScript, Tailwind CSS, Framer Motion for animations, and Lucide React for icons.

## Component 1: App Component Enhancement

**File:** `src/App.tsx`

**Requirements:**
- Modern responsive navigation with hamburger menu for mobile
- Smooth sidebar transitions with Framer Motion
- Carousel with autoplay and manual controls
- Alert banner with dismiss functionality
- Professional color scheme (blue/teal gradient)
- Mobile-first responsive design

**Key Features to Implement:**
- Collapsible sidebar with smooth animations
- Sticky navigation bar
- Image carousel with indicators and controls
- Alert system with auto-dismiss option
- Route-based sidebar content

**Tech Stack:** React 18, TypeScript, Tailwind CSS, Framer Motion, React Router DOM

---

## Component 2: AboutUsPage Enhancement

**File:** `src/pages/AboutUsPage.tsx`

**Requirements:**
- Modern hero section with gradient background
- Animated section transitions
- Professional leadership section with circular profile images
- Card-based layout for key highlights
- Smooth scrolling navigation
- Responsive grid system

**Content Sections:**
- Hero section with mission statement
- Vision and mission cards
- Objectives list with icons
- Key highlights in grid layout
- Leadership message with profile image
- Benefits section (students & staff)
- Leadership team listing
- AICTE IDEA Lab team
- Student team members

**Design Elements:**
- Gradient backgrounds
- Rounded cards with shadows
- Hover effects and animations
- Professional typography
- Icon integration

---

## Component 3: StudentsAndFacultiesPage Enhancement

**File:** `src/pages/StudentsAndFacultiesPage.tsx`

**Requirements:**
- Tab-based filtering (All/Faculty/Students)
- Expandable faculty cards with detailed information
- Student portfolio cards with hover effects
- Mentorship programs section
- Professional faculty profiles with contact info
- Achievement badges and awards

**Features:**
- Filterable content by category
- Expandable/collapsible faculty details
- Student project showcases
- Mentorship program cards
- Call-to-action sections
- Testimonial blocks

**Design:**
- Modern card layouts
- Gradient backgrounds
- Smooth animations
- Professional image handling
- Responsive grid system

---

## Component 4: FacilitiesPage Enhancement

**File:** `src/pages/FacilitiesPage.tsx`

**Requirements:**
- Modern facility showcase
- Equipment and resource listings
- Multi-purpose space descriptions
- Access guidelines section
- Image gallery integration
- Professional infrastructure presentation

**Sections:**
- Facility overview hero
- Infrastructure highlights
- Available resources grid
- Experimental capabilities
- Multi-purpose spaces
- Labs & equipment details
- Technology tools listing
- Innovation spaces
- Access guidelines
- Gallery placeholder

**Design Elements:**
- Professional card layouts
- Icon integration
- Gradient sections
- Responsive image grids
- Clean typography

---

## Component 5: Sidebar Components Enhancement

**Files:** 
- `src/components/sidebars/AboutSidebar.tsx`
- `src/components/sidebars/FacilitiesSidebar.tsx`
- `src/components/sidebars/StudentsSidebar.tsx`

**Requirements:**
- Collapsible sidebar functionality
- Smooth expand/collapse animations
- Context-aware navigation
- Professional styling
- Mobile-responsive design

**Features:**
- Toggle button with hamburger icon
- Smooth width transitions
- Section-based navigation
- Active state indicators
- Responsive behavior

---

## Component 6: Footer Enhancement

**File:** `src/components/Footer.tsx`

**Requirements:**
- Modern footer design
- Contact information
- Social media links
- Quick navigation
- Copyright information
- Responsive layout

**Sections:**
- Logo and description
- Quick links
- Contact details
- Social media icons
- Copyright notice

---

## Image Configuration

**File:** `src/config/images.ts`

**Requirements:**
- Centralized image path management
- Local image references
- External image fallbacks
- Type-safe image configuration

**Image Categories:**
- Logos (AICTE, MUJ)
- Faculty profile images
- Carousel images
- Student placeholder images
- Facility images

---

## Global Styling

**File:** `src/index.css`

**Requirements:**
- Tailwind CSS integration
- Custom color palette
- Typography settings
- Animation classes
- Responsive breakpoints

---

## Package Dependencies

**Required Packages:**
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.0",
    "framer-motion": "^10.0.0",
    "lucide-react": "^0.263.0",
    "tailwindcss": "^3.2.0"
  }
}
```

## Implementation Guidelines

1. **TypeScript**: Use strict typing with interfaces for props and state
2. **Tailwind CSS**: Utilize utility classes for responsive design
3. **Framer Motion**: Add smooth animations and transitions
4. **Lucide React**: Use modern icons throughout the interface
5. **Responsive Design**: Mobile-first approach with breakpoints
6. **Accessibility**: Ensure WCAG compliance with proper ARIA labels
7. **Performance**: Optimize images and implement lazy loading
8. **Code Quality**: Follow React best practices and clean code principles

All components should maintain the original content while enhancing the visual design and user experience with modern web development practices.
