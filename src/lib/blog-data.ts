export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  content: string;
  tableOfContents: { id: string; title: string }[];
  relatedSlugs: string[];
}

export const BLOG_CATEGORIES = [
  "All",
  "Pooja",
  "Gokarna",
  "Vedic Tradition",
  "Temple",
  "Spirituality",
  "Festivals",
  "Astrology",
] as const;

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "spiritual-significance-of-rudrabhisheka-in-gokarna",
    title: "The Spiritual Significance of Rudrabhisheka",
    excerpt:
      "Discover the extraordinary spiritual potency of Rudrabhisheka — and how this ancient ritual can transform your life through authentic Vedic practice.",
    category: "Pooja",
    author: "Pandit Raghunath Sharma",
    authorRole: "Senior Vedic Scholar",
    date: "August 12, 2026",
    readTime: "8 min read",
    image: "/images/blog/rudrabhisheka-gokarna.jpg",
    featured: true,
    content: `
## The Ancient Power of Rudrabhisheka

Rudrabhisheka is one of the most powerful Vedic rituals dedicated to Lord Shiva. This sacred ceremony has been performed for thousands of years by devoted practitioners seeking divine blessings, karmic cleansing, and spiritual transformation.

When performed with proper adherence to Vedic protocols and sincere devotion, Rudrabhisheka invokes the direct blessings of Lord Shiva, bringing profound spiritual and material benefits to the devotee.

## What Makes Rudrabhisheka Special

Rudrabhisheka is not merely a pouring of substances over a Shivalinga. It is a sophisticated Vedic ceremony involving:

- **Sri Rudram Chanting**: The most powerful hymn dedicated to Rudra (Shiva) from the Yajur Veda
- **Chamakam**: A companion hymn requesting 346 blessings from the divine
- **Panchamrit Abhisheka**: Sequential bathing with five sacred substances
- **Bilva Archana**: Offering of 108 Bilva leaves, each representing a specific prayer

## The Five Substances and Their Significance

Each substance used in the Abhisheka carries deep symbolic and spiritual meaning:

1. **Milk** — Represents purity and nourishment. Bathing Shiva with milk cleanses past karma.
2. **Curd** — Represents prosperity and patience. Brings stability to the devotee's life.
3. **Honey** — Represents sweetness in speech and relationships. Harmonizes family bonds.
4. **Ghee** — Represents spiritual illumination. Opens the path to higher consciousness.
5. **Sugar water** — Represents the sweetness of liberation. Grants moksha-oriented blessings.

## When to Perform Rudrabhisheka

While Rudrabhisheka can be performed any day, certain timings amplify its effects:

- **Mondays**: Lord Shiva's primary day
- **Pradosh**: The sacred evening twilight period
- **Shravan Month**: The holiest month for Shiva worship
- **Maha Shivaratri**: The most powerful night for Shiva rituals
- **Solar/Lunar Eclipse**: When cosmic energies are at their peak

## Benefits for Modern Life

In today's fast-paced world, Rudrabhisheka offers:

- Deep stress relief through the meditative chanting
- Removal of stubborn obstacles in career and relationships
- Health improvement, especially for chronic conditions
- Spiritual awakening and clarity of purpose
- Protection from negative energies and ill-intentions

## Our Approach to Sacred Ceremonies

R. Anand performs Rudrabhisheka and other traditional ceremonies with complete adherence to Vedic protocols. With years of experience in Krishna Yajurveda tradition, every ceremony is conducted with the depth of authentic tradition and spiritual dedication.

Ceremonies can be performed at your home or preferred location, ensuring that the spiritual benefits reach you in the most comfortable and auspicious setting possible.
    `,
    tableOfContents: [
      { id: "the-ancient-power-of-rudrabhisheka", title: "The Ancient Power of Rudrabhisheka" },
      { id: "what-makes-rudrabhisheka-special", title: "What Makes Rudrabhisheka Special" },
      { id: "the-five-substances-and-their-significance", title: "The Five Substances and Their Significance" },
      { id: "when-to-perform-rudrabhisheka", title: "When to Perform Rudrabhisheka" },
      { id: "benefits-for-modern-life", title: "Benefits for Modern Life" },
      { id: "our-approach-to-sacred-ceremonies", title: "Our Approach to Sacred Ceremonies" },
    ],
    relatedSlugs: ["choosing-the-right-pandit", "power-of-shravan-month"],
  },
  {
    slug: "choosing-the-right-pandit",
    title: "How to Choose the Right Pandit for Your Sacred Ceremony",
    excerpt:
      "Finding an experienced and authentic pandit is crucial for any Vedic ceremony. Here's what to look for, what questions to ask, and red flags to avoid.",
    category: "Vedic Tradition",
    author: "Pandit Vishwanath Bhat",
    authorRole: "Vedic Ritual Expert",
    date: "August 5, 2026",
    readTime: "6 min read",
    image: "/images/blog/choosing-pandit.jpg",
    content: `
## Why the Right Pandit Matters

A Vedic ceremony is only as powerful as the person performing it. The pandit's knowledge, pronunciation, intent, and spiritual discipline all directly impact the energy of the ritual.

## Key Qualities to Look For

### Traditional Training
The pandit should have formal Gurukul training, not just informal learning. Ask about their teacher lineage (Guru Parampara).

### Experience
Years of active practice matter. A pandit who performs ceremonies regularly maintains sharpness in pronunciation and ritual flow.

### Specialization
Just as you'd choose a specialist doctor, choose a pandit who specializes in your specific ceremony type.

### Communication
A good pandit explains what they're doing and why. They make you feel comfortable and included in the ceremony.

## Questions to Ask Before Booking

1. Where did you receive your training?
2. How many years have you been performing ceremonies?
3. Do you specialize in this particular ritual?
4. What materials do you provide vs. what should I arrange?
5. Can you explain the ceremony flow to my family?
6. Do you offer guidance on auspicious timing?

## Red Flags to Watch For

- Refusing to explain the ceremony
- Rushing through mantras
- Asking for excessive fees without transparency
- No references or background verification
- Creating fear to sell additional services
    `,
    tableOfContents: [
      { id: "why-the-right-pandit-matters", title: "Why the Right Pandit Matters" },
      { id: "key-qualities-to-look-for", title: "Key Qualities to Look For" },
      { id: "questions-to-ask-before-booking", title: "Questions to Ask Before Booking" },
      { id: "red-flags-to-watch-for", title: "Red Flags to Watch For" },
    ],
    relatedSlugs: ["spiritual-significance-of-rudrabhisheka-in-gokarna", "navagraha-dosha-remedies"],
  },
  {
    slug: "power-of-shravan-month",
    title: "The Sacred Power of Shravan Month for Shiva Devotees",
    excerpt:
      "Shravan month holds extraordinary significance for Lord Shiva devotees. Learn why rituals performed during this period yield results multiplied thousandfold.",
    category: "Festivals",
    author: "Pandit Raghunath Sharma",
    authorRole: "Senior Vedic Scholar",
    date: "July 28, 2026",
    readTime: "7 min read",
    image: "/images/blog/shravan-month.jpg",
    content: `
## What is Shravan Month?

Shravan (also spelled Shravana) is the fifth month in the Hindu calendar, typically falling in July-August. It is considered the holiest month for worship of Lord Shiva.

## Why Shravan is Sacred

According to Vedic texts, during the cosmic churning of the ocean (Samudra Manthan), Lord Shiva drank the poison Halahala to save the universe. This event occurred during Shravan, making this month eternally sacred.

## Rituals to Perform During Shravan

### Every Monday (Shravan Somvar)
- Rudrabhisheka
- Shiva temple visits
- Fasting with single meal

### Specific Dates
- Nag Panchami — Worship of serpent deities
- Shravan Purnima — Full moon rituals
- Last Monday — Most powerful of all Shravan Mondays

## Benefits of Shravan Worship

The scriptures mention that worship during Shravan is multiplied 1000-fold in its effects. Specific benefits include:

- Accelerated karmic cleansing
- Health restoration
- Family harmony
- Removal of deep-seated obstacles
- Spiritual advancement

## How to Make the Most of Shravan

1. Begin each day with Shiva mantra
2. Visit a Shiva temple on all Mondays
3. Perform at least one Rudrabhisheka
4. Offer Bilva leaves daily
5. Observe Monday fasting
6. Read or listen to Shiva Purana
    `,
    tableOfContents: [
      { id: "what-is-shravan-month", title: "What is Shravan Month?" },
      { id: "why-shravan-is-sacred", title: "Why Shravan is Sacred" },
      { id: "rituals-to-perform-during-shravan", title: "Rituals to Perform During Shravan" },
      { id: "benefits-of-shravan-worship", title: "Benefits of Shravan Worship" },
      { id: "how-to-make-the-most-of-shravan", title: "How to Make the Most of Shravan" },
    ],
    relatedSlugs: ["spiritual-significance-of-rudrabhisheka-in-gokarna", "gokarna-spiritual-guide"],
  },
  {
    slug: "navagraha-dosha-remedies",
    title: "Understanding Navagraha Dosha and Effective Vedic Remedies",
    excerpt:
      "Learn how planetary afflictions in your horoscope affect your life and discover the specific Vedic poojas and mantras that bring lasting relief.",
    category: "Astrology",
    author: "Jyotishacharya Suresh Kini",
    authorRole: "Vedic Astrologer",
    date: "July 20, 2026",
    readTime: "10 min read",
    image: "/images/blog/navagraha-remedies.jpg",
    content: `
## What is Navagraha Dosha?

In Vedic astrology, a Dosha occurs when one or more planets are placed unfavorably in your birth chart. These planetary afflictions can create repeated obstacles in specific life areas.

## The Nine Planets and Their Influence

Each of the nine celestial bodies governs specific aspects of life:

- **Surya (Sun)** — Authority, father, health, government
- **Chandra (Moon)** — Mind, mother, emotions, creativity
- **Mangal (Mars)** — Energy, courage, property, siblings
- **Budh (Mercury)** — Intelligence, communication, business
- **Guru (Jupiter)** — Wisdom, wealth, children, spirituality
- **Shukra (Venus)** — Love, luxury, art, marriage
- **Shani (Saturn)** — Discipline, karma, longevity, service
- **Rahu** — Material desires, foreign connections, sudden events
- **Ketu** — Spirituality, liberation, past karma, detachment

## Common Doshas and Their Effects

### Mangal Dosha
Delays in marriage, conflict in relationships. Affects approximately 50% of people to varying degrees.

### Shani Dosha (Sade Sati)
Career challenges, financial pressure, health issues during Saturn's 7.5-year transit over your Moon sign.

### Kaal Sarp Dosha
All planets between Rahu and Ketu creating a pattern of sudden ups and downs in life.

## Vedic Remedies That Work

### Mantra Japa
Specific planetary mantras chanted in prescribed numbers during favorable times.

### Gemstone Therapy
Wearing the right gemstone (after proper analysis) strengthens weak benefic planets.

### Specific Poojas
Navagraha Shanti Pooja, planet-specific Havan, and Dosha Nivaran rituals performed by experienced pandits.

### Daan (Charitable Giving)
Specific items donated on specific days to pacify afflicted planets.
    `,
    tableOfContents: [
      { id: "what-is-navagraha-dosha", title: "What is Navagraha Dosha?" },
      { id: "the-nine-planets-and-their-influence", title: "The Nine Planets and Their Influence" },
      { id: "common-doshas-and-their-effects", title: "Common Doshas and Their Effects" },
      { id: "vedic-remedies-that-work", title: "Vedic Remedies That Work" },
    ],
    relatedSlugs: ["choosing-the-right-pandit", "power-of-shravan-month"],
  },
  {
    slug: "gokarna-spiritual-guide",
    title: "A Spiritual Pilgrim's Guide to Gokarna — Temples, Beaches & Sacred Sites",
    excerpt:
      "Everything you need to know before visiting Gokarna for spiritual purposes — the best temples, sacred beaches, and how to plan your pilgrimage.",
    category: "Gokarna",
    author: "Pandit Raghunath Sharma",
    authorRole: "Senior Vedic Scholar",
    date: "July 12, 2026",
    readTime: "9 min read",
    image: "/images/blog/gokarna-guide.jpg",
    content: `
## Why Gokarna is Sacred

Gokarna literally means "cow's ear" — referring to the legend that Lord Shiva emerged from the ear of a cow (Prithvi Devi in cow form) at this very location. The town is home to the Atmalinga, making it one of the most sacred Shiva sites in India.

## Must-Visit Sacred Sites

### 1. Mahabaleshwar Temple
The main temple housing the Atmalinga. Morning Abhisheka at 6 AM is the most powerful time to visit.

### 2. Maha Ganapati Temple
Visit before Mahabaleshwar as per tradition. Lord Ganesha here is self-manifested (Swayambhu).

### 3. Bhadrakali Temple
The Shakti Peetha of Gokarna. Essential for devotees seeking divine mother's blessings.

### 4. Kotiteertha
Sacred temple tank where pilgrims perform ancestral rites and purification.

### 5. Om Beach
Naturally shaped like the Om symbol. Meditation here during sunrise is profoundly transformative.

## Best Times to Visit

- **Shivaratri** — Largest gathering, immense spiritual energy
- **Shravan Month** — Daily special rituals
- **Navratri** — Nine nights of divine feminine worship
- **Any Pradosh** — Evening twilight Shiva worship

## Planning Your Spiritual Visit

1. Book accommodation near the temple area
2. Plan to attend morning Abhisheka (6 AM)
3. Schedule your personal pooja in advance
4. Allow 2-3 days for complete temple circuit
5. Combine beach meditation with temple visits

## How We Can Help

R. Anand can guide you in planning your spiritual journey — from selecting auspicious timing for ceremonies to personalized ritual bookings and consultation on sacred practices for your spiritual growth.
    `,
    tableOfContents: [
      { id: "why-gokarna-is-sacred", title: "Why Gokarna is Sacred" },
      { id: "must-visit-sacred-sites", title: "Must-Visit Sacred Sites" },
      { id: "best-times-to-visit", title: "Best Times to Visit" },
      { id: "planning-your-spiritual-visit", title: "Planning Your Spiritual Visit" },
      { id: "how-we-can-help", title: "How We Can Help" },
    ],
    relatedSlugs: ["spiritual-significance-of-rudrabhisheka-in-gokarna", "power-of-shravan-month"],
  },
  {
    slug: "vastu-tips-new-home",
    title: "Essential Vastu Tips Before Moving Into Your New Home",
    excerpt:
      "Simple yet powerful Vastu principles you can apply to bring positive energy, prosperity, and harmony to your living space from day one.",
    category: "Spirituality",
    author: "Pandit Vishwanath Bhat",
    authorRole: "Vedic Ritual Expert",
    date: "July 5, 2026",
    readTime: "5 min read",
    image: "/images/blog/vastu-tips.jpg",
    content: `
## What is Vastu Shastra?

Vastu Shastra is the ancient Indian science of architecture and spatial arrangement. It aligns your living space with natural energies and cosmic forces to promote health, wealth, and happiness.

## Key Vastu Principles for Your New Home

### Main Entrance
- Ideally faces North, East, or Northeast
- Should be the largest door in the house
- Keep well-lit and clutter-free
- Place auspicious symbols like Swastik or Om

### Kitchen
- Best in Southeast direction (Agni corner)
- Cook facing East
- Never place kitchen directly opposite bathroom
- Keep stove away from water sources

### Master Bedroom
- Southwest corner is ideal
- Head should point South or East while sleeping
- Avoid mirrors facing the bed
- Keep electronics minimal

### Pooja Room
- Northeast corner (Ishanya) is most auspicious
- Keep elevated from ground level
- Idols should face West (devotee faces East)
- Keep always clean and fragrant

## Griha Pravesh: The Essential First Step

Before applying any Vastu principles, a proper Griha Pravesh ceremony is essential. This sacred ritual:

- Purifies the space of previous energies
- Invites positive cosmic forces
- Establishes spiritual protection
- Aligns the home with your family's energy

## Book Your Griha Pravesh

Our experienced pandits perform comprehensive Griha Pravesh ceremonies that include Vastu Pooja, Ganapati Pooja, Navagraha Shanti, and sacred Havan — ensuring your new home starts its journey with maximum positive energy.
    `,
    tableOfContents: [
      { id: "what-is-vastu-shastra", title: "What is Vastu Shastra?" },
      { id: "key-vastu-principles-for-your-new-home", title: "Key Vastu Principles" },
      { id: "griha-pravesh-the-essential-first-step", title: "Griha Pravesh: The Essential First Step" },
      { id: "book-your-griha-pravesh", title: "Book Your Griha Pravesh" },
    ],
    relatedSlugs: ["choosing-the-right-pandit", "gokarna-spiritual-guide"],
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  return post.relatedSlugs
    .map((slug) => BLOG_POSTS.find((p) => p.slug === slug))
    .filter(Boolean) as BlogPost[];
}

export function getBlogsByCategory(category: string): BlogPost[] {
  if (category === "All") return BLOG_POSTS;
  return BLOG_POSTS.filter((post) => post.category === category);
}
