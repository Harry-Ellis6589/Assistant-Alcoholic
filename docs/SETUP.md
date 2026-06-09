# Setup Guide

## Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account
- Git

## Installation

### 1. Clone Repository

```bash
git clone https://github.com/Harry-Ellis6589/assistant-alcoholic.git
cd assistant-alcoholic
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create `.env.local` file in root directory:

```env
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
VITE_API_URL=http://localhost:3000
```

### 4. Setup Supabase

#### Create Database

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Create new project
3. Run SQL migrations from `docs/DATABASE.md`
4. Enable Row Level Security (RLS) policies

#### Create RLS Policies

```sql
-- Users can only access their own data
CREATE POLICY "Users can access their own data"
  ON drink_logs
  FOR ALL
  USING (auth.uid() = user_id);

-- Similar policies for other tables
```

### 5. Start Development Server

```bash
npm run dev
```

The app will open at `http://localhost:3000`

## Development Workflow

### Running the App

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run linter
npm run type-check   # Type checking
```

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "feat: description of changes"

# Push to develop branch first for review
git push origin feature/your-feature-name

# Create Pull Request
# After approval, merge to develop
# Periodic merges to main for releases
```

### Code Style

- Use TypeScript for type safety
- Follow ESLint rules
- Use Tailwind CSS classes
- Import path aliases (e.g., `@components/`, `@pages/`)
- Keep components focused and modular

## Deploying to Production

### Build

```bash
npm run build
```

Output goes to `dist/` folder

### Deploy to Vercel

1. Push code to GitHub
2. Connect repo to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push to main

### Deploy to Other Platforms

#### Netlify
```bash
netlify deploy --prod --dir=dist
```

#### GitHub Pages
```bash
npm run build
git add dist
git commit -m "build: production build"
git push origin main
```

## Troubleshooting

### Supabase Connection Issues
- Verify API keys in `.env.local`
- Check Supabase project is running
- Ensure RLS policies allow access

### Build Errors
- Clear `node_modules`: `rm -rf node_modules`
- Reinstall: `npm install`
- Clear cache: `npm run build -- --clean`

### Hot Module Replacement (HMR) Issues
- Check Vite config is correct
- Verify port 3000 is not in use
- Restart dev server

## Performance Tips

- Use code splitting with React.lazy()
- Implement image optimization
- Enable Supabase query caching
- Use pagination for large datasets
- Profile with React DevTools
