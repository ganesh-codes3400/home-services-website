import logo from "./assets/hydrotechsolution1.png";

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
    href: 'https://www.facebook.com/share/1Ezy3WQ292/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/hydrotechsolution?utm_source=qr&stkn=MzNmeHp1MWhod285',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://x.com/hydrotechsol',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
 {
  name: 'YouTube',
  href: 'https://youtube.com/@hydrotechsolutions-1?si=oR96PVne3NBH85Lx',
  icon: (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M23.498 6.186a2.99 2.99 0 0 0-2.102-2.116C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.396.57A2.99 2.99 0 0 0 .502 6.186 31.06 31.06 0 0 0 0 12a31.06 31.06 0 0 0 .502 5.814 2.99 2.99 0 0 0 2.102 2.116C4.495 20.5 12 20.5 12 20.5s7.505 0 9.396-.57a2.99 2.99 0 0 0 2.102-2.116A31.06 31.06 0 0 0 24 12a31.06 31.06 0 0 0-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
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
              <img src={logo} alt="Hydrotechsolution" 
              className="h-40 w-40 shrink-0 object-contain" />
              <span className="text-2xl font-semibold text-white">
                {/* Waterproof<span className="text-indigo-200">Pro</span> */}
                {/* Hydrotech<span className="text-indigo-200">solution</span> */}
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
                <a href="tel:+91 9666587727" className="min-w-0 break-words pt-2 font-semibold text-indigo-200 transition-colors hover:text-white">
                  +91 9666587727
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-indigo-900 text-indigo-200">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </span>
              
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=Hydrotechsolution1@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-0 break-all pt-2 font-semibold text-indigo-200 transition-colors hover:text-white"
                >
                  Hydrotechsolution1@gmail.com
                </a>


              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-indigo-900 text-indigo-200">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="min-w-0 pt-1 leading-5 font-semibold text-indigo-200"> Near Masjid-e-Gada Baig,<br /> Jana Chaitanya, Rajendranagar,<br /> Hyderabad, Telangana 500030, India </span>
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
          <p>© {currentYear} Hydrotechsolution. All rights reserved.</p>
          {/* <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="#" className="transition-colors hover:text-[#f9a8d4]">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-[#f9a8d4]">Terms of Service</a>
            <a href="#" className="transition-colors hover:text-[#f9a8d4]">Sitemap</a>
          </div> */}
        </div>
      </div>
      {/* Sticky Contact Buttons */}
      <div className="fixed bottom-5 right-5 z-[9999] flex flex-col gap-3">

        {/* WhatsApp */}
        <a
          href="https://wa.me/919666587727?text=Hello%20Hydrotechsolution,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-7 w-7"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M20.52 3.449A11.815 11.815 0 0012.05 0C5.495 0 .16 5.334.157 11.89c0 2.096.547 4.142 1.588 5.946L.057 24l6.304-1.654a11.89 11.89 0 005.684 1.447h.005c6.554 0 11.89-5.335 11.893-11.89a11.86 11.86 0 00-3.423-8.454zM12.05 21.785h-.004a9.886 9.886 0 01-5.031-1.378l-.361-.214-3.742.982 1-3.648-.235-.374a9.88 9.88 0 01-1.515-5.264c.002-5.45 4.437-9.884 9.89-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.888-9.883 9.888z" />
          </svg>
        </a>


      </div>
    </footer>
  );
}