# Implementation Plan — R. Anand Purohit & Vedic Astrologer Premium Redesign

## Overview

Complete replacement of the maroon/saffron/ivory design system with a dark navy/gold premium aesthetic across all pages and components. The stack is Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4 (CSS variables via `@theme` in `globals.css`), Framer Motion v13, Lucide React, react-hook-form + zod, and Supabase. No API routes are touched. All form logic is preserved verbatim — only styling classes change.

The work decomposes into 4 separable features, implemented sequentially. See `features/FEAT-001.json` through `features/FEAT-004.json` for detailed step lists.

---

## Design System Reference

```
@theme CSS variables (replace all existing --color-* entries):
  --color-primary:    #101C35   ← deep navy (was maroon)
  --color-background: #080F20   ← near-black navy (was ivory)
  --color-secondary:  #182744   ← mid navy (was maroon-light)
  --color-gold:       #B89552   ← antique gold (was saffron)
  --color-gold-light: #E5CC91   ← pale gold (was saffron-light)
  --color-cream:      #F3EBDD   ← warm cream (was ivory)
  --color-text:       #F8F5ED   ← near-white (was charcoal-light text)
  --color-muted:      #AAB3C4   ← cool grey (was charcoal-light)

Fonts (unchanged):
  --font-serif: "Playfair Display", serif   (--font-playfair variable)
  --font-sans:  "Inter", sans-serif         (--font-inter variable)
```

Old token → new token mapping (used everywhere):
| Old class | New class |
|---|---|
| `bg-maroon` | `bg-primary` |
| `bg-maroon-light` | `bg-secondary` |
| `bg-ivory` / `bg-ivory-dark` | `bg-background` / `bg-secondary` |
| `text-maroon` | `text-gold` |
| `text-saffron` / `text-saffron-dark` | `text-gold` / `text-gold-light` |
| `text-charcoal` | `text-text` |
| `text-charcoal-light` | `text-muted` |
| `border-ivory-dark` | `border-secondary` |
| `bg-saffron/10` | `bg-gold/10` |
| `focus:ring-saffron` | `focus:ring-gold` |

---

## Feature Order

1. **FEAT-001** — Design system + shared primitives (globals.css, constants.ts, layout.tsx, all ui/ components, layout/ components)
2. **FEAT-002** — Homepage + astrology page (src/app/page.tsx, src/app/astrology/page.tsx)
3. **FEAT-003** — Service pages (services/page.tsx, poojas/[slug]/page.tsx, poojas/[slug]/layout.tsx, contact/page.tsx, talk-to-us/page.tsx, my-journey/page.tsx)
4. **FEAT-004** — Content pages + utility pages (gallery/page.tsx, blogs/page.tsx, not-found.tsx, error.tsx, loading.tsx) + new puja-data.ts update for R. Anand services

---

## Detailed Plan

- [ ] 1. **globals.css — New design system**
      Replace the `@theme` block: remove all `--color-maroon*`, `--color-saffron*`, `--color-ivory*`, `--color-charcoal*` tokens; add the 8 new tokens listed above. Keep `--font-serif` and `--font-sans` unchanged. Update `@layer base`: body `bg-background text-text`, headings `text-gold`, selection `bg-gold text-background`, scrollbar track `bg-background` thumb `bg-gold`. Update `@layer components`: replace `.vedic-pattern` fill from `%237B1E3A` (maroon hex) to `%23B89552` (gold); `.text-gradient` use gold; `.form-input` use `bg-secondary border-secondary/40 text-text`; `.skip-link` use `bg-primary`; `.zodiac-ticker-track` unchanged. Add new component classes: `.glass-panel` (glassmorphism card), `.gold-border` (1px solid gold/30), `.celestial-glow` (radial-gradient gold/15 glow). Add `@keyframes pulse-glow` for gold shimmer on buttons.
      Files: `src/app/globals.css`
      Verify: `npm run build` — no TypeScript or CSS errors.

