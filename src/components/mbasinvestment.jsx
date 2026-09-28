import { useCallback, useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Laptop,
  Mail,
  MapPin,
  Menu,
  Phone,
  VolumeX,
  Wifi,
  X,
} from 'lucide-react';

const APPLY_URL =
  'https://forms.zohopublic.com/anchorfitng1/form/RecruitmentForm/formperma/y3LpDxfwkExQg2gh_pnYHuf5CjToKESExIH88j5om38';
const EMAIL = 'mbasinvestmentltd@gmail.com';
const PHONE_DISPLAY = '+234 814 409 0991';
const PHONE_HREF = 'tel:+2348144090991';
const ADDRESS_LINES = ['7th Floor, Labour House', 'Muhammadu Buhari Way', 'Central Business District', 'Abuja, Nigeria'];
const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Labour+House+Central+Business+District+Abuja';

const CHAPTERS = [
  { id: 'company', label: 'The company', note: 'Who we are' },
  { id: 'sectors', label: 'Where we invest', note: 'Three sectors' },
  { id: 'projects', label: 'Projects', note: 'Active and in development' },
  { id: 'careers', label: 'Careers', note: 'Online English tutors' },
  { id: 'questions', label: 'Questions', note: 'For applicants' },
  { id: 'contact', label: 'Contact', note: 'Abuja office' },
];

const SECTORS = [
  {
    title: 'Real estate development',
    description:
      'Strategic property investment and development projects built for long-term value across Nigeria.',
    focus: ['Commercial properties', 'Residential complexes', 'Industrial spaces', 'Mixed-use developments'],
  },
  {
    title: 'Financial markets',
    description:
      'Active trading in stock, cryptocurrency and foreign-exchange markets, guided by careful analysis and a diversified portfolio.',
    focus: ['Stock trading', 'Cryptocurrency', 'Forex markets', 'Portfolio management'],
  },
  {
    title: 'Education technology',
    description:
      'An English-learning partnership with SLING Education that connects Chinese students with qualified tutors in Nigeria.',
    focus: ['Online English tuition', 'Tutor recruitment and training', 'Cultural exchange', 'Career opportunities'],
  },
];

const PORTFOLIO = [
  {
    title: 'SLING Education',
    sector: 'Education technology',
    status: 'Active, hiring tutors',
    active: true,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&h=1000&fit=crop&auto=format&q=75',
    alt: 'Students in a classroom',
    description: 'An English-learning partnership connecting students in China with qualified tutors in Nigeria.',
  },
  {
    title: 'Residential development',
    sector: 'Real estate',
    status: 'In development',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&h=1000&fit=crop&auto=format&q=75',
    alt: 'A modern apartment building',
    description: 'A planned residential development in Abuja. Details will follow as the project progresses.',
  },
  {
    title: 'Commercial development',
    sector: 'Real estate',
    status: 'In development',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=1000&fit=crop&auto=format&q=75',
    alt: 'Office towers seen from street level',
    description: 'A planned commercial property. Details will follow as the project progresses.',
  },
  {
    title: 'Investment portfolio',
    sector: 'Financial markets',
    status: 'In development',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&h=1000&fit=crop&auto=format&q=75',
    alt: 'A market chart on a screen',
    description: 'A diversified portfolio of equities and digital assets.',
  },
];

const SLIDE_MS = 7000;

const SLING_FEATURES = [
  'AI-assisted learning tools',
  'Pronunciation feedback',
  'Interactive lesson plans',
  'Cultural exchange built into lessons',
  'Progress tracking for every student',
  'Works in any modern web browser',
];

const REQUIREMENTS = [
  'WASSCE English at C4 or better',
  'NECO English at B or better',
  'UTME score of 250 or above',
  'Or an international certificate: IELTS 6.0+, TOEFL 85+ or Cambridge C1',
];

const CONDUCT = ['Respect for Chinese culture', 'Clear communication', 'Responsibility', 'Punctuality'];

const RESPONSIBILITIES = [
  'Keep every lesson in clear, natural English',
  'Bring Nigerian culture into your lessons',
  'Use interactive methods to keep students engaged',
  'Help students overcome anxiety about speaking',
];

const EQUIPMENT = [
  { icon: Laptop, item: 'A computer', spec: 'Windows or Mac' },
  { icon: Wifi, item: 'Stable internet', spec: '50 Mbps or faster' },
  { icon: VolumeX, item: 'A quiet room', spec: 'Free from background noise' },
];

const PROCESS = [
  { label: 'Resume screening', note: 'We review your application and certificates.' },
  { label: 'Online demo', note: 'You teach a short sample lesson.' },
  { label: 'Training', note: 'We prepare you on our teaching platform.' },
  { label: 'Contract and onboarding', note: 'You sign on and meet your first students.' },
];

