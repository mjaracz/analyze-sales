import type { FC } from 'react';

export const Navbar: FC = () => {
  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-white/10 bg-black/30 backdrop-blur-md">
      <h1 className="text-xl font-semibold gradient_text_accent">
        Global Sales Dashboard
      </h1>
    </header>
  );
};
