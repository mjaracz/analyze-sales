# Let's analyze the sales data!

A modern, production-ready application helping user analizing data sales.

## Features

- 🚀 <b>Sales Dashboard:</b> Visualizes revenue trends, order volume, and sales performance across multiple marketplaces.
- ⚡️ <b>Orders Management:</b> Displays a complete list of orders with essential business metrics such as date, channel, status, revenue, and item count.
- 📦 <b>Order Details View:</b> Allows users to inspect a single order with precise transactional information.
- 🔄 <b>Multi-Channel Support:</b> Handles data from various sales channels (Allegro, Shopify, Shoper, PrestaShop, eBay, etc.).
- 🔒 <b>High-Volume Data Handling:</b> Efficiently loads and displays large datasets representing real-world sales operations.
- 🎉 <b>Interactive Charts:</b> Provides graphical insights into performance using clear, data-driven visualizations.
- 📖 [React Router docs](https://reactrouter.com/)

## 🏗️ Architectural Structure

This project follows a modular, layered, and minimalistic architecture, aligned with the expectations of the recruitment task.
It is designed using React Router v7 (Framework Mode), which provides:

- File-based routing
- Loader-based data-fetching
- Automatic data hydration
- Built-in SSR capability
- Separation of concerns between routing, data, and rendering

## Key Architectural Principles

#### 1. Modular UI Components

Reusable UI and chart components are grouped inside:

```bash
app/components/
```

Each component is small, focused, and framework-agnostic.

#### 2. Route Modules

Screens are implemented using React Router’s route module conventions, inside:

```bash
app/routes/
```

Each file corresponds to a route:

- `_index.tsx` — dashboard (home)
- `orders.tsx` — orders list
- `orders.$id.tsx` — order details

Route modules include:

- UI
- Loaders
- Optional meta definitions
- Error boundaries

#### 3. Data Layer

Static dataset sales.json is stored under:

```bash
app/data/
```

A dedicated loader provides structured access to the dataset and resolves it into a consistent interface.

A custom hook (useSalesData) wraps loader results and exposes:

- `data`
- `isPending`
- `error`

#### 4. Global Layout

The application layout (header, sidebar, base HTML structure) is defined in:

```bash
app/root.tsx
```

This includes:

- `<html>` scaffold
- Global styles
- Global navigation
- ErrorBoundary

#### 5. TailwindCSS with Custom Utilities

Global utilities and gradient themes are defined in:

```bash
app/app.css
```

Custom utilities:

- `.gradient_bg`
- `.gradient_text_accent`
- `.accent_ring`

Tailwind automatically bundles only used classes, keeping CSS small.

## 🧰 Technology Stack

#### React 19

Modern react runtime with improved transitions and rendering stability.

#### React Router v7 (Framework Mode)

Chosen due to acceptance criteria.
Provides:

- SSR-ready routing
- Data loaders / actions
- Type-safe routing modules
- Seamless client ↔ server hydration

#### Vite

High-performance tool for:

- local dev server
- bundling
- optimizing client assets

#### Recharts

Data visualization library used for:

- line charts
- bar charts
- responsive sales dashboards

#### TailwindCSS

Utility-first styling with:

- custom gradients
- responsive utilities
- low CSS overhead

#### TypeScript

Static typing across the entire project for additional correctness and maintainability.

## 📁 Project Folder Structure

```bash
app/
 ├─ root.tsx                # Global layout, error boundary, HTML scaffold
 ├─ routes/
 │    ├─ _index.tsx         # Dashboard screen
 │    ├─ orders.tsx         # Orders list
 │    └─ orders.$id.tsx     # Order details by ID
 ├─ data/
 │    └─ sales.json         # Static dataset used by loaders
 ├─ components/
 │    ├─ charts/            # Recharts-based components merged here
 │    ├─ ui/                # Shared UI
 │    └─ SpinnerLoader.tsx
 ├─ hooks/
 │    └─ useSalesData.ts
 ├─ styles/
 │    └─ app.css            # Global Tailwind styles + utilities
 └─ utils/

```

## Getting Started, running the application

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

Features:

- Hot module reload
- File-based routing
- Loader execution
- SSR + client hydration
- Fully interactive environment

## Building for Production

#### Create a production build:

```bash
npm run build
```

This triggers <b>React Router Framework’s two-phase build:</b>

1. <b>Client build</b> → optimized browser bundle (`build/client/`)
2. <b>Server build</b> → SSR module (`build/server/`)

Output:

```bash
build/
 ├─ client/   → JS, CSS, assets
 └─ server/   → server entry (index.js)

```

#### Start a production build:

```bash
npm run start
```

This uses:

```bash
react-router-serve ./build/server/index.js
```

to start an SSR server that renders the built application. </br>
This is the official way to preview a framework-mode build.

## Type Checking

```bash
npm run typecheck
```

Runs:

```bash
react-router typegen && tsc
```

- Ensures React Router route types match your file structure
- Ensures there are zero TypeScript type errors

This is extremely useful for catching regressions early.

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

## 🌐 Opening the Workspace (Review Instructions)

The reviewer can use <b>any of the workflows below:</b>

### ✔ Recommended (Full SSR Mode)

```bash
npm install
npm run build
npm run start
```

## 🎉 Final Notes

- Architecture is minimalistic, modular, and fully aligned with the acceptance criteria.
- The project uses the required React Router v7 Framework Mode.
- All screens and components are written in English for global application context.
- Installation and execution require no code modifications.
- The README provides clear instructions for the reviewer.

## 📄 License

This project is released under the **Creative Commons BY-NC 4.0 License**.

You may:

- view the code,
- learn from the implementation,
- clone or fork the repository for educational purposes,
- reference architectural ideas in your own learning.

You may **not**:

- use this code commercially,
- integrate it into business software,
- reuse significant parts in production projects.

This project is intended for educational, portfolio, and recruitment review purposes only.

## 🔒 Commercial use is strictly prohibited

The source code, design, and project structure may not be used commercially, integrated into production systems, or reused in any business context without explicit written permission from the author. </br>
This clarification aims to keep the project available for learning and evaluation while protecting it from unauthorized commercial exploitation. </br>

---

Built with ❤️ using React Router.
