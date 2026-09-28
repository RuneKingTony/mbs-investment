# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Two audiences, weighted equally:
- **Investors, partners and government contacts** judging whether MBAS Investment Limited is a credible, established Nigerian company worth working with. Often older readers; they need large type, calm pacing and plain facts.
- **Tutor applicants**: Nigerians applying for the remote, part-time Online English Tutor role (teaching Chinese students through the SLING Education partnership). Their job is to check requirements and reach the application form.

## Product Purpose
The single-page corporate website for MBAS Investment Limited (Abuja). It establishes the company's credibility across its sectors and routes tutor candidates to the application form. Success means a partner leaves with clear contact details and a tutor candidate reaches the Zoho application.

## Positioning
A diversified Nigerian company working on private and government contracts in real estate, financial markets (stocks, crypto, forex) and education technology, with an active education partnership with SLING Education connecting Nigerian tutors to Chinese students.

## Capabilities and Constraints
- Stack: Vite + React 19 + Tailwind v4, lucide-react icons. Single component at `src/components/mbasinvestment.jsx`.
- Application form (external): https://forms.zohopublic.com/anchorfitng1/form/RecruitmentForm/formperma/y3LpDxfwkExQg2gh_pnYHuf5CjToKESExIH88j5om38
- Real estate and financial-market projects are "coming soon"; only SLING Education is active.

## Brand Commitments
- Name: MBAS Investment Limited. Logo: `public/MBA.png`, `public/mbaswhite.png`, favicons `public/mbass*.png`.
- Existing palette: black/charcoal with gold (yellow-500/600) accents, serif display headings. Keep a similar scheme.

## Evidence on Hand
- Contact: mbasinvestmentltd@gmail.com, +234 814 409 0991, 7th Floor, Labour House, Muhammadu Buhari Way, Central Business District, Abuja.
- Tutor requirements, responsibilities, equipment, hiring process and FAQ copy (in the component).
- **Absent: verified metrics.** Do not show team size, student counts, satisfaction rates, returns or sector counts until the owner supplies real numbers. No testimonials or client logos exist.

## Product Principles
1. Credibility over hype: plain facts, no invented numbers.
2. Two clear paths: partner with MBAS, or apply to teach.
3. Readable by everyone: calm, large, high-contrast; motion is slow and classic.

## Accessibility & Inclusion
Older readers are a core audience: WCAG 2.2 AA minimum, body text at least 18px, generous tap targets (48px), no constant ambient motion; the one auto-advancing element (the project showcase, kept at the client's request) must be slow and hold on hover, focus and when off screen (the client declined a Pause button); and `prefers-reduced-motion` honored.
