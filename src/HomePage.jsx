import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarPage from './NavbarPage';
import Footer from './Footer';
import { Phone } from 'lucide-react';
import waterprooffaq from './assets/waterprooffaq.png';
import houseinteriorandexterior from './assets/houseinteriorandexteriorbanner.webp';
import housemarblesbanner from './assets/housemarblesbanner.webp';
import waterproofBanner from './assets/waterprroftoproofbanner.webp';
import houseElectricalbanner from './assets/electricalbanner.webp';
import dryimage from './assets/dryimage.webp';
import dryimage1 from './assets/dryimage1.webp';
import dryimage2 from './assets/dryimage2.webp';

const slides = [
  {
    url: waterproofBanner,
    alt: 'Waterproofing & Roof Repair',
  },
  {
    url: houseinteriorandexterior,
    alt: 'Modern Interior Design',
  },
  {
    url: houseElectricalbanner,
    alt: 'Electrical Wiring & Repair',
  },
  {
    url: housemarblesbanner,
    alt: 'Tiles & Stone Work',
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
    title: 'Bathroom Seepage Fix',
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
  { value: 10000, suffix: '+', label: 'Happy Customers' },
  { value: 25000, suffix: '+', label: 'Projects Completed' },
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
  const [openFaq, setOpenFaq] = useState(0);
  const [countedStats, setCountedStats] = useState(impactStats.map(() => 0));
  const [statsVisible, setStatsVisible] = useState(false);
  const statsSectionRef = useRef(null);

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
  const serviceRailRef = useRef(null);

  // const scrollServices = (direction) => {
  //   serviceRailRef.current?.scrollBy({ left: direction * 340, behavior: 'smooth' });
  // };

  return (
    <>
      <NavbarPage />

    
      <section className="relative min-h-[calc(100vh-5rem)] w-full overflow-hidden ">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
          >
            <img
              src={slide.url}
              alt={slide.alt}
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : 'auto'}
              decoding="async"
              sizes="100vw"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-950/55" />
          </div>
        ))}

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-5 py-10 sm:px-8 lg:px-10">
          <div className="max-w-3xl text-center sm:text-left">
            <span className="inline-flex rounded-full border border-white/40 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white sm:text-sm">
              Trusted by 10,000+ homeowners
            </span>

            <h1 className="mt-5 !text-4xl font-extrabold leading-tight !text-white sm:!text-5xl lg:!text-5xl">
              Reliable waterproofing for a stronger, safer home.
            </h1>

            <p className="mt-6 max-w-2xl !text-lg font-semibold leading-7 text-white/85 sm:!text-lg">
              Protect your home from leaks, seepage, and moisture damage with dependable
              waterproofing solutions built to last.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-7 sm:text-base"
              >
                Book an inspection
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              <a
                href="tel:+919988776655"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/60 bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-7 sm:text-base"
              >
                Call us
              </a>
            </div>

            <div className="mt-4 font-semibold flex flex-wrap justify-center gap-x-5 gap-y-2 text-lg !text-white/80 sm:justify-start">
              {['10-year warranty', 'Certified experts', 'Money-back guarantee'].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-300 " />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <span className="absolute bottom-5 right-5 z-20 rounded-md bg-black/45 px-3 py-1.5 text-xs text-white sm:right-8">
          {slides[currentSlide].alt}
        </span>

        <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
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
                    className={`rounded-2xl border transition-colors duration-200 ${
                      isOpen
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
                href="tel:+919988776655"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-indigo-700 transition-colors hover:bg-indigo-50"
              >
                <Phone size={18} aria-hidden="true" />
                Call +91 9988776655
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

      <Footer />
    </>
  );
}