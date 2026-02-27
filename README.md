# Cloudflare Vite React Starter

[cloudflarebutton]

A modern, production-ready React SPA starter template optimized for Cloudflare Workers and Pages. Built with Vite for lightning-fast development, Shadcn UI for beautiful components, and React Router for client-side routing. Includes full error handling, theming, and a robust development workflow.

## ✨ Features

- ⚡ **Ultra-fast development** with Vite HMR and Bun
- 🎨 **Shadcn UI** + Tailwind CSS with custom design tokens
- 📱 **Mobile-first responsive** design with dark mode support
- 🛡️ **Comprehensive error handling** with automatic reporting
- 🔄 **React Router v6** with route-level error boundaries
- 📊 **TanStack Query** for data fetching and caching
- 📱 **Mobile sidebar** + desktop collapsible sidebar
- 🚀 **Cloudflare Workers integration** for API routes
- ✅ **TypeScript + ESLint** with strict type safety
- 🎯 **Production-optimized** with source maps and tree shaking
- 🔍 **Developer tools** like hot reload triggers and cache clearing

## 🛠 Tech Stack

- **Frontend**: React 18, Vite 6, TypeScript 5.8
- **UI**: Shadcn UI, Tailwind CSS 3.4, Lucide Icons, Framer Motion
- **Routing**: React Router 6.30
- **State**: Zustand, TanStack Query 5, Immer
- **Forms**: React Hook Form 7, Zod 4
- **Backend**: Hono 4 (Cloudflare Workers)
- **Tools**: Bun, ESLint 9, Prettier, Cloudflare Vite Plugin

## 🚀 Quick Start

```bash
# Clone the repo
git clone <your-repo-url>
cd <your-repo-name>

# Install dependencies
bun install

# Run development server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) (or your configured port).

## 📚 Development Scripts

```bash
bun run dev      # Start dev server (0.0.0.0:3000)
bun run build    # Build for production
bun run lint     # Lint code
bun run preview  # Preview production build (0.0.0.0:4173)
bun run deploy   # Build + deploy to Cloudflare
bun cf:typegen   # Generate Cloudflare Worker types
```

### Key Development Features

- **Auto-cache clearing**: Changes to `package.json` or `bun.lock` automatically clear ESLint/TypeScript caches
- **Hot reload trigger**: Touch `.reload-trigger` file to force full reload
- **Error reporting**: Client errors automatically POST to `/api/client-errors`
- **Mobile testing**: Responsive sidebar with mobile sheet

### Project Structure

```
src/
├── components/
│   ├── layout/     # Layout components (AppLayout, Sidebar)
│   ├── ui/         # Shadcn UI components
│   └── hooks/      # Custom React hooks
├── lib/            # Utilities (errorReporter, utils)
└── pages/          # Route components (HomePage.tsx)
worker/
├── index.ts        # Hono API server
├── userRoutes.ts   # Your API routes (add here)
└── core-utils.ts   # DO NOT MODIFY
```

## 🧭 Routing

Uses `createBrowserRouter` with automatic route error boundaries. **Do not switch to `BrowserRouter`.**

```tsx
// src/main.tsx
const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <RouteErrorBoundary /> },
  { path: "/dashboard", element: <Dashboard />, errorElement: <RouteErrorBoundary /> },
]);
```

**Navigation**: Use `<Link to="/path">` from `react-router-dom`.

Every route gets `<RouteErrorBoundary />` automatically with full error reporting.

## 🔌 API Routes

Add routes in `worker/userRoutes.ts`:

```ts
// worker/userRoutes.ts
export function userRoutes(app: Hono) {
  app.get('/api/test', (c) => c.json({ success: true }));
  // Your routes here
}
```

**CORS enabled** for `/api/*`. Never override error handlers or CORS.

## 🚀 Deployment

Deploy to Cloudflare Pages/Workers with one command:

```bash
bun run deploy
```

Or use the dashboard:

[cloudflarebutton]

**Configuration**: `wrangler.jsonc` pre-configured for SPA assets + API proxying.

```json
{
  "assets": {
    "not_found_handling": "single-page-application",
    "run_worker_first": ["/api/*"]
  }
}
```

### Production Build

```bash
bun run build    # Creates dist/ folder
bun run preview  # Preview production build
```

## 📱 Usage Examples

### Sidebar Layout

```tsx
// Your page
import { AppLayout } from '@/components/layout/AppLayout'

export function Dashboard() {
  return (
    <AppLayout container>
      <h1>Dashboard</h1>
    </AppLayout>
  )
}
```

### API Call

```tsx
// src/hooks/useApi.ts
import { useQuery } from '@tanstack/react-query'

export function useData() {
  return useQuery({
    queryKey: ['data'],
    queryFn: () => fetch('/api/data').then(res => res.json()),
  })
}
```

### Form with Validation

```tsx
// Using react-hook-form + Zod + Shadcn
<Form {...form}>
  <FormField name="email">
    <FormItem>
      <FormLabel>Email</FormLabel>
      <FormControl>
        <Input placeholder="m@example.com" />
      </FormControl>
      <FormMessage />
    </FormItem>
  </FormField>
</Form>
```

### Theme Toggle

```tsx
import { useTheme } from '@/hooks/use-theme'
// Auto-saves to localStorage, syncs with system preference
```

### Error Boundaries

**Fully automatic**:
- `<ErrorBoundary>` wraps entire app
- `<RouteErrorBoundary>` per-route
- Errors reported to `/api/client-errors`

## 🤝 Contributing

1. Fork + clone repository
2. `bun install`
3. `bun run dev`
4. Create feature branch: `git checkout -b feature/xyz`
5. Commit changes: `git commit -m "feat: add xyz"`
6. Push: `git push origin feature/xyz`
7. Open Pull Request

Follow existing code style (ESLint enforced).

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🙋 Support

- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [Vite Docs](https://vite.dev/)
- [Shadcn UI Docs](https://ui.shadcn.com/)

Built with ❤️ for Cloudflare developers.