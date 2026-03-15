# sstocode Architecture

## Overview

sstocode is an AI-powered design-to-code tool that converts UI screenshots into React + Tailwind components using Google Gemini.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| UI | React 19 |
| Styling | Tailwind CSS 4 |
| Components | shadcn/ui, Radix UI |
| AI | Google Gemini 2.5 Flash |
| Editor | Monaco Editor |
| Preview | Sandpack |
| Animations | Framer Motion |

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx             # Home (landing + upload)
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles + theme
│   ├── generate/route.ts    # POST: code generation (non-streaming)
│   ├── preview/             # Editor + live preview
│   ├── roadmap/
│   ├── contributing/
│   └── api/
│       ├── generate-stream/route.ts  # Streaming generation
│       └── providers/route.ts
├── components/
│   ├── UploadZone.tsx       # Main upload + generate flow
│   ├── StreamingUploadZone.tsx
│   ├── AIProviderSelector.tsx
│   ├── Editor.tsx           # Monaco code editor
│   ├── LivePreview.tsx      # Sandpack preview
│   ├── ErrorBoundary.tsx
│   └── ui/                  # shadcn components
└── lib/
    ├── ai-providers.ts      # Gemini (non-streaming)
    ├── enhanced-ai-providers.ts  # Gemini streaming
    └── utils.ts
```

## Data Flow

### 1. Upload Flow

```
User drops image → UploadZone (react-dropzone) → Validation (PNG/JPG/WEBP, 10MB)
→ Preview display → User clicks "Generate Code"
```

### 2. Generation Flow

```
FormData (image) → POST /generate → Sharp (resize, sharpen, JPEG)
→ AIManager.generateWithFallback() → Gemini API
→ Code cleaning (markdown removal, imports) → JSON response
→ Redirect to /preview?code=<base64>
```

### 3. Preview Flow

```
URL params (code) → Base64 decode → Editor state
→ Monaco Editor + Sandpack LivePreview
→ Real-time updates on edit → Copy/Export
```

## Key Components

### UploadZone

- Handles file upload via react-dropzone
- Simulates progress during generation
- Redirects to preview with base64-encoded code in URL

### AIManager (ai-providers.ts)

- `generateWithFallback()`: Calls Gemini, cleans response
- Code cleaning: Removes markdown blocks, ensures React import, adds export

### Generate Route

- Receives image via FormData
- Sharp: resize 1200x1200, sharpen, JPEG 95%
- Returns `{ code, provider }`

### PreviewContent

- Decodes code from URL search params
- Split view: Monaco Editor | Sandpack Preview
- Resizable panels via react-resizable-panels

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| GEMINI_API_KEY | Yes | Google AI Studio API key |

## API Routes

| Route | Method | Description |
|-------|--------|-------------|
| /generate | POST | Non-streaming code generation |
| /api/generate-stream | POST | Streaming generation (SSE) |

## Theming

- Dark theme by default (`className="dark"` on html)
- CSS variables in globals.css for light/dark
- shadcn/ui with neutral base color
