import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, LayoutGrid, Phone } from 'lucide-react';
import NavbarPage from '../NavbarPage';
import Footer from '../Footer';
import { getServiceImage as img } from './serviceImages.js';

const chips = ['Vitrified tiles', 'Ceramic tiles', 'Marble', 'Granite', 'Kota stone'];

const rooms = [
  {
    title: 'Living room floors',
    image: img('1600607687939-ce8a6c25118c'),
    alt: 'Living room with a polished tile floor',
    tile: 'Large vitrified tiles',
    text: 'Big 2x2 or 2x4 feet vitrified tiles mean fewer joints, a clean look and easy mopping. Light shades make the room feel larger.',
  },
  {
    title: 'Kitchen',
    image: img('1556909114-f6e7ad7d3136'),
    alt: 'Kitchen with tiled backsplash',
    tile: 'Matt floor, glossy wall',
    text: 'A matt anti-skid floor stays safe when wet, while a glossy backsplash wipes clean of oil and splashes in seconds.',
  },
  {
    title: 'Bathroom',
    image: img('1584622650111-993a426fbf0a'),
    alt: 'Bathroom with wall and floor tiles',
    tile: 'Anti-skid ceramic',
    text: 'Textured floor tiles prevent slips, and full-height wall tiles protect the plaster. Proper waterproofing sits below both.',
  },
  {
    title: 'Balcony and terrace',
    image: img('1613490493576-7fde63acd811'),
    alt: 'Outdoor terrace with tiled flooring',
    tile: 'Outdoor heat-resistant',
    text: 'Outdoor tiles handle sun, rain and dust without fading. A slight slope guides water to the drain.',
  },
  {
    title: 'Bedrooms',
    image: img('1522708323590-d24dbb6b0267'),
    alt: 'Bedroom with a wooden-look tile floor',
    tile: 'Wooden-look tiles',
    text: 'Wood-effect tiles bring a warm, natural feel without the upkeep of real timber, and they never warp or fade.',
  },
];

const stones = [
  { name: 'Marble', image: img('1618221195710-dd6b41faaea6'), alt: 'Marble floor interior', durability: 3, care: 2, text: 'Elegant veining and a bright, luxurious finish. It needs regular polishing and can stain from acids like lemon.' },
  { name: 'Granite', image: img('1560448204-e02f11c3d0e2'), alt: 'Granite surface in a home', durability: 5, care: 4, text: 'Very hard and stain-resistant. A top choice for kitchen counters, stairs and high-traffic areas.' },
  { name: 'Kota stone', image: img('1502672260266-1c1ef2d93688'), alt: 'Stone-style floor', durability: 4, care: 4, text: 'A natural, cool stone that suits large floors, parking areas and traditional homes. Affordable and long-lasting.' },
  { name: 'Sandstone', image: img('1568605114967-8130f3a36994'), alt: 'Sandstone exterior wall', durability: 4, care: 3, text: 'Warm earthy tones with a natural grain, popular for outdoor walls, paths and cladding.' },
];

const finishes = [
  { name: 'Glossy', swatch: 'bg-slate-100', best: 'Living rooms and feature walls', note: 'Shows water marks and can be slippery when wet.' },
  { name: 'Matt', swatch: 'bg-stone-300', best: 'Bedrooms and kitchens', note: 'Hides dust and footprints, and feels calmer to the eye.' },
  { name: 'Anti-skid', swatch: 'bg-slate-400', best: 'Bathrooms, balconies and steps', note: 'Textured surface is safest, but needs a brush to clean.' },
  { name: 'Wooden-look', swatch: 'bg-amber-700', best: 'Living rooms and bedrooms', note: 'Warm look, no polishing. Choose a good quality print.' },
];

const steps = [
  { title: 'Surface check and preparation', text: 'We inspect the floor or wall, fix cracks and level uneven areas so tiles sit flat.' },
  { title: 'Waterproofing (wet areas)', text: 'Bathrooms, balconies and terraces get a proper membrane before any tile is laid.' },
  { title: 'Layout and marking', text: 'We plan the pattern so cuts fall in less visible places and lines stay straight.' },
  { title: 'Laying with quality adhesive', text: 'Tiles are fixed with the right adhesive and spacers to avoid hollow spots and lifting.' },
  { title: 'Grouting and curing', text: 'Joints are filled with matching grout, then left to cure so they stay firm.' },
  { title: 'Cleaning and handover', text: 'We polish, clean the site and walk you through the finished work.' },
];

function Photo({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`flex items-center justify-center bg-indigo-50 text-indigo-700 ${className}`}>
        <LayoutGrid size={36} aria-hidden="true" />
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      width="900"
      height="675"
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}

function Dots({ value, label }) {
  return (
    <div className="flex items-center gap-2 text-xs text-slate-600">
      <span className="w-20">{label}</span>
      <span className="flex gap-1" role="img" aria-label={`${value} out of 5`}>
        {[1, 2, 3, 4, 5].map((n) => (
          <span key={n} className={`h-2.5 w-2.5 rounded-full ${n <= value ? 'bg-indigo-700' : 'bg-indigo-100'}`} />
        ))}
      </span>
    </div>
  );
}

