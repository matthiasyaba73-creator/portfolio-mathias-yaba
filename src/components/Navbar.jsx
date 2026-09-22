import { useState, useEffect } from "react";
import { FiDownload, FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Accueil", "À propos", "Projets", "Compétences", "CV", "Contact"];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all ${scrolled ? "bg-night/90 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-turquoise text-2xl font-bold">M</span>
          <span className="font-semibold text-lg">Matthias Yaba</span>
        </div>

        <ul className="hidden md:flex gap-8 text-sm">
          {links.map((link, i) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(" ", "-").replace("à", "a")}`}
                className={`hover:text-turquoise transition ${i === 0 ? "text-turquoise border-b-2 border-turquoise pb-1" : "text-gray-300"}`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button className="p-2 rounded-full border border-gray-700 hover:border-turquoise transition">
            <FiSun className="text-gray-300" />
          </button>
          <a
            href="/cv-mathias-yaba.pdf"
            download
            className="flex items-center gap-2 border border-turquoise text-turquoise px-4 py-2 rounded-full text-sm hover:bg-turquoise hover:text-night transition"
          >
            Télécharger mon CV <FiDownload />
          </a>
        </div>

        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-night border-t border-gray-800 px-6 py-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="block py-2 text-gray-300 hover:text-turquoise"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}