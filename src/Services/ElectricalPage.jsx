import { useState } from 'react';
import { AlertTriangle, ArrowRight, Check, Fan, Gauge, Lightbulb, Phone, Plug, ShieldCheck, Wrench, Zap } from 'lucide-react';
import NavbarPage from '../NavbarPage';
import Footer from '../Footer';
import { getServiceImage as img } from './serviceImages.js';

const services = [
  { icon: Zap, title: 'New house wiring', text: 'Complete concealed wiring planned before plastering, with clean conduit routes and labelled circuits.' },
  { icon: Wrench, title: 'Rewiring old homes', text: 'We replace ageing, overloaded or aluminium wiring with safe copper wiring, with minimal damage to walls.' },
  { icon: Plug, title: 'Switches and sockets', text: 'Right-sized points for every room, including USB, AC, geyser and kitchen appliance connections.' },
  { icon: Lightbulb, title: 'Lighting installation', text: 'Ceiling, cove, wall and outdoor lighting with proper dimming, layers and neat, hidden wiring.' },
  { icon: Fan, title: 'Fans and exhausts', text: 'Ceiling fans, exhaust fans and chimney points fitted securely with the right regulators and supports.' },
  { icon: ShieldCheck, title: 'Safety upgrades', text: 'Earthing, RCCB and MCB upgrades that protect your family and your appliances from faults.' },
];

const hardware = [
  {
    title: 'Wires and cables',
    image: img('1621905251189-08b45d6a269e'),
    alt: 'Electrician working with wires',
    text: 'We use fire-retardant copper wires from trusted brands, with the correct thickness for each circuit. Thicker wire for AC and geyser, lighter wire for lights and fans.',
    tags: ['FR copper wire', 'Correct gauge', 'Colour-coded'],
  },
  {
    title: 'Switches and sockets',
    image: img('1621905252507-b35492cc74b4'),
    alt: 'Electrician fitting a switch',
    text: 'Modular switches and sockets look neat, feel solid and last for years. Choose from simple white plates or premium finishes to match your interior.',
    tags: ['Modular plates', 'USB points', 'Long life'],
  },
  {
    title: 'MCBs and distribution boards',
    image: img('1565608087341-404b25492fee'),
    alt: 'Electrical distribution board',
    text: 'A well-organised distribution board with separate MCBs for each area keeps faults contained. One overloaded room will not shut down the whole house.',
    tags: ['Separate circuits', 'RCCB', 'Surge safe'],
  },
  {
    title: 'Lights and fans',
    image: img('1513694203232-719a280e022f'),
    alt: 'Home interior with ceiling lights',
    text: 'Energy-saving LED lights and efficient fans cut your bill while giving better light and airflow. We match colour temperature to how each room is used.',
    tags: ['LED lighting', 'BLDC fans', 'Energy saving'],
  },
];

const rooms = [
  { room: 'Living room', lights: '4 to 6', sockets: '6 to 8', extra: 'TV, router and fan points' },
  { room: 'Bedroom', lights: '2 to 4', sockets: '4 to 6', extra: 'AC point, bedside USB' },
  { room: 'Kitchen', lights: '2 to 3', sockets: '6 to 8', extra: 'Chimney, fridge, microwave, purifier' },
  { room: 'Bathroom', lights: '1 to 2', sockets: '1', extra: 'Geyser point, exhaust fan' },
  { room: 'Outdoor', lights: '2 to 4', sockets: '1 to 2', extra: 'Gate light, motor point' },
];

const safety = [
  { icon: ShieldCheck, title: 'Proper earthing', text: 'Every socket and metal appliance is earthed, so a fault has a safe path away from people.' },
  { icon: Zap, title: 'RCCB protection', text: 'Cuts power in a fraction of a second when current leaks, helping prevent electric shocks.' },
  { icon: Gauge, title: 'Correct load planning', text: 'We calculate the total load, so wires and breakers are never pushed beyond their limits.' },
  { icon: Check, title: 'Tested before handover', text: 'Insulation, continuity and earthing are tested and shown to you before we finish.' },
];

const signs = [
  'MCB trips again and again',
  'Switches or sockets feel warm',
  'Lights flicker or dim',
  'Burning smell near a board',
  'Mild shocks from appliances',
  'Wiring older than 20 years',
];