const BENEFITS = [
  'Work from home, on hours you choose',
  'Training and a modern teaching platform',
  'Professional development and career growth',
  'Cultural exchange with students abroad',
  'A supportive team behind you',
];

const FAQS = [
  {
    question: 'What do I need to become an English tutor?',
    answer:
      'You need proof of English proficiency: WASSCE (C4 or better), NECO (B or better), UTME (250 or above), or an international certificate such as IELTS 6.0+, TOEFL 85+ or Cambridge C1. We also look for respect for Chinese culture, clear communication, responsibility and punctuality.',
  },
  {
    question: 'How flexible is the schedule?',
    answer:
      'Very flexible. This is a fully remote, part-time role that you do from home. You choose hours that suit you, as long as you have a computer, stable internet of at least 50 Mbps and a quiet place to teach.',
  },
  {
    question: 'What equipment do I need?',
    answer:
      'A Windows or Mac computer, internet of at least 50 Mbps and a quiet workspace. The teaching platform runs in any modern web browser, and we provide all teaching materials and training.',
  },
  {
    question: 'What is the hiring process?',
    answer:
      'There are four steps: resume screening, an online demo lesson, training, and finally your contract and onboarding. We keep it short so you can start teaching as soon as possible.',
  },
  {
    question: 'How does MBAS approach teaching?',
    answer:
      'We keep lessons in clear, natural English while bringing Nigerian culture into them. Tutors use interactive methods to keep students engaged and help them overcome anxiety about speaking. You get training and access to an intelligent teaching platform.',
  },
  {
    question: 'What makes MBAS different?',
    answer:
      'MBAS Investment Limited combines education with strategic partnerships and trading. We are a Nigerian company creating value through education while connecting Nigeria to international markets, and our tutors benefit from professional growth and global exposure.',
  },
];

/* ---------- Small building blocks ---------- */

/** Stagger delay for a reveal, in steps of 90ms. */
const delay = (i) => ({ '--d': `${i * 90}ms` });