- [ ] 2. **src/lib/constants.ts — Brand update for R. Anand**
      Replace BRAND object: `name: "R. Anand Purohit & Vedic Astrologer"`, `tagline: "Authentic Vedic Wisdom, Celestial Guidance"`, `description: "Expert Vedic Astrology, KP Astrology, Vaastu, Numerology and sacred Pooja & Homa services by R. Anand."`, `whatsappNumber: "+918123235638"`, `email: "anandradhakrishna@gmail.com"`, `phone: "+91 81232 35638"`. Remove `phoneSecondary`. Remove `address`. Update NAV_LINKS: `[Home "/", About "/my-journey", Astrology "/astrology", Pooja Services "/services", Homa & Havan "/services", Vaastu & Numerology "/astrology", Contact "/contact"]`. Keep WHATSAPP_LINK formula. Keep `as const` on both objects.
      Files: `src/lib/constants.ts`
      Verify: `npm run build` — no type errors on BRAND references across the codebase.

- [ ] 3. **src/app/layout.tsx — Layout update**
      Change `themeColor` viewport to `"#101C35"`. Update metadata: title `"R. Anand | Vedic Astrologer & Purohit"`, description, keywords (vedic astrologer, KP astrology, vaastu, numerology, pooja, homa, R. Anand). Change `openGraph.siteName` and `creator` to `"R. Anand Purohit & Vedic Astrologer"`. Update body className: `bg-background text-text` (remove `bg-ivory text-charcoal`). Keep both font variables. Keep Navbar, Footer, WhatsAppButton, WelcomePopup imports unchanged. Keep `pt-16 sm:pt-18 md:pt-20` on main unchanged.
      Files: `src/app/layout.tsx`
      Verify: `npm run build` — clean build.

- [ ] 4. **src/components/ui/button.tsx — Premium gold button variants**
      Keep the `motion.button` wrapper and all `VariantProps` logic. Replace `cva` base: `focus-visible:ring-gold focus-visible:ring-offset-background`. New variants: `primary` → `bg-primary text-text border border-gold/30 hover:bg-secondary hover:border-gold/60 shadow-[0_0_16px_rgba(184,149,82,0.15)] hover:shadow-[0_0_24px_rgba(184,149,82,0.3)]`; `secondary` → `bg-transparent border border-gold/50 text-gold hover:bg-gold/10 hover:border-gold`; `gold` (rename from `saffron`) → `bg-gold text-background hover:bg-gold-light font-semibold shadow-[0_0_20px_rgba(184,149,82,0.35)]`; `ghost` → `bg-transparent text-gold hover:bg-gold/10`; `link` → `text-gold underline-offset-4 hover:underline`. Keep all size variants unchanged. Add `whileHover` scale 1.02 and `whileTap` scale 0.97.
      Files: `src/components/ui/button.tsx`
      Verify: `npm run build` — variant types resolve correctly.

- [ ] 5. **src/components/ui/section-heading.tsx — Gold accent bar and dark-mode support**
      Tag span: `text-gold` (replace `text-saffron`/`text-saffron-dark`). h2: `text-gold` when not light, `text-text` when light (replace `text-maroon`/`text-white`). Subtitle p: `text-muted` not-light, `text-text/70` light. Accent bar: `bg-gold` (replace `bg-saffron`). Add a subtle `w-2 h-2 rotate-45 bg-gold mx-auto mt-2` diamond below the bar.
      Files: `src/components/ui/section-heading.tsx`
      Verify: `npm run build` — no type errors.

- [ ] 6. **src/components/ui/card.tsx — Glass card variant**
      Add `variant` prop: `"default"` (existing light card) and `"glass"` (dark glassmorphism). Glass variant class: `bg-white/5 backdrop-blur-md border border-gold/20 hover:border-gold/40 hover:bg-white/8`. Default variant: `bg-background border border-secondary hover:border-gold/20`. Keep `motion.div/article` and `whileHover y:-3` unchanged.
      Files: `src/components/ui/card.tsx`
      Verify: `npm run build` — no TS errors.

