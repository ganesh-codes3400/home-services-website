import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Paintbrush } from 'lucide-react';
import NavbarPage from '../NavbarPage';
import Footer from '../Footer';
import { getServiceImage as img } from './serviceImages.js';

const interiorThemes = [
  {
    tab: 'Living room',
    title: 'Warm and welcoming living room',
    image: img('1600607687939-ce8a6c25118c'),
    alt: 'Bright modern living room',
    text: 'The living room is where the family gathers, so comfort comes first. We pair soft neutral walls with a feature wall, a false ceiling with concealed lighting and a TV unit that keeps wires out of sight. Furniture is planned around how you actually sit, talk and entertain, so the room feels open, tidy and easy to live in every day.',
    points: ['Feature wall with texture or panelling', 'False ceiling with warm cove lights', 'Built-in TV unit and display storage'],
  },
  {
    tab: 'Bedroom',
    title: 'Calm and restful bedroom',
    image: img('1522708323590-d24dbb6b0267'),
    alt: 'Quiet bedroom with soft lighting',
    text: 'A bedroom should help you switch off. We use soft colours, a padded headboard wall and layered lighting that can be dimmed at night. Wardrobes run floor to ceiling to use every inch, and bedside storage keeps the space clear. The result is a quiet, well-organised room that feels like a retreat after a long day.',
    points: ['Padded or panelled headboard wall', 'Full-height sliding or hinged wardrobes', 'Dimmable bedside and ceiling lighting'],
  },
  {
    tab: 'Kitchen',
    title: 'Smart and easy-to-clean kitchen',
    image: img('1556909114-f6e7ad7d3136'),
    alt: 'Modern kitchen with clean cabinets',
    text: 'A good kitchen balances looks with everyday use. We plan the work triangle between stove, sink and fridge, then add moisture-resistant cabinets, a durable countertop and a backsplash that wipes clean in seconds. Deep drawers and pull-outs keep everything within reach, so cooking feels smooth rather than crowded.',
    points: ['Moisture-resistant modular cabinets', 'Easy-clean countertop and backsplash', 'Deep drawers and pull-out storage'],
  },
];

const exteriorDesigns = [
  {
    title: 'Modern minimal facade',
    image: img('1600585154340-be6161a56a0c'),
    alt: 'Modern house with clean lines',
    text: 'Clean lines, flat surfaces and a limited colour palette give the home a sharp, contemporary look that stays fresh for years.',
    tags: ['Weatherproof paint', 'Flat panels'],
  },
  {
    title: 'Textured wall finish',
    image: img('1568605114967-8130f3a36994'),
    alt: 'House with a textured exterior wall',
    text: 'Texture coats add depth and hide small surface marks, and they hold up well to sun, dust and monsoon rain.',
    tags: ['Texture coat', 'UV resistant'],
  },
  {
    title: 'Classic with stone cladding',
    image: img('1564013799919-ab600027ffc6'),
    alt: 'House with stone accents',
    text: 'Natural stone on the entrance or boundary wall gives a strong first impression, balanced with soft paint on the rest of the wall.',
    tags: ['Stone cladding', 'Entrance detail'],
  },
];

const finishes = [
  { title: 'Paint and texture', text: 'Low-odour interior paints and long-life exterior coatings, applied over properly prepared walls.' },
  { title: 'Panelling and false ceilings', text: 'Neat gypsum and wooden work that adds shape to a room and hides wiring and lights.' },
  { title: 'Woodwork and wardrobes', text: 'Custom cabinets, wardrobes and units built to fit your space and finished with care.' },
  { title: 'Lighting and decor', text: 'Layered lighting, curtains and small details that pull the whole design together.' },
];

const styles = [
  { title: 'Modern', sub: 'Clean lines, neutral tones', image: img('1618221195710-dd6b41faaea6'), alt: 'Modern interior with clean lines' },
  { title: 'Classic', sub: 'Rich wood and warm colour', image: img('1560448204-e02f11c3d0e2'), alt: 'Classic living room interior' },
  { title: 'Scandinavian', sub: 'Light, airy and simple', image: img('1502672260266-1c1ef2d93688'), alt: 'Bright Scandinavian style room' },
  { title: 'Minimalist', sub: 'Fewer things, more space', image: img('1584622650111-993a426fbf0a'), alt: 'Minimalist bathroom interior' },
  { title: 'Contemporary', sub: 'Bold accents, smart storage', image: img('1600210492486-724fe5c67fb0'), alt: 'Contemporary home interior' },
];

const steps = [
  { title: 'Consultation and site visit', time: 'Day 1 to 2', text: 'We listen to your needs, take measurements and understand your budget and style.' },
  { title: 'Design and planning', time: 'Week 1 to 2', text: 'You receive layouts, material choices and a clear cost plan before any work starts.' },
  { title: 'Execution and supervision', time: 'Week 3 onward', text: 'Skilled teams build the design while a supervisor keeps quality and timelines on track.' },
  { title: 'Handover and support', time: 'Final week', text: 'We do a final walkthrough with you, fix small details and stay available after handover.' },
];

