# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

DevForge is an AI-powered Next.js application that converts UI screenshots into production-ready React components. Users upload a design screenshot, which is processed by Google's Gemini AI to generate TypeScript + Tailwind CSS React components. The application features a professional minimalist design with a focus on developer experience.

## Development Commands

### Start Development Server
```bash
npm run dev
# or
pnpm dev
```
Access at http://localhost:3000

### Build & Production
```bash
npm run build    # Build for production
npm start        # Run production server
```

### Linting
```bash
npm run lint     # Run ESLint
```

### Note on Testing
This project currently has no test framework configured. There are no test scripts in package.json.

## Architecture

### Tech Stack
- **Framework**: Next.js 16 (App Router)
- **React**: v19 with React Compiler enabled (next.config.ts)
- **Styling**: Tailwind CSS 4 + shadcn/ui (New York style)
- **AI**: Google Generative AI (@google/generative-ai) with Gemini 2.5 Flash
- **Image Processing**: Sharp (resize and optimize uploads)
- **Code Preview**: @uiw/react-code-preview for live rendering
- **File Upload**: react-dropzone
- **Icons**: lucide-react
- **Notifications**: sonner

### Project Structure
```
src/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with Header + fonts
│   ├── page.tsx             # Home page with upload
│   ├── globals.css          # Tailwind + CSS variables
│   ├── generate/            # API route for AI generation
│   │   └── route.ts
│   └── preview/             # Preview generated code
│       ├── page.tsx         # Suspense wrapper
│       └── PreviewContent.tsx
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── UploadZone.tsx       # Image upload with drag-n-drop
│   └── ui/                  # shadcn/ui components
│       ├── button.tsx
│       └── sonner.tsx
└── lib/
    └── utils.ts             # cn() utility for Tailwind
```

### Key Architectural Patterns

#### App Router & File Conventions
- Uses Next.js 16 App Router (not Pages Router)
- Client components marked with `'use client'` (UploadZone, PreviewContent)
- Dynamic routes use `export const dynamic = 'force-dynamic'`
- API routes are in `app/*/route.ts` format

#### Code Generation Flow
1. User uploads image via `UploadZone.tsx` (react-dropzone)
2. Image sent to `/generate` API route as FormData
3. Sharp optimizes image (max 1024x1024, JPEG quality 90)
4. Gemini 2.5 Flash processes with vision + system prompt
5. Generated code stripped of markdown backticks
6. Code base64-encoded and passed to `/preview` via URL param
7. `PreviewContent.tsx` decodes and renders with live preview + syntax highlighting

#### Design System
The app follows a **professional minimalist** aesthetic:
- **Colors**: Primarily slate-900 (dark) on white backgrounds
- **Borders**: Subtle slate-200 borders, no heavy shadows
- **Typography**: Inter (body) + JetBrains Mono (code)
- **Components**: Clean, functional styling with subtle hover states
- **Spacing**: Consistent padding (p-6 sections, py-20 for large sections)

Key CSS patterns from globals.css:
- Uses CSS variables with OKLCH color space
- Dark mode support via Tailwind's `dark:` classes
- React Compiler enabled for automatic memoization

#### Import Paths
TypeScript path alias configured: `@/*` → `./src/*`
Example: `import Header from '@/components/Header'`

## Environment Variables

Required in `.env.local`:
```
GEMINI_API_KEY=your_key_here
```

**Security Note**: The .env.local file contains an actual API key. When modifying code that touches the API route, never log or expose this key. The key is only accessed server-side in `src/app/generate/route.ts`.

## Component Guidelines

### When Creating New Components
1. Follow shadcn/ui conventions (use `cn()` for className merging)
2. Match existing design system (slate colors, rounded-xl, subtle borders)
3. Use Tailwind utility classes exclusively (no CSS modules)
4. Include TypeScript types for all props
5. Mark as client component (`'use client'`) only if using hooks or browser APIs