- [ ] 7. **src/components/ui/breadcrumb.tsx — Token swap**
      Replace `text-charcoal-light` → `text-muted`, `hover:text-saffron` → `hover:text-gold`, `hover:text-maroon` → `hover:text-gold`, `text-maroon` (current active) → `text-gold`. No structural changes.
      Files: `src/components/ui/breadcrumb.tsx`
      Verify: `npm run build` — clean.

- [ ] 8. **src/components/ui/logo.tsx — Brand name update**
      Change hardcoded `"Gokarna Sarva Poojas"` to `"R. Anand"`. Change tagline `"Sacred Rituals, Divine Blessings"` to `"Purohit & Vedic Astrologer"`. Change `Image alt` to `"R. Anand Logo"`. Replace `text-saffron` → `text-gold`, `text-maroon` → `text-gold`. Update `aria-label` on Link. Keep all size logic unchanged.
      Files: `src/components/ui/logo.tsx`
      Verify: `npm run build` — clean.

- [ ] 9. **src/components/layout/navbar.tsx — Premium dark sticky navbar**
      Scrolled state: `bg-background/95 backdrop-blur-md shadow-lg border-b border-gold/20` (replace `bg-white/95 border-ivory-dark`). Not-scrolled: `bg-transparent backdrop-blur-sm` (remove `bg-ivory/80`). Desktop nav links: `text-text/80 hover:text-gold hover:bg-gold/10 rounded-lg` with a `after:` pseudo-element gold underline on active. CTA button: `bg-gold text-background hover:bg-gold-light` (replace maroon). Mobile menu backdrop: `bg-background/98 border-t border-gold/20`. Mobile links: `text-text hover:text-gold hover:bg-gold/10`. Mobile CTA: same gold style. Add active-page detection using `usePathname()` for gold underline. Hamburger button: `text-gold hover:bg-gold/10`.
      Files: `src/components/layout/navbar.tsx`
      Verify: `npm run build` — no TS errors.

- [ ] 10. **src/components/layout/footer.tsx — Premium dark footer**
      Root `footer`: `bg-primary` (replace `bg-maroon`). Update brand copy to R. Anand. Update footerServices to the Pooja list from the original user request (Gruhapravesha, Sathyanarayana Pooja, etc.). Add a 4th column "Astrology Services" with: Vedic Astrology, KP Astrology, Birth Chart Analysis, Horoscope Matching, Muhurat, Numerology. Heading colour: `text-gold` (replace `text-saffron`). Link hover: `hover:text-gold`. Decorative top border: gradient `from-gold/0 via-gold/40 to-gold/0`. Bottom bar: `border-gold/10`. Replace all contact details with R. Anand's: `+91 81232 35638`, `anandradhakrishna@gmail.com`. Remove Gokarna address. Keep WhatsApp, phone, email icon buttons with `hover:bg-gold hover:text-background`.
      Files: `src/components/layout/footer.tsx`
      Verify: `npm run build` — BRAND type check passes (no `phoneSecondary`).

- [ ] 11. **src/components/layout/whatsapp-button.tsx — Minimal restyle**
      Button background stays `#25D366`. Tooltip: `bg-primary text-text` (replace `bg-charcoal text-white`). No structural changes needed.
      Files: `src/components/layout/whatsapp-button.tsx`
      Verify: `npm run build` — clean.

- [ ] 12. **src/components/layout/welcome-popup.tsx — Restyle to dark gold**
      Card background: `bg-primary border border-gold/30`. Close button: `bg-gold/20 hover:bg-gold/40 text-text`. Top bar: `bg-gradient-to-r from-gold/60 via-gold to-gold/60`. Welcome span: `text-gold`. h2: `text-gold font-serif`. Subtitle p: `text-text/70`. Update hardcoded name to `"R. Anand"` and description to `"Authentic Vedic Astrology, Pooja & Homa Services"`. Replace saffron Sparkles → gold colour. Keep auto-close timer logic unchanged.
      Files: `src/components/layout/welcome-popup.tsx`
      Verify: `npm run build` — clean.

