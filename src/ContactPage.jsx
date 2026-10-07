
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  Mail,
  MapPin,
  Phone,
  X,
  ShieldCheck,
  ClipboardCheck,
  Headset,
} from "lucide-react";
import NavbarPage from "./NavbarPage";
import Footer from "./Footer";

const fieldClassName =
  "mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const closeButtonRef = useRef(null);

  const services = [
    {
      title: "Waterproofing",
      description: "Protect your home from leaks, dampness, and water damage.",
      icon: ShieldCheck,
    },
    {
      title: "Interior Design",
      description: "Create comfortable and beautiful spaces for your home.",
      icon: ClipboardCheck,
    },
    {
      title: "Electrical Services",
      description: "Get reliable electrical solutions for your property.",
      icon: Headset,
    },
  ];

  useEffect(() => {
    if (!isSubmitted) return;

    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsSubmitted(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSubmitted]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;

    setIsSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <div className="w-full bg-white text-left">
      <NavbarPage />

      <main>
        {/* Page Header */}
        <section className="border-b border-gray-200 bg-gray-50">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-6 sm:px-8 sm:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 lg:px-4">
            <div>
              <p className="mb-3 text-lg font-semibold uppercase tracking-wider text-blue-600">
                Contact Us
              </p>

              <h1 className="max-w-2xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Let's talk about your project.
              </h1>

              <p className="mt-4 max-w-xl text-lg leading-7 text-gray-600 sm:text-base font-lg font-semibold">
                Have a question or planning a project? Get in touch with our
                team. We're here to help you find the right solution.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6 lg:ml-auto lg:max-w-sm">
              <p className="text-lg font-semibold uppercase tracking-wider text-blue-600">
                A better start for your project
              </p>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="border-l-2 border-blue-600 pl-3">
                  <p className="text-2xl font-bold text-gray-900">10 years</p>
                  <p className="mt-1 text-lg leading-5 text-gray-600">Written warranty</p>
                </div>

                <div className="border-l-2 border-blue-600 pl-3">
                  <p className="text-2xl font-bold text-gray-900">Free</p>
                  <p className="mt-1 text-lg leading-5 text-gray-600">Site inspection</p>
                </div>
              </div>

              <p className="mt-5 border-t border-gray-100 pt-4 text-sm leading-5 text-gray-600">
                Share a few details and we will help you choose the right solution.
              </p>
            </div>
          </div>
        </section>

        {/* New Section: Our Services */}
        <section className="bg-white px-5 py-6 sm:px-8 lg:px-10 lg:py-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-4 text-center">
              <p className="mb-2 text-xl font-semibold uppercase tracking-wider text-blue-600">
                What We Offer
              </p>

              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                How can we help you?
              </h2>

              <p className="mx-auto mt-3 max-w-7xl text-lg leading-6 text-gray-600 
              sm:text-base font-semibold">
                Explore our services and tell us what your project needs.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.title}
                    className="rounded-xl border border-gray-200 bg-white p-6 transition-shadow duration-200 hover:shadow-md"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <Icon size={24} />
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-lg leading-6 text-gray-600">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form and Details */}
        <section className="bg-gray-50 px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">

            {/* Contact Form */}
            <div className="min-w-0 rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8">
              <p className="mb-2 text-lg font-semibold uppercase tracking-wider text-blue-600">
                Get Started
              </p>

              <h2 className="text-2xl font-bold text-gray-900">
                Send us a message
              </h2>

              <p className="mb-7 mt-2 text-sm leading-6 text-gray-600 font-semibold">
                Fill out the form below and tell us about your requirements.
                Fields marked with * are required.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2 !mt-4">
                  <label className="block text-lg font-medium text-gray-800">
                    Full name *
                    <input
                      className={fieldClassName}
                      type="text"
                      name="name"
                      autoComplete="name"
                      placeholder="Your name"
                      required
                      minLength={2}
                      maxLength={80}
                    />
                  </label>

                  <label className="block text-lg font-medium text-gray-800">
                    Phone number *
                    <input
                      className={fieldClassName}
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      placeholder="+91 98765 43210"
                      required
                      pattern="[+0-9() -]{7,20}"
                      title="Enter a valid phone number"
                    />
                  </label>
                </div>

                <label className="block text-lg font-medium text-gray-800">
                  Email address *
                  <input
                    className={fieldClassName}
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                    maxLength={120}
                  />
                </label>

                <label className="block text-lg font-medium text-gray-800">
                  Service you're interested in *
                  <select
                    className={fieldClassName}
                    name="service"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Waterproofing</option>
                    <option>Interior</option>
                    <option>Electrical</option>
                    <option>Tiles and stones</option>
                    <option>Other home service</option>
                  </select>
                </label>

                <label className="block text-lg font-medium text-gray-800">
                  How can we help? *
                  <textarea
                    className={`${fieldClassName} min-h-36 resize-y`}
                    name="message"
                    placeholder="Tell us about your project..."
                    required
                    minLength={10}
                    maxLength={1000}
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:w-auto"
                >
                  Send Message
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <aside className="min-w-0">
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <p className="mb-2 text-lg font-semibold uppercase tracking-wider text-blue-600">
                  Contact Information
                </p>

                <h2 className="text-2xl font-bold text-gray-900">
                  Reach our team
                </h2>

                <p className="!mb-4 mt-3 text-lg leading-6 text-gray-600">
                  Have questions? Contact us directly using the details below.
                </p>

                <div className="space-y-7">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <Phone size={20} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Call us
                      </h3>
                      <a
                        href="tel:+919988776655"
                        className="mt-1 inline-block text-lg text-gray-600 transition-colors hover:text-blue-600"
                      >
                        +91 9666587727
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <Mail size={20} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-semibold text-gray-900">
                        Email us
                      </h3>
                      <a
                        href="mailto:Hydrotechsolution1@gmail.com"
                        className="mt-1 inline-block break-all text-lg text-gray-600 
                        transition-colors hover:text-blue-600"
                      >
                        Hydrotechsolution1@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg 
                    bg-blue-50 text-blue-600">
                      <MapPin size={20} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Our office
                      </h3>
                      <p className="mt-1 text-lg leading-6 text-gray-600">
                        Near Masjid-e-Gada Baig,<br /> Jana Chaitanya, Rajendranagar,<br /> Hyderabad, Telangana 500030, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Contact Card */}
              <div className="mt-5 rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Need help with your project?
                </h3>

                <p className="mt-2 text-lg leading-6 text-gray-600">
                  Share your requirements with us. Our team can help you
                  understand the available services.
                </p>

                <a
                  href="tel:+919988776655"
                  className="mt-4 inline-flex items-center gap-2 text-lgfont-semibold text-blue-600 hover:text-blue-700"
                >
                  Call our team
                  <ArrowRight size={16} />
                </a>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />

      {/* Thank You Modal */}
      {isSubmitted && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/60 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsSubmitted(false);
            }
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="thank-you-title"
            className="relative w-full max-w-md rounded-xl bg-white p-6 text-center shadow-2xl sm:p-8"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setIsSubmitted(false)}
              aria-label="Close confirmation"
              className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
            >
              <X size={19} />
            </button>

            <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
              <Check size={24} />
            </span>

            <h2
              id="thank-you-title"
              className="text-2xl font-bold text-gray-900"
            >
              Thank you for reaching out!
            </h2>

            <p className="mt-3 text-lg leading-6 text-gray-600">
              Your message has been received. Our team will get back to you
              soon.
            </p>

            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="mt-6 min-h-11 rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Done
            </button>
          </section>
        </div>
      )}
    </div>
  );
}

