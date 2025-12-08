'use client';
import { useEffect } from 'react';

export default function Navbar() {

  useEffect(() => {

    const anchors = document.querySelectorAll('a[href^="#"]');

    const handleClick = (ev: Event) => {
      ev.preventDefault();

      const element = ev.currentTarget as HTMLAnchorElement;
      const href = element.getAttribute("href");

      if (!href) return;

      const target = document.querySelector(href);
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    anchors.forEach(anchor => anchor.addEventListener("click", handleClick));

    return () => {
      anchors.forEach(anchor => anchor.removeEventListener("click", handleClick));
    };

  }, []);

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-gray-800 shadow-2xl z-50">
     Green Cars    </nav>
  );
}