function Photo({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`flex items-center justify-center bg-indigo-50 text-indigo-700 ${className}`}>
        <Zap size={36} aria-hidden="true" />
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

export default function ElectricalPage() {
  const [open, setOpen] = useState(0);
  const current = hardware[open];

  return (
    <>
      <NavbarPage />

      <main className="w-full text-left">
        {/* Section 1: heading + icon service grid */}
        <section id="services" className="bg-[#f7f5fb]">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Safe electrical wiring for every home
              </h1>
              <p className="mt-3 text-lg leading-7 text-slate-600">
                From new house wiring to switches, lights and safety upgrades, our licensed electricians
                do neat, reliable work that is tested before handover.
              </p>
            </div>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(({ icon: Icon, title, text }) => (
                <li key={title} className="rounded-xl border border-indigo-100 bg-white p-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h2 className="mt-4 text-lg font-semibold text-slate-900">{title}</h2>
                  <p className="mt-1.5 text-lg leading-6 text-slate-600">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 2: accordion + changing image */}
        <section id="hardware" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Quality hardware we install</h2>
            <p className="mt-2 max-w-3xl text-lg leading-7 text-slate-600">
              Good wiring depends on good materials. Here is what goes into your walls and boards.
            </p>

            <div className="mt-8 grid items-start gap-6 md:grid-cols-2 md:gap-10">
              <div className="divide-y divide-indigo-100 rounded-xl border border-indigo-100">
                {hardware.map((item, i) => {
                  const isOpen = i === open;
                  return (
                    <div key={item.title}>
                      <h3>
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          onClick={() => setOpen(i)}
                          className={`flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-lg font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-700 ${
                            isOpen ? 'bg-indigo-50 text-indigo-700' : 'text-slate-900 hover:bg-indigo-50/60'
                          }`}
                        >
                          {item.title}
                          <span aria-hidden="true" className="text-xl leading-none">{isOpen ? '−' : '+'}</span>
                        </button>
                      </h3>
                      {isOpen && (
                        <div className="px-5 pb-5 pt-1">
                          <p className="text-lg leading-6 text-slate-600 sm:text-lg sm:leading-7">{item.text}</p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <span key={tag} className="rounded-md bg-white px-2.5 py-1 text-xs font-medium text-indigo-700 ring-1 ring-indigo-100">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <Photo key={current.image} src={current.image} alt={current.alt} className="aspect-[4/3] w-full rounded-xl" />
            </div>
          </div>
        </section>

        {/* Section 3: room-wise points table */}
        <section id="rooms" className="bg-[#f7f5fb]">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Room-by-room wiring guide</h2>
            <p className="mt-2 max-w-3xl text-lg leading-7 text-slate-600">
              A typical guide for a modern home. We confirm the exact number of points after a site visit.
            </p>

            <div className="mt-6 overflow-x-auto rounded-xl border border-indigo-100 bg-white">
              <table className="w-full min-w-[560px] text-left text-lg">
                <thead className="bg-indigo-50 text-slate-900">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">Room</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Light points</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Sockets</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Special points</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-indigo-100 text-slate-600">
                  {rooms.map((r) => (
                    <tr key={r.room}>
                      <th scope="row" className="px-4 py-3 font-medium text-slate-900">{r.room}</th>
                      <td className="px-4 py-3">{r.lights}</td>
                      <td className="px-4 py-3">{r.sockets}</td>
                      <td className="px-4 py-3">{r.extra}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 4: safety, image left + 2x2 list */}
        <section id="safety" className="bg-white">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-12 md:grid-cols-2 md:gap-10 lg:px-8">
            <div className="relative">
              <Photo src={img('1558618666-fcd25c85cd64')} alt="Electrician checking a circuit" className="aspect-[4/3] w-full rounded-xl" />
              <span className="absolute bottom-3 left-3 flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-lg font-semibold text-slate-900">
                <ShieldCheck size={18} className="text-indigo-700" aria-hidden="true" />
                Safety first, always
              </span>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Safety built into every job</h2>
              <p className="mt-2 text-lg leading-7 text-slate-600">
                Electrical faults are one of the main causes of house fires. We follow proven practices so your home stays protected.
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {safety.map(({ icon: Icon, title, text }) => (
                  <li key={title} className="rounded-xl border border-indigo-100 p-4">
                    <Icon size={20} className="text-indigo-700" aria-hidden="true" />
                    <h3 className="mt-2 text-lg font-semibold text-slate-900">{title}</h3>
                    <p className="mt-1 text-lg leading-6 text-slate-600">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: warning signs + contact card */}
        <section id="signs" className="border-t border-indigo-100 bg-indigo-50">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-3 lg:gap-8 lg:px-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Signs your wiring needs attention</h2>
              <p className="mt-2 text-lg leading-7 text-slate-600">
                Do not ignore these warning signs. A quick inspection can prevent a costly repair or a serious accident.
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {signs.map((sign) => (
                  <li key={sign} className="flex items-center gap-3 rounded-lg border border-indigo-100 bg-white p-3.5 text-lg font-medium text-slate-800">
                    <AlertTriangle size={18} className="shrink-0 text-amber-600" aria-hidden="true" />
                    {sign}
                  </li>
                ))}
              </ul>
            </div>

            <div className="self-start rounded-xl border border-indigo-100 bg-white p-6">
              <h3 className="text-lg font-bold text-slate-900">Book an inspection</h3>
              <p className="mt-2 text-lg leading-6 text-slate-600">
                Our electrician will check your wiring, boards and earthing, then explain what needs to be done.
              </p>
              <a
                href="tel:+919988776655"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-700 px-5 py-3 text-lg font-semibold text-white transition-colors hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700"
              >
                <Phone size={17} aria-hidden="true" />
                Call +91 9666587727
              </a>
              <a
                href="/contact"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-indigo-200 px-5 py-3 text-lg font-semibold text-indigo-700 transition-colors hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700"
              >
                Send a message <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
