import { useEffect, useState } from "react";

export default function Header() {
  // useState
  const [scrolled, setScrolled] = useState(false);
  // const [menuOpen, setMenuOpen] = useState(false);

  // useEffect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // True if scrolled past
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`flex items-center justify-between px-8 py-4 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <a href="/">Musely</a>

      <nav className="flex gap-6 mx-auto">
        <a href="/#about">About</a>
        <a href="/#features">Features</a>
      </nav>

      <a href="/log-in">Log In</a>
    </header>
  );
}