function Photo({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`flex items-center justify-center bg-indigo-50 text-indigo-700 ${className}`}>
        <Paintbrush size={36} aria-hidden="true" />
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

export default function InteriorPage() {
  const [active, setActive] = useState(0);
  const theme = interiorThemes[active];

  return (
    <>
      <NavbarPage />

      <main className="w-full text-left">
        {/* Header */}
        <section className="border-b border-indigo-100 bg-[#f7f5fb]">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
            <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Interior and exterior design for homes that feel right
            </h1>
            <p className="mt-3 max-w-2xl text-lg leading-7 text-slate-600">
              From a calm bedroom to a confident front facade, we plan the design, materials and
              finishing together, so every room and every wall looks good and lasts.
            </p>
          </div>
        </section>

        {/* Section 1: tabs, image left, text right */}
        <section id="interior" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Interior design themes</h2>
            <p className="mt-2 max-w-3xl text-lg leading-7 text-slate-600">
              Choose a room to see how we approach layout, storage, lighting and finishes.
            </p>

            <div role="tablist" aria-label="Interior rooms" className="mt-6 inline-flex max-w-full overflow-x-auto rounded-lg border border-indigo-200 bg-white p-1">
              {interiorThemes.map((item, i) => (
                <button
                  key={item.tab}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  onClick={() => setActive(i)}
                  className={`whitespace-nowrap rounded-md px-4 py-2 text-lg font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-700 ${
                    i === active ? 'bg-indigo-700 text-white' : 'text-indigo-700 hover:bg-indigo-50'
                  }`}
                >
                  {item.tab}
                </button>
              ))}
            </div>

            <div role="tabpanel" className="mt-6 grid items-center gap-6 md:grid-cols-2 md:gap-10">
              <Photo key={theme.image} src={theme.image} alt={theme.alt} className="aspect-[4/3] w-full rounded-xl" />
              <div>
                <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">{theme.title}</h3>
                <p className="mt-3 text-lg leading-7 text-slate-600">{theme.text}</p>
                <ul className="mt-4 space-y-2">
                  {theme.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-lg text-slate-700 sm:text-lg">
                      <Check size={18} className="mt-0.5 shrink-0 text-indigo-700" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: card grid */}
        <section id="exterior" className="bg-[#f7f5fb]">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Exterior design ideas</h2>
            <p className="mt-2 max-w-3xl text-lg leading-7 text-slate-600">
              The outside of a home sets the first impression. These finishes look good and are built to handle sun, dust and heavy rain.
            </p>

            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {exteriorDesigns.map((item) => (
                <li key={item.title} className="overflow-hidden rounded-xl border border-indigo-100 bg-white">
                  <Photo src={item.image} alt={item.alt} className="aspect-[3/2] w-full" />
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-lg leading-6 text-slate-600">{item.text}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="rounded-md bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 3: split layout with list */}
        <section id="finishes" className="bg-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-12 md:grid-cols-5 md:gap-10 lg:px-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Finishes that complete the look</h2>
              <p className="mt-2 text-lg leading-7 text-slate-600">
                Good design is in the details. We handle the finishing work under one team, so colours, materials and timelines stay consistent.
              </p>
              <Photo
                src={img('1600210492486-724fe5c67fb0')}
                alt="Finished modern interior"
                className="mt-6 hidden aspect-[4/3] w-full rounded-xl md:block"
              />
            </div>

            <ol className="divide-y divide-indigo-100 rounded-xl border border-indigo-100 md:col-span-3">
              {finishes.map((item, i) => (
                <li key={item.title} className="flex gap-4 p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-lg font-semibold text-indigo-700">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-lg leading-6 text-slate-600">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Section 4: bento gallery of design styles */}
        <section id="styles" className="bg-[#f7f5fb]">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Popular design styles</h2>
              <p className="mt-2 text-lg leading-7 text-slate-600">
                Not sure what suits you? Browse a few styles we design most often. We can blend them to match your taste and your home.
              </p>
            </div>

            <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:auto-rows-[200px]">
              {styles.map((item, i) => (
                <li
                  key={item.title}
                  className={`relative overflow-hidden rounded-xl ${
                    i === 0
                      ? 'col-span-2 aspect-[16/10] md:aspect-auto md:row-span-2'
                      : i === 4
                        ? 'col-span-2 aspect-[16/8] md:aspect-auto'
                        : 'aspect-square md:aspect-auto'
                  }`}
                >
                  <Photo src={item.image} alt={item.alt} className="h-full w-full" />
                  <div className="absolute bottom-2.5 left-2.5 rounded-lg bg-white px-3 py-1.5 sm:bottom-3 sm:left-3">
                    <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                    <p className="hidden text-xs text-slate-600 sm:block">{item.sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 5: process steps */}
        <section id="process" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">How your project comes together</h2>
              <p className="mt-2 text-lg leading-7 text-slate-600">
                A clear four-step process, so you always know what is happening and what comes next.
              </p>
            </div>

            <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => (
                <li key={step.title} className="rounded-xl border border-indigo-100 bg-[#f7f5fb] p-5">
                  <div className="flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-700 text-lg font-semibold text-white">
                      {i + 1}
                    </span>
                    <span className="rounded-md bg-white px-2.5 py-1 text-xs font-medium text-indigo-700 ring-1 ring-indigo-100">
                      {step.time}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-1.5 text-lg leading-6 text-slate-600">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Closing strip */}
        <section className="border-t border-indigo-100 bg-indigo-50">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 text-center sm:px-6 md:flex-row md:justify-between md:text-left lg:px-8">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Planning a makeover?</h2>
              <p className="mt-1 text-lg text-slate-600">Share your ideas and we’ll suggest a design and a clear next step.</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-700 px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700 sm:w-auto"
            >
              Get a design quote <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
