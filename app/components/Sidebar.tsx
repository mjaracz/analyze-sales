import type { FC } from 'react';

export const Sidebar: FC = () => {
  return (
    <aside className="w-64 h-screen border-r border-white/10 bg-black/30 backdrop-blur-md p-6 space-y-6 hidden md:block">
      <nav className="space-y-4">
        <a href="/" className="block text-white hover:text-cyan-300">
          Dashboard
        </a>
        <a href="/orders" className="block text-white hover:text-cyan-300">
          Orders
        </a>
      </nav>
    </aside>
  );
};
