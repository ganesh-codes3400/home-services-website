import logo from './assets/logo.png';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
 
  { name: 'Contact', href: '/contact' },
];

const services = [
  { name: 'Waterproof', href: '/services/waterproofing' },
  { name: 'Interior', href: '/services/interior' },
  { name: 'Electrical', href: '/services/electrical' },
  { name: 'Tiles and Stones', href: '/services/tiles-stones' },
];

const socialLinks = [
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full overflow-hidden border-t border-indigo-900 bg-indigo-950 text-left text-indigo-200">
      {/* <div className="h-1 w-full bg-[#ec4899]" /> */}

      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-9 lg:px-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-12 lg:gap-y-8">
          {/* Column 1: Brand + About */}
          <div className="min-w-0 sm:col-span-2 lg:col-span-4">
            <div className="mb-2 flex items-center gap-3">
              <img src={logo} alt="WaterproofPro" className="h-20 w-20 shrink-0 object-contain" />
              <span className="text-2xl font-semibold text-white">
                Waterproof<span className="text-indigo-200">Pro</span>
              </span>
            </div>
            <p className="mb-2 max-w-md text-lg leading-6 text-indigo-200 !mt-2">
              Delivering trusted waterproofing, interior, electrical, and stonework solutions
              with a <span className="font-semibold text-white">100% Money Back Guarantee</span>.
              Protecting homes, one roof at a time.
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-2.5 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-indigo-900 text-indigo-200 transition-colors hover:border-indigo-100 hover:bg-indigo-100 hover:text-indigo-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="min-w-0 lg:col-span-2 mt-6">
            <h3 className="relative mb-4 inline-block text-base font-semibold text-white">
              Quick Links
              <span className="absolute -bottom-2 left-0 h-0.5 w-8 bg-indigo-200" />
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-indigo-200 transition-colors hover:text-white"
                  >
                    <svg
                      className="h-3 w-3 shrink-0 text-indigo-300 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="min-w-0 lg:col-span-3 mt-6">
            <h3 className="relative mb-4 inline-block text-base font-semibold text-white">
              Our Services
              <span className="absolute -bottom-2 left-0 h-0.5 w-8 bg-indigo-200" />
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="group inline-flex items-start gap-2 text-sm font-semibold text-indigo-200 transition-colors hover:text-white"
                  >
                    <svg
                      className="mt-1 h-3 w-3 shrink-0 text-indigo-300 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="min-w-0 lg:col-span-3 mt-6">
            <h3 className="relative mb-4 inline-block text-base font-semibold text-white">
              Get in Touch
              <span className="absolute -bottom-2 left-0 h-0.5 w-8 bg-indigo-200" />
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-indigo-900 text-indigo-200">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </span>
                <a href="tel:+919988776655" className="min-w-0 break-words pt-2 font-semibold text-indigo-200 transition-colors hover:text-white">
                  +91 9988776655
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-indigo-900 text-indigo-200">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </span>
                <a href="mailto:info@waterproofpro.com" className="min-w-0 break-all pt-2 font-semibold text-indigo-200 transition-colors hover:text-white">
                  info@waterproofpro.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-indigo-900 text-indigo-200">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="min-w-0 pt-2 leading-5 font-semibold text-indigo-200">
                  123 Business Street,<br />Mumbai, India 400001
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-y border-indigo-900 py-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h4 className="text-lg font-semibold text-white">Subscribe to our Newsletter</h4>
              <p className="mt-1 text-sm leading-5 text-indigo-200">Get exclusive offers and waterproofing tips.</p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
                className="flex w-full max-w-xl flex-col gap-3 sm:flex-row md:w-3/5"
            >
              <input
                type="email"
                aria-label="Email address"
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-md border border-indigo-900 bg-indigo-900 px-4 py-3 text-sm text-white placeholder:text-indigo-300 focus:border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-200/20"
              />
              <button
                type="submit"
                className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-indigo-950 transition-colors hover:bg-indigo-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-2 text-sm text-indigo-200 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} WaterproofPro. All rights reserved.</p>
          {/* <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="#" className="transition-colors hover:text-[#f9a8d4]">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-[#f9a8d4]">Terms of Service</a>
            <a href="#" className="transition-colors hover:text-[#f9a8d4]">Sitemap</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}