- [ ] 13. **src/app/page.tsx — Full homepage redesign**
      Hero section: Replace background image overlay with `bg-gradient-radial from-gold/10 via-background to-background`. Add animated SVG zodiac wheel (12 rashi symbols on a ring, slow `rotate` animation via Framer Motion). Add 3 slowly rotating orbital rings (concentric, `border border-gold/15`, counter-rotate at different speeds). Add floating particle field (40 deterministic star dots, same pattern as existing StarField in astrology/page.tsx). Hero text: heading `"Discover Your Path Through Vedic Wisdom"`, subtitle `"Authentic Vedic Astrology, KP Astrology, Vaastu & Numerology Guidance"`. CTAs: `"Book Astrology Consultation" → /astrology`, `"Explore Pooja Services" → /services`. Replace old trust stats with R. Anand's actual credentials: `10+ Years Pooja Experience`, `15 Years Astrology Practice`, `5 Languages`, `MA Astrology + PhD (Pursuing)`. Replace popular services section: use updated puja list (Gruhapravesha, Sathyanarayana Pooja & Udyapan, Vaastu Pooja, Sudarshana Aradhana, Sarvatobhadra Mandala, Adityadi Navagraha Shanti) — 6 cards with `glass-panel` variant on dark background. Add Astrology Services section (6 cards: Vedic Astrology, KP Astrology, Birth Chart, Horary Chart, Horoscope Matching, Muhurat) with gold icon glow. Add About R. Anand teaser section: two-column with profile image placeholder and qualifications list (B.Sc, MBA, MA Astrology, PG Jyothir Vaastu, PhD pursuing; Krishna Yajurveda tradition; languages). Remove VideoSection. Replace "How It Works" section with "Service Categories" grid: Pooja, Homa & Havan, Astrology, Vaastu & Numerology. Keep testimonials section, restyle to dark glass cards. Remove old Gokarna-specific content. Replace footer CTA with gold shimmer button.
      Color tokens: all `bg-maroon` → `bg-primary`, all `bg-ivory` → `bg-background`, all `text-maroon` → `text-gold`, all `text-saffron` → `text-gold`.
      Files: `src/app/page.tsx`
      Verify: `npm run build` — no TS errors.

- [ ] 14. **src/app/astrology/page.tsx — Full premium astrology page**
      Keep all existing sections but restyle entirely to dark navy/gold. Hero: replace `bg-[#0D0A1A]` with `bg-background`, keep StarField and CelestialRings (change ring colours from `border-saffron/10` → `border-gold/15`). Zodiac ticker: `bg-primary text-text` (replace `bg-charcoal`). Replace existing 6 service cards (Janam Kundli, Kundli Milan, etc.) with the 11 astrology services from the user request: Vedic Astrology, KP System, Birth Chart Analysis, Horary Chart, Rotational Chart, BTR, Horoscope Matching, Marriage Compatibility, Muhurat, Child Naming, Name Change. Use `glass-panel` cards. Add dedicated sections for: Vaastu (5 services: Jyothir Vaastu, Residential, Commercial, House Construction, Muhurat) and Numerology (5 services: Hebrew Pyramid, Baby Naming, Name Correction, Name Change, Marriage Date). These can be accordion-style expandable sections below the main services. Keep consultation form section. Keep WhyChoose section. Change all `text-saffron` → `text-gold`, `bg-maroon` → `bg-primary`, `text-maroon` → `text-gold`, `bg-ivory-dark` → `bg-secondary`. Do NOT touch any consultation form logic — only restyle the wrapper divs and input classes (change `bg-ivory border-ivory-dark` → `bg-secondary/50 border-gold/20 text-text`, `focus:ring-saffron` → `focus:ring-gold`).
      Files: `src/app/astrology/page.tsx`
      Verify: `npm run build` — clean.