### shadcn/ui Integration
- Config in `components.json` (New York style, neutral base, CSS variables)
- Add components via: `npx shadcn@latest add <component>`
- Components go in `src/components/ui/`

### Styling Conventions
- **Buttons**: `bg-slate-900 hover:bg-slate-800 text-white` for primary
- **Cards**: `border border-slate-200 rounded-xl p-6` (no shadows)
- **Text**: `text-slate-900` (primary), `text-slate-600` (secondary)
- **Spacing**: Prefer `gap-*` for flex/grid, `space-y-*` for stacked elements
- **Transitions**: Keep subtle (`transition-colors duration-200`)

## API Route Implementation

The `/generate` route (src/app/generate/route.ts) follows this pattern:
1. Validates `GEMINI_API_KEY` environment variable
2. Extracts image from FormData
3. Uses Sharp to optimize image (resize + JPEG compression)
4. Converts to base64 for Gemini API
5. Sends system prompt + image to `gemini-2.5-flash` model
6. Cleans output (removes markdown code fences)
7. Returns JSON with `{ code: string }` or `{ error: string }`

**Important**: The system prompt in route.ts specifies strict output rules (pure code, no explanations). When modifying generation logic, preserve these constraints.

## Known Patterns & Conventions

### Image Upload
`UploadZone` uses react-dropzone with:
- Accepts: `image/*` (png, jpg, jpeg, webp)
- Max files: 1
- Creates preview URL with `URL.createObjectURL()`
- Disabled during loading state

### Code Preview
`PreviewContent` transforms generated code for safe rendering:
- Strips original imports/exports
- Wraps in React import + default export
- Handles fallback if component name varies (GeneratedComponent, App, or generic)
- Uses dynamic import for @uiw/react-code-preview (SSR disabled)

### Toast Notifications
Uses Sonner with custom styling (dark theme in layout.tsx):
- `toast.loading()` - persistent until dismissed
- `toast.success()` / `toast.error()` - auto-dismiss
- Always call `toast.dismiss()` before showing new toast after loading

## Common Modification Scenarios

### Adding a New Page
1. Create folder in `src/app/` (e.g., `src/app/about/`)
2. Add `page.tsx` with default export
3. Update Header.tsx navigation if needed

### Modifying AI Generation
Edit `src/app/generate/route.ts`:
- Change `SYSTEM_PROMPT` to alter output style
- Adjust Sharp parameters for different image processing
- Switch model by changing `'gemini-2.5-flash'` string

### Customizing Design System
Edit `src/app/globals.css` CSS variables:
- Light mode: `@layer base` section
- Dark mode: `.dark` section
- Uses OKLCH color format

### Adding shadcn/ui Components
```bash
npx shadcn@latest add [component-name]
```
Will auto-add to `src/components/ui/` with correct config.

## Documentation Files

This repository contains extensive design documentation (created during UI redesign):
- `DOCUMENTATION_INDEX.md` - Documentation overview
- `REDESIGN_README.md` - Redesign summary and features
- `IMPLEMENTATION_GUIDE.md` - Technical implementation details
- `DESIGN_QUICK_REFERENCE.md` - Quick design reference
- `VISUAL_SUMMARY.md` - Visual before/after comparison

These are **reference only** and not part of the application runtime.

## Performance Notes

- React 19 Compiler enabled (automatic memoization)
- Code preview uses dynamic imports (client-side only)
- Sharp processing keeps images under 1024px
- Tailwind CSS purges unused styles in production
- No external API calls from client (all AI logic server-side)

## Troubleshooting

### "API key missing" error
Check `.env.local` has `GEMINI_API_KEY` set.

### Preview page shows "No code found"
Verify code parameter in URL is base64-encoded properly in UploadZone.

### Build fails with Sharp errors
Sharp is a native module. Run `npm install` or `pnpm install` to rebuild binaries for your platform.

### TypeScript errors in imported components
Check `tsconfig.json` paths are correct (`@/*` → `./src/*`).
