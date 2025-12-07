'use client';
import { useEffect } from 'react';

export default function Navbar() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (ev: any) {
        ev.preventDefault();
        const target = document.querySelector(this.getAttribute('href') as string);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-gray-800 shadow-2xl z-50">
      {/* Existing nav content unchanged */}
    </nav>
  );
}
