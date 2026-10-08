
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/hydrotechsolutionnav.png";

export default function NavbarPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: "Waterproof", href: "/services/waterproofing" },
    { name: "Interior", href: "/services/interior" },
    { name: "Electrical", href: "/services/electrical" },
    { name: "Tiles and Stones", href: "/services/tiles-stones" },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const navLinkClass =
    "font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-200";

  return (
    <nav className="relative z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0" onClick={closeMobileMenu}>
            <img
              src={logo}
              alt="Logo"
              className="block h-20 w-20 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-lg font-semibold">
            <Link to="/" className={navLinkClass}>
              Home
            </Link>

            <Link to="/about" className={navLinkClass}>
              About
            </Link>

            {/* Desktop Services Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className={`${navLinkClass} flex items-center gap-1`}
              >
                Services
                <svg
                  className="h-4 w-4 transition-transform group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className="invisible absolute left-0 top-full z-50 mt-2 w-64 rounded-lg 
              border border-gray-100 bg-white py-2 opacity-0 shadow-lg transition-all duration-200 
              group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="block px-4 py-3 text-md text-gray-700 hover:!bg-gray-200 hover:text-indigo-600"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/contact" className={navLinkClass}>
              Contact
            </Link>
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden md:block">
            <a
              href="tel:+91 9666587727"
              className="inline-flex items-center gap-2 rounded-lg !bg-blue-600 
              px-5 py-2.5 font-semibold text-white transition-colors hover:bg-indigo-700"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>+91 9666587727</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <div className="space-y-1 px-4 py-4">

            <Link
              to="/"
              onClick={closeMobileMenu}
              className="block rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={closeMobileMenu}
              className="block rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
            >
              About
            </Link>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                type="button"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="relative flex w-full items-center justify-center rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                aria-expanded={isServicesOpen}
              >
                Services
                <svg
                  className={`absolute right-4 h-5 w-5 transition-transform ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isServicesOpen && (
                <div className="ml-4 space-y-1 border-l-2 border-gray-200 pl-3">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      onClick={closeMobileMenu}
                      className="block rounded-lg px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-indigo-600"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="block rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
            >
              Contact
            </Link>

            {/* Mobile Contact Button */}
            <a
              href="tel:+91 9666587727"
              className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +91 9666587727
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