- [ ] 15. **src/app/poojas/page.tsx — Create new poojas listing page**
      This route does NOT currently exist as a listing (only `poojas/[slug]/page.tsx` exists). Create `src/app/poojas/page.tsx` as a new file: a listing page for all pooja services from `PUJA_SERVICES` in puja-data.ts. Structure: hero section (dark navy + gold), service grid showing all puja services from PUJA_SERVICES, each card links to `/poojas/[slug]`. No form logic needed. Dark glass card design matching the new aesthetic. Add metadata export. Also update `puja-data.ts`: replace the current generic puja list with R. Anand's actual services from the user request (Gruhapravesha, Sathyanarayana Pooja & Udyapan, Vaastu Pooja, Sudarshana Aradhana, Sarvatobhadra Mandala Aradhana, Adityadi Navagraha Shanti, Nakshatra Shanti, Dushta Janana Nakshatra Shanti, Tripadi Nakshatra Shanti, Narayana Bali, Sarpa Sanskar, Ashlesha Bali Pooja, Navagraha Japa, Mahamrityunjaya Japa, Lakshmi Venkateshwara Kalyanotsava, Girija Kalyanotsava for Poojas; and Mahaganapathi Homa, Navagraha Homa, Mahamrityunjaya Homa, Lakshmi Narayana Hrudaya Parayana & Homa, Rudra Homa, Aghora Rudra Homa, Mahasudarshana Homa, Rakshoghna Homa, Chandi Parayana & Homa, Ashtavadhana Seva for Homa/Havan). Keep the PujaService type interface. Keep `getPujaBySlug` and `getPujasByCategory` helpers.
      Files: `src/app/poojas/page.tsx` (new), `src/lib/puja-data.ts`
      Verify: `npm run build` — poojas route builds, no broken slug imports.

- [ ] 16. **src/app/services/page.tsx — Restyle services listing**
      Keep ALL filter/search/sidebar logic (useState, useMemo, FilterSidebar component) verbatim. Replace only colours: `bg-maroon` → `bg-primary`, `bg-ivory-dark` → `bg-secondary`, `text-maroon` → `text-gold`, `text-saffron-dark` → `text-gold`, `border-ivory-dark` → `border-secondary`, `bg-white` → `bg-primary` on card backgrounds, `hover:border-maroon/10` → `hover:border-gold/20`, `focus:ring-saffron` → `focus:ring-gold`. Hero background gradient: replace maroon with `from-background via-primary to-background`. Service card image placeholder: `bg-gradient-to-br from-primary via-secondary to-gold/10`.
      Files: `src/app/services/page.tsx`
      Verify: `npm run build` — filter logic type-checks pass.

- [ ] 17. **src/app/poojas/[slug]/page.tsx — Restyle puja detail page**
      Keep all logic: `useParams`, `getPujaBySlug`, `FAQItem` accordion state, all PUJA_SERVICES references. Replace only colours (same mapping as above). Hero gradient: `from-background via-primary to-background`. Booking card: `bg-secondary/60 backdrop-blur border-gold/20`. FAQItem: `bg-secondary border-secondary hover:bg-primary/80`. CheckCircle icons: `text-gold`. Procedure step dots: `bg-gold text-background`. Samagri pill: `bg-secondary text-muted`. Gallery placeholder: `bg-secondary`. Related services card: `bg-secondary hover:border-gold/20`.
      Files: `src/app/poojas/[slug]/page.tsx`, `src/app/poojas/[slug]/layout.tsx` (metadata update)
      Verify: `npm run build` — slug dynamic route builds.