function Chapter({ id, title, lede, children, tone = 'base' }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`px-5 sm:px-8 py-16 sm:py-24 md:py-32 ${tone === 'raised' ? 'bg-cloth-2' : ''}`}
    >
      <div className="mx-auto max-w-[76rem]">
        <header className="mb-10 sm:mb-14 md:mb-20 grid gap-5 sm:gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <span className="foil-rule w-24 mb-6 sm:mb-8" data-draw aria-hidden="true" />
            <h2
              id={`${id}-title`}
              data-reveal
              style={delay(1)}
              className="font-display text-[2.5rem] leading-[1.08] sm:text-[3.25rem] md:text-[3.75rem] text-ink tracking-[-0.01em]"
            >
              {title}
            </h2>
          </div>
          {lede && (
            <p data-reveal style={delay(2)} className="md:col-span-5 text-lg md:text-xl text-ink-2 leading-relaxed max-w-[34rem]">
              {lede}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}

function PrimaryButton({ href, onClick, children, external }) {
  const cls =
    'inline-flex min-h-14 items-center justify-center gap-3 rounded-[2px] bg-foil px-7 py-3.5 text-lg font-semibold text-cloth transition-colors duration-150 hover:bg-foil-bright active:bg-foil-deep';
  if (href) {
    return (
      <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

function SecondaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-14 items-center justify-center gap-3 rounded-[2px] border border-foil/70 px-7 py-3.5 text-lg font-semibold text-ink transition-colors duration-150 hover:border-foil hover:bg-foil/10"
    >
      {children}
    </a>
  );
}

function RuledList({ items }) {
  return (
    <ul className="divide-y divide-rule-soft border-y border-rule-soft">
      {items.map((item, i) => (
        <li key={item} data-reveal style={delay(i)} className="flex gap-4 py-3.5 text-lg text-ink-2">
          <Check className="mt-1 h-5 w-5 shrink-0 text-foil" strokeWidth={2} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SubHeading({ children }) {
  return <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-foil">{children}</h3>;
}

function usePrefersReducedMotion() {
  const query = '(prefers-reduced-motion: reduce)';
  const [reduced, setReduced] = useState(() => window.matchMedia?.(query).matches ?? false);
  useEffect(() => {
    const mq = window.matchMedia?.(query);
    if (!mq) return;
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return reduced;
}

function ProjectShowcase() {
  const [active, setActive] = useState(0);
  const [held, setHeld] = useState(false); // pointer over, or keyboard focus inside
  const [inView, setInView] = useState(false);
  const reduced = usePrefersReducedMotion();
  const rootRef = useRef(null);
  const count = PORTFOLIO.length;
  const autoplay = !reduced;
  const running = autoplay && !held && inView;

  const go = useCallback((i) => setActive((i + count) % count), [count]);

  // Stop the cycle whenever the showcase is off screen
  useEffect(() => {
    const el = rootRef.current;
    if (!el || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const item = PORTFOLIO[active];

  return (
    <div
      ref={rootRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Project portfolio"
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocus={() => setHeld(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setHeld(false);
      }}
    >
      {/* Featured project */}
      <div className="relative overflow-hidden border border-rule bg-cloth">
        <div className="relative h-[16rem] sm:h-[24rem] md:h-[36rem]">
          {PORTFOLIO.map((p, i) => (
            <img
              key={p.title}
              src={p.image}
              alt={i === active ? p.alt : ''}
              aria-hidden={i === active ? undefined : true}
              loading={i === 0 ? 'eager' : 'lazy'}
              className={`slide-img absolute inset-0 h-full w-full object-cover ${i === active ? 'is-active' : ''}`}
            />
          ))}
          <div
            className="pointer-events-none absolute inset-0 hidden md:block bg-gradient-to-t from-cloth via-cloth/75 to-transparent"
            aria-hidden="true"
          />

          <div className="absolute bottom-0 right-0 z-10 flex border-l border-t border-rule bg-cloth">
            {[
              { label: 'Previous project', step: -1, icon: ArrowLeft },
              { label: 'Next project', step: 1, icon: ArrowRight },
            ].map((ctl, k) => (
              <button
                key={ctl.label}
                type="button"
                onClick={() => go(active + ctl.step)}
                aria-label={ctl.label}
                className={`inline-flex h-14 w-14 items-center justify-center text-foil transition-colors duration-150 hover:bg-foil hover:text-cloth sm:h-16 sm:w-16 ${
                  k ? 'border-l border-rule' : ''
                }`}
              >
                <ctl.icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>

        <div
          key={active}
          aria-live={running ? 'off' : 'polite'}
          aria-roledescription="slide"
          aria-label={`${active + 1} of ${count}`}
          className="slide-text-in relative p-6 sm:p-8 md:absolute md:inset-x-0 md:bottom-0 md:p-12 md:pr-24"
        >
          <h3 className="font-display text-[2rem] sm:text-[2.5rem] md:text-[3.25rem] leading-[1.08] text-ink">
            {item.title}
          </h3>
          <p className="mt-3 flex flex-col gap-y-1 text-lg sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3">
            <span className="text-foil">{item.sector}</span>
            <span className="hidden text-ink-3 sm:inline" aria-hidden="true">·</span>
            <span className={item.active ? 'text-ink' : 'text-ink-2'}>{item.status}</span>
          </p>
          <p className="mt-4 max-w-[40rem] text-lg md:text-xl leading-relaxed text-ink-2">{item.description}</p>
          {item.active && (
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="#sling">
                Read about SLING <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </PrimaryButton>
              <SecondaryButton href="#careers">See the tutor role</SecondaryButton>
            </div>
          )}
        </div>
      </div>

      {/* Progress to the next project */}
      <div className="relative h-0.5 bg-rule" aria-hidden="true">
        {autoplay && (
          <span
            key={active}
            className="showcase-progress absolute inset-0 bg-foil"
            style={{ animationPlayState: running ? 'running' : 'paused', animationDuration: `${SLIDE_MS}ms` }}
            onAnimationEnd={() => go(active + 1)}
          />
        )}
      </div>

      {/* Thumbnails */}
      <ul className="mt-4 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4 md:gap-6 lg:grid-cols-4">
        {PORTFOLIO.map((p, i) => {
          const current = i === active;
          return (
            <li key={p.title} data-reveal style={delay(i)}>
              <button
                type="button"
                onClick={() => go(i)}
                aria-current={current ? 'true' : undefined}
                aria-label={`Show ${p.title}, ${p.status}`}
                className={`group flex w-full items-center gap-4 text-left border p-1.5 transition-colors duration-300 sm:block ${
                  current ? 'border-foil bg-cloth' : 'border-rule-soft hover:border-foil/60'
                }`}
              >
                <span className="block w-28 shrink-0 aspect-[4/3] overflow-hidden sm:w-auto">
                  <img
                    src={p.image.replace('w=1600&h=1000', 'w=600&h=450')}
                    alt=""
                    decoding="async"
                    className={`h-full w-full object-cover transition-[transform,filter] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 ${
                      current ? '' : 'saturate-[0.6] brightness-[0.8] group-hover:saturate-100 group-hover:brightness-100'
                    }`}
                  />
                </span>
                <span className="block min-w-0 py-1 pr-2 sm:px-2 sm:pb-2 sm:pt-4">
                  <span className={`block font-display text-[1.25rem] sm:text-[1.4rem] leading-tight ${current ? 'text-foil-bright' : 'text-ink'}`}>
                    {p.title}
                  </span>
                  <span className="mt-1 block text-base text-ink-2 sm:mt-1.5">{p.sector}</span>
                  <span className={`mt-0.5 block text-base ${p.active ? 'text-ink' : 'text-ink-3'}`}>{p.status}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* ---------- Page ---------- */

export default function MBASInvestment() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [showBar, setShowBar] = useState(false);
  const [contactInView, setContactInView] = useState(false);
  const menuButtonRef = useRef(null);

  // Header state on scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      setShowBar(window.scrollY > window.innerHeight * 0.8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Reveals replay every time an element comes back into view. Content is visible without script.
  useEffect(() => {
    const root = document.documentElement;
    const targets = document.querySelectorAll('[data-reveal], .foil-rule[data-draw]');
    if (!('IntersectionObserver' in window)) {
      root.classList.remove('js-motion');
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-in', entry.isIntersecting);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  // The phone action bar steps aside once the contact section is on screen
  useEffect(() => {
    const el = document.getElementById('contact');
    if (!el || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(([e]) => setContactInView(e.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Mobile menu: Escape closes, page behind does not scroll
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-cloth font-body text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-foil focus:px-5 focus:py-3 focus:text-cloth focus:font-semibold"
      >
        Skip to main content
      </a>

      {/* ---------- Header ---------- */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 border-b ${
          scrolled || menuOpen ? 'bg-cloth/95 border-rule-soft backdrop-blur-sm' : 'bg-transparent border-transparent'
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[76rem] items-center justify-between gap-6 px-5 sm:px-8">
          <a href="#top" className="flex items-center gap-3 rounded-[2px]" aria-label="MBAS Investment Limited, back to top">
            <img src="/mbas-shield.png" alt="" width="34" height="40" className="h-10 w-auto" />
            <span className="leading-tight">
              <span className="block font-display text-[1.35rem] tracking-[0.06em] text-ink">MBAS</span>
              <span className="block whitespace-nowrap text-[0.66rem] font-semibold uppercase tracking-[0.12em] sm:text-[0.7rem] sm:tracking-[0.2em] text-ink-3">
                Investment Limited
              </span>
            </span>
          </a>

          <div className="flex items-center gap-2 md:gap-4">
            <nav aria-label="Main" className="hidden md:block">
              <ul className="flex items-center gap-1">
                {[
                  { href: '#top', label: 'Contents' },
                  { href: '#careers', label: 'Careers' },
                ].map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="rounded-[2px] px-4 py-2.5 text-[1.05rem] text-ink-2 transition-colors duration-150 hover:text-ink hover:underline"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <a
              href="#contact"
              className="hidden md:inline-flex min-h-11 items-center rounded-[2px] bg-foil px-5 font-semibold text-cloth transition-colors duration-150 hover:bg-foil-bright"
            >
              Contact us
            </a>
            <button
              ref={menuButtonRef}
              type="button"
              className="md:hidden inline-flex min-h-12 items-center gap-2 rounded-[2px] border border-rule px-4 text-ink"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
              <span className="font-semibold">{menuOpen ? 'Close' : 'Menu'}</span>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div id="mobile-menu" className="sheet-in md:hidden border-t border-rule-soft bg-cloth h-[calc(100dvh-5rem)] overflow-y-auto">
            <nav aria-label="Mobile" className="px-5 sm:px-8 py-6">
              <ul className="divide-y divide-rule-soft border-b border-rule-soft">
                {CHAPTERS.map((c) => (
                  <li key={c.id}>
                    <a
                      href={`#${c.id}`}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-baseline justify-between gap-4 py-5"
                    >
                      <span className="font-display text-[1.75rem] text-ink">{c.label}</span>
                      <span className="text-ink-3">{c.note}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-8 grid gap-3">
                <PrimaryButton href={PHONE_HREF}>
                  <Phone className="h-5 w-5" aria-hidden="true" /> Call {PHONE_DISPLAY}
                </PrimaryButton>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main id="main">
        {/* ---------- Cover ---------- */}
        <section id="top" aria-labelledby="cover-title" className="relative px-5 sm:px-8 pt-28 lg:pt-24 lg:min-h-[100svh] lg:flex lg:flex-col">
          <div className="mx-auto w-full max-w-[76rem] lg:flex lg:flex-1 lg:flex-col lg:justify-between">
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-12 lg:items-center lg:flex-1 pb-12 md:pb-16 lg:pb-10">
              <div className="lg:col-span-7 lg:pt-6">
                <span className="foil-rule w-28 mb-10" data-draw aria-hidden="true" />
                <h1
                  id="cover-title"
                  data-reveal
                  className="font-display text-[2.9rem] leading-[1.04] sm:text-[4rem] lg:text-[5rem] tracking-[-0.015em] text-ink"
                  style={delay(1)}
                >
                  Steady investment in property, markets and education.
                </h1>
                <p
                  data-reveal
                  className="mt-8 max-w-[36rem] text-xl md:text-[1.35rem] leading-relaxed text-ink-2"
                  style={delay(3)}
                >
                  MBAS Investment Limited is an Abuja company working on private and government contracts across real
                  estate, financial markets and education technology.
                </p>
                <div data-reveal className="mt-10 flex flex-col gap-4 sm:flex-row" style={delay(5)}>
                  <PrimaryButton href="#contact">
                    Work with us <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </PrimaryButton>
                  <SecondaryButton href="#careers">Apply to teach English</SecondaryButton>
                </div>
              </div>

              {/* Contents page */}
              <aside
                aria-label="Contents"
                data-reveal
                className="hidden md:block lg:col-span-5 border border-foil/50 p-1.5"
                style={delay(2)}
              >
                <div className="border border-foil/30 bg-cloth-2 px-6 py-7 sm:px-9 sm:py-8">
                  <div data-reveal className="emblem mx-auto mb-5 w-fit" style={delay(4)}>
                    <img src="/mbas-shield.png" alt="MBAS Investment Limited shield emblem" width="105" height="125" className="h-24 w-auto" />
                  </div>
                  <p className="mb-3 text-center font-display text-2xl text-foil">Contents</p>
                  <ol className="space-y-1">
                    {CHAPTERS.map((c, i) => (
                      <li key={c.id} data-reveal style={delay(4 + i)}>
                        <a
                          href={`#${c.id}`}
                          className="group flex items-baseline gap-3 rounded-[2px] py-2 text-lg text-ink transition-colors duration-150 hover:text-foil-bright"
                        >
                          <span>{c.label}</span>
                          <span className="leader" aria-hidden="true" />
                          <span className="hidden sm:inline text-base text-ink-3 group-hover:text-foil-bright">{c.note}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              </aside>
            </div>

            {/* Imprint */}
            <div data-reveal style={delay(6)} className="border-t border-rule py-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-ink-3">
              <p className="font-semibold uppercase tracking-[0.16em] text-sm">Abuja, Nigeria</p>
              <ul className="hidden flex-wrap gap-x-3 gap-y-1 text-base sm:flex">
                {['Real estate', 'Financial markets', 'Education technology'].map((t, i) => (
                  <li key={t} className="flex items-center gap-3">
                    {i > 0 && <span aria-hidden="true">·</span>}
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ---------- The company ---------- */}
        <Chapter
          id="company"
          title="A Nigerian company built on knowledge and enterprise"
          lede="We believe growth comes from both. That belief shapes how we invest, and how we build opportunities for people."
          tone="raised"
        >
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7 space-y-6 text-lg md:text-xl leading-[1.7] text-ink-2 max-w-[40rem]">
              <p data-reveal>
                <strong className="font-semibold text-ink">MBAS Investment Limited</strong> is a diversified company
                engaged in private and government contracts across several sectors. We combine a long-term view with
                careful, hands-on management of every venture.
              </p>
              <p data-reveal style={delay(1)}>
                Through our education work, we recruit and develop skilled English tutors who teach international
                students online. This work promotes clear communication and cultural exchange, and opens doors for
                professional growth in Nigeria.
              </p>
              <figure className="pt-8">
                <span className="foil-rule w-16 mb-6" data-draw aria-hidden="true" />
                <blockquote data-reveal style={delay(1)} className="font-display text-[1.9rem] md:text-[2.35rem] leading-[1.25] text-ink">
                  Our mission is simple: to bridge people, knowledge and opportunity, so individuals and businesses can
                  grow with confidence.
                </blockquote>
              </figure>
            </div>

            <div className="lg:col-span-5">
              <h3 className="mb-2 font-display text-2xl text-foil">Company particulars</h3>
              <dl className="divide-y divide-rule-soft border-y border-rule">
                {[
                  ['Registered name', 'MBAS Investment Limited'],
                  ['Head office', '7th Floor, Labour House, Central Business District, Abuja'],
                  ['Engagements', 'Private and government contracts'],
                  ['Sectors', 'Real estate, financial markets, education technology'],
                  ['Active partnership', 'SLING Education, online English tuition'],
                ].map(([k, v], i) => (
                  <div key={k} data-reveal style={delay(i)} className="grid gap-1 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
                    <dt className="text-base text-ink-3">{k}</dt>
                    <dd className="text-lg text-ink">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Chapter>

        {/* ---------- Sectors ---------- */}
        <Chapter
          id="sectors"
          title="Where we invest"
          lede="Three sectors, each managed with the same patience: property that holds its value, markets we study closely, and education that changes lives."
        >
          <div className="border-t border-foil/60">
            {SECTORS.map((s) => (
              <article
                key={s.title}
                data-reveal
                className="grid gap-6 border-b border-rule py-10 md:py-12 md:grid-cols-12 md:gap-10"
              >
                <h3 className="md:col-span-4 font-display text-[1.9rem] md:text-[2.25rem] leading-[1.15] text-ink">
                  {s.title}
                </h3>
                <p className="md:col-span-5 text-lg md:text-xl leading-relaxed text-ink-2">{s.description}</p>
                <ul className="md:col-span-3 space-y-2.5 text-lg text-ink-2">
                  {s.focus.map((f, i) => (
                    <li key={f} data-reveal style={delay(i + 1)} className="flex gap-3">
                      <span className="mt-[0.7em] h-px w-4 shrink-0 bg-foil" aria-hidden="true" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Chapter>

        {/* ---------- Projects ---------- */}
        <Chapter
          id="projects"
          title="Projects"
          lede="One venture is running today. Others are being prepared, and we will share details as each one reaches the market."
          tone="raised"
        >
          <div data-reveal>
            <ProjectShowcase />
          </div>

          {/* SLING Education in detail */}
          <article id="sling" aria-labelledby="sling-title" className="mt-24 grid gap-12 border-t border-foil/60 pt-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h3 id="sling-title" data-reveal className="font-display text-[2.5rem] md:text-[3rem] leading-[1.08] text-ink">
                SLING Education
              </h3>
              <dl className="mt-8 divide-y divide-rule-soft border-y border-rule">
                {[
                  ['Status', 'Active, and hiring tutors'],
                  ['Sector', 'Education technology'],
                  ['Students', 'English learners in China'],
                  ['Tutors', 'Qualified teachers across Nigeria'],
                ].map(([k, v], i) => (
                  <div key={k} data-reveal style={delay(i + 1)} className="grid grid-cols-[7.5rem_1fr] gap-4 py-3.5">
                    <dt className="text-base text-ink-3">{k}</dt>
                    <dd className="text-lg text-ink">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="lg:col-span-7">
              <div data-reveal style={delay(1)} className="space-y-4 text-lg md:text-xl leading-relaxed text-ink-2 max-w-[40rem]">
                <p>
                  Our partnership with SLING Education connects students in China with qualified English tutors in
                  Nigeria. Every lesson is also a cultural exchange.
                </p>
                <p>
                  The platform gives students feedback on pronunciation, grammar and fluency, so each learner gets
                  personal attention and can see their progress.
                </p>
              </div>
              <h4 className="mt-10 mb-4 font-display text-2xl text-foil">On the platform</h4>
              <ul className="grid gap-x-8 sm:grid-cols-2 border-t border-rule-soft">
                {SLING_FEATURES.map((f, i) => (
                  <li key={f} data-reveal style={delay(i)} className="flex gap-3 border-b border-rule-soft py-3 text-lg text-ink-2">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-foil" aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <PrimaryButton href="#careers">
                  See the tutor role <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </PrimaryButton>
              </div>
            </div>
          </article>

        </Chapter>

        {/* ---------- Careers ---------- */}
        <Chapter
          id="careers"
          title="Online English Tutor"
          lede="A remote, part-time role teaching English to students in China through our SLING Education partnership. Open to applicants across Nigeria."
        >
          {/* Role facts */}
          <dl className="grid border-y border-foil/60 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Where', 'From home, anywhere in Nigeria'],
              ['Hours', 'Flexible and part-time'],
              ['Students', 'English learners in China'],
              ['To apply', 'An online form, about 5 minutes'],
            ].map(([k, v], i) => (
              <div
                key={k}
                data-reveal
                style={delay(i)}
                className={`border-rule-soft py-6 sm:px-6 ${i > 0 ? 'border-t' : ''} ${i === 1 ? 'sm:border-t-0' : ''} ${
                  i % 2 === 1 ? 'sm:border-l' : 'sm:pl-0'
                } ${i > 0 ? 'lg:border-t-0 lg:border-l lg:pl-6' : ''}`}
              >
                <dt className="text-base text-ink-3">{k}</dt>
                <dd className="mt-1 text-xl text-ink">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 grid gap-12 md:mt-16 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-10 md:space-y-12">
              <div>
                <SubHeading>English requirement: any one of</SubHeading>
                <RuledList items={REQUIREMENTS} />
              </div>
              <div>
                <SubHeading>We also look for</SubHeading>
                <RuledList items={CONDUCT} />
              </div>
            </div>
            <div className="space-y-10 md:space-y-12">
              <div>
                <SubHeading>What you will do</SubHeading>
                <RuledList items={RESPONSIBILITIES} />
              </div>
              <div>
                <SubHeading>What you need</SubHeading>
                <dl className="divide-y divide-rule-soft border-y border-rule-soft">
                  {EQUIPMENT.map((equip, i) => (
                    <div key={equip.item} data-reveal style={delay(i)} className="grid grid-cols-[1.25rem_1fr] gap-x-4 py-3.5 sm:grid-cols-[1.25rem_9rem_1fr]">
                      <equip.icon className="mt-1 h-5 w-5 shrink-0 text-foil" strokeWidth={1.75} aria-hidden="true" />
                      <dt className="text-lg font-semibold text-ink">{equip.item}</dt>
                      <dd className="col-start-2 text-lg text-ink-2 sm:col-start-3">{equip.spec}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="mt-14 md:mt-20">
            <SubHeading>How hiring works</SubHeading>
            <ol className="grid gap-0 border-t border-rule md:grid-cols-4">
              {PROCESS.map((p, i) => (
                <li
                  key={p.label}
                  data-reveal
                  style={delay(i * 2)}
                  className={`relative grid grid-cols-[2.5rem_1fr] gap-x-4 py-6 md:block md:py-7 md:pr-8 ${i > 0 ? 'border-t border-rule-soft md:border-t-0' : ''}`}
                >
                  <span className="absolute -top-px left-0 h-px w-10 bg-foil" aria-hidden="true" />
                  <p className="row-span-2 font-display text-[2.25rem] leading-none text-foil tabular md:text-[2.5rem]">
                    <span className="sr-only">Step </span>
                    {i + 1}
                  </p>
                  <p className="text-xl font-semibold text-ink md:mt-4">{p.label}</p>
                  <p className="mt-1.5 text-lg text-ink-2">{p.note}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Apply */}
          <div data-reveal className="mt-14 md:mt-20 grid gap-10 border border-foil/50 p-1.5">
            <div className="grid gap-8 border border-foil/25 bg-cloth-2 p-6 sm:gap-10 sm:p-10 md:grid-cols-12 md:items-center">
              <div className="md:col-span-7">
                <h3 className="font-display text-[2rem] md:text-[2.5rem] leading-[1.1] text-ink">Ready to apply?</h3>
                <ul className="mt-6 space-y-2.5 text-lg text-ink-2">
                  {BENEFITS.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-[0.7em] h-px w-4 shrink-0 bg-foil" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-5 grid">
                <PrimaryButton href={APPLY_URL} external>
                  Apply now <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </PrimaryButton>
                <p className="mt-4 text-base text-ink-2">
                  The application form opens in a new tab and takes about 5 minutes. Questions first? Call{' '}
                  <a href={PHONE_HREF} className="text-ink underline tabular">
                    {PHONE_DISPLAY}
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </Chapter>

        {/* ---------- Questions ---------- */}
        <Chapter id="questions" title="Questions from applicants" tone="raised">
          <div className="max-w-[52rem] border-t border-foil/60">
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.question} data-reveal style={delay(i)} className="border-b border-rule">
                  <h3>
                    <button
                      type="button"
                      id={`faq-q-${i}`}
                      aria-expanded={open}
                      aria-controls={`faq-a-${i}`}
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left text-xl md:text-[1.4rem] font-semibold text-ink transition-colors duration-150 hover:text-foil-bright"
                    >
                      <span>{f.question}</span>
                      <ChevronDown
                        className={`h-6 w-6 shrink-0 text-foil transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <div
                    id={`faq-a-${i}`}
                    role="region"
                    aria-labelledby={`faq-q-${i}`}
                    className="faq-panel"
                    data-open={open}
                    inert={!open}
                  >
                    <div>
                      <p className="pb-7 pr-10 text-lg md:text-xl leading-relaxed text-ink-2">
                        {f.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Chapter>

        {/* ---------- Contact ---------- */}
        <Chapter
          id="contact"
          title="Contact the company"
          lede="Partners, government offices and applicants are all welcome. Call, write, or visit us in Abuja."
        >
          <div className="grid border-t border-foil/60 lg:grid-cols-3">
            <a
              href={PHONE_HREF}
              data-reveal
              className="group border-b border-rule py-9 lg:border-b-0 lg:pr-10 transition-colors duration-150"
            >
              <Phone className="h-7 w-7 text-foil" strokeWidth={1.75} aria-hidden="true" />
              <p className="mt-5 text-base text-ink-3">Telephone</p>
              <p className="mt-1 font-display text-[2rem] leading-tight text-ink tabular group-hover:text-foil-bright group-hover:underline">
                {PHONE_DISPLAY}
              </p>
              <p className="mt-2 text-lg text-ink-2">Tap to call</p>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              data-reveal
              style={delay(1)}
              className="group border-b border-rule py-9 lg:border-b-0 lg:border-l lg:px-10 transition-colors duration-150"
            >
              <Mail className="h-7 w-7 text-foil" strokeWidth={1.75} aria-hidden="true" />
              <p className="mt-5 text-base text-ink-3">Email</p>
              <p className="mt-1 break-all text-[1.35rem] leading-snug text-ink group-hover:text-foil-bright group-hover:underline">
                {EMAIL}
              </p>
              <p className="mt-2 text-lg text-ink-2">We reply on working days</p>
            </a>
            <div data-reveal style={delay(2)} className="py-9 lg:border-l lg:border-rule lg:pl-10">
              <MapPin className="h-7 w-7 text-foil" strokeWidth={1.75} aria-hidden="true" />
              <p className="mt-5 text-base text-ink-3">Head office</p>
              <address className="mt-1 not-italic text-[1.35rem] leading-snug text-ink">
                {ADDRESS_LINES.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex min-h-11 items-center gap-1.5 text-lg text-foil underline hover:text-foil-bright"
              >
                Open in Google Maps <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </div>
        </Chapter>
      </main>

      {/* ---------- Phone action bar ---------- */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-rule bg-cloth/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-sm transition-[transform,visibility] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          showBar && !contactInView && !menuOpen ? 'visible translate-y-0' : 'invisible translate-y-full'
        }`}
        inert={!(showBar && !contactInView && !menuOpen)}
      >
        <div className="grid grid-cols-2 gap-3">
          <a
            href={PHONE_HREF}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[2px] border border-foil/70 text-lg font-semibold text-ink"
          >
            <Phone className="h-5 w-5" aria-hidden="true" /> Call us
          </a>
          <a
            href="#careers"
            className="inline-flex min-h-12 items-center justify-center rounded-[2px] bg-foil text-lg font-semibold text-cloth"
          >
            Apply to teach
          </a>
        </div>
      </div>

      {/* ---------- Footer ---------- */}
      <footer className="border-t border-rule bg-cloth-2 px-5 sm:px-8 pt-14 pb-28 md:pt-16 md:pb-10">
        <div className="mx-auto max-w-[76rem]">
          <div className="grid gap-10 md:gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="flex items-center gap-4">
                <img src="/mbas-shield.png" alt="" width="42" height="50" className="h-12 w-auto" />
                <p className="font-display text-2xl text-ink">MBAS Investment Limited</p>
              </div>
              <p className="mt-5 max-w-[26rem] text-lg text-ink-2">
                Real estate, financial markets and education technology, from Abuja.
              </p>
            </div>
            <nav aria-label="Footer" className="md:col-span-3">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-foil">Sections</p>
              <ul className="grid grid-cols-2 gap-x-6 md:grid-cols-1">
                {CHAPTERS.map((c) => (
                  <li key={c.id}>
                    <a href={`#${c.id}`} className="inline-flex min-h-11 items-center text-lg text-ink-2 hover:text-ink hover:underline">
                      {c.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="md:col-span-4">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-foil">Reach us</p>
              <ul className="text-lg text-ink-2">
                <li>
                  <a href={PHONE_HREF} className="inline-flex min-h-11 items-center tabular hover:text-ink hover:underline">
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${EMAIL}`} className="inline-flex min-h-11 items-center break-all hover:text-ink hover:underline">
                    {EMAIL}
                  </a>
                </li>
                <li className="mt-2">Labour House, Central Business District, Abuja</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 md:mt-14 flex flex-col gap-1 sm:gap-3 border-t border-rule-soft pt-6 text-base text-ink-3 sm:flex-row sm:justify-between">
            <p>&copy; {year} MBAS Investment Limited. All rights reserved.</p>
            <a href="#top" className="inline-flex min-h-11 items-center hover:text-ink hover:underline">
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