export default function TailesandStonesPage() {
  return (
    <>
      <NavbarPage />

      <main className="w-full text-left">
        {/* Section 1: split hero */}
        <section className="border-b border-indigo-100 bg-[#f7f5fb]">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-12 md:grid-cols-2 md:gap-10 lg:px-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Tiles and stones that make your home look great
              </h1>
              <p className="mt-3 text-lg leading-7 text-slate-600">
                Floors, walls, bathrooms, kitchens and outdoor areas all need the right surface. We help you choose
                the right tile or stone and fit it neatly, so it looks good and lasts for years.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {chips.map((chip) => (
                  <li key={chip} className="rounded-lg border border-indigo-200 bg-white px-3 py-1.5 text-lg font-medium text-indigo-700">
                    {chip}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-700 px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700"
                >
                  Get a free quote <ArrowRight size={17} aria-hidden="true" />
                </Link>
                <a
                  href="tel:+919988776655"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-indigo-200 bg-white px-6 py-3 text-lg font-semibold text-indigo-700 transition-colors hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700"
                >
                  <Phone size={17} aria-hidden="true" /> Call us
                </a>
              </div>
            </div>
            <Photo src={img('1600210492486-724fe5c67fb0')} alt="Home interior with a clean tile floor" className="aspect-[4/3] w-full rounded-xl" />
          </div>
        </section>

        {/* Section 2: horizontal scroll cards */}
        <section id="rooms" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">The right tile for every room</h2>
            <p className="mt-2 max-w-3xl text-lg leading-7 text-slate-600">
              Each part of the house has different needs. Swipe through to see what works best where.
            </p>

            <ul
              tabIndex={0}
              aria-label="Tiles by room, scroll horizontally"
              className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3"
            >
              {rooms.map((room) => (
                <li key={room.title} className="w-72 shrink-0 snap-start overflow-hidden rounded-xl border border-indigo-100 bg-white sm:w-80">
                  <Photo src={room.image} alt={room.alt} className="aspect-[3/2] w-full" />
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-slate-900">{room.title}</h3>
                    <p className="mt-1 text-lg font-medium text-indigo-700">{room.tile}</p>
                    <p className="mt-2 text-lg leading-6 text-slate-600">{room.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 3: stone guide rows with ratings */}
        <section id="stones" className="bg-[#f7f5fb]">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Natural stone guide</h2>
            <p className="mt-2 max-w-3xl text-lg leading-7 text-slate-600">
              Stone gives a home a rich, lasting character. Here is how the popular choices compare.
            </p>

            <ul className="mt-6 space-y-4">
              {stones.map((stone) => (
                <li key={stone.name} className="grid overflow-hidden rounded-xl border border-indigo-100 bg-white sm:grid-cols-[200px_1fr]">
                  <Photo src={stone.image} alt={stone.alt} className="aspect-[16/9] w-full sm:aspect-auto sm:h-full" />
                  <div className="grid gap-4 p-5 md:grid-cols-[1fr_auto] md:items-center">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{stone.name}</h3>
                      <p className="mt-1 text-lg leading-6 text-slate-600">{stone.text}</p>
                    </div>
                    <div className="space-y-1.5">
                      <Dots value={stone.durability} label="Durability" />
                      <Dots value={stone.care} label="Easy care" />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 4: finish comparison cards */}
        <section id="finishes" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Choosing the right finish</h2>
              <p className="mt-2 text-lg leading-7 text-slate-600">
                The finish changes how a tile looks, feels and behaves. Pick by room, not just by colour.
              </p>
            </div>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {finishes.map((finish) => (
                <li key={finish.name} className="rounded-xl border border-indigo-100 p-5">
                  <div className={`h-14 rounded-lg ring-1 ring-slate-900/10 ${finish.swatch}`} aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{finish.name}</h3>
                  <p className="mt-2 flex items-start gap-2 text-lg text-slate-700">
                    <Check size={16} className="mt-0.5 shrink-0 text-indigo-700" aria-hidden="true" />
                    <span><span className="font-medium">Best for:</span> {finish.best}</span>
                  </p>
                  <p className="mt-2 text-lg leading-6 text-slate-600">{finish.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 5: timeline + contact card */}
        <section id="process" className="border-t border-indigo-100 bg-indigo-50">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-5 lg:gap-10 lg:px-8">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">How we lay your tiles</h2>
              <p className="mt-2 text-lg leading-7 text-slate-600">
                Good tiling is mostly about preparation. These steps are why our floors stay flat and firm.
              </p>
              <ol className="mt-6 space-y-5 border-l-2 border-indigo-200 pl-6">
                {steps.map((step, i) => (
                  <li key={step.title} className="relative">
                    <span className="absolute -left-[37px] flex h-7 w-7 items-center justify-center rounded-full bg-indigo-700 text-xs font-semibold text-white ring-4 ring-indigo-50">
                      {i + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                    <p className="mt-1 text-lg leading-6 text-slate-600">{step.text}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="self-start overflow-hidden rounded-xl border border-indigo-100 bg-white lg:col-span-2">
              <Photo src={img('1600585154340-be6161a56a0c')} alt="Finished home with neat tile work" className="aspect-[3/2] w-full" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900">Planning new tiles or stone?</h3>
                <p className="mt-2 text-lg leading-6 text-slate-600">
                  Tell us the rooms and rough sizes. We’ll visit, suggest materials and give a clear quote.
                </p>
                <Link
                  to="/contact"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-700 px-5 py-3 text-lg font-semibold text-white transition-colors hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700"
                >
                  Request a site visit <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