- [ ] 18. **src/app/my-journey/page.tsx — R. Anand profile restyle**
      Update all hardcoded copy: Replace `"Dattatreya Bhat Bhadti"` with `"R. Anand"` everywhere. Update name badge, h1 (`"My Journey"`), languages to `"Telugu, Tamil, Kannada, Hindi, English"`. Update personal story paragraphs: 10+ years Pooja & Homa experience, 15 years Astrology/Vaastu/Numerology practice, learned from grandfather, Krishna Yajurveda tradition. Update qualifications in sidebar/callout: B.Sc, MBA (Marketing), MA (Astrology), PG Diploma Jyothir Vaastu, PhD Pursuing. Update experience stats: `"10+ Years"` Pooja Experience, `"15 Years"` Astrology Practice. Update timeline entries to reflect R. Anand's actual journey (replace Nepal/Varanasi entries with Astrology/Vaastu practice journey). Replace all colour tokens: same mapping. Hero background gradient: `from-background via-primary to-background`. Values section: `bg-primary` instead of `bg-maroon`. Photo story section: `bg-primary` instead of `bg-charcoal`. Image src references: change `/images/pandit-manoj.jpg` to `/images/pandit-story.jpg` (already exists as fallback).
      Files: `src/app/my-journey/page.tsx`
      Verify: `npm run build` — no TS errors.

- [ ] 19. **src/app/contact/page.tsx — Restyle contact page, preserve all form logic**
      PRESERVE VERBATIM: entire `useForm`, `zodResolver(contactFormSchema)`, `register`, `handleSubmit`, `watch`, `errors`, `isSubmitting`, `onSubmit`, `dynamicWhatsAppUrl`, `submitted` state, `poojaOptions` array. Update contact details using BRAND constants: replace hardcoded numbers/emails with `BRAND.phone`, `BRAND.email`, `BRAND.whatsappNumber`. Remove map section (Gokarna-specific), replace with a simple "Book a Consultation" CTA block. Form input classes: `bg-secondary/50 border-gold/20 text-text placeholder:text-muted/50 focus:ring-gold focus:border-transparent`. Select: same. Hero gradient: `from-background via-primary to-background`. Contact info cards: `bg-secondary border-secondary hover:border-gold/20`. Sidebar cards: `bg-secondary border-gold/20`. Submit button: `gold` variant. WhatsApp button: keep `bg-[#25D366]`. Error text: `text-red-400` (keep). Success screen: replace `bg-saffron/20` with `bg-gold/20`, `text-saffron-dark` → `text-gold`.
      Files: `src/app/contact/page.tsx`
      Verify: `npm run build` — zod types resolve, no missing BRAND field errors.

- [ ] 20. **src/app/talk-to-us/page.tsx — Restyle booking wizard, preserve ALL step logic**
      PRESERVE VERBATIM: all `useState` (step, formData, errors, bookingId, isSubmitting), `validateStep`, `nextStep`, `prevStep`, `submitBooking`, `fetch("/api/booking", ...)` call, `generateBookingId()`, `generateWhatsAppMessage()`, all `poojaOptions`, `timeSlots`, `STEPS` arrays. Update poojaOptions to include R. Anand's actual services: Gruhapravesha, Sathyanarayana Pooja, Nakshatra Shanti, Navagraha Japa, Mahamrityunjaya Japa, Navagraha Homa, Rudra Homa, Vedic Astrology Consultation, KP Astrology, Kundli Analysis, Muhurat Consultation. Color tokens: same mapping throughout. Step indicator: completed = `bg-gold text-background`, current = `bg-primary text-gold border border-gold`, pending = `bg-secondary border-secondary`. Pooja selection cards: `bg-secondary border-secondary hover:border-gold/30`, selected = `border-gold bg-gold/10`. Input fields: `bg-secondary/50 border-gold/20 text-text focus:ring-gold`. Review card: `bg-secondary/80 border-gold/20`. Confirmation screen: `bg-gold/10` success icon area.
      Files: `src/app/talk-to-us/page.tsx`
      Verify: `npm run build` — no TS errors on the Supabase/API call.

