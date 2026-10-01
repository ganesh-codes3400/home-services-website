import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronLeft, ChevronRight, Droplets } from 'lucide-react';
import NavbarPage from '../NavbarPage';
import Footer from '../Footer';
import { getServiceImage as img } from './serviceImages.js';

const sections = [
  {
    id: 'rooftop-garden',
    title: 'Rooftop garden themes',
    intro:
      'A green roof turns unused space into a cool, calm corner of the home. It only lasts when the waterproofing under the soil is right, so we design both together.',
    slides: [
      {
        title: 'Kitchen garden terrace',
        image: img('1600585154340-be6161a56a0c'),
        alt: 'Modern home with a flat roof',
        text: 'Raised beds, herbs and vegetables make a rooftop kitchen garden that keeps the top floor cooler and gives you fresh produce a few steps from the kitchen. Beds sit on a protected surface so soil moisture never reaches the slab.',
        points: ['Raised planter beds with drainage', 'Drip irrigation for herbs and vegetables', 'Lower heat inside the top floor'],
        proof: 'Root-resistant liquid membrane with a protection screed under the beds.',
      },
      {
        title: 'Shaded seating garden',
        image: img('1512917774080-9991f1c4c750'),
        alt: 'Modern house with outdoor seating',
        text: 'A pergola, built-in seating and large planters create a private green lounge for the evening. Light plants and wooden elements keep the look warm, while proper slopes take rainwater away from the seating area.',
        points: ['Pergola with climbing plants', 'Built-in benches and planters', 'Slope to outlets so water never pools'],
        proof: 'Cementitious base coat with a polyurethane (PU) topcoat and drainage layer.',
      },
      {
        title: 'Container garden roof',
        image: img('1564013799919-ab600027ffc6'),
        alt: 'House exterior with garden',
        text: 'If you want a garden without heavy soil, movable containers and grow bags are a simple choice. They spread the load, are easy to rearrange and can be lifted whenever the roof needs inspection or maintenance.',
        points: ['Lightweight pots and grow bags', 'Easy to move for inspection', 'Low load on the slab'],
        proof: 'Full surface waterproofing with skirting up the parapet walls.',
      },
    ],
  },
  {
    id: 'terrace-lounge',
    title: 'Terrace lounge and deck themes',
    intro:
      'A terrace is the place for family evenings and small gatherings. These themes focus on comfortable finishes, safe footing and a surface that stays dry.',
    slides: [
      {
        title: 'Wooden deck lounge',
        image: img('1613490493576-7fde63acd811'),
        alt: 'Modern villa with a wooden deck',
        text: 'Wood-look decking gives the roof a warm, resort feel. The boards are raised on adjustable supports over the membrane, so air flows underneath, water drains freely and no board ever sits in a puddle.',
        points: ['Weather-resistant deck boards', 'Raised on adjustable pedestals', 'Easy to lift for repairs'],
        proof: 'Sheet or liquid membrane under the pedestals, tested by flood check.',
      },
      {
        title: 'Tiled terrace with seating',
        image: img('1600596542815-ffad4c1539a9'),
        alt: 'Modern house with tiled terrace',
        text: 'Anti-skid outdoor tiles are a practical and low-maintenance choice. Light colours reflect heat, and cushioned seating with a few planters gives the space a clean, simple character that suits any home.',
        points: ['Anti-skid, heat-reflective tiles', 'Neat grout lines, sealed joints', 'Simple furniture and planters'],
        proof: 'Membrane below the tile bed with flexible sealant at every joint.',
      },
      {
        title: 'Pergola party terrace',
        image: img('1600566753190-17f0baa2a6c3'),
        alt: 'Contemporary house with an outdoor area',
        text: 'For larger gatherings, a pergola with string lights, a compact bar counter and open seating turns the roof into an evening venue. Electrical points and lighting are planned early so nothing is cut into a finished surface.',
        points: ['Pergola with warm lighting', 'Bar counter and open seating', 'Concealed wiring and outlets'],
        proof: 'Extra layer at pergola posts and edges, where leaks most often start.',
      },
    ],
  },
  {
    id: 'modern-flat-roof',
    title: 'Modern flat roof themes',
    intro:
      'Not every roof needs furniture. A clean, well-finished flat roof lowers indoor heat, keeps water out and stays easy to maintain for many years.',
    slides: [
      {
        title: 'Cool roof white finish',
        image: img('1568605114967-8130f3a36994'),
        alt: 'White house with a clean roofline',
        text: 'A reflective white coating sends sunlight back instead of soaking it in. Rooms below stay noticeably cooler in summer, which can reduce air conditioning use, and the smooth surface is quick to clean after monsoon dust.',
        points: ['Solar reflective coating', 'Cooler rooms below', 'Simple yearly cleaning'],
        proof: 'Elastomeric coating over a repaired, primed base with crack treatment.',
      },
      {
        title: 'Solar-ready roof',
        image: img('1570129477492-45c003edd2be'),
        alt: 'Home with a clear roof space',
        text: 'Planning for solar panels? Keep the surface clear and the waterproofing continuous, with mounting points sealed properly. It is far easier to do this before the panels go up than to trace leaks around them later.',
        points: ['Sealed mounting bases', 'Clear walkways for service', 'Continuous membrane coverage'],
        proof: 'PU or APP membrane with each fixing point individually flashed and sealed.',
      },
      {
        title: 'Minimal roof with thermal check',
        image: img('1545324418-cc1a3fa10c00'),
        alt: 'Building with a flat roof',
        text: 'Older roofs often hide damp long before a stain shows. A thermal imaging inspection reveals wet insulation and hidden moisture, so we repair only what is needed and finish with a neat, minimal surface.',
        points: ['Thermal imaging leak detection', 'Repair only the affected areas', 'Clean parapet and drain detailing'],
        proof: 'Targeted repair, full membrane and a written warranty on the finished work.',
      },
    ],
  },
];

