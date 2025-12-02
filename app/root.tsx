import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';

import type { ReactNode } from 'react';
import './app.css';

export const links = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap',
  },
  { rel: 'icon', href: '/favicon.ico' },
];

export const meta = () => [
  { title: 'Sales Dashboard — Global Insights' },
  { name: 'description', content: 'Interactive sales analytics dashboard for global marketplaces.' },
  { name: 'keywords', content: 'sales,dashboard,analytics,ecommerce,marketplaces,react,router' },
  { property: 'og:title', content: 'Sales Dashboard' },
  { property: 'og:description', content: 'Global sales analytics and insights.' },
  { property: 'og:type', content: 'website' },
  { property: 'og:image', content: '/og-cover.png' },
  { name: 'theme-color', content: '#020617' }, // matches your gradient dark palette
];

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>

      <body className="gradient_bg text-white min-h-screen flex">
        <Sidebar />

        <div className="flex-1 flex flex-col min-h-screen">
          <Navbar />

          <main className="flex-1 p-6 overflow-y-auto">{children}</main>
        </div>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: { error: unknown }) {
  let title = 'Unexpected Error';
  let message = 'Something went wrong.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    title = error.status === 404 ? '404 — Not Found' : `Error ${error.status}`;
    message = error.statusText || 'Unexpected error occurred.';
  } else if (import.meta.env.DEV && error instanceof Error) {
    message = error.message;
    stack = error.stack;
  }

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="gradient_bg text-white min-h-screen flex flex-col p-10">
        <h1 className="text-4xl font-bold gradient_text_accent mb-4">{title}</h1>
        <p className="mb-4">{message}</p>

        {stack && (
          <pre className="p-4 bg-white/10 rounded-lg overflow-x-auto">
            <code>{stack}</code>
          </pre>
        )}

        <a href="/" className="mt-6 inline-block px-6 py-3 bg-cyan-600 rounded hover:bg-cyan-500 transition text-white font-medium">
          Go Back Home
        </a>

        <Scripts />
      </body>
    </html>
  );
}