- [ ] 21. **src/app/gallery/page.tsx — Restyle gallery, preserve all lightbox logic**
      PRESERVE VERBATIM: all `GalleryImage` interface, `GALLERY_IMAGES` array (s1–s20 paths stay), `SACRED_FILMS`, `Lightbox` component with keyboard/touch handling, `GalleryCard`, `FilmCard`, `openLightbox`, `closeLightbox`, `nextImage`, `prevImage`, `filteredImages`, `activeTab`. Color tokens: hero `bg-background` (replace `bg-gradient-to-b from-[#1a1410]`). Tab buttons: active = `bg-gold text-background`, inactive = `bg-secondary text-text/90 hover:bg-gold/20`. Lightbox backdrop: `bg-background/95`. Gallery card border: `border-gold/10 hover:shadow-gold/10`. Gold shimmer sweep: keep as-is (it's already gold-based). VIP label rename to `"Signature Collection"` (already is).
      Files: `src/app/gallery/page.tsx`
      Verify: `npm run build` — no TS errors.

- [ ] 22. **src/app/blogs/page.tsx — Restyle blogs, preserve filter/search logic**
      PRESERVE VERBATIM: all `useState`, `useMemo` filter logic, `BLOG_POSTS`, `BLOG_CATEGORIES` imports. Hero: `bg-background` (remove ivory gradient), heading `text-gold` (replace `text-maroon`). Search input: `bg-secondary border-secondary focus:ring-gold`. Featured article image: `bg-gradient-to-br from-primary via-secondary to-gold/10`. Category badge: `bg-secondary/90 text-gold` on image. Article cards: `bg-secondary border-secondary hover:border-gold/20`. Author avatar: `bg-gold/10`. Category filter tabs: active = `bg-gold text-background`, inactive = `bg-secondary text-text`. Blog category: `text-gold`. CTA section: `bg-primary`.
      Files: `src/app/blogs/page.tsx`
      Verify: `npm run build` — clean.

- [ ] 23. **Utility pages — not-found, error, loading**
      `not-found.tsx`: icon container `bg-gold/10`, 404 text `text-gold`, h1 `text-gold`, body `bg-background`, buttons use new variants. `error.tsx`: icon `bg-gold/10 text-gold`, h2 `text-gold`, body `bg-background`. `loading.tsx`: spinner `border-gold/20 border-t-gold`, container `bg-background`, text `text-muted`.
      Files: `src/app/not-found.tsx`, `src/app/error.tsx`, `src/app/loading.tsx`
      Verify: `npm run build` — all three compile.

- [ ] 24. **Final build verification**
      Run `npm run build` from project root. All pages must compile without TypeScript errors. Confirm: API routes untouched, form schemas untouched, Supabase client untouched, PUJA_SERVICES slugs still resolve in `/poojas/[slug]` route.
      Files: none (verification only)
      Verify: `npm run build` exits with code 0.

---

## Key Constraints for Implementer

1. **Never touch** `src/app/api/**`, `src/lib/supabase.ts`, `src/lib/validations/booking.ts`, `src/lib/utils.ts`.
2. **Form logic is sacred**: `useForm`, `zodResolver`, `register`, `handleSubmit`, all `watch` calls, `fetch("/api/booking", ...)` — copy them verbatim, change only surrounding layout/input className strings.
3. **Tailwind v4 — no `tailwind.config.js`**. All custom tokens live in `@theme {}` inside `globals.css`. New utility classes like `bg-primary`, `text-gold`, `border-gold/20` are generated automatically from the CSS variables. Do NOT create a tailwind.config.js.
4. **No new npm packages**. All required libraries (Framer Motion, Lucide, CVA) are already installed.
5. **Image paths**: Do not rename or move images. Hero needs `/images/hero-bg.jpg` (use existing). Gallery uses `/images/gallery/signature/s1.jpeg` through `s20.jpeg` (verified to exist). If an image is missing, use a CSS gradient placeholder — do not `throw`.
6. **poojas listing page** (`src/app/poojas/page.tsx`) is a NEW file. The existing `[slug]` route is NOT a listing page. Create the new file without touching the slug route's folder structure.
7. **BRAND.phoneSecondary is removed** — scan for any remaining references after updating constants.ts and remove them.
8. **Animations**: Keep all existing Framer Motion animations. Only restyle colours of animated elements. New celestial elements (zodiac wheel, orbital rings, particles) should respect `prefers-reduced-motion` — wrap with `motion.div` but include `@media (prefers-reduced-motion: reduce)` CSS override.