function SlideImage({ src, alt }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="flex aspect-[4/3] w-full items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
        <Droplets size={40} aria-hidden="true" />
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
      className="aspect-[4/3] w-full rounded-xl object-cover"
    />
  );
}

function Carousel({ slides, label }) {
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const go = (n) => setIndex((n + slides.length) % slides.length);
  const btn =
    'flex h-10 w-10 items-center justify-center rounded-lg border border-indigo-200 bg-white text-indigo-700 transition-colors hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700';

  return (
    <div role="group" aria-roledescription="carousel" aria-label={label}>
      <div aria-live="polite" className="grid items-center gap-6 md:grid-cols-2 md:gap-10">
        <div className="order-2 md:order-1">
          <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">{slide.title}</h3>
          <p className="mt-3 text-lg leading-7 text-slate-600">{slide.text}</p>
          <ul className="mt-4 space-y-2">
            {slide.points.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-lg text-slate-700 sm:text-lg">
                <Check size={18} className="mt-0.5 shrink-0 text-indigo-700" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-4 rounded-lg border border-indigo-100 bg-indigo-50 p-3 text-lg leading-6 text-slate-700">
            <span className="font-semibold text-indigo-700">Waterproofing: </span>
            {slide.proof}
          </p>
        </div>
        <div className="order-1 md:order-2">
          <SlideImage key={slide.image} src={slide.image} alt={slide.alt} />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-2" role="tablist" aria-label={`${label} slides`}>
          {slides.map((s, i) => (
            <button
              key={s.title}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show ${s.title}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all ${i === index ? 'w-7 bg-indigo-700' : 'w-2.5 bg-indigo-200 hover:bg-indigo-300'}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={() => go(index - 1)} aria-label="Previous slide" className={btn}>
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <button type="button" onClick={() => go(index + 1)} aria-label="Next slide" className={btn}>
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Waterproofpage() {
  return (
    <>
      <NavbarPage />

      <main className="w-full text-left">
        <section className="border-b border-indigo-100 bg-[#f7f5fb]">
          <div className="mx-auto max-w-6xl px-4 py-10 text-center sm:px-6 sm:py-12 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Rooftop designs with waterproofing built in
            </h1>
            <p className="mx-auto mt-3 max-w-6xl text-lg leading-7 text-slate-600">
              A beautiful roof only works if it stays dry. Explore three rooftop themes, each planned
              together with the right terrace waterproofing, so the design and the protection last.
            </p>
          </div>
        </section>

        {sections.map((section, i) => (
          <section
            key={section.id}
            id={section.id}
            className={i % 2 === 0 ? 'bg-white' : 'bg-[#f7f5fb]'}
          >
            <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{section.title}</h2>
              <p className="mt-2 mb-8 max-w-3xl text-lg leading-7 text-slate-600">{section.intro}</p>
              <Carousel slides={section.slides} label={section.title} />
            </div>
          </section>
        ))}

        <section className="border-t border-indigo-100 bg-indigo-50">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 text-center sm:px-6 md:flex-row md:justify-between md:text-left lg:px-8">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Not sure which theme suits your roof?</h2>
              <p className="mt-1 text-lg text-slate-600">
                We’ll inspect the roof, check for hidden moisture and suggest a practical plan.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-700 px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700 sm:w-auto"
            >
              Book a roof inspection <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
