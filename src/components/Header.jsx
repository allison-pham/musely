export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <a href="/">Musely</a>

      <nav className="flex gap-6 mx-auto">
        <a href="/#about">About</a>
        <a href="/#features">Features</a>
      </nav>

      <button>
        <a href="/log-in">Log In</a>
      </button>
    </header>
  );
}
