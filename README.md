# SermonSlide

AI sermon → visual-story presentation platform

## Overview

SermonSlide transforms sermon content into engaging visual presentations using AI.

## Getting Started

### Prerequisites

- Node.js 20+ 
- pnpm 9.12.3+

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The web app will be available at http://localhost:3000

### Development Commands

```bash
# Run development server
pnpm dev

# Run linter
pnpm lint

# Run type checking
pnpm typecheck

# Build for production
pnpm build

# Clean all build artifacts and node_modules
pnpm clean
```

## Project Structure

This is a monorepo using pnpm workspaces and Turborepo:

```
apps/
  web/                    # Next.js web application
packages/
  slide-schema/           # Slide data schema definitions (stub)
  design-system/          # Shared design system (stub)
  rendering-engine/       # Slide rendering engine (stub)
  tsconfig/               # Shared TypeScript configurations
  eslint-config/          # Shared ESLint configuration
```

## CI/CD

GitHub Actions runs on every push and PR to `main`:
- Linting
- Type checking  
- Build verification

## Environment Variables

Copy `.env.example` to `.env.local` in `apps/web/` and fill in the values:

```bash
cp .env.example apps/web/.env.local
```

See `.env.example` for required environment variables (Supabase configuration for future use).

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: pnpm
- **Build System**: Turborepo
- **CI**: GitHub Actions

## License

Private repository
