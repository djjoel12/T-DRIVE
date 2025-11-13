# BusConnect - SaaS Bus Reservation Platform

## Overview

BusConnect is a B2B SaaS platform designed for bus transport companies in Côte d'Ivoire to manage their online ticket reservations. The application provides transport companies with tools to digitalize their operations, manage routes, bookings, and customer relationships through a modern web interface.

The platform follows a modern B2B SaaS design philosophy inspired by Linear, Stripe Dashboard, and Notion, prioritizing clarity, efficiency, and professional credibility for business users.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server, providing fast HMR and optimized production builds
- Wouter for lightweight client-side routing instead of React Router

**UI Component System**
- shadcn/ui components built on Radix UI primitives for accessible, headless components
- Tailwind CSS for utility-first styling with custom design tokens
- Class Variance Authority (CVA) for type-safe component variants
- Component configuration centralized in `components.json` following the "new-york" style

**State Management**
- TanStack Query (React Query) for server state management, caching, and API synchronization
- React Hook Form with Zod resolver for form state and validation
- Local component state with React hooks for UI-specific state

**Design System**
- Custom Tailwind configuration with semantic color tokens using CSS variables
- HSL color system for flexible theming (light/dark mode support)
- Inter font family via Google Fonts CDN
- Standardized spacing scale (3, 4, 6, 8, 12, 16) for consistent layouts
- Responsive grid patterns optimized for mobile-first development

### Backend Architecture

**Server Framework**
- Express.js server with TypeScript
- ESM module system for modern JavaScript features
- Session-based architecture with secure cookie handling

**API Design**
- RESTful API endpoints under `/api` prefix
- Authentication middleware protecting all business logic routes
- Standardized error handling and logging middleware
- JSON request/response format with proper content-type headers

**Authentication & Authorization**
- Replit Auth integration using OpenID Connect (OIDC)
- Passport.js strategy for authentication flow
- Session management with connect-pg-simple storing sessions in PostgreSQL
- User data stored in `users` table (mandatory for Replit Auth)
- HTTP-only secure cookies with 1-week TTL

**Business Logic Layer**
- Storage abstraction pattern via `IStorage` interface
- `DatabaseStorage` implementation for data access operations
- Separation of concerns between route handlers and data access
- Company profile management with user-company relationship (one-to-one)

### Data Storage

**Database**
- PostgreSQL as the primary relational database
- Neon serverless PostgreSQL for cloud deployment
- WebSocket connection pooling for serverless environments

**ORM & Schema Management**
- Drizzle ORM for type-safe database operations
- Schema-first approach with TypeScript definitions in `shared/schema.ts`
- Drizzle Kit for migrations and schema push operations
- Drizzle-Zod integration for runtime validation from database schema

**Data Model**
- `sessions` table: Mandatory for Replit Auth session storage
- `users` table: Mandatory for Replit Auth user profiles (id, email, name, profile image)
- `companies` table: Transport company profiles linked to users via foreign key with cascade deletion

**Validation**
- Zod schemas generated from Drizzle table definitions using `createInsertSchema`
- Shared validation logic between frontend and backend via `shared/` directory
- Type inference from schemas ensures consistency across the stack

### External Dependencies

**Authentication Service**
- Replit Auth (OpenID Connect provider)
  - Issuer URL: `https://replit.com/oidc` or configured via `ISSUER_URL`
  - Client ID: Automatically configured via `REPL_ID` environment variable
  - Handles user authentication, profile data, and token refresh

**Database Service**
- Neon Serverless PostgreSQL
  - Connection via `DATABASE_URL` environment variable
  - WebSocket-based connections for serverless compatibility
  - Managed database with automatic backups and scaling

**Development Tools**
- Replit-specific Vite plugins for development experience:
  - `@replit/vite-plugin-runtime-error-modal`: Runtime error overlay
  - `@replit/vite-plugin-cartographer`: Development navigation
  - `@replit/vite-plugin-dev-banner`: Development environment indicator

**Third-Party Libraries**
- Google Fonts CDN for Inter font family
- Radix UI primitives for accessible component foundations
- date-fns for date manipulation and formatting
- Lucide React for icon system
- cmdk for command palette functionality

**Environment Variables Required**
- `DATABASE_URL`: PostgreSQL connection string (mandatory)
- `SESSION_SECRET`: Secret for session encryption (mandatory)
- `REPL_ID`: Replit environment identifier for OIDC (mandatory in production)
- `ISSUER_URL`: OIDC issuer URL (optional, defaults to Replit)
- `NODE_ENV`: Environment mode (development/production)