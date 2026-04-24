# NexusUI - Complete Codebase Understanding Guide

## 🎯 Project Overview

**NexusUI** is an AI-powered design-to-code generator that transforms UI screenshots into production-ready React components. The application uses Google's Gemini AI to analyze uploaded images and generate TypeScript React components with Tailwind CSS styling.

## 🏗️ Architecture Overview

### Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **AI Provider**: Google Gemini 2.5 Flash
- **UI Components**: Radix UI + Custom Components
- **Code Editor**: Monaco Editor
- **Animations**: Framer Motion
- **File Upload**: React Dropzone

### Project Structure
```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── preview/           # Code preview page
│   ├── generate/          # Generation API endpoint
│   ├── contributing/      # Contributing page
│   ├── roadmap/          # Roadmap page
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── UploadZone.tsx    # Main upload interface
│   ├── Header.tsx        # Navigation header
│   ├── Editor.tsx        # Monaco code editor
│   └── LivePreview.tsx   # Component preview
└── lib/                  # Utility libraries
    ├── ai-providers.ts   # AI integration logic
    └── utils.ts          # Helper functions
```

## 🔍 Core Components Deep Dive

### 1. UploadZone Component (`/src/components/UploadZone.tsx`)

**Purpose**: Main interface for uploading design screenshots and triggering code generation.

**Key Features**:
- Drag & drop file upload using `react-dropzone`
- Image preview with validation (PNG, JPG, WEBP, max 10MB)
- Progress tracking during generation
- Error handling and user feedback
- Animated UI transitions with Framer Motion

**Core Logic Flow**:
```typescript
1. User drops/selects image → onDrop callback
2. File validation → setPreviewUrl for display
3. User clicks "Generate Code" → handleGenerate
4. FormData sent to /generate API → Progress simulation
5. Success → Redirect to /preview with encoded code
6. Error → Display error message
```

**Key State Management**:
- `previewUrl`: Image preview URL
- `isLoading`: Generation status
- `progress`: Progress percentage (0-100)
- `uploadedFile`: Selected file object
- `error`: Error messages

### 2. AI Provider System (`/src/lib/ai-providers.ts`)

**Purpose**: Manages AI integration with Google Gemini for code generation.

**Architecture**:
```typescript
interface AIProvider {
  name: string;
  id: string;
  generate: (imageBuffer: Buffer, prompt: string) => Promise<string>;
  isAvailable: () => boolean;
}
```

**GeminiProvider Class**:
- Uses `@google/generative-ai` SDK
- Model: `gemini-2.5-flash`
- Configuration: Temperature 0.7, Max tokens 8192
- Input: Base64 encoded image + enhanced prompt

**AIManager Class**:
- Manages provider fallback (currently only Gemini)
- Code cleaning and validation
- Ensures proper React component structure
- Adds missing imports and exports

**Code Generation Process**:
1. Image → Base64 encoding
2. Enhanced prompt construction
3. Gemini API call with image + prompt
4. Response cleaning (remove markdown, comments)
5. Validation (minimum length, React structure)
6. Export formatting

### 3. Generation API (`/src/app/generate/route.ts`)

**Purpose**: Server-side API endpoint for processing images and generating code.

**Process Flow**:
```typescript
1. Receive FormData with image
2. Image optimization with Sharp:
   - Resize to max 1200x1200
   - Sharpen for better AI analysis
   - Convert to high-quality JPEG
3. Call AIManager.generateWithFallback()
4. Clean and format response
5. Return JSON with code + provider info
```

**Image Processing (Sharp)**:
- Resize with aspect ratio preservation
- Background fill for transparency
- Quality optimization for AI analysis
- Progressive JPEG encoding

### 4. Preview System (`/src/app/preview/`)

**Components**:
- `page.tsx`: Route handler with search params
- `PreviewContent.tsx`: Main preview interface

**Features**:
- Split-pane layout (Editor + Preview)
- Real-time code editing with Monaco Editor
- Live component preview with error boundaries
- Code copying functionality
- Resizable panels

**Code Flow**:
1. Receive base64 encoded code from URL params
2. Decode and set in editor
3. Real-time preview updates on code changes
4. Error handling for invalid React code

### 5. Code Editor (`/src/components/Editor.tsx`)

**Technology**: Monaco Editor (VS Code editor)

**Configuration**:
- Custom dark theme matching app design
- TypeScript language support
- Font: JetBrains Mono with ligatures
- Auto-formatting and syntax highlighting
- Disabled minimap for cleaner interface

**Features**:
- Real-time syntax validation
- Auto-completion for React/TypeScript
- Smooth scrolling and cursor animations
- Custom scrollbar styling

### 6. Live Preview (`/src/components/LivePreview.tsx`)

**Purpose**: Renders generated React components in real-time.

**Implementation**:
- Dynamic component compilation
- Error boundary for invalid code
- Sandboxed execution environment
- Responsive preview container

## 🔧 Configuration Files

### 1. Package.json Dependencies

**Core Dependencies**:
- `next`: Framework (v16.0.7)
- `react`: UI library (v19.2.1)
- `@google/generative-ai`: Gemini AI SDK
- `@monaco-editor/react`: Code editor
- `framer-motion`: Animations
- `react-dropzone`: File uploads
- `sharp`: Image processing

**Development Tools**:
- `typescript`: Type checking
- `tailwindcss`: Styling (v4)
- `eslint`: Code linting
- `babel-plugin-react-compiler`: React optimization

### 2. Next.js Configuration (`next.config.ts`)

```typescript
const nextConfig: NextConfig = {
  reactCompiler: true,    // Enable React Compiler
  turbopack: {           // Use Turbopack for faster builds
    root: __dirname,
  },
};
```

### 3. TypeScript Configuration (`tsconfig.json`)

**Key Settings**:
- Target: ES2017
- Module: ESNext with bundler resolution
- Strict mode enabled
- Path mapping: `@/*` → `./src/*`
- JSX: react-jsx (new transform)

### 4. Tailwind CSS (`globals.css`)

**Features**:
- CSS custom properties for theming
- Dark mode support
- Custom scrollbar styling
- Animation keyframes
- Glass morphism effects
- Focus ring utilities

## 🎨 Styling System

### Design Tokens
```css
:root {
  --background: #0a0a0a;     /* Main background */
  --foreground: #fafafa;     /* Text color */
  --border: #27272a;        /* Border color */
  --muted: #27272a;         /* Muted backgrounds */
}
```

### Component Patterns
- **Glass Effect**: `backdrop-blur-xl bg-black/20`
- **Interactive Elements**: Hover animations with Framer Motion
- **Focus States**: Custom focus rings with `focus-visible`
- **Responsive Design**: Mobile-first approach

## 🔄 Data Flow

### 1. Upload Flow
```
User Upload → UploadZone → File Validation → Preview Display → Generate Button
```

### 2. Generation Flow
```
Generate Click → FormData Creation → /generate API → Image Processing → 
AI Generation → Code Cleaning → Response → Redirect to Preview
```

### 3. Preview Flow
```
URL Params → Base64 Decode → Editor State → Live Preview → 
Real-time Updates → Copy/Export
```

## 🛠️ Key Algorithms

### 1. Code Cleaning Algorithm
```typescript
private cleanCode(code: string): string {
  // Remove markdown code blocks
  code = code.replace(/^```(?:tsx|typescript)?\n?/i, '');
  code = code.replace(/\n?```$/i, '');
  
  // Remove explanatory text
  code = code.replace(/^(?:Here's|This is).*?[:]\s*/im, '');
  
  // Ensure React import
  if (!code.includes('import')) {
    code = "import * as React from 'react';\n\n" + code;
  }
  
  return code;
}
```

### 2. Image Optimization
```typescript
const optimized = await sharp(buffer)
  .resize(1200, 1200, { 
    fit: 'inside', 
    withoutEnlargement: true 
  })
  .sharpen()
  .jpeg({ quality: 95 })
  .toBuffer();
```

### 3. Progress Simulation
```typescript
const progressInterval = setInterval(() => {
  setProgress(prev => prev >= 90 ? 90 : prev + 10);
}, 200);
```

## 🔐 Environment Variables

Required for functionality:
```bash
GEMINI_API_KEY=your_gemini_api_key_here
```

## 🚀 Performance Optimizations

### 1. Image Processing
- Sharp library for efficient image manipulation
- Automatic format conversion to JPEG
- Size optimization for AI processing

### 2. Code Splitting
- Next.js automatic code splitting
- Dynamic imports for heavy components
- Lazy loading for non-critical features

### 3. Caching
- Next.js built-in caching
- Static asset optimization
- API response caching

## 🧪 Testing Strategy

### Areas to Test
1. **File Upload**: Validation, error handling
2. **AI Generation**: Mock API responses
3. **Code Editor**: Syntax validation
4. **Preview**: Component rendering
5. **Error Boundaries**: Graceful failures

### Testing Tools (Recommended)
- Jest for unit tests
- React Testing Library for component tests
- Playwright for E2E tests
- MSW for API mocking

## 🔍 Debugging Guide

### Common Issues
1. **Gemini API Errors**: Check API key and quota
2. **Image Upload Fails**: Verify file size/format
3. **Code Generation Empty**: Check prompt and image quality
4. **Preview Not Loading**: Validate generated React code

### Debug Tools
- Browser DevTools for client-side issues
- Next.js built-in error reporting
- Console logging in AI provider
- Network tab for API debugging

## 📈 Future Enhancements

### Planned Features (from ROADMAP.md)
1. **Multiple AI Providers**: OpenAI, Anthropic support
2. **User Accounts**: Save/manage generations
3. **Advanced Editor**: Syntax highlighting, autocomplete
4. **Collaboration**: Share and fork components
5. **API Access**: Programmatic generation
6. **Mobile App**: React Native version

### Technical Improvements
1. **Real-time Collaboration**: WebSocket integration
2. **Component Library**: Reusable component system
3. **Version Control**: Git-like versioning for components
4. **Performance**: Edge computing for faster generation
5. **Security**: Rate limiting, input sanitization

## 🎓 Learning Path

### To Understand This Codebase:

1. **Start with**: `src/app/page.tsx` (home page)
2. **Follow**: Upload flow in `UploadZone.tsx`
3. **Understand**: AI integration in `ai-providers.ts`
4. **Explore**: API route in `generate/route.ts`
5. **Study**: Preview system in `preview/`
6. **Master**: Editor integration and live preview

### Key Concepts to Learn:
- Next.js App Router patterns
- TypeScript interfaces and generics
- React hooks and state management
- Framer Motion animations
- Tailwind CSS utility classes
- AI API integration patterns
- File upload handling
- Real-time code execution

### Recommended Study Order:
1. React fundamentals and hooks
2. TypeScript basics and interfaces
3. Next.js App Router
4. Tailwind CSS utility-first approach
5. AI API integration
6. Monaco Editor integration
7. Advanced React patterns

This guide provides a complete understanding of your NexusUI project. Use it to study each component systematically and understand how they work together to create the AI-powered design-to-code experience.
