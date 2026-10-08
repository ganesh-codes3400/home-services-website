import {
  ArrowRight,
  Check,
  Droplets,
  Home,
  Layers3,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarPage from './NavbarPage';
import Footer from './Footer';
import waterproofImage from './assets/waterproofabout1.webp';
import intriorandexteriorImage from './assets/aboutinteriorandexterior.webp';
import houseElectricalImage from './assets/aboutelectricalimage.webp';
import houseMarblesStonesIamge from './assets/abouthousetailsandstonesimage.webp';
import allmixImage from './assets/allmiximage.webp';
const services = [
  {
    number: '01',
    href: '/services/waterproofing',
    icon: Droplets,
    label: 'Waterproofing',
    title: 'Waterproofing & thermal inspection',
    description: 'Verified civil engineers assess the structure, investigate hidden moisture, and guide repairs for leakage, seepage, and dampness.',
    points: ['Civil engineer site visit', 'Thermal moisture inspection', 'Terrace, bathroom, and wall protection'],
    image: waterproofImage,
    accent: 'text-blue-700',
    iconBg: 'bg-blue-50',
    badge: 'bg-blue-700',
  },
  {
    number: '02',
    href: '/services/interior',
    icon: Home,
    label: 'Property finishing',
    title: 'Interior & exterior works',
    description: 'Refresh and protect your property with coordinated finishing, repair, and renovation work.',
    points: ['Interior painting and finishing', 'False ceiling and POP work', 'Exterior texture and repairs'],
    image: intriorandexteriorImage,
    accent: 'text-violet-700',
    iconBg: 'bg-violet-50',
    badge: 'bg-violet-700',
  },
  {
    number: '03',
    href: '/services/electrical',
    icon: Zap,
    label: 'Power & safety',
    title: 'Electrical wiring & EV solutions',
    description: 'Handle new wiring, upgrades, lighting, repairs, and EV-ready connections with safety in mind.',
    points: ['New wiring and rewiring', 'Panels, switches, and lighting', 'EV charger preparation'],
    image: houseElectricalImage,
    accent: 'text-amber-700',
    iconBg: 'bg-amber-50',
    badge: 'bg-amber-600',
  },
  {
    number: '04',
    href: '/services/tiles-stones',
    icon: Layers3,
    label: 'Surfaces & finish',
    title: 'Tiles & stone works',
    description: 'Create clean, level, durable surfaces for kitchens, bathrooms, floors, walls, and outdoor areas.',
    points: ['Floor and wall tile installation', 'Marble and granite work', 'Repair and replacement'],
    image: houseMarblesStonesIamge,
    accent: 'text-emerald-700',
    iconBg: 'bg-emerald-50',
    badge: 'bg-emerald-700',
  },
];

const process = [
  { number: '01', title: 'Understand', description: 'We listen, inspect the property, and identify the work that matters most.' },
  { number: '02', title: 'Plan', description: 'You receive a practical scope, clear recommendations, and an honest estimate.' },
  { number: '03', title: 'Deliver', description: 'Our team completes the work carefully and keeps you updated through handover.' },
];

const promises = ['Clear communication', 'Experienced professionals', 'Quality-focused work', 'Reliable follow-up'];

const aboutStats = [
  { value: 10, suffix: '+', label: 'Years on the job' },
  { value: 2000, suffix: '+', label: 'Homes served' },
  { value: 4, suffix: '', label: 'Core services' },
  { value: 100, suffix: '%', label: 'Money-back promise' },
];

export default function AboutusPage() {
  const [visibleStats, setVisibleStats] = useState(aboutStats.map(() => 0));
  const statsRef = useRef(null);

  useEffect(() => {
    const statsElement = statsRef.current;
    if (!statsElement) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const start = performance.now();
        const duration = 1200;
        let frame;

        const animate = (time) => {
          const progress = Math.min((time - start) / duration, 1);
          const eased = 1 - (1 - progress) ** 3;
          setVisibleStats(aboutStats.map((stat) => stat.value * eased));
          if (progress < 1) frame = requestAnimationFrame(animate);
        };

        frame = requestAnimationFrame(animate);
        observer.disconnect();
        return () => cancelAnimationFrame(frame);
      }
      return undefined;
    }, { threshold: 0.3 });

    observer.observe(statsElement);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-white text-slate-900">
      <NavbarPage />
      <main>
        <section className="border-b border-slate-200 bg-slate-50 text-left">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
  {/* Left: Text */}
  <div>
    <h1 className="max-w-xl text-3xl font-bold !mt-2 leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
      Property care that starts with clear advice.
      <span className="block text-indigo-700">And ends with work you can trust.</span>
    </h1>

    <p className="mt-2 max-w-md text-lg leading-7 text-slate-600">
      We bring waterproofing, interiors, electrical work, and stone finishes
      together so improving your property feels simple and well managed.
    </p>

    <div className="mt-6 flex flex-wrap items-center gap-4">
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 !rounded-full bg-indigo-700 px-5 py-3 text-sm
         font-semibold text-white transition-colors hover:bg-indigo-800"
      >
        Talk to us
        <ArrowRight size={16} aria-hidden="true" />
      </Link>

      <a
        href="#services"
        className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-indigo-700 hover:decoration-indigo-400"
      >
        View our services
      </a>
    </div>
  </div>

  {/* Right: Image card */}
  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
    <img
      src={allmixImage}
      alt="Finished residential property interior"
      width="1536"
      height="1024"
      fetchPriority="high"
      decoding="async"
      className="block h-auto w-full"
    />
    <div className="border-t border-slate-100 px-5 py-4">
      <p className="text-sm font-semibold leading-6 text-slate-600">
        We coordinate the practical work that keeps homes safe, comfortable,
        and finished well.
      </p>
    </div>
  </div>
</div>

            <div ref={statsRef} className="mt-10 grid grid-cols-2 gap-4 border-y border-slate-200 py-6 sm:grid-cols-4">
              {aboutStats.map((stat, index) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <p className="text-2xl font-bold text-indigo-700 sm:text-3xl">{Math.round(visibleStats[index]).toLocaleString()}{stat.suffix}</p>
                  <p className="mt-1 text-xs text-slate-500 sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

           <div className="mt-10 grid gap-5 lg:grid-cols-3">
  {[
    {
      title: 'Our mission',
      text: 'Make property care simple to understand: inspect honestly, explain clearly, and fix it right the first time.',
      tone: 'bg-white',
      accent: 'bg-indigo-600',
      iconBg: 'bg-indigo-50 text-indigo-700',
      iconHover: 'group-hover:bg-indigo-600 group-hover:text-white',
      titleColor: 'text-slate-900',
      textColor: 'text-slate-600',
    },
    {
      title: 'Our vision',
      text: 'Build a local standard where every homeowner knows who to call and what to expect.',
      tone: 'bg-white',
      accent: 'bg-pink-600',
      iconBg: 'bg-pink-50 text-pink-700',
      iconHover: 'group-hover:bg-pink-500 group-hover:text-white',
      titleColor: 'text-slate-900',
      textColor: 'text-slate-600',
    },
    {
      title: 'Our values',
      text: 'Be honest, work carefully, communicate openly, and stay accountable after the job is complete.',
      tone: 'bg-white',
      accent: 'bg-emerald-600',
      iconBg: 'bg-emerald-50 text-emerald-700',
      iconHover: 'group-hover:bg-emerald-600 group-hover:text-white',
      titleColor: 'text-slate-900',
      textColor: 'text-slate-600',
    },
  ].map((card) => (
    <article
      key={card.title}
      className={`group relative overflow-hidden rounded-2xl border border-slate-200 p-6 text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-xl ${card.tone}`}
    >
     
      <span
        className={`absolute left-0 top-0 h-1 w-full ${card.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />

      
      <span
        className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full ${card.accent} opacity-[0.06] transition-transform duration-500 group-hover:scale-150`}
      />

      <div className="relative">
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 ${card.iconBg} ${card.iconHover}`}
        >
          <Check size={20} aria-hidden="true" />
        </span>

        <h2 className={`mt-5 text-lg font-bold tracking-tight ${card.titleColor}`}>
          {card.title}
        </h2>

        <p className={`mt-2 text-lg leading-6 ${card.textColor}`}>
          {card.text}
        </p>
      </div>
    </article>
  ))}
</div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
          <div className="mb-8 max-w-7xl">
            <span className="text-xl font-bold uppercase tracking-wider text-indigo-700">What we do</span>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">Our services. One dependable standard.</h2>
            <p className="mt-3 text-lg leading-6 text-slate-600 sm:text-base">Choose the service you need or speak with us about a complete property project.</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.number} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                  <div className="grid">
                    <img src={service.image} alt={service.title} loading="lazy" decoding="async" className="block h-auto w-full" />
                    <div className="p-5 text-left sm:p-6">
                      <div className="flex items-center justify-between">
                        <span className={`flex h-10 w-10 items-center justify-center rounded-lg ${service.iconBg} ${service.accent}`}><Icon size={21} aria-hidden="true" /></span>
                        <span className="text-xs font-bold tracking-widest text-slate-400">{service.number}</span>
                      </div>
                      <p className={`mt-4 text-xs font-bold uppercase tracking-wider ${service.accent}`}>{service.label}</p>
                      <h3 className="mt-2 text-xl font-bold leading-tight text-slate-900">{service.title}</h3>
                      <p className="mt-3 text-lg leading-6 text-slate-600">{service.description}</p>
                      <ul className="mt-4 space-y-2">
                        {service.points.map((point) => <li key={point} className="flex items-start gap-2 text-sm font-semibold text-slate-700"><Check size={16} className={`mt-0.5 shrink-0 ${service.accent}`} aria-hidden="true" />{point}</li>)}
                      </ul>
                      <Link to={service.href} className={`mt-5 inline-flex items-center gap-2 rounded-lg ${service.badge} px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90`}>Enquire now <ArrowRight size={16} aria-hidden="true" /></Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
              <div className='mt-8'>
                <span className="text-xl font-bold uppercase tracking-wider text-indigo-700">How we work</span>
                <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">A simple path from question to completion.</h2>
                <p className="mt-3 text-lg font-semibold leading-6 text-slate-600 sm:text-base">Clear steps, practical decisions, and no unnecessary runaround for you or your property.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {process.map((step) => <article key={step.number} className="rounded-xl border border-slate-200 bg-white p-5">
                    <span className="text-lg font-bold text-indigo-700">{step.number}</span>
                <h3 className="mt-3 text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-lg  leading-6 text-slate-600">{step.description}</p></article>)}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:items-center lg:px-10">
            <div>
              <span className="text-xl font-bold uppercase tracking-wider text-indigo-700">Why choose us</span>
              <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">Good work should feel straightforward.</h2>
              <p className="mt-3 max-w-xl text-lg leading-6 text-slate-600 sm:text-base">We keep communication direct, work carefully, and make it easy to know what happens next.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {promises.map((promise) => <div key={promise} className="flex items-center gap-2 text-lg font-medium text-slate-700"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-100 text-indigo-700"><Check size={12} aria-hidden="true" /></span>{promise}</div>)}
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <ShieldCheck className="text-indigo-700" size={28} aria-hidden="true" />
              <h3 className="mt-4 text-xl font-bold text-slate-900 sm:text-2xl">Have a property project in mind?</h3>
              <p className="mt-3 text-lg leading-6 text-slate-600">Tell us what needs attention and we will help you choose the right service.</p>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-indigo-700 px-5 py-3 text-lg font-semibold text-white transition-colors hover:bg-indigo-800">Contact our team <ArrowRight size={17} aria-hidden="true" /></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
