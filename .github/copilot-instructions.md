# Copilot Instructions for EuroUK Project

## Project Overview
**EuroUK** is a Next.js 16.1.6 application using the App Router (not Pages Router). It's a modern React 19 project with TypeScript strict mode, Tailwind CSS 4, and React Compiler enabled for performance optimization.

## Stack & Key Technologies
- **Framework**: Next.js 16.1.6 (App Router)
- **Runtime**: React 19.2.3 with React Compiler enabled
- **Styling**: Tailwind CSS 4 with `@tailwindcss/postcss`
- **Language**: TypeScript 5 with strict mode (`"strict": true`)
- **Linting**: ESLint 9 with Next.js config
- **Build System**: Next.js native (no custom Webpack config)

## Architecture & Structure

### Directory Layout
```
src/app/              # App Router entry point (not src/pages/)
  layout.tsx          # Root layout with Metadata and font setup
  page.tsx            # Home page component
  globals.css         # Global Tailwind styles and CSS variables
```

The project uses a **minimal App Router structure** with no subdirectories, API routes, or middleware yet configured.

### Root Layout Pattern
- `layout.tsx` exports `Metadata` type from `next`
- Uses `RootLayout` wrapper component receiving `children` as props
- Fonts (Geist sans and mono) imported from `next/font/google` and applied via CSS variables
- Root layout sets HTML lang, body classes with font variables and antialiased

## Developer Workflows

### Local Development
```bash
npm run dev      # Start dev server on http://localhost:3000 (hot reload enabled)
npm run build    # Create optimized production build
npm start        # Run production build locally
npm run lint     # Run ESLint check
```

**Key behavior**: Next.js dev server auto-reloads on file changes in `src/app/`. Edit `src/app/page.tsx` to see changes immediately.

### Linting & Code Quality
- ESLint config extends `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`
- Config location: `eslint.config.mjs` (flat config format, ESLint 9+)
- Ignores `.next/`, `out/`, `build/`, `next-env.d.ts`
- **Run linting before committing** to catch Next.js and TypeScript issues early

## Code Conventions & Patterns

### Component Structure
- All components are **Server Components by default** (App Router)
- Use `'use client'` directive only for client-side interactivity (forms, event handlers, hooks)
- Page components (`page.tsx`) export default functional component
- Layout components use Readonly types for children: `Readonly<{ children: React.ReactNode }>`

### TypeScript & Strict Mode
- Strict mode enabled: `"strict": true` in `tsconfig.json`
- All component props must have explicit types
- Path alias `@/*` maps to `src/*` for clean imports: `import { ... } from '@/components/...'`

### Styling with Tailwind CSS 4
- Import global styles in root layout: `import "./globals.css"`
- CSS variables for theming supported in `globals.css`
- Use CSS class names directly in JSX (e.g., `className="flex min-h-screen items-center"`)
- Dark mode classes (e.g., `dark:bg-black`, `dark:text-zinc-50`) available via Tailwind config
- Font variables applied via `className` on body element

### Image & Asset Optimization
- Use `next/image` Image component (not `<img>`) for automatic optimization
- Set `priority` prop for above-fold images
- Provide `width`, `height`, `alt`, `src` (required properties)
- SVG assets stored in `public/` directory
- Example in `page.tsx`: `<Image src="/next.svg" alt="Next.js logo" width={100} height={20} priority />`

### React Compiler Integration
- **Enabled by default** in `next.config.ts`: `reactCompiler: true`
- Compiler automatically optimizes component memoization
- No manual `React.memo()` needed for most cases
- Compiler handles dependency tracking

## Integration Points & Dependencies

### External Resources
- Google Fonts (Geist): imported via `next/font/google`
- Vercel deployment templates referenced in starter page
- No API routes or external service integrations yet (starter template)

### Environment & Configuration
- `next.config.ts`: TypeScript config file for Next.js customization
- `tsconfig.json`: Includes Next.js plugin (`"name": "next"`)
- `postcss.config.mjs`: Tailwind CSS 4 integration
- No `.env` or environment variables configured in starter template

## Testing & Debugging
- **No test framework configured** in this starter (add Jest/Vitest if needed)
- ESLint provides development-time error checking
- Next.js dev server provides fast feedback loop
- TypeScript compiler catches type errors at build time

## Common Tasks for AI Agents

### Adding a New Page
1. Create new file in `src/app/` directory (e.g., `src/app/about/page.tsx`)
2. Export default component function
3. Add `Metadata` if SEO needed
4. Use Tailwind classes for styling

### Creating a Reusable Component
1. Create directory `src/components/` (doesn't exist yet, create as needed)
2. Add component file with `'use client'` if it uses state/events
3. Export component as named export
4. Use in `page.tsx` or layouts

### Modifying Styles
- Global styles: edit `src/app/globals.css`
- Component styles: use Tailwind `className` prop
- CSS variables defined in `globals.css` can be referenced in Tailwind

## Project-Specific Notes
- This is a **fresh Next.js starter template** with minimal scaffold
- No custom middleware, API routes, or database connections
- Focus on frontend-first development with Tailwind CSS
- React Compiler handles optimization automatically—write React naturally
- Vercel deployment is the intended platform (Next.js native support)

## References
- [Next.js App Router Docs](https://nextjs.org/docs/app)
- [Tailwind CSS 4 Docs](https://tailwindcss.com/docs)
- [React 19 Features](https://react.dev/reference/release-notes/19)
- [TypeScript in Next.js](https://nextjs.org/docs/app/building-your-application/configuring/typescript)
