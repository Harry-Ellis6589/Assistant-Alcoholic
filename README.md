# Assistant Alcoholic

A modern, visually stunning web application that combines alcohol unit tracking, drink discovery, cocktail exploration, and personal consumption analytics.

## Features

- **Quick Drink Logging**: Effortlessly log alcoholic drinks from a curated database
- **Automatic Unit Calculator**: Instantly calculate alcohol units using standard formulas
- **Smart Dashboard**: Beautiful analytics dashboard with animated statistics
- **Drink Discovery Hub**: Browse and discover drinks with detailed information
- **Cocktail Explorer**: Get personalized cocktail recommendations
- **AI Recommendations**: Smart suggestions based on your preferences and history
- **Consumption Analytics**: Interactive visualizations and trend analysis
- **Health Awareness**: Non-judgmental insights into drinking habits
- **Spending Tracker**: Monitor alcohol spending over time
- **Goals System**: Set and track personal consumption goals
- **Favourites System**: Save favourite drinks and cocktails
- **Calendar View**: Monthly overview of consumption patterns
- **AI Bartender Assistant**: Interactive chatbot for drink recommendations
- **Smart Drink Builder**: Get cocktail suggestions based on available ingredients
- **Report Exporting**: Export PDF and CSV reports

## Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Recharts** - Interactive charts
- **Zustand** - State management
- **React Router** - Navigation

### Backend & Database
- **Supabase** - Backend-as-a-Service
- **PostgreSQL** - Database

### Development
- **Vite** - Build tool
- **ESLint** - Code linting

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account

### Installation

```bash
# Clone the repository
git clone https://github.com/Harry-Ellis6589/assistant-alcoholic.git
cd assistant-alcoholic

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Add your Supabase credentials to .env.local
```

### Development

```bash
# Start development server
npm run dev

# Run type checking
npm run type-check

# Run linting
npm run lint
```

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable React components
├── pages/           # Page components
├── lib/             # Utility functions and helpers
├── types/           # TypeScript type definitions
├── hooks/           # Custom React hooks
├── store/           # Zustand state management
├── services/        # API and Supabase services
├── App.tsx          # Main app component
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## Development Workflow

We follow a Git branching strategy:
- `main` - Production-ready code
- `develop` - Development branch
- `feature/*` - Feature branches
- `bugfix/*` - Bug fix branches

## License

MIT
