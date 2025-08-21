# StryveAhead Landing Page

A modern, pixel-perfect landing page for StryveAhead Advisors specializing in Q-Commerce, E-Commerce, and Modern Trade brand scaling built with Next.js 14, React, TypeScript, and Tailwind CSS.

## Project Foundation - Phase 1 ✅

This phase establishes the core architecture and foundational components for the landing page.

### Features Implemented

- ✅ Next.js 14+ with App Router architecture
- ✅ TypeScript with strict configuration (no implicit any)
- ✅ Tailwind CSS with custom theme tokens
- ✅ shadcn/ui component system (Button, Card, Input, Badge)
- ✅ Typography system with Inter and Poppins fonts
- ✅ Responsive Container component
- ✅ Theme tokens extracted from Figma design
- ✅ Utility functions for class merging
- ✅ ESLint configuration with TypeScript rules

### Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with custom theme
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Inter & Poppins (Google Fonts)

### Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and Tailwind imports
├── components/
│   ├── ui/                 # shadcn/ui components
│   └── container.tsx       # Reusable container component
├── lib/
│   ├── theme.ts           # Design tokens and theme constants
│   └── utils.ts           # Utility functions
├── tailwind.config.js     # Tailwind configuration with custom theme
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

### Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Type checking**:
   ```bash
   npm run type-check
   ```

5. **Linting**:
   ```bash
   npm run lint
   ```

### Design System

The project includes a comprehensive design system with:

- **Colors**: Custom orange gradients and neutral grays
- **Typography**: Responsive font scales with proper line heights
- **Spacing**: Consistent spacing scale matching Figma
- **Shadows**: Soft, medium, and large shadow variants
- **Breakpoints**: Mobile-first responsive design (360px to 1440px+)

### Next Steps

Phase 2 will implement the individual landing page sections:
- Header with navigation
- Hero section with CTA
- Services showcase
- About section
- Statistics display
- Team profiles
- Testimonials
- Contact form
- Footer

### Performance Goals

- Lighthouse Desktop: 95+
- Lighthouse Mobile: 90+
- First Load JS: <130kB gzipped
- WCAG AA accessibility compliance