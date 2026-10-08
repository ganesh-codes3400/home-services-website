import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarPage from './NavbarPage';
import Footer from './Footer';
import BookingPage from './BookingPage';
import { Phone } from 'lucide-react';
import waterprooffaq from './assets/homepage-waterprooffaq.webp';
import houseinteriorandexterior from './assets/homepage-thermolmoisutrebanner.webp';
import housemarblesbanner from './assets/mixallbanner.png';
import waterproofBanner from './assets/homepage-waterproofBanner.webp';
import houseElectricalbanner from './assets/homepage-moisturemetertestingbanner.webp';
import dryimage from './assets/dryimage.webp';
import dryimage1 from './assets/dryimage1.webp';
import dryimage2 from './assets/dryimage2.webp';
import terrace1 from './assets/homepage-terrace1.webp';
import externalcracks2 from './assets/homepage-externalcracks2.webp'
import paintpeeling3 from './assets/homepage-paintpeeling3.webp'
import bathroomleakage4 from './assets/homepage-bathroomleakage4.webp'
import crackandjoint from './assets/homepage-crackandjoint.webp'
import seepagewaterignress6 from './assets/homepage-seepagewaterignress6.webp'
import thermolmoisutre1 from './assets/homepage-thermolmoisutre1.webp'
import thermolmoisutre4 from './assets/homepage-moisture111.webp'

import moisturemeter from './assets/111.webp'
import moisturemetertesting111 from './assets/moisturemetertesting111.webp'
const slides = [
  {
    url: waterproofBanner,
    alt: 'Waterproofing solutions for roofs and walls',
  },
  {
    url: houseinteriorandexterior,
    alt: 'Thermal camera inspection for hidden moisture',
  },
  {
    url: houseElectricalbanner,
    alt: 'Moisture meter testing during a leakage inspection',
  },
  {
    url: housemarblesbanner,
    alt: 'Home improvement and repair services',
  },
];

