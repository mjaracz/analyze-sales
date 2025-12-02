import type { RouteConfig } from '@react-router/dev/routes';

export default [
  {
    path: '/',
    file: './routes/_index.tsx',
  },
  {
    path: '/orders',
    file: './routes/orders.tsx',
  },
  {
    path: '/orders/:id',
    file: './routes/orders.$id.tsx',
  },
] satisfies RouteConfig;