// ─── Section 2 Data: Services ───
const servicesList = [
  {
    title: 'Terrace & Roof Waterproofing',
    description:
      'Protect your terrace and roof from rain, heat, and standing water with advanced membrane coating.',
    projectTitle: 'Ceiling dampness repair',
    projectSubtitle: 'Residential waterproofing project',
    beforeImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=700&q=80&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&q=80&auto=format&fit=crop',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10" />
      </svg>
    ),
  },
  {
    title: 'Bathroom & Kitchen Sealing',
    description:
      'Stop seepage in high-moisture areas with chemical-resistant waterproofing for wet zones.',
    projectTitle: 'Wall seepage fix',
    projectSubtitle: 'Residential waterproofing project',
    beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=700&q=80&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=700&q=80&auto=format&fit=crop',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
  {
    title: 'Wall Seepage & Crack Repair',
    description:
      'Fix dampness, mold, and peeling paint at the source with deep injection grouting.',
    projectTitle: 'Terrace waterproofing',
    projectSubtitle: 'Residential waterproofing project',
    beforeImage: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=700&q=80&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80&auto=format&fit=crop',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: 'Basement & Foundation Protection',
    description:
      'Keep underground structures dry with heavy-duty barriers that block groundwater.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Water Tank & Sump Treatment',
    description:
      'Keep stored water clean and tanks leak-free with food-grade, non-toxic coatings.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Annual Maintenance Plans',
    description:
      'Stay protected year-round with scheduled inspections and preventive treatments.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const serviceHighlights = [
  {
    eyebrow: 'LEAK CHECK',
    title: 'Water Leakage Services',
    description: 'Moisture checks and practical diagnosis to locate the source before repairs begin.',
    icon: servicesList[2].icon,
  },
  {
    eyebrow: 'ROOF & TERRACE',
    title: 'Terrace Waterproofing',
    description: 'Long-lasting roof protection designed for rain, heat, and standing water.',
    icon: servicesList[0].icon,
  },
  {
    eyebrow: 'WET AREAS',
    title: 'Bathroom Waterproofing',
    description: 'Seepage prevention for bathrooms and kitchens, applied where moisture starts.',
    icon: servicesList[1].icon,
  },
  {
    eyebrow: 'WALLS & DAMPNESS',
    title: 'Wall Seepage Solutions',
    description: 'Targeted treatment for damp patches, rising moisture, and surface cracks.',
    icon: servicesList[2].icon,
  },
];

// ─── Section 3 Data: Results ───
const results = [
  {
    image: dryimage,
    title: 'Terrace Leak Repair',
    // location: 'Mumbai, Maharashtra',
    stat: '100% Leak-Free',
  },
  {
    image: dryimage1,
    title: 'Rooftop Seepage Fix',
    // location: 'Pune, Maharashtra',
    stat: 'Dampness Eliminated',
  },
  {
    image: dryimage2,
    title: 'Basement Waterproofing',
    // location: 'Bengaluru, Karnataka',
    stat: 'Dry Year-Round',
  },
];

const impactStats = [
  { value: 1000, suffix: '+', label: 'Happy Customers' },
  { value: 2500, suffix: '+', label: 'Projects Completed' },
  { value: 10, suffix: ' yrs', label: 'Warranty Coverage' },
  { value: 4.9, suffix: '/5', decimals: 1, label: 'Customer Rating' },
];

// ─── Section 4 Data: FAQ ───
const faqs = [
  {
    question: 'How long does waterproofing last?',
    answer:
      'With our premium-grade materials and certified application process, our waterproofing solutions typically last 8–10 years. We also offer an annual maintenance plan to extend the lifespan even further.',
  },
  {
    question: 'Do you offer a warranty on your work?',
    answer:
      'Yes! Every project comes with a 10-year written warranty. If you notice any leakage or seepage within the warranty period, we will fix it free of cost — no questions asked.',
  },
  {
    question: 'How much does waterproofing cost?',
    answer:
      'Cost depends on the area size and type of treatment. On average, terrace waterproofing starts from ₹40/sq.ft, while bathroom waterproofing starts from ₹60/sq.ft. We provide a free on-site inspection and transparent quote before starting work.',
  },
  {
    question: 'What is the Instant Money Back Guarantee?',
    answer:
      'If you are not satisfied with our work within 30 days of completion, we will refund 100% of your money — no hidden conditions. We stand behind every solution we deliver.',
  },
  {
    question: 'How long does the waterproofing process take?',
    answer:
      'Most residential projects take 2–4 days, including surface preparation, application, and curing time. Larger commercial projects may take 5–7 days. We always share a clear timeline before starting.',
  },
];

export default function HomePage() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [countedStats, setCountedStats] = useState(impactStats.map(() => 0));
  const [statsVisible, setStatsVisible] = useState(false);
  const statsSectionRef = useRef(null);
  const bookingPromptTimerRef = useRef(null);

  useEffect(() => {
    bookingPromptTimerRef.current = setTimeout(() => {
      bookingPromptTimerRef.current = null;
      setIsBookingOpen(true);
    }, 5000);

    return () => clearTimeout(bookingPromptTimerRef.current);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const statsSection = statsSectionRef.current;
    if (!statsSection) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(statsSection);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!statsVisible) return undefined;

    const startTime = performance.now();
    const duration = 1400;
    let animationFrame;

    const animateStats = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 3;

      setCountedStats(impactStats.map((stat) => stat.value * easedProgress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateStats);
      }
    };

    animationFrame = requestAnimationFrame(animateStats);
    return () => cancelAnimationFrame(animationFrame);
  }, [statsVisible]);

  const goToSlide = (index) => setCurrentSlide(index);
  const openBooking = () => {
    clearTimeout(bookingPromptTimerRef.current);
    bookingPromptTimerRef.current = null;
    setIsBookingOpen(true);
  };
  const serviceRailRef = useRef(null);

  // const scrollServices = (direction) => {
  //   serviceRailRef.current?.scrollBy({ left: direction * 340, behavior: 'smooth' });
  // };

  return (
    <>
      <NavbarPage />
      <BookingPage isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />


      <section className="w-full overflow-hidden bg-slate-50">
        <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl grid-cols-1 items-center gap-8 px-5 py-8 sm:px-8 sm:py-12 lg:grid-cols-2 lg:gap-14 lg:px-10 lg:py-16">
          <div className="hero-copy order-2 text-left lg:order-1">
            <span className="inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-sm sm:text-sm">
              Trusted by 1000+ homeowners
            </span>

            <h1 className="mt-5 !text-3xl font-extrabold leading-tight !text-slate-900 sm:!text-4xl lg:!text-5xl">
              Reliable waterproofing for a stronger, safer home.
            </h1>

            <p className="mt-5 max-w-xl !text-base leading-7 !text-slate-600 sm:!text-lg">
              Protect your home from leaks, seepage, and moisture damage with dependable
              waterproofing solutions built to last. Leakage and waterproofing site visits
              are handled by verified civil engineers, not technicians.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                onClick={()=>navigate('/contact')}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 sm:px-7 sm:text-base"
              >
                Book an inspection
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              <a
                href="tel:+91 9666587727"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-colors hover:border-blue-500 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 sm:px-7 sm:text-base"
              >
                Call us
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-slate-700 sm:text-base">
              {['10-year warranty', 'Engineer-led leak inspections', 'Money-back guarantee'].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-cyan-500" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-carousel order-1 lg:order-2">
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-slate-200 shadow-xl sm:aspect-[16/10] lg:aspect-[4/3]">
              {slides.map((slide, index) => (
                <div
                  key={slide.url}
                  aria-hidden={index !== currentSlide}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    index === currentSlide
                      ? 'translate-x-0 opacity-100'
                      : 'pointer-events-none translate-x-8 opacity-0'
                  }`}
                >
                  <img
                    src={slide.url}
                    alt={slide.alt || 'Waterproofing and home improvement project'}
                    width="1440"
                    height="960"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    fetchPriority={index === 0 ? 'high' : 'auto'}
                    decoding="async"
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-slate-950/70 to-transparent px-5 pb-5 pt-14 sm:px-6 sm:pb-6">
                <span className="max-w-[75%] text-sm font-semibold text-white sm:text-base">
                  {slides[currentSlide].alt || 'Practical protection for every part of your property'}
                </span>

                <div className="flex shrink-0 items-center gap-2" aria-label="Choose carousel image">
                  {slides.map((slide, index) => (
                    <button
                      key={slide.url}
                      type="button"
                      onClick={() => goToSlide(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'w-7 bg-white' : 'w-2.5 bg-white/60 hover:bg-white'
                      }`}
                      aria-label={`Show image ${index + 1}`}
                      aria-current={index === currentSlide ? 'true' : undefined}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs 
              font-bold uppercase tracking-wider text-blue-700 !mb-2">
                Advanced Leakage Detection
              </span>

              <h2 className="mt-4 !mb-2 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Don&apos;t Just Cover the Leak.
                <span className="mt-1 block text-blue-600">Find the Root Cause.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Before waterproofing work begins, a verified civil engineer visits the
                site to assess the structure and investigate where moisture is coming
                from. The inspection combines visual assessment, thermal imaging and
                moisture meter testing to identify affected areas and guide the repair.
              </p>

              <div className="mt-8 space-y-5">
                <div className="border-l-4 border-blue-600 pl-5">
                  <h3 className="text-lg font-bold text-slate-900">Thermal Camera Inspection</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600 sm:text-base">
                    Thermal imaging helps identify unusual temperature patterns that may
                    indicate hidden moisture behind walls, ceilings and other affected
                    surfaces.
                  </p>
                </div>

                <div className="border-l-4 border-cyan-500 pl-5">
                  <h3 className="text-lg font-bold text-slate-900">Moisture Meter Testing</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600 sm:text-base">
                    Moisture measurements help confirm suspicious areas and understand the
                    extent of dampness before repair or waterproofing begins.
                  </p>
                </div>

                <div className="border-l-4 border-slate-300 pl-5">
                  <h3 className="text-lg font-bold text-slate-900">Targeted Repair Planning</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600 sm:text-base">
                    Once the affected area is understood, we can recommend a suitable
                    waterproofing or repair solution instead of simply covering the visible
                    symptoms.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={openBooking}
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700"
                >
                  Book Leakage Inspection
                  <span className="ml-2">→</span>
                </button>

                <a
                  href="tel:+919666587727"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 transition hover:border-blue-500 hover:text-blue-600"
                >
                  Call +91 9666587727
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-[28px] bg-slate-100 ring-1 ring-slate-200">
                  <img
                    src={thermolmoisutre1}
                    alt="Thermal imaging inspection for hidden moisture"
                    width="960"
                    height="640"
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/5] w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="overflow-hidden rounded-[28px] bg-slate-100 ring-1 ring-slate-200">
                  <img
                    src={moisturemeter}
                    alt="Moisture meter testing a damp surface"
                    width="960"
                    height="640"
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/5] w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="overflow-hidden rounded-[28px] bg-slate-100 ring-1 ring-slate-200">
                  <img
                    src={thermolmoisutre4}
                    alt="Thermal camera detecting moisture in a wall"
                    width="960"
                    height="640"
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/5] w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="overflow-hidden rounded-[28px] bg-slate-100 ring-1 ring-slate-200">
                  <img
                    src={moisturemetertesting111}
                    alt="Professional moisture testing during leakage inspection"
                    width="960"
                    height="640"
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/5] w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-14">

          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs 
            font-bold uppercase tracking-wider text-blue-700 !mb-2">
              After You Book an Inspection
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              A Clear Plan From Scan
              <span className="block text-blue-600 !mb-2">
                To Guaranteed Repair.
              </span>
            </h2>

            <p className="mt-2 text-base leading-7 text-slate-600 sm:text-lg">
              We locate the source before recommending treatment, helping you avoid
              unnecessary demolition and repeat repair costs.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                title: 'Scan Your Full Home with Infrared Camera',
                description:
                  'A verified civil engineer scans your property with an infrared camera to identify temperature variations and hidden moisture that may not be visible to the naked eye.',
              },

              {
                title: 'Detailed Report Within 24 Hours',
                description:
                  'Receive the engineer’s findings within 24 hours, including affected areas, likely leakage sources, and recommended next steps.',
              },

              {
                title: 'Budget-Friendly Quotation with Guaranteed Work',
                description:
                  'Get a clear and budget-friendly quotation based on the actual condition of your property, with transparent work details and applicable workmanship guarantee terms.',
              },
              {
                title: 'Source Treatment Instead of Unnecessary Breaking',
                description:
                  'We first identify the likely source of the leakage and recommend targeted treatment, helping you avoid unnecessary breaking, repairs, and the cost of guesswork.',
              },
              {
              title: 'Provide warranty on work upto 10 years',
              description:
                'Depending on the treatment selected, eligible waterproofing work can include warranty coverage of up to 10 years, subject to the applicable warranty terms.',
            },
            ].map((step, index) => (
              <article
                key={step.title}
                className="flex h-full flex-col rounded-lg border border-slate-200 border-t-2 border-t-blue-600 bg-white p-5 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-6"
              >
                <span className="text-sm font-bold text-blue-700">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 text-lg font-bold leading-snug text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>

        </div>
      </section>


      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-14">

          <div className="grid items-end gap-6 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <span className="inline-flex !mb-2 !rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-700">
                Waterproofing Solutions
              </span>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                From Leakage Detection
                <span className="block text-blue-600">
                  To Complete Waterproofing
                </span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-lg">
                Once the source and affected areas are understood, we provide
                targeted waterproofing and repair solutions for common residential
                and building leakage problems.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex w-fit items-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
            >
              Discuss Your Problem
              <span className="ml-2">→</span>
            </a>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {/* Terrace */}
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={terrace1}
                  alt="Terrace and roof waterproofing"
                  width="960"
                  height="640"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  01
                </span>

                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  Terrace & Roof Leakage
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  Address terrace cracks, water entry, damaged waterproofing layers,
                  ponding-related problems and leakage affecting rooms below.
                </p>
              </div>
            </article>

            {/* External walls */}
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={externalcracks2}
                  alt="Exterior wall repair and waterproofing"
                  width="960"
                  height="640"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-600">
                  02
                </span>

                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  External Cracks & Seepage
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  Treat external wall cracks, rainwater penetration, damp patches,
                  open joints and other areas where water can enter from outside.
                </p>
              </div>
            </article>

            {/* Paint peeling */}
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={paintpeeling3}
                  alt="Wall repair and peeling paint treatment"
                  width="960"
                  height="640"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                  03
                </span>

                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  Paint Peeling & Damp Walls
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  Dampness, bubbling and peeling paint can be symptoms of moisture
                  entering the wall. We focus on the moisture problem before
                  finishing repairs.
                </p>
              </div>
            </article>

            {/* Bathroom */}
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={bathroomleakage4}
                  alt="Bathroom waterproofing and leakage protection"
                  width="960"
                  height="640"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                  04
                </span>

                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  Bathroom Leakage
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  Bathroom seepage can involve wet-area surfaces, joints, drains,
                  concealed plumbing or waterproofing failures. We investigate the
                  affected area before selecting the treatment.
                </p>
              </div>
            </article>

            {/* Crack treatment */}
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={crackandjoint}
                  alt="Construction and crack repair work"
                  width="960"
                  height="640"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  05
                </span>

                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  Crack & Joint Treatment
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  Identify and treat vulnerable cracks, joints and penetration points
                  that can allow water to travel into walls, roofs and other
                  building surfaces.
                </p>
              </div>
            </article>

            {/* General seepage */}
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={seepagewaterignress6}
                  alt="Modern home protected from water and moisture"
                  width="960"
                  height="640"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-600">
                  06
                </span>

                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  Seepage & Water Ingress
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  From hidden dampness to recurring water ingress, our approach is
                  built around understanding the affected area and choosing the
                  appropriate repair solution.
                </p>
              </div>
            </article>

          </div>

          {/* Final CTA */}
          <div className="mt-12 overflow-hidden rounded-3xl bg-[#211d57]">
            <div className="grid items-center gap-6 px-6 py-8 sm:px-10 sm:py-10 lg:grid-cols-[1fr_auto] lg:px-12">

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                  Have a leakage problem?
                </p>

                <h3 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                  Let us find the source before we fix the surface.
                </h3>

                <p className="mt-3 max-w-4xl text-sm leading-6 text-blue-100 sm:text-base">
                  Book an inspection to understand the affected area and discuss
                  the right waterproofing approach for your property.
                </p>
              </div>

              <button
                type="button"
                onClick={()=>navigate('/contact')}
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#211d57] transition hover:bg-blue-50"
              >
                Book an Inspection
                <span className="ml-2">→</span>
              </button>

            </div>
          </div>

        </div>
      </section>


      <section className="bg-white py-14 sm:py-18 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-4xl text-center">
            <span className="mb-4 inline-flex !rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 
            text-xs font-semibold uppercase tracking-wider text-blue-700 sm:text-sm">
              Waterproofing services
            </span>
            <h2 className="!text-2xl font-extrabold leading-tight text-slate-900 sm:!text-4xl lg:!text-6xl">
              Practical protection for every part of your property
            </h2>
            <p className="mx-auto mt-4 max-w-6xl !text-base leading-7 text-slate-600 sm:!text-lg">
              Find the right starting point for your repair, from locating hidden leaks to
              protecting roofs, wet areas, and walls from recurring moisture.
            </p>
          </div>

          {/* <div className="mt-8 flex justify-end gap-3 sm:mt-10">
            <button
              type="button"
              onClick={() => scrollServices(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-blue-700 shadow-sm transition-colors hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              aria-label="Show previous services"
            >
              <ChevronLeft size={21} strokeWidth={2.25} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollServices(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-blue-700 shadow-sm transition-colors hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              aria-label="Show more services"
            >
              <ChevronRight size={21} strokeWidth={2.25} aria-hidden="true" />
            </button>
          </div> */}

          <div ref={serviceRailRef} className="mt-4 grid grid-flow-col auto-cols-[86%] gap-4 overflow-x-auto pb-2 snap-x snap-mandatory sm:auto-cols-[48%] lg:grid-flow-row lg:grid-cols-4 lg:auto-cols-auto lg:overflow-visible">
            {serviceHighlights.map((service) => (
              <article
                key={service.title}
                className="snap-start rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-lg sm:p-7"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 text-blue-700">
                  {service.icon}
                </div>
                <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-blue-700">
                  {service.eyebrow}
                </p>
                <h3 className="mt-2 !text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="mt-4 !text-base leading-6 text-slate-500">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>


      <section className="bg-slate-50 py-12 sm:py-20 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs sm:text-sm font-semibold text-pink-700 bg-pink-100 rounded-full">
              Our Work
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Real Waterproofing,{' '}
              <span className="!text-gray-900 bg-clip-text text-transparent">
                Results
              </span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed">
              See how we have transformed homes and protected them from leaks, seepage,
              and moisture damage with our expert waterproofing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {results.map((item, i) => (
              <article
                key={i}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="h-full w-full object-contain"
                  />
                  <span className="absolute left-4 top-4 rounded-md bg-indigo-700 px-3 py-1.5 text-xs font-semibold text-white">
                    {item.stat}
                  </span>
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="!text-lg font-bold text-gray-900 sm:!text-xl">{item.title}</h3>
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-gray-500">
                    {/* <svg className="h-4 w-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg> */}
                    {item.location}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div ref={statsSectionRef} className="mt-10 grid grid-cols-2 overflow-hidden rounded-xl bg-indigo-950 sm:grid-cols-4">
            {impactStats.map((stat, index) => (
              <div
                key={stat.label}
                className="border-b border-indigo-800 px-4 py-6 text-center last:border-b-0 sm:border-b-0 sm:border-r sm:px-5 sm:last:border-r-0 lg:py-7"
              >
                <div className="!text-2xl font-extrabold text-white sm:!text-3xl lg:!text-4xl">
                  {stat.decimals ? countedStats[index].toFixed(stat.decimals) : Math.round(countedStats[index]).toLocaleString()}
                  {stat.suffix}
                </div>
                <div className="mt-1 !text-xs font-medium text-indigo-200 sm:!text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-16 sm:py-20 lg:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center !mb-4 lg:mb-8">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs sm:text-sm font-semibold text-indigo-700 bg-indigo-100 rounded-full">
              Have Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Frequently Asked{' '}
              <span className="bg-clip-text text-transparent !text-gray-900">
                Questions
              </span>
            </h2>
            <p className="mt-2 text-base sm:text-lg text-gray-600 leading-relaxed">
              Everything you need to know about our waterproofing services, warranties, and
              process.
            </p>
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className={`rounded-2xl border transition-colors duration-200 ${isOpen
                        ? 'border-indigo-200 bg-indigo-50'
                        : 'border-gray-200 bg-white hover:border-indigo-200'
                      }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-5"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base sm:text-lg font-semibold text-gray-900 pr-2">
                        {faq.question}
                      </span>
                      <span
                        className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${isOpen
                          ? 'border-indigo-900 bg-indigo-900 text-white rotate-45'
                          : 'bg-gray-100 text-gray-600'
                          }`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                        </svg>
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                    >
                      <p className="px-5 sm:px-6 pb-5 text-sm sm:text-base text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="w-full">
              <img
                src={waterprooffaq}
                alt="Waterproofing specialist answering customer questions"
                width="1100"
                height="619"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 1023px) 100vw, 36vw"
                className="mx-auto block h-auto w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Bottom Help CTA */}
          <div className="mt-12 rounded-2xl bg-indigo-700 p-6 text-center text-white sm:p-8">
            <h3 className="mb-2 text-xl font-bold sm:text-2xl">Still have questions?</h3>
            <p className="!mb-6 text-sm text-indigo-100 sm:text-base">
              Our team is here to help. Reach out for a free consultation.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="tel:+91 9666587727"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-indigo-700 transition-colors hover:bg-indigo-50"
              >
                <Phone size={18} aria-hidden="true" />
                Call +91 9666587727
              </a>
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center justify-center rounded-lg border border-white/40 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Send a message
              </button>
            </div>
          </div>
        </div>
      </section>

     
      {/* Testimonials */}
      <section className="bg-slate-50 py-14 sm:py-18 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 text-left lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full !mb-2 border border-blue-100 bg-white 
              px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 sm:text-sm">
                Customer Reviews
              </span>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Trusted by Homeowners
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Hear from customers who trusted us to identify and solve their
                leakage, seepage and waterproofing problems.
              </p>
            </div>

            <p className="text-sm font-semibold text-slate-500 lg:pb-1">
              Real experiences. Thoughtful repairs.
            </p>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <article className="flex h-full flex-col rounded-lg border border-slate-200 border-t-2 border-t-blue-600 bg-white p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-7">
              <div className="flex items-center gap-1 text-amber-500" role="img" aria-label="5 out of 5 stars">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>

              <blockquote className="mt-5 flex-1 text-sm leading-7 text-slate-600 sm:text-base">
                “We had recurring dampness on our bedroom wall even after several
                repairs. The inspection helped identify the moisture-affected area
                and the team recommended the right waterproofing treatment. The
                entire process was clear and professional.”
              </blockquote>

              <div className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                  RK
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Rajesh Kumar</h3>
                  <p className="text-xs text-slate-500">Homeowner</p>
                </div>
              </div>
            </article>

            <article className="flex h-full flex-col rounded-lg border border-slate-200 border-t-2 border-t-cyan-500 bg-white p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-7">
              <div className="flex items-center gap-1 text-amber-500" role="img" aria-label="5 out of 5 stars">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>

              <blockquote className="mt-5 flex-1 text-sm leading-7 text-slate-600 sm:text-base">
                “Our terrace was developing leakage during heavy rain. Instead of
                simply applying another coating, the team inspected the terrace,
                checked the affected areas and explained the repair process before
                starting the waterproofing work.”
              </blockquote>

              <div className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-sm font-bold text-cyan-700">
                  PS
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Priya Sharma</h3>
                  <p className="text-xs text-slate-500">Homeowner</p>
                </div>
              </div>
            </article>

            <article className="flex h-full flex-col rounded-lg border border-slate-200 border-t-2 border-t-indigo-500 bg-white p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-7">
              <div className="flex items-center gap-1 text-amber-500" role="img" aria-label="5 out of 5 stars">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>

              <blockquote className="mt-5 flex-1 text-sm leading-7 text-slate-600 sm:text-base">
                “We noticed seepage around our bathroom and were not sure whether
                the problem was from the plumbing or waterproofing. The team
                investigated the area carefully and explained the possible cause
                before recommending the repair.”
              </blockquote>

              <div className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">
                  RJ
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Rahul Vijay</h3>
                  <p className="text-xs text-slate-500">Homeowner</p>
                </div>
              </div>
            </article>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-7 text-left sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                Have a leakage or seepage problem?
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Let us inspect the affected area and help identify the right solution.
              </p>
            </div>

            <button
              type="button"
              onClick={()=>navigate('/contact')}
              className="inline-flex w-fit shrink-0 items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-800"
            >
              Book an Inspection
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </section>



      <Footer />
    </>
  );
}