export interface PujaService {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  price: string;
  suitableFor: string;
  image: string;
  benefits: string[];
  includes: string[];
  samagri: string[];
  procedure: string[];
  faqs: { question: string; answer: string }[];
}

export const PUJA_CATEGORIES = ["All", "Poojas", "Homa & Havan"] as const;

export const PUJA_SERVICES: PujaService[] = [
  // ─────────────────────── POOJAS ───────────────────────
  {
    slug: "gruhapravesha",
    title: "Gruhapravesha",
    category: "Poojas",
    shortDescription:
      "Sacred housewarming ceremony invoking divine blessings to purify your new home, establish Vastu harmony, and welcome prosperity and peace.",
    fullDescription:
      "Gruhapravesha is the sacred Vedic housewarming ceremony performed when entering a new home for the first time. R. Anand performs this comprehensive ritual following Krishna Yajurveda tradition, encompassing Ganapati Pooja, Vastu Shanti, Navagraha prayers, and a sacred Havan to purify the space, remove negative energies, and invite prosperity, harmony, and divine protection into your new dwelling.",
    duration: "3–4 Hours",
    price: "On Request",
    suitableFor: "New Home, Housewarming, Vastu Purification, Family Blessings",
    image: "/images/pooja-placeholder.jpg",
    benefits: [
      "Purifies the new home of all negative energies",
      "Invites Goddess Lakshmi for prosperity",
      "Establishes Vastu harmony in the space",
      "Protects the family from misfortune",
      "Blesses all residents with health and happiness",
      "Creates a spiritually positive living environment",
    ],
    includes: [
      "Complete Gruhapravesha vidhi per Krishna Yajurveda",
      "Ganapati Pooja and Kalasha Sthapana",
      "Vastu Shanti Pooja",
      "Navagraha prayers",
      "Sacred Havan for purification",
      "Milk boiling ceremony (Dudh Ubalna)",
    ],
    samagri: [
      "Mango leaves and toran",
      "Coconut",
      "Milk (for boiling ceremony)",
      "Ghee for Havan",
      "Rice and turmeric",
      "Flowers and garlands",
      "Camphor and incense",
      "Kalasha with holy water",
      "Swastika materials",
      "New cloth for pooja",
    ],
    procedure: [
      "Ganapati Pooja and obstacle removal",
      "Kalasha Sthapana",
      "Vastu Purush invocation",
      "Navagraha Shanti",
      "Sacred Havan for home purification",
      "Entering the home with right foot first",
      "Milk boiling ceremony",
      "Room-by-room purification with mantras",
      "Final Aarti and family blessings",
    ],
    faqs: [
      {
        question: "When is the best time for Gruhapravesha?",
        answer:
          "An auspicious muhurat is selected based on the family's horoscope. R. Anand will help identify the most suitable date and time.",
      },
      {
        question: "Can it be done for a rented house?",
        answer:
          "Yes. Gruhapravesha can be performed for any new residence, whether purchased or rented. The ceremony purifies the space regardless of ownership.",
      },
      {
        question: "What should the family prepare?",
        answer:
          "We provide all pooja materials. The family needs to ensure the home is clean and ready. R. Anand will guide you on any specific preparations.",
      },
      {
        question: "Do you travel outside Bangalore?",
        answer:
          "Yes. R. Anand is available across Karnataka and South India for both in-person ceremonies and online consultations.",
      },
    ],
  },
  {
    slug: "sathyanarayana-pooja-udyapan",
    title: "Sathyanarayana Pooja & Udyapan",
    category: "Poojas",
    shortDescription:
      "Invoke Lord Vishnu's blessings as Satyanarayan for prosperity, success, family harmony, and fulfillment of heartfelt wishes.",
    fullDescription:
      "Sathyanarayana Pooja is one of the most beloved Vedic ceremonies in Hindu tradition. Dedicated to Lord Vishnu in his form as Satyanarayan, R. Anand performs this pooja with the narration of the sacred Katha, Udyapan (completion ceremony), and all traditional rites. It is performed for prosperity, wish fulfillment, housewarmings, after good news, or on Purnima days.",
    duration: "2–3 Hours",
    price: "On Request",
    suitableFor: "Prosperity, Wish Fulfillment, Housewarming, Family Harmony, Celebrations",
    image: "/images/pooja-placeholder.jpg",
    benefits: [
      "Brings prosperity and abundance",
      "Fulfills sincere wishes and prayers",
      "Strengthens family bonds and harmony",
      "Removes financial difficulties",
      "Blesses new homes and beginnings",
      "Grants success in undertakings",
    ],
    includes: [
      "Complete Sathyanarayana Pooja vidhi",
      "Five chapters of Katha narration",
      "Udyapan (completion ceremony)",
      "108 names of Lord Vishnu archana",
      "Panchamrit preparation and distribution",
      "Aarti and family blessings",
    ],
    samagri: [
      "Banana and seasonal fruits",
      "Coconut",
      "Betel leaves and nuts",
      "Wheat flour (for Sheera)",
      "Sugar and ghee",
      "Yellow flowers",
      "Turmeric and kumkum",
      "Incense and camphor",
      "Silver coin",
      "New cloth for deity",
    ],
    procedure: [
      "Ganapati Pooja",
      "Kalasha Sthapana",
      "Sathyanarayana Avahana",
      "Shodashopachara Pooja",
      "Katha narration (5 chapters)",
      "108 names archana",
      "Udyapan ceremony",
      "Aarti and Mangal",
      "Prasad distribution",
    ],
    faqs: [
      {
        question: "When is the best time to perform it?",
        answer:
          "Purnima (full moon) days are traditional. It is also performed after receiving good news, during housewarmings, on birthdays and anniversaries.",
      },
      {
        question: "What is Udyapan?",
        answer:
          "Udyapan is the completion ceremony that formally concludes a vow or sankalpa made during Sathyanarayana Pooja. It marks the fulfilment of the prayer.",
      },
      {
        question: "Do guests need to stay for the entire Katha?",
        answer:
          "It is considered auspicious to listen to the complete Katha. The five chapters take about 30–40 minutes.",
      },
      {
        question: "Can I perform this in my apartment?",
        answer:
          "Absolutely. Sathyanarayana Pooja is perfectly suited for homes and apartments.",
      },
    ],
  },
  {
    slug: "vaastu-pooja",
    title: "Vaastu Pooja",
    category: "Poojas",
    shortDescription:
      "Harmonise the five elements of your space with sacred Vedic rituals to remove Vastu doshas and invite positive cosmic energy.",
    fullDescription:
      "Vaastu Pooja is a specialised ritual that aligns your living or working space with Vedic Vastu principles. R. Anand, a PG Diploma holder in Jyothir Vaastu with 15 years of practice, performs this ceremony to identify and remedy Vastu doshas, energise the Vastu Purusha Mandala, and establish harmony among the eight directional energies in your home or office.",
    duration: "2–3 Hours",
    price: "On Request",
    suitableFor: "Home Purification, Office Harmony, Vastu Correction, New Construction",
    image: "/images/pooja-placeholder.jpg",
    benefits: [
      "Corrects Vastu doshas effectively",
      "Restores directional energy balance",
      "Promotes health, wealth and relationships",
      "Enhances positive cosmic vibrations",
      "Protects the space from negative influences",
      "Ideal before renovation or new construction",
    ],
    includes: [
      "Vastu Purusha Mandala activation",
      "Directional deity invocations",
      "Panchabhoota (five elements) balancing",
      "Sacred Havan for purification",
      "Vastu consultation post ceremony",
      "All samagri and materials",
    ],
    samagri: [
      "Kalasha with holy water",
      "Coconut and flowers",
      "Ghee and camphor",
      "Turmeric and kumkum",
      "Navadhanya (nine grains)",
      "Incense sticks",
      "Copper coins",
      "Sacred threads",
      "Mango leaves",
      "Rice for offerings",
    ],
    procedure: [
      "Ganapati Pooja",
      "Kalasha Sthapana",
      "Vastu Purusha invocation",
      "Ashtadikpala (eight directional deities) worship",
      "Panchabhoota balancing rituals",
      "Havan for space purification",
      "Vastu dosh nivaran mantras",
      "Aarti and blessings",
      "Post-ceremony Vastu guidance",
    ],
    faqs: [
      {
        question: "Is Vaastu Pooja a one-time ceremony?",
        answer:
          "The pooja establishes lasting harmony. However, major renovations or life changes may warrant a follow-up consultation with R. Anand.",
      },
      {
        question: "Does this replace physical Vastu changes?",
        answer:
          "The pooja works alongside physical corrections. R. Anand will advise on any structural or placement adjustments during the consultation.",
      },
      {
        question: "Can it be performed in a commercial space?",
        answer:
          "Yes. Vaastu Pooja is equally effective for offices, shops, factories, and other commercial premises.",
      },
      {
        question: "How far in advance should I book?",
        answer:
          "We recommend booking at least a week in advance so R. Anand can select an auspicious muhurat for the ceremony.",
      },
    ],
  },
  {
    slug: "sudarshana-aradhana",
    title: "Sudarshana Aradhana",
    category: "Poojas",
    shortDescription:
      "Powerful worship of Lord Sudarshana Chakra, the divine weapon of Lord Vishnu, for protection, removal of evil influences, and spiritual liberation.",
    fullDescription:
      "Sudarshana Aradhana is a highly potent Vedic ceremony dedicated to Lord Sudarshana — the spinning disc weapon of Lord Vishnu representing divine will and cosmic order. R. Anand performs this elaborate puja with Sudarshana Ashtottara, Sudarshana Kavacham recitation, and specific homa offerings to protect devotees from negative energies, evil eye (drishti), black magic, and serious health challenges.",
    duration: "2–3 Hours",
    price: "On Request",
    suitableFor: "Protection, Evil Eye Removal, Health Challenges, Spiritual Purification",
    image: "/images/pooja-placeholder.jpg",
    benefits: [
      "Powerful protection from negative energies",
      "Removes evil eye and black magic effects",
      "Grants health, vitality and strength",
      "Destroys obstacles and enemies",
      "Bestows divine grace and liberation",
      "Shields the family with cosmic protection",
    ],
    includes: [
      "Sudarshana Ashtottara archana (108 names)",
      "Sudarshana Kavacham recitation",
      "Sudarshana Yantra activation",
      "Homa offerings to Lord Sudarshana",
      "Aarti and vibhuti distribution",
      "All samagri and materials",
    ],
    samagri: [
      "Sudarshana Yantra",
      "Red flowers and lotus petals",
      "Ghee and sesame seeds",
      "Camphor",
      "Coconut",
      "Kumkum and turmeric",
      "Bilva leaves",
      "Incense sticks",
      "Sacred threads",
      "Panchamrit",
    ],
    procedure: [
      "Ganapati Pooja and Sankalpa",
      "Kalasha Sthapana",
      "Sudarshana Yantra installation",
      "Dhyana (meditation) invocation",
      "Sudarshana Ashtottara archana",
      "Sudarshana Kavacham recitation",
      "Homa with specific offerings",
      "Aarti and Mangal",
      "Vibhuti and Prasad distribution",
    ],
    faqs: [
      {
        question: "When is Sudarshana Aradhana most recommended?",
        answer:
          "It is especially recommended when a family is experiencing repeated illness, legal troubles, drishti (evil eye), or persistent obstacles despite other remedies.",
      },
      {
        question: "Is this same as Sudarshana Homa?",
        answer:
          "Sudarshana Aradhana is a comprehensive puja; Mahasudarshana Homa is a fire ceremony. R. Anand offers both and will recommend the appropriate form based on your situation.",
      },
      {
        question: "How often should it be performed?",
        answer:
          "Once a year is generally sufficient for protection. In acute situations, more frequent ceremonies may be recommended after consultation.",
      },
      {
        question: "Can children participate?",
        answer:
          "Yes. Children and all family members are welcome and encouraged to be present to receive the protective blessings.",
      },
    ],
  },
  {
    slug: "sarvatobhadra-mandala-aradhana",
    title: "Sarvatobhadra Mandala Aradhana",
    category: "Poojas",
    shortDescription:
      "Rare and auspicious Vedic ceremony using the sacred Sarvatobhadra Mandala for all-round prosperity, protection, and cosmic harmony.",
    fullDescription:
      "Sarvatobhadra Mandala Aradhana is one of the most elaborate and auspicious Vedic rituals involving the creation and worship of the sacred Sarvatobhadra Mandala — a geometric yantra representing the entire cosmos. R. Anand performs this rare ceremony invoking all major deities, Navagrahas, and directional energies simultaneously to bestow all-round blessings on the devotee's family.",
    duration: "4–5 Hours",
    price: "On Request",
    suitableFor: "All-Round Prosperity, Cosmic Harmony, Family Welfare, Special Occasions",
    image: "/images/pooja-placeholder.jpg",
    benefits: [
      "Invokes blessings of all major deities simultaneously",
      "Establishes comprehensive cosmic harmony",
      "Protects the family on all eight directions",
      "Brings abundance and all-round prosperity",
      "Highly auspicious for major life milestones",
      "Rare and spiritually potent ceremony",
    ],
    includes: [
      "Sarvatobhadra Mandala creation and consecration",
      "Invocation of all major deities and Navagrahas",
      "Elaborate archana with flowers and offerings",
      "Havan with specific purnahuti",
      "Aarti and blessings for all family members",
      "All samagri and ritual materials",
    ],
    samagri: [
      "Natural colours for Mandala creation",
      "Flowers of multiple varieties",
      "Navadhanya (nine grains)",
      "Ghee and Havan samagri",
      "Coconut (multiple)",
      "Fruits and seasonal offerings",
      "Kumkum, turmeric and chandan",
      "Incense and camphor",
      "Sacred threads and coins",
      "Kalasha with holy water",
    ],
    procedure: [
      "Sankalpa and Ganapati Pooja",
      "Sarvatobhadra Mandala creation",
      "Kalasha Sthapana at eight directions",
      "Invocation of all deities",
      "Navagraha Pooja within the Mandala",
      "Elaborate archana with multiple offerings",
      "Havan and Purnahuti",
      "Visarjana (ceremonial dissolution)",
      "Blessings and Prasad distribution",
    ],
    faqs: [
      {
        question: "How is this different from a regular Navagraha Pooja?",
        answer:
          "This ceremony encompasses all major deities along with the Navagrahas. The Sarvatobhadra Mandala acts as a cosmic map, making the blessings far more comprehensive.",
      },
      {
        question: "How much space is required?",
        answer:
          "The Mandala requires approximately 6×6 feet of clean floor space. R. Anand will advise you on the setup requirements during pre-ceremony consultation.",
      },
      {
        question: "Is this suitable for businesses?",
        answer:
          "Yes. It is excellent for shop openings, factory consecrations, and annual business ceremonies due to its all-round prosperity blessings.",
      },
      {
        question: "How rare is this ceremony?",
        answer:
          "Very few pandits are trained in the complete Sarvatobhadra Mandala procedure. R. Anand is trained in this elaborate tradition and performs it with complete authenticity.",
      },
    ],
  },
  {
    slug: "adityadi-navagraha-shanti",
    title: "Adityadi Navagraha Shanti",
    category: "Poojas",
    shortDescription:
      "Comprehensive propitiation of all nine planetary deities to remove malefic influences and restore astrological harmony in your life.",
    fullDescription:
      "Adityadi Navagraha Shanti is a specialised astrological remedy ceremony performed to pacify the nine planetary deities (Surya, Chandra, Mangala, Budha, Guru, Shukra, Shani, Rahu, Ketu). R. Anand, with 15 years of Vedic Astrology practice, identifies specific planetary afflictions in your horoscope and performs targeted mantra recitations, archana, and homa for each graha to restore cosmic balance.",
    duration: "3–4 Hours",
    price: "On Request",
    suitableFor: "Planetary Doshas, Astrological Remedies, Life Challenges, Health Issues",
    image: "/images/pooja-placeholder.jpg",
    benefits: [
      "Pacifies malefic planetary influences",
      "Removes Sade Sati and Rahu/Ketu Dosha effects",
      "Improves career, relationships and finances",
      "Restores health and mental peace",
      "Harmonises planetary transits",
      "Provides lasting astrological relief",
    ],
    includes: [
      "Individual archana for all nine grahas",
      "Navagraha mantra recitations",
      "Specific Homa for afflicted planets",
      "Navadhanya offerings",
      "Yantra energisation if required",
      "Post-ceremony astrological guidance",
    ],
    samagri: [
      "Navadhanya (nine grains)",
      "Nine types of flowers",
      "Ghee and sesame seeds",
      "Coloured cloths for each graha",
      "Copper/iron/silver items",
      "Coconut and fruits",
      "Incense and camphor",
      "Turmeric and kumkum",
      "Sacred threads",
      "Navagraha yantra",
    ],
    procedure: [
      "Ganapati Pooja and Sankalpa",
      "Kalasha Sthapana",
      "Individual invocation of each graha",
      "Navagraha archana with specific offerings",
      "Mantra japa for afflicted planets",
      "Graha Homa",
      "Navadhanya offerings",
      "Aarti and Mangal",
      "Prasad and guidance",
    ],
    faqs: [
      {
        question: "Do I need a horoscope for this ceremony?",
        answer:
          "R. Anand recommends providing your birth details (date, time, place) so the ceremony can be tailored to your specific planetary afflictions.",
      },
      {
        question: "Is this effective for Shani Sade Sati?",
        answer:
          "Yes. The Navagraha Shanti includes targeted Shani propitiation. For deep Sade Sati remedies, R. Anand may recommend additional Navagraha Japa.",
      },
      {
        question: "How often should it be performed?",
        answer:
          "Once a year during major planetary transits is recommended. R. Anand will advise based on your chart.",
      },
      {
        question: "Can family members also benefit?",
        answer:
          "Yes. A family sankalpa covers all family members. Each person's planetary needs can be included in the ceremony.",
      },
    ],
  },
  {
    slug: "nakshatra-shanti",
    title: "Nakshatra Shanti",
    category: "Poojas",
    shortDescription:
      "Vedic ceremony to pacify the birth star (janma nakshatra) and related doshas for health, harmony, and spiritual well-being.",
    fullDescription:
      "Nakshatra Shanti is performed to appease the deity of the birth star (janma nakshatra) and mitigate its negative influences. R. Anand performs this ceremony with deep knowledge of the 27 nakshatras and their ruling deities, reciting specific mantras, performing targeted archana, and conducting a homa to neutralise nakshatra doshas that may be causing recurring problems.",
    duration: "2–3 Hours",
    price: "On Request",
    suitableFor: "Nakshatra Dosha, Recurring Problems, Health Issues, Spiritual Growth",
    image: "/images/pooja-placeholder.jpg",
    benefits: [
      "Pacifies malefic nakshatra influences",
      "Removes recurring health and life obstacles",
      "Strengthens positive nakshatra qualities",
      "Brings mental peace and stability",
      "Ideal for children born under difficult nakshatras",
      "Improves relationships and fortune",
    ],
    includes: [
      "Birth nakshatra identification and analysis",
      "Nakshatra deity archana and mantra",
      "Homa with specific offerings",
      "Prasad and blessings",
      "Personalised nakshatra remedies advice",
      "All samagri and materials",
    ],
    samagri: [
      "Nakshatra-specific flowers",
      "Ghee and camphor",
      "Coconut and fruits",
      "Specific grains for the nakshatra",
      "Turmeric and kumkum",
      "Sacred threads",
      "Incense sticks",
      "Kalasha with holy water",
      "Betel leaves and nuts",
      "Specific gems or metals (if prescribed)",
    ],
    procedure: [
      "Birth star identification",
      "Ganapati Pooja and Sankalpa",
      "Kalasha Sthapana",
      "Nakshatra deity invocation",
      "Specific mantra recitation",
      "Archana with nakshatra-specific offerings",
      "Homa",
      "Aarti and blessings",
      "Prasad and remedies guidance",
    ],
    faqs: [
      {
        question: "How do I know my nakshatra?",
        answer:
          "Your nakshatra is determined by the position of the Moon at the time of birth. R. Anand can calculate this from your birth date, time, and place.",
      },
      {
        question: "Is this different from Dushta Janana Nakshatra Shanti?",
        answer:
          "Yes. Standard Nakshatra Shanti addresses general nakshatra doshas. Dushta Janana Nakshatra Shanti specifically addresses cases where a birth is considered inauspicious by nakshatra.",
      },
      {
        question: "Is it necessary for the person concerned to be present?",
        answer:
          "It is ideal but not always necessary. R. Anand can perform the ceremony by proxy with the person's sankalpa details.",
      },
      {
        question: "How long do the benefits last?",
        answer:
          "The ceremony provides significant relief. Periodic recitation of the nakshatra mantra by the individual helps maintain the benefits.",
      },
    ],
  },
  {
    slug: "dushta-janana-nakshatra-shanti",
    title: "Dushta Janana Nakshatra Shanti",
    category: "Poojas",
    shortDescription:
      "Specialised shanti ceremony for births under inauspicious nakshatra combinations to protect the child and family from associated doshas.",
    fullDescription:
      "Dushta Janana Nakshatra Shanti is performed when a child is born under a nakshatra considered inauspicious in Vedic tradition — such as Moola, Ashlesha, Jyeshtha, or certain pada combinations that are believed to negatively affect parents, siblings, or the child itself. R. Anand performs this specialised shanti with expert knowledge of these specific nakshatra configurations.",
    duration: "2–3 Hours",
    price: "On Request",
    suitableFor: "Inauspicious Birth Nakshatra, Newborn Protection, Family Welfare",
    image: "/images/pooja-placeholder.jpg",
    benefits: [
      "Removes malefic effects of inauspicious birth nakshatra",
      "Protects parents, siblings, and child",
      "Ensures healthy and harmonious family life",
      "Neutralises specific nakshatra doshas",
      "Invokes divine protection for the newborn",
      "Brings peace of mind to the family",
    ],
    includes: [
      "Specific shanti for the inauspicious nakshatra",
      "Individual mantra recitations for affected family members",
      "Targeted Homa and offerings",
      "Nakshatra deity propitiation",
      "Blessings and protective kavacham",
      "All samagri and materials",
    ],
    samagri: [
      "Nakshatra-specific offerings",
      "Ghee and black sesame",
      "Coconut and flowers",
      "Specific grains",
      "Turmeric and kumkum",
      "Incense and camphor",
      "Sacred threads",
      "Kalasha with holy water",
      "Betel leaves and nuts",
      "Protective amulet materials",
    ],
    procedure: [
      "Nakshatra analysis and sankalpa",
      "Ganapati Pooja",
      "Kalasha Sthapana",
      "Inauspicious nakshatra deity pacification",
      "Specific mantra japa",
      "Homa with targeted offerings",
      "Kavacham recitation",
      "Aarti and blessings",
      "Protective remedies guidance",
    ],
    faqs: [
      {
        question: "When should this ceremony be performed?",
        answer:
          "Ideally within the first few months of birth. However it can be performed at any age if the nakshatra dosha is identified later.",
      },
      {
        question: "Which nakshatras require this shanti?",
        answer:
          "Moola (1st pada), Ashlesha (last pada), Jyeshtha (1st pada), and certain combinations of Vishakha and Satabhisha. R. Anand will assess your specific case.",
      },
      {
        question: "Does the newborn need to be physically present?",
        answer:
          "Yes. The child's presence is important for this ceremony as the shanti specifically addresses the child's birth configuration.",
      },
      {
        question: "Is this superstition or Vedic science?",
        answer:
          "This is a well-established Vedic parihara (remedy) documented in Jyotisha Shastra. R. Anand performs it with complete scientific and spiritual understanding.",
      },
    ],
  },
  {
    slug: "tripadi-nakshatra-shanti",
    title: "Tripadi Nakshatra Shanti",
    category: "Poojas",
    shortDescription:
      "Shanti ceremony for individuals born under the third pada of certain nakshatras that traditionally require ritual pacification.",
    fullDescription:
      "Tripadi Nakshatra Shanti is a specific form of nakshatra parihara for births under the third pada (quarter) of certain nakshatras considered to be inauspicious for specific family members according to Vedic Jyotisha. R. Anand performs this ceremony with precision, addressing the exact nakshatra configuration and its prescribed remedies from classical texts.",
    duration: "2 Hours",
    price: "On Request",
    suitableFor: "Tripadi Nakshatra Dosha, Family Protection, Birth Parihara",
    image: "/images/pooja-placeholder.jpg",
    benefits: [
      "Addresses specific Tripadi nakshatra dosha",
      "Protects affected family members",
      "Brings peace and harmony to the household",
      "Removes birth-related astrological afflictions",
      "Invokes divine blessings for the individual",
      "Completes prescribed Vedic parihara",
    ],
    includes: [
      "Tripadi-specific shanti vidhi",
      "Targeted mantra recitations",
      "Nakshatra deity propitiation",
      "Homa and offerings",
      "Blessings for affected family members",
      "All samagri and materials",
    ],
    samagri: [
      "Nakshatra-specific flowers and grains",
      "Ghee and camphor",
      "Coconut and fruits",
      "Turmeric and kumkum",
      "Sacred threads",
      "Incense sticks",
      "Kalasha with holy water",
      "Betel leaves and nuts",
      "Black sesame seeds",
      "Navadhanya",
    ],
    procedure: [
      "Birth configuration analysis",
      "Ganapati Pooja and Sankalpa",
      "Kalasha Sthapana",
      "Nakshatra deity invocation",
      "Specific Tripadi shanti mantras",
      "Archana and offerings",
      "Homa",
      "Aarti and blessings",
      "Completion and guidance",
    ],
    faqs: [
      {
        question: "What is a Tripadi nakshatra?",
        answer:
          "Tripadi refers to the third pada (quarter) of certain nakshatras. In Vedic tradition, some third padas carry specific doshas that need ritual remedy.",
      },
      {
        question: "How do I know if I need this shanti?",
        answer:
          "R. Anand will analyse your birth chart and nakshatra placement during an astrology consultation to confirm if this parihara is required.",
      },
      {
        question: "How is this different from standard Nakshatra Shanti?",
        answer:
          "Tripadi Shanti specifically addresses the pada-level dosha, with distinct mantras and procedures prescribed for the third pada configuration.",
      },
      {
        question: "Can it be combined with other shanties?",
        answer:
          "Yes. R. Anand can combine Tripadi Shanti with other prescribed parihara ceremonies in a single extended session.",
      },
    ],
  },
  {
    slug: "narayana-bali",
    title: "Narayana Bali",
    category: "Poojas",
    shortDescription:
      "Sacred ancestral ritual to liberate the souls of ancestors who died an untimely or unnatural death and have not attained moksha.",
    fullDescription:
      "Narayana Bali is a highly significant ancestral liberation ceremony performed when family members suffer from pitru dosha — particularly caused by ancestors who died untimely deaths, suicides, accidents, or without proper last rites. R. Anand performs this elaborate ritual to offer prayers and ritual nourishment to such souls, helping them attain liberation (moksha) and removing the resulting dosha from the family lineage.",
    duration: "Full Day",
    price: "On Request",
    suitableFor: "Pitru Dosha, Untimely Death of Ancestors, Ancestral Curses, Family Prosperity",
    image: "/images/pooja-placeholder.jpg",
    benefits: [
      "Liberates souls of ancestors from unsatisfied state",
      "Removes severe Pitru Dosha from the family",
      "Improves family health, prosperity and harmony",
      "Ends recurring problems caused by ancestral karma",
      "Grants peace to departed souls",
      "Brings divine grace and generational healing",
    ],
    includes: [
      "Complete Narayana Bali vidhi per tradition",
      "Tarpana (water offerings) for ancestors",
      "Pinda Pradana (rice ball offerings)",
      "Vishnu Sahasranama recitation",
      "Havan for ancestral liberation",
      "All samagri and ritual materials",
    ],
    samagri: [
      "Pinda (rice balls)",
      "Sesame seeds (black)",
      "Dharba grass (Kusha)",
      "Ghee and camphor",
      "Holy water (Ganga Jal)",
      "Coconut and bananas",
      "Turmeric and kumkum",
      "Sacred threads",
      "Flowers and incense",
      "New dhoti for ritual",
    ],
    procedure: [
      "Sankalpa specifying ancestors",
      "Ganapati Pooja",
      "Pitru Tarpana (ancestral offerings)",
      "Narayana Bali specific vidhi",
      "Pinda Pradana",
      "Vishnu Sahasranama recitation",
      "Havan for liberation",
      "Aarti and blessings",
      "Pitru Shanti completion",
    ],
    faqs: [
      {
        question: "Where is the ideal location to perform Narayana Bali?",
        answer:
          "Traditionally performed at sacred Kshetras like Gokarna, Varanasi, or Gaya. R. Anand can also perform it at your location with the same spiritual efficacy.",
      },
      {
        question: "How do I know if my family needs Narayana Bali?",
        answer:
          "Indicators include recurring unexplained health issues, financial instability despite effort, delays in marriage or progeny, or dreams of troubled ancestors. R. Anand will assess via your horoscope.",
      },
      {
        question: "How long does the ceremony take?",
        answer:
          "The complete Narayana Bali is a full-day ceremony. An early morning start is recommended.",
      },
      {
        question: "Who should be present?",
        answer:
          "The eldest male member of the family ideally performs the ceremony, but all family members can and should attend.",
      },
    ],
  },
  {
    slug: "sarpa-sanskar",
    title: "Sarpa Sanskar",
    category: "Poojas",
    shortDescription:
      "Sacred remedy ceremony for Sarpa Dosha caused by the killing or accidental death of a serpent, performed to liberate the naga spirit.",
    fullDescription:
      "Sarpa Sanskar is a specific Vedic ceremony performed when a serpent has been killed on one's property or by a family member, causing Sarpa Dosha. According to Vedic tradition, serpents (Nagas) are sacred beings, and their harm creates a lasting dosha on the family. R. Anand performs the prescribed Sarpa Sanskar, Naga Bali, and related rituals to liberate the naga spirit and remove the dosha from the family lineage.",
    duration: "2–3 Hours",
    price: "On Request",
    suitableFor: "Sarpa Dosha, Kalasarpa Dosha, Family Welfare, Ancestral Remedy",
    image: "/images/pooja-placeholder.jpg",
    benefits: [
      "Liberates the naga spirit and removes Sarpa Dosha",
      "Protects family from naga-related afflictions",
      "Improves fertility and removes obstacles to progeny",
      "Removes Kalasarpa Dosha effects",
      "Restores family harmony and prosperity",
      "Prescribed parihara for serpent-related incidents",
    ],
    includes: [
      "Sarpa Sankara (consecration ceremony)",
      "Naga Bali specific offerings",
      "Sarpa Sukta recitation",
      "Homa for liberation",
      "Naga Prathishtha (if applicable)",
      "All samagri and ritual materials",
    ],
    samagri: [
      "Serpent idol (clay or metal)",
      "Milk for naga offerings",
      "Black sesame seeds",
      "Turmeric and kumkum",
      "Flowers and incense",
      "Ghee and camphor",
      "Coconut",
      "Dharba grass",
      "Betel leaves and nuts",
      "Sacred threads",
    ],
    procedure: [
      "Sarpa Dosha analysis",
      "Ganapati Pooja and Sankalpa",
      "Naga invocation",
      "Sarpa Sukta recitation",
      "Naga Bali offerings",
      "Milk offering to serpent idol",
      "Homa for liberation",
      "Sarpa Prathishtha (consecration)",
      "Aarti, blessings and guidance",
    ],
    faqs: [
      {
        question: "Is this only for people who killed a snake?",
        answer:
          "Sarpa Dosha can also arise from ancestral karma related to serpents. R. Anand will assess your situation through your horoscope.",
      },
      {
        question: "Is this related to Kalasarpa Dosha?",
        answer:
          "Kalasarpa Dosha is an astrological configuration. Sarpa Sanskar is one of the parihara ceremonies recommended for it, among other remedies.",
      },
      {
        question: "Where should this ceremony be performed?",
        answer:
          "Ideally at a Naga temple or sacred water body. R. Anand can advise the most appropriate location based on your circumstances.",
      },
      {
        question: "Do all family members need to attend?",
        answer:
          "The head of the family performs the ceremony, but all members can attend and benefit from the collective remedy.",
      },
    ],
  },
  {
    slug: "ashlesha-bali-pooja",
    title: "Ashlesha Bali Pooja",
    category: "Poojas",
    shortDescription:
      "Potent Naga propitiation ceremony for individuals born under Ashlesha nakshatra to remove associated doshas and receive serpent deity blessings.",
    fullDescription:
      "Ashlesha Bali Pooja is a powerful ceremony specifically prescribed for individuals born under Ashlesha Nakshatra — which is ruled by the Naga (serpent) deities. This ceremony propitiates the Ashlesha nakshatra deity, removes associated doshas (particularly regarding maternal family), and invokes the protective blessings of the Naga Devatas. R. Anand performs this with the authentic Vedic procedures from the Atharva tradition.",
    duration: "2–3 Hours",
    price: "On Request",
    suitableFor: "Ashlesha Nakshatra Birth, Naga Dosha, Maternal Welfare, Birth Parihara",
    image: "/images/pooja-placeholder.jpg",
    benefits: [
      "Removes Ashlesha nakshatra dosha",
      "Protects maternal family from associated effects",
      "Invokes Naga Devata blessings",
      "Removes Sarpa Dosha if present",
      "Brings health and prosperity",
      "Specifically prescribed parihara for Ashlesha",
    ],
    includes: [
      "Ashlesha nakshatra deity worship",
      "Naga Devata archana",
      "Bali offering ceremony",
      "Homa with specific Ashlesha offerings",
      "Mantra japa and blessings",
      "All samagri and materials",
    ],
    samagri: [
      "Serpent idol for worship",
      "Milk and honey",
      "Black sesame and rice",
      "Specific flowers for Ashlesha",
      "Ghee and camphor",
      "Coconut",
      "Kumkum and turmeric",
      "Incense sticks",
      "Sacred threads",
      "Dharba grass",
    ],
    procedure: [
      "Birth nakshatra confirmation",
      "Ganapati Pooja and Sankalpa",
      "Kalasha Sthapana",
      "Ashlesha nakshatra deity invocation",
      "Naga Devata archana",
      "Bali offering",
      "Specific mantra japa",
      "Homa",
      "Aarti and blessings",
    ],
    faqs: [
      {
        question: "Is this ceremony only for Ashlesha-born individuals?",
        answer:
          "Primarily yes, though it may also be recommended for families with Naga Dosha or for Ashlesha nakshatra-related transit periods.",
      },
      {
        question: "Who can perform this ceremony on behalf of an Ashlesha person?",
        answer:
          "A parent or family member can perform the ceremony on behalf of a child or someone who cannot be physically present.",
      },
      {
        question: "Is this the same as Naga Prathishtha?",
        answer:
          "They are different ceremonies. Ashlesha Bali is specific to the nakshatra parihara; Naga Prathishtha involves the consecration of a Naga idol.",
      },
      {
        question: "Should this be combined with Nakshatra Shanti?",
        answer:
          "R. Anand will assess whether Nakshatra Shanti is also needed. In many cases, Ashlesha Bali Pooja is sufficient as a standalone ceremony.",
      },
    ],
  },
  {
    slug: "navagraha-japa",
    title: "Navagraha Japa",
    category: "Poojas",
    shortDescription:
      "Intensive mantra recitation of specific Navagraha mantras performed to propitiate all nine planets and remove astrological afflictions.",
    fullDescription:
      "Navagraha Japa involves the systematic recitation of the prescribed number of mantras for each of the nine planetary deities (Surya, Chandra, Mangala, Budha, Guru, Shukra, Shani, Rahu, Ketu) to pacify malefic planetary influences. R. Anand, with his MA in Astrology and 15 years of Jyotisha practice, prescribes and performs Navagraha Japa as a powerful long-term remedy for planetary doshas identified in the birth chart.",
    duration: "3–4 Hours",
    price: "On Request",
    suitableFor: "Planetary Doshas, Astrological Remedies, Sade Sati, Career & Health",
    image: "/images/pooja-placeholder.jpg",
    benefits: [
      "Powerful remedy for planetary afflictions",
      "Reduces Sade Sati and Rahu-Ketu transit effects",
      "Improves career, finances and relationships",
      "Restores health and mental clarity",
      "Harmonises all nine planetary energies",
      "Long-lasting astrological relief",
    ],
    includes: [
      "Prescribed japa counts for each of nine planets",
      "Navagraha deity invocations",
      "Archana and offerings for each graha",
      "Homa after japa completion",
      "Post-ceremony astrological guidance",
      "All samagri and materials",
    ],
    samagri: [
      "Navadhanya (nine grains for nine planets)",
      "Nine coloured cloths",
      "Specific flowers for each planet",
      "Ghee and sesame seeds",
      "Coconut (9 pieces)",
      "Japa mala (counting beads)",
      "Copper/iron/silver items",
      "Incense and camphor",
      "Turmeric and kumkum",
      "Fruits and offerings",
    ],
    procedure: [
      "Horoscope analysis and graha identification",
      "Ganapati Pooja and Sankalpa",
      "Kalasha Sthapana",
      "Invocation of all nine grahas",
      "Systematic japa for each graha",
      "Archana between japa sessions",
      "Graha Homa",
      "Aarti and blessings",
      "Guidance and ongoing remedy advice",
    ],
    faqs: [
      {
        question: "How many mantras are chanted in Navagraha Japa?",
        answer:
          "Each planet has a prescribed japa count: Surya 7,000, Chandra 11,000, Mangala 10,000, Budha 9,000, Guru 19,000, Shukra 16,000, Shani 23,000, Rahu 18,000, Ketu 17,000. R. Anand performs the full prescribed counts.",
      },
      {
        question: "How is this different from Navagraha Homa?",
        answer:
          "Navagraha Japa focuses on mantra recitation as the primary remedy; the Homa is a fire ceremony. Both are complementary and are often combined.",
      },
      {
        question: "Do I need to be present for the entire duration?",
        answer:
          "Your presence at the beginning (Sankalpa) and end (blessings) is important. For the middle portion, you may attend to your activities.",
      },
      {
        question: "How quickly will I see results?",
        answer:
          "Most people experience positive shifts within a few weeks. Sustained benefits develop over 3–6 months as planetary energies re-align.",
      },
    ],
  },
  {
    slug: "mahamrityunjaya-japa",
    title: "Mahamrityunjaya Japa",
    category: "Poojas",
    shortDescription:
      "Powerful recitation of the Mahamrityunjaya mantra dedicated to Lord Shiva for health, longevity, protection from untimely death, and liberation.",
    fullDescription:
      "Mahamrityunjaya Japa is the intensive recitation of the most powerful Shiva mantra — 'Tryambakam Yajamahe' — in its prescribed count. This mantra is invoked for protection from untimely death, recovery from serious illness, longevity, and freedom from the cycle of rebirth. R. Anand performs this japa with complete Vedic procedure, which includes Rudraksha mala, Abhisheka on Shivalinga, and specific offerings to Lord Shiva.",
    duration: "3–4 Hours",
    price: "On Request",
    suitableFor: "Health, Longevity, Recovery from Illness, Protection, Moksha",
    image: "/images/pooja-placeholder.jpg",
    benefits: [
      "Protects from untimely death and serious illness",
      "Promotes healing and physical recovery",
      "Grants longevity and vitality",
      "Removes fear and anxiety",
      "Bestows divine grace and moksha",
      "Powerful protection for the entire family",
    ],
    includes: [
      "Mahamrityunjaya mantra japa (1,08,000 or prescribed count)",
      "Abhisheka on Shivalinga",
      "Rudra Trisati archana",
      "Homa at japa completion",
      "Vibhuti and Rudraksham distribution",
      "All samagri and materials",
    ],
    samagri: [
      "Rudraksha mala",
      "Bilva patra (leaves)",
      "Milk for Abhisheka",
      "Ghee and honey",
      "White flowers",
      "Camphor and incense",
      "Vibhuti (sacred ash)",
      "Coconut",
      "Turmeric and kumkum",
      "Dharba grass",
    ],
    procedure: [
      "Ganapati Pooja and Sankalpa",
      "Shivalinga Sthapana",
      "Kalasha Sthapana",
      "Shiva Dhyana (meditation)",
      "Mahamrityunjaya mantra japa",
      "Abhisheka during japa",
      "Bilva Archana (108 leaves)",
      "Mahamrityunjaya Homa (completion)",
      "Aarti and Prasad distribution",
    ],
    faqs: [
      {
        question: "How many times is the mantra chanted?",
        answer:
          "The standard prescribed count is 1,08,000 (one lakh eight thousand). For specific health purposes, R. Anand may recommend 1,25,000 repetitions.",
      },
      {
        question: "Is this effective for chronic illness?",
        answer:
          "Yes. Mahamrityunjaya Japa is specifically recommended for chronic or life-threatening conditions, surgeries, and recovery periods.",
      },
      {
        question: "Can this be performed for a hospitalised person?",
        answer:
          "Yes. R. Anand can perform this ceremony with the ill person's sankalpa. The person does not need to be physically present.",
      },
      {
        question: "Can I learn to chant this mantra myself?",
        answer:
          "R. Anand encourages personal daily recitation of the Mahamrityunjaya mantra. He will guide you on the correct pronunciation and procedure during the ceremony.",
      },
    ],
  },
  {
    slug: "lakshmi-venkateshwara-kalyanotsava",
    title: "Lakshmi Venkateshwara Kalyanotsava",
    category: "Poojas",
    shortDescription:
      "Sacred celestial wedding ceremony of Lord Venkateshwara and Goddess Lakshmi performed for blessings of marital harmony, prosperity, and divine grace.",
    fullDescription:
      "Lakshmi Venkateshwara Kalyanotsava is the ceremonial re-enactment of the divine wedding of Lord Venkateshwara (Balaji) and Goddess Mahalakshmi. This auspicious ceremony is traditionally performed for marital happiness, removal of obstacles to marriage, prosperity, and fulfillment of vows made to Lord Venkateshwara. R. Anand performs this beautiful ceremony with all traditional Vaishnavite rituals.",
    duration: "3–4 Hours",
    price: "On Request",
    suitableFor: "Marriage Blessings, Marital Harmony, Prosperity, Vow Fulfillment",
    image: "/images/pooja-placeholder.jpg",
    benefits: [
      "Blesses couples with marital harmony",
      "Removes obstacles to marriage for unmarried",
      "Invokes Goddess Lakshmi's prosperity blessings",
      "Fulfills vows made to Lord Venkateshwara",
      "Brings happiness and abundance to the family",
      "Highly auspicious for new couples",
    ],
    includes: [
      "Venkateshwara and Lakshmi idol sthapana",
      "Celestial wedding ceremony rituals",
      "Mangalya (sacred thread) tying",
      "Aarti and pushparchana",
      "Prasad distribution",
      "All samagri and materials",
    ],
    samagri: [
      "Venkateshwara and Lakshmi idols",
      "Yellow and red flowers",
      "Panchamrit (5 sacred liquids)",
      "Turmeric and kumkum",
      "New clothes for deities",
      "Coconut and bananas",
      "Ghee and camphor",
      "Incense sticks",
      "Sacred thread (Mangalya)",
      "Betel leaves and nuts",
    ],
    procedure: [
      "Ganapati Pooja and Sankalpa",
      "Sthapana of Venkateshwara and Lakshmi",
      "Shodashopachara Pooja for both deities",
      "Kalyanotsava (celestial wedding) rituals",
      "Mangalya tying ceremony",
      "Talambralu (sacred rice shower)",
      "Aarti and Mangal",
      "Tirupati Laddu Prasad distribution",
      "Blessings and sankalpa completion",
    ],
    faqs: [
      {
        question: "Is this ceremony specifically Vaishnavite?",
        answer:
          "Yes. This ceremony follows Vaishnavite tradition with Venkateshwara and Lakshmi as the presiding deities, though devotees of all traditions can participate.",
      },
      {
        question: "Can this be performed as a vow fulfillment?",
        answer:
          "Absolutely. Kalyanotsava is one of the most popular vow fulfillment ceremonies for Lord Venkateshwara. R. Anand will include the sankalpa completion in the ceremony.",
      },
      {
        question: "Is it necessary to travel to Tirupati?",
        answer:
          "No. R. Anand performs the complete Kalyanotsava at your home or a convenient location with the same spiritual significance.",
      },
      {
        question: "When is the most auspicious time for this ceremony?",
        answer:
          "Vaikunta Ekadashi, Brahmotsavam period, and auspicious days on the Vaishnavite calendar are ideal. R. Anand will suggest the best date.",
      },
    ],
  },
  {
    slug: "girija-kalyanotsava",
    title: "Girija Kalyanotsava",
    category: "Poojas",
    shortDescription:
      "Divine wedding ceremony of Lord Shiva and Goddess Parvati (Girija) performed for marital blessings, harmonious relationships, and spiritual grace.",
    fullDescription:
      "Girija Kalyanotsava is the sacred re-enactment of the divine wedding of Lord Shiva and Goddess Parvati (Girija). This deeply auspicious ceremony from the Shaiva tradition is performed for marital blessings, removal of marriage obstacles, harmony in relationships, and the fulfilment of vows made to Lord Shiva or Goddess Parvati. R. Anand performs this ceremony with complete Shaiva vidhi from the Krishna Yajurveda tradition.",
    duration: "3–4 Hours",
    price: "On Request",
    suitableFor: "Marriage Blessings, Marital Harmony, Relationship Healing, Vow Fulfillment",
    image: "/images/pooja-placeholder.jpg",
    benefits: [
      "Bestows divine blessings on married couples",
      "Removes delays and obstacles in marriage",
      "Invokes Goddess Parvati's grace for harmony",
      "Fulfills vows made to Lord Shiva or Parvati",
      "Brings prosperity and happiness to the family",
      "Spiritually auspicious for newlyweds",
    ],
    includes: [
      "Shiva-Parvati Kalyanotsava ceremony",
      "Abhisheka and shodashopachara pooja",
      "Kalyana Mangalyam tying ritual",
      "Aarti and archana",
      "Prasad distribution",
      "All samagri and materials",
    ],
    samagri: [
      "Shiva and Parvati idols",
      "White and red flowers",
      "Bilva leaves",
      "Panchamrit",
      "Turmeric and kumkum",
      "New clothes for deities",
      "Coconut and fruits",
      "Ghee and camphor",
      "Sacred thread",
      "Incense sticks",
    ],
    procedure: [
      "Ganapati Pooja and Sankalpa",
      "Shiva and Parvati Sthapana",
      "Abhisheka of both deities",
      "Shodashopachara Pooja",
      "Kalyanotsava rituals",
      "Kalyana Mangalyam tying",
      "Aarti and Mangal",
      "Bilva Archana",
      "Prasad and blessings",
    ],
    faqs: [
      {
        question: "Is this appropriate for non-Shaiva devotees?",
        answer:
          "Yes. Girija Kalyanotsava is beloved across all Hindu traditions. The blessings of Shiva-Parvati are universal.",
      },
      {
        question: "Can newly married couples perform this?",
        answer:
          "This ceremony is specifically auspicious for newlyweds seeking divine blessings for their marriage.",
      },
      {
        question: "Can it be performed as a vow fulfillment?",
        answer:
          "Yes. R. Anand will include your specific vow (sankalpa) completion as part of the Kalyanotsava ceremony.",
      },
      {
        question: "What is the best time to perform Girija Kalyanotsava?",
        answer:
          "Shivaratri, Shravan month, and auspicious Shaiva calendar days are ideal. R. Anand will suggest the most suitable date based on your requirements.",
      },
    ],
  },

  // ─────────────────────── HOMA & HAVAN ───────────────────────
  {
    slug: "mahaganapathi-homa",
    title: "Mahaganapathi Homa",
    category: "Homa & Havan",
    shortDescription:
      "Sacred fire ceremony dedicated to Lord Ganesha to remove obstacles, ensure success in new ventures, and invoke divine wisdom.",
    fullDescription:
      "Mahaganapathi Homa is the most important preparatory Homa in Vedic tradition — it is performed before any major ceremony and independently for obstacle removal and new beginnings. R. Anand performs this elaborate fire ceremony with Ganapati Atharvasheersha, 1,008 Ahutis, and the invocation of Lord Ganesha's supreme grace for success in all endeavours.",
    duration: "2–3 Hours",
    price: "On Request",
    suitableFor: "New Ventures, Obstacle Removal, Success, Education, Business Beginnings",
    image: "/images/pooja-placeholder.jpg",
    benefits: [
      "Removes all obstacles from your path",
      "Blesses new ventures and beginnings",
      "Enhances wisdom and intellect",
      "Brings prosperity and good fortune",
      "Protects from negative energies",
      "Grants success in education and career",
    ],
    includes: [
      "Complete Mahaganapathi Homa setup",
      "Ganapati Atharvasheersha recitation",
      "1,008 Ahutis into sacred fire",
      "Modak and Durva grass offerings",
      "Purnahuti and Aarti",
      "All Havan samagri and materials",
    ],
    samagri: [
      "Havan Kund (fire pit)",
      "Mango wood sticks",
      "Ghee (1 litre minimum)",
      "Modak (21 pieces)",
      "Durva grass",
      "Red flowers",
      "Havan samagri",
      "Coconut",
      "Camphor and incense",
      "Sacred threads",
    ],
    procedure: [
      "Ganapati Dhyana and invocation",
      "Agni Sthapana (sacred fire)",
      "Ganapati Atharvasheersha recitation",
      "108 names japa",
      "1,008 Ahutis with mantras",
      "Modak and Durva offerings",
      "Purnahuti",
      "Aarti and Prasad",
      "Blessings and guidance",
    ],
    faqs: [
      {
        question: "Why is Ganapathi Homa performed before other ceremonies?",
        answer:
          "Lord Ganesha is invoked first in every Vedic ceremony to remove obstacles and ensure smooth completion. The Mahaganapathi Homa intensifies this protection.",
      },
      {
        question: "Can this be performed for a child's education?",
        answer:
          "Absolutely. Lord Ganesha presides over wisdom and intellect. This Homa is highly beneficial for students at the start of an academic year or before exams.",
      },
      {
        question: "Is it safe to perform inside an apartment?",
        answer:
          "Yes. R. Anand uses controlled, appropriately-sized Havan Kund for indoor ceremonies with minimal smoke using pure ghee.",
      },
      {
        question: "How often should Mahaganapathi Homa be performed?",
        answer:
          "Before major ventures or annually. It is also excellent at the beginning of each new year or during Ganesh Chaturthi season.",
      },
    ],
  },
  {
    slug: "navagraha-homa",
    title: "Navagraha Homa",
    category: "Homa & Havan",
    shortDescription:
      "Sacred fire ceremony propitiating all nine planetary deities to remove astrological doshas and restore cosmic harmony.",
    fullDescription:
      "Navagraha Homa is a powerful fire ceremony where offerings are made to each of the nine planetary deities through the sacred fire. R. Anand, drawing on his MA in Astrology and Vedic tradition, performs this Homa with specific mantras, dedicated offerings (navadhanya, specific herbs, cloths), and ahutis for each graha to pacify malefic planets and strengthen benefic ones.",
    duration: "3–4 Hours",
    price: "On Request",
    suitableFor: "Planetary Doshas, Sade Sati, Career & Relationship Issues, Health",
    image: "/images/pooja-placeholder.jpg",
    benefits: [
      "Pacifies all nine planetary energies",
      "Removes Sade Sati and dasha-related difficulties",
      "Improves career, finances and relationships",
      "Restores physical and mental health",
      "Harmonises planetary transits",
      "Long-lasting cosmic balance",
    ],
    includes: [
      "Individual Havan Ahutis for all 9 planets",
      "Navagraha specific mantras and offerings",
      "Navadhanya offerings",
      "Purnahuti and Aarti",
      "Post-ceremony astrological guidance",
      "All Havan samagri and materials",
    ],
    samagri: [
      "Navadhanya (nine grains)",
      "Nine coloured cloths",
      "Ghee and sesame seeds",
      "Planet-specific herbs",
      "Copper/silver/iron items",
      "Coconut",
      "Camphor and incense",
      "Havan samagri",
      "Mango wood",
      "Sacred threads",
    ],
    procedure: [
      "Horoscope review and planet identification",
      "Ganapati Pooja and Sankalpa",
      "Agni Sthapana",
      "Individual invocation of each graha",
      "Specific Ahutis for each planet",
      "Navadhanya offerings",
      "Purnahuti",
      "Aarti and blessings",
      "Astrological remedies guidance",
    ],
    faqs: [
      {
        question: "Is Navagraha Homa better than Navagraha Japa?",
        answer:
          "Both are powerful; the Homa involves fire and physical offerings while Japa involves mantra recitation. For severe doshas, R. Anand may recommend combining both.",
      },
      {
        question: "Can this be performed for the entire family?",
        answer:
          "Yes. A family sankalpa covers all family members in a single Homa ceremony.",
      },
      {
        question: "How long do the benefits of Navagraha Homa last?",
        answer:
          "Significant relief is felt for 1–3 years. Annual Navagraha Homa is a recommended spiritual practice for ongoing planetary harmony.",
      },
      {
        question: "Do I need to share my birth chart?",
        answer:
          "Sharing your birth details (date, time, place) allows R. Anand to tailor the Homa with additional focus on your specific afflicted planets.",
      },
    ],
  },
  {
    slug: "mahamrityunjaya-homa",
    title: "Mahamrityunjaya Homa",
    category: "Homa & Havan",
    shortDescription:
      "Most powerful Shiva fire ceremony for health, longevity, and protection from untimely death — fire offering of the Mahamrityunjaya mantra.",
    fullDescription:
      "Mahamrityunjaya Homa combines the power of fire offerings with the supreme Shiva mantra for maximum healing and protective energy. R. Anand performs this Homa with 1,08,000 Ahutis of the Mahamrityunjaya mantra into the sacred fire, along with Abhisheka, Bilva Archana, and all traditional procedures. This is the most powerful remedy prescribed in Vedic tradition for life-threatening illness, recovery, and longevity.",
    duration: "4–6 Hours",
    price: "On Request",
    suitableFor: "Life-Threatening Illness, Surgery Recovery, Longevity, Protection",
    image: "/images/pooja-placeholder.jpg",
    benefits: [
      "Most powerful remedy for health and longevity",
      "Protects from untimely death",
      "Accelerates recovery from illness and surgery",
      "Removes fear and depression",
      "Invokes Lord Shiva's supreme healing grace",
      "Provides strong divine protection",
    ],
    includes: [
      "1,08,000 Mahamrityunjaya mantra Ahutis",
      "Shivalinga Abhisheka during Homa",
      "Bilva Archana (1,008 leaves)",
      "Rudra Trisati recitation",
      "Purnahuti and Vibhuti distribution",
      "All Havan samagri and materials",
    ],
    samagri: [
      "Havan Kund",
      "Mango and Bilva wood",
      "Ghee (2 litres)",
      "Bilva patra (1,008 leaves)",
      "Havan samagri",
      "Milk for Abhisheka",
      "Rudraksha and camphor",
      "White flowers",
      "Sacred ash (Vibhuti)",
      "Coconut for Purnahuti",
    ],
    procedure: [
      "Shivalinga Sthapana",
      "Ganapati Pooja and Sankalpa",
      "Agni Sthapana",
      "Shiva Dhyana and invocation",
      "1,08,000 Mahamrityunjaya Ahutis",
      "Simultaneous Abhisheka on Shivalinga",
      "Bilva Archana (1,008 leaves)",
      "Purnahuti",
      "Aarti, Vibhuti distribution and blessings",
    ],
    faqs: [
      {
        question: "How long does the Mahamrityunjaya Homa take?",
        answer:
          "Given the large number of Ahutis (1,08,000), this Homa typically takes 4–6 hours with multiple pandits. R. Anand may arrange assistance for larger counts.",
      },
      {
        question: "Can this be performed for someone in hospital?",
        answer:
          "Yes. R. Anand performs the Homa with the patient's sankalpa. The spiritual benefit reaches the person regardless of physical presence.",
      },
      {
        question: "Is this the same as Rudrabhisheka?",
        answer:
          "Rudrabhisheka is an Abhisheka ceremony. Mahamrityunjaya Homa is a fire ceremony. Both honour Lord Shiva and are complementary.",
      },
      {
        question: "How does this compare to Mahamrityunjaya Japa?",
        answer:
          "The Homa is considered more potent as fire carries the offerings directly to the divine. Both together create the most powerful combination.",
      },
    ],
  },
  {
    slug: "lakshmi-narayana-hrudaya-parayana-homa",
    title: "Lakshmi Narayana Hrudaya Parayana & Homa",
    category: "Homa & Havan",
    shortDescription:
      "Sacred recitation of Lakshmi Hrudaya and Narayana Hrudaya Stotrams combined with Homa for prosperity, marital harmony, and divine blessings.",
    fullDescription:
      "Lakshmi Narayana Hrudaya Parayana & Homa combines the sacred recitation of the Lakshmi Hrudaya and Narayana Hrudaya Stotrams (heart hymns of Goddess Lakshmi and Lord Narayana) with a dedicated fire ceremony. R. Anand performs this comprehensive ceremony for marital harmony, financial prosperity, removal of Lakshmi Dosha, and invoking the joint blessings of the divine couple.",
    duration: "3–4 Hours",
    price: "On Request",
    suitableFor: "Marital Harmony, Financial Prosperity, Lakshmi Dosha, Family Welfare",
    image: "/images/pooja-placeholder.jpg",
    benefits: [
      "Invokes combined blessings of Lakshmi and Narayana",
      "Removes financial difficulties and debts",
      "Brings deep marital harmony and love",
      "Removes Lakshmi Dosha from the home",
      "Bestows prosperity and abundance",
      "Ideal for couples seeking divine grace",
    ],
    includes: [
      "Lakshmi Hrudaya Stotram parayana",
      "Narayana Hrudaya Stotram parayana",
      "Combined Homa for both deities",
      "Lakshmi and Narayana archana",
      "Aarti and Prasad distribution",
      "All samagri and materials",
    ],
    samagri: [
      "Lakshmi and Narayana idols",
      "Yellow and white flowers",
      "Tulsi leaves",
      "Lotus flowers (if available)",
      "Ghee and camphor",
      "Panchamrit",
      "Coconut",
      "Turmeric and kumkum",
      "Incense sticks",
      "Havan samagri",
    ],
    procedure: [
      "Ganapati Pooja and Sankalpa",
      "Lakshmi-Narayana Sthapana",
      "Lakshmi Hrudaya Stotram recitation",
      "Narayana Hrudaya Stotram recitation",
      "Agni Sthapana",
      "Combined Homa for both deities",
      "Archana and offerings",
      "Aarti",
      "Prasad and blessings",
    ],
    faqs: [
      {
        question: "What is the Hrudaya Stotram?",
        answer:
          "The Hrudaya Stotrams are ancient hymns from the Narada Purana that are considered the heart essence of Goddess Lakshmi and Lord Narayana's blessings. Their recitation is highly auspicious.",
      },
      {
        question: "Is this suitable for couples having financial difficulties?",
        answer:
          "Yes. This ceremony specifically addresses Lakshmi Dosha (absence of prosperity) and is highly recommended for families experiencing persistent financial challenges.",
      },
      {
        question: "Can this be performed for newly married couples?",
        answer:
          "Absolutely. It is one of the most auspicious ceremonies for new couples, invoking the divine couple's blessings for their marriage.",
      },
      {
        question: "How often should this be performed?",
        answer:
          "Annual performance during Vaishnavite festivals or as a vow fulfillment is ideal. For ongoing financial challenges, quarterly performance may be recommended.",
      },
    ],
  },
  {
    slug: "rudra-homa",
    title: "Rudra Homa",
    category: "Homa & Havan",
    shortDescription:
      "Powerful Shiva fire ceremony with Sri Rudram recitation for health, obstacle removal, spiritual purification, and divine protection.",
    fullDescription:
      "Rudra Homa is one of the most powerful Vedic fire ceremonies, combining the recitation of the complete Sri Rudram (Namaka and Chamaka) with sacred fire offerings. R. Anand, trained in the Krishna Yajurveda tradition where Sri Rudram is central, performs this Homa with authentic Vedic procedure for health, protection, and the removal of obstacles from all aspects of life.",
    duration: "2–3 Hours",
    price: "On Request",
    suitableFor: "Health, Obstacle Removal, Spiritual Purification, Protection",
    image: "/images/pooja-placeholder.jpg",
    benefits: [
      "Invokes Lord Shiva's most powerful blessings",
      "Removes health issues and physical ailments",
      "Eliminates obstacles in career and personal life",
      "Provides strong spiritual protection",
      "Purifies the environment completely",
      "Bestows peace, prosperity and liberation",
    ],
    includes: [
      "Complete Sri Rudram recitation (Namaka-Chamaka)",
      "Dedicated Rudra Homa Ahutis",
      "Bilva Archana",
      "Abhisheka on Shivalinga",
      "Purnahuti and Vibhuti",
      "All Havan samagri",
    ],
    samagri: [
      "Havan Kund",
      "Mango wood and Bilva wood",
      "Ghee (1 litre)",
      "Bilva patra",
      "White flowers",
      "Havan samagri",
      "Camphor",
      "Milk for Abhisheka",
      "Rudraksha",
      "Coconut",
    ],
    procedure: [
      "Ganapati Pooja and Sankalpa",
      "Shivalinga Sthapana",
      "Agni Sthapana",
      "Sri Rudram Namaka recitation",
      "Rudra Homa Ahutis",
      "Sri Rudram Chamaka recitation",
      "Abhisheka on Shivalinga",
      "Bilva Archana",
      "Purnahuti, Aarti and blessings",
    ],
    faqs: [
      {
        question: "What is the difference between Rudra Homa and Rudrabhisheka?",
        answer:
          "Rudrabhisheka is primarily a sacred bathing ceremony. Rudra Homa focuses on fire offerings. Both recite Sri Rudram and are highly powerful — the Homa is considered more potent for obstacle removal.",
      },
      {
        question: "How does Rudra Homa differ from Aghora Rudra Homa?",
        answer:
          "Aghora Rudra Homa is a more intense form invoking Lord Shiva's fierce Aghora aspect. Standard Rudra Homa invokes the benevolent Shiva for health and blessings.",
      },
      {
        question: "Is this recommended for specific problems?",
        answer:
          "Rudra Homa is especially effective for chronic health issues, court cases, persistent career obstacles, and family disputes.",
      },
      {
        question: "Can this be performed on Shivaratri?",
        answer:
          "Yes. Maha Shivaratri and Pradosham days are especially auspicious for Rudra Homa. R. Anand recommends booking well in advance for festival dates.",
      },
    ],
  },
  {
    slug: "aghora-rudra-homa",
    title: "Aghora Rudra Homa",
    category: "Homa & Havan",
    shortDescription:
      "Intensely powerful fire ceremony invoking Lord Shiva's fierce Aghora form for removal of severe obstacles, negative energies, and enemies.",
    fullDescription:
      "Aghora Rudra Homa invokes the most fierce and powerful aspect of Lord Shiva — the Aghora Bhairava — through elaborate fire ceremonies with specific Aghora Rudra mantras. R. Anand performs this highly specialised ceremony, which requires deep Vedic knowledge, for extreme situations involving severe negative energies, persistent black magic, powerful enemies, or intractable obstacles that other remedies have not resolved.",
    duration: "3–5 Hours",
    price: "On Request",
    suitableFor: "Severe Obstacles, Black Magic, Powerful Enemies, Extreme Negative Energies",
    image: "/images/pooja-placeholder.jpg",
    benefits: [
      "Destroys the most severe negative energies",
      "Removes black magic and evil influences",
      "Eliminates powerful obstacles and enemies",
      "Invokes Bhairava's fearless protection",
      "Purifies deeply accumulated negative karma",
      "Bestows victory in adversarial situations",
    ],
    includes: [
      "Aghora Rudra mantra recitations",
      "Specific Bhairava offerings and Homa",
      "Protective kavacham recitation",
      "Purnahuti and Vibhuti",
      "Protective amulet preparation",
      "All specialised samagri and materials",
    ],
    samagri: [
      "Specific Aghora Homa materials",
      "Black sesame and mustard",
      "Ghee and coconut oil",
      "Specific Bhairava flowers",
      "Iron and copper items",
      "Camphor and incense",
      "Sacred ash",
      "Mango and Bilva wood",
      "Coconut for Purnahuti",
      "Specialised herbs",
    ],
    procedure: [
      "Bhairava Dhyana and invocation",
      "Ganapati Pooja and Sankalpa",
      "Agni Sthapana with Aghora procedure",
      "Aghora Rudra mantra recitation",
      "Specific Homa Ahutis with prescribed materials",
      "Bhairava archana",
      "Kavacham recitation",
      "Purnahuti",
      "Vibhuti distribution and blessings",
    ],
    faqs: [
      {
        question: "When is Aghora Rudra Homa specifically recommended?",
        answer:
          "R. Anand recommends this ceremony only in severe cases involving persistent black magic, extreme life obstacles despite other remedies, or serious enemy-related problems.",
      },
      {
        question: "Is this ceremony dangerous?",
        answer:
          "When performed by a qualified pandit like R. Anand with complete adherence to Vedic protocols, it is completely safe. It should never be attempted by untrained individuals.",
      },
      {
        question: "Is prior consultation required?",
        answer:
          "Yes. R. Anand requires a consultation before performing Aghora Rudra Homa to assess whether this level of ceremony is appropriate for your situation.",
      },
      {
        question: "Can this be performed for business problems?",
        answer:
          "If the business problems are related to severe negative energies or enemy actions, yes. R. Anand will assess the specific situation during consultation.",
      },
    ],
  },
  {
    slug: "mahasudarshana-homa",
    title: "Mahasudarshana Homa",
    category: "Homa & Havan",
    shortDescription:
      "Highly potent Sudarshana Homa invoking Lord Vishnu's divine weapon through fire for protection from all negative forces.",
    fullDescription:
      "Mahasudarshana Homa is the fire ceremony counterpart to Sudarshana Aradhana, involving the invocation of Lord Sudarshana through sacred fire offerings. R. Anand performs this potent ceremony with Sudarshana Ashtakam, Sudarshana Kavacham, and specific Ahutis to create an impenetrable divine shield around the devotee's family and home, driving away all negative energies.",
    duration: "2–3 Hours",
    price: "On Request",
    suitableFor: "Protection, Evil Eye, Black Magic, Health Crises, Business Protection",
    image: "/images/pooja-placeholder.jpg",
    benefits: [
      "Creates powerful Sudarshana protection shield",
      "Destroys all negative energies through fire",
      "Removes drishti (evil eye) permanently",
      "Protects family, home and business",
      "Improves health and removes serious illness",
      "Invokes the unstoppable divine wheel's power",
    ],
    includes: [
      "Sudarshana Ashtakam recitation",
      "Sudarshana Kavacham",
      "Dedicated Mahasudarshana Homa Ahutis",
      "Sudarshana Yantra energisation",
      "Purnahuti and Prasad",
      "All Havan samagri",
    ],
    samagri: [
      "Sudarshana Yantra",
      "Red lotus flowers",
      "Ghee and sesame",
      "Havan samagri",
      "Mango wood",
      "Camphor and incense",
      "Coconut",
      "Turmeric and kumkum",
      "Sacred threads",
      "Bilva leaves",
    ],
    procedure: [
      "Sudarshana Dhyana and invocation",
      "Ganapati Pooja and Sankalpa",
      "Agni Sthapana",
      "Sudarshana Ashtakam recitation",
      "Dedicated Homa Ahutis",
      "Sudarshana Kavacham",
      "Yantra energisation",
      "Purnahuti",
      "Aarti and blessings",
    ],
    faqs: [
      {
        question: "What is the difference between Sudarshana Aradhana and Mahasudarshana Homa?",
        answer:
          "Sudarshana Aradhana is a puja (worship); Mahasudarshana Homa is a fire ceremony. The Homa is considered more powerful due to the fire element amplifying the mantras.",
      },
      {
        question: "How often should Mahasudarshana Homa be performed?",
        answer:
          "For acute protection needs, once is often sufficient. For ongoing protection of a business or home, annual performance is recommended.",
      },
      {
        question: "Is this effective against business competition?",
        answer:
          "Yes. Sudarshana energy destroys negative obstacles and competition. It is widely performed for business protection.",
      },
      {
        question: "Can the Yantra be kept at home after the ceremony?",
        answer:
          "Yes. The energised Sudarshana Yantra is kept in the home or business as a permanent protective presence.",
      },
    ],
  },
  {
    slug: "rakshoghna-homa",
    title: "Rakshoghna Homa",
    category: "Homa & Havan",
    shortDescription:
      "Ancient fire ceremony specifically designed to destroy (ghna) all Rakshasas (negative forces) and evil energies affecting the family.",
    fullDescription:
      "Rakshoghna Homa is an ancient Vedic fire ceremony whose name literally means 'destroyer of Rakshasas.' It is performed using specific Rakshoghna mantras from the Atharva Veda and Rigveda to completely destroy negative forces, demonic influences, and evil energies affecting a family or premises. R. Anand performs this powerful protective ceremony for families facing unexplained disturbances, persistent illness, or suspected negative spiritual influences.",
    duration: "2–3 Hours",
    price: "On Request",
    suitableFor: "Negative Spiritual Influences, Unexplained Problems, Home Protection, Purification",
    image: "/images/pooja-placeholder.jpg",
    benefits: [
      "Destroys all Rakshasa (demonic) influences",
      "Removes unexplained illness and disturbances",
      "Purifies the home from negative energies",
      "Protects children from harmful influences",
      "Creates a spiritually pure environment",
      "Ancient Vedic remedy for spiritual disturbances",
    ],
    includes: [
      "Rakshoghna mantra recitations from Atharva Veda",
      "Purification Homa with specific offerings",
      "Home purification ritual post-Homa",
      "Vibhuti and Prasad distribution",
      "Ongoing protection guidance",
      "All specialised samagri",
    ],
    samagri: [
      "Specific Rakshoghna herbs",
      "Mustard seeds and black sesame",
      "Ghee",
      "Camphor and incense",
      "Specific Atharva Veda offerings",
      "Coconut",
      "Mango wood",
      "Sacred ash",
      "Turmeric and kumkum",
      "Protective threads",
    ],
    procedure: [
      "Ganapati Pooja and Sankalpa",
      "Agni Sthapana",
      "Rakshoghna mantra recitation",
      "Specific Ahutis with protective materials",
      "Purification of all rooms in the home",
      "Sprinkling of sacred water",
      "Purnahuti",
      "Aarti and blessings",
      "Protective remedies and guidance",
    ],
    faqs: [
      {
        question: "Is this ceremony for specific spiritual disturbances?",
        answer:
          "Yes. This ceremony is specifically designed for homes or families experiencing unusual disturbances, repeated illness without medical cause, or suspected negative spiritual influences.",
      },
      {
        question: "How do I know if my home needs Rakshoghna Homa?",
        answer:
          "Signs include unexplained illness in family members, nightmares, fear, unusual sounds, or persistent bad luck. R. Anand will assess the situation before recommending this ceremony.",
      },
      {
        question: "Can this be combined with Sudarshana Homa?",
        answer:
          "Yes. For severe cases, R. Anand may recommend performing both in sequence for maximum protection.",
      },
      {
        question: "How long does the protection last?",
        answer:
          "The Rakshoghna Homa creates strong spiritual protection. Most families report lasting relief. The sacred ash (Vibhuti) can be kept in the home for ongoing protection.",
      },
    ],
  },
  {
    slug: "chandi-parayana-homa",
    title: "Chandi Parayana & Homa",
    category: "Homa & Havan",
    shortDescription:
      "Powerful recitation of Devi Mahatmyam (Chandi) combined with sacred fire ceremony for protection, victory, and Goddess Durga's supreme blessings.",
    fullDescription:
      "Chandi Parayana & Homa combines the complete recitation of the Devi Mahatmyam (700 verses praising Goddess Chamundi/Durga) with dedicated Homa offerings. R. Anand performs this supremely powerful ceremony for protection from all evils, victory over enemies, removal of serious obstacles, and invoking the Supreme Goddess's grace. It is considered one of the most comprehensive Shakta ceremonies available.",
    duration: "5–6 Hours",
    price: "On Request",
    suitableFor: "Powerful Protection, Victory over Enemies, Serious Life Challenges, Shakti Upasana",
    image: "/images/pooja-placeholder.jpg",
    benefits: [
      "Invokes Goddess Durga's supreme protective power",
      "Destroys all obstacles and enemies",
      "Removes poverty and financial blockages",
      "Grants victory in legal, career and personal battles",
      "Creates impenetrable divine protection",
      "Complete Shakta parihara for all challenges",
    ],
    includes: [
      "Complete Devi Mahatmyam (700 verses) recitation",
      "Chandi Homa with 108 or 1,008 Ahutis",
      "Kumari Puja (if applicable)",
      "Devi archana and offerings",
      "Prasad distribution",
      "All samagri and materials",
    ],
    samagri: [
      "Chandi Yantra",
      "Red flowers (hibiscus)",
      "Sindoor",
      "Ghee and sesame",
      "Coconut (multiple)",
      "Specific Devi offerings",
      "Camphor and incense",
      "Red cloth",
      "Havan samagri",
      "Lemon and betel leaves",
    ],
    procedure: [
      "Devi Dhyana and invocation",
      "Ganapati Pooja and Sankalpa",
      "Devi Mahatmyam recitation (all 13 chapters)",
      "Agni Sthapana",
      "Chandi Homa with specific Ahutis",
      "Devi archana",
      "Kumari Puja",
      "Purnahuti",
      "Aarti, Prasad and blessings",
    ],
    faqs: [
      {
        question: "What is Devi Mahatmyam?",
        answer:
          "The Devi Mahatmyam (also called Chandi Path or Durga Saptashati) is a 700-verse Sanskrit text describing the supreme power of the Goddess in three major battles against demonic forces.",
      },
      {
        question: "How long does the complete ceremony take?",
        answer:
          "The full Chandi Parayana & Homa takes 5–6 hours due to the complete 700-verse recitation. An early morning start is recommended.",
      },
      {
        question: "Is this only for Shakta tradition followers?",
        answer:
          "No. The Devi Mahatmyam is revered across all Hindu traditions. People of any background can benefit from this ceremony.",
      },
      {
        question: "Can this be performed during Navaratri?",
        answer:
          "Yes. Navaratri is the most auspicious time for Chandi Parayana & Homa. R. Anand recommends early booking for Navaratri dates.",
      },
    ],
  },
  {
    slug: "ashtavadhana-seva",
    title: "Ashtavadhana Seva",
    category: "Homa & Havan",
    shortDescription:
      "Elaborate eight-fold worship service performed with complete attention, simultaneous multi-tasking in Vedic ritual for supreme divine blessings.",
    fullDescription:
      "Ashtavadhana Seva is a highly specialised form of Vedic worship involving eight simultaneous activities of devotion performed by a trained pandit — reciting mantras, waving lamps, offering flowers, and others simultaneously. R. Anand, trained in this advanced form of worship, performs Ashtavadhana Seva as an expression of complete concentration and devotion, invoking the deity's supreme blessings.",
    duration: "3–4 Hours",
    price: "On Request",
    suitableFor: "Special Temple Events, Deity Consecrations, Major Occasions, Supreme Blessings",
    image: "/images/pooja-placeholder.jpg",
    benefits: [
      "Supreme divine blessings through elaborate worship",
      "Demonstrates complete devotional concentration",
      "Highly auspicious for major life events",
      "Ideal for deity consecrations and temple events",
      "Rare ceremony requiring advanced Vedic training",
      "Invokes the deity's most complete grace",
    ],
    includes: [
      "Ashtavadhana Seva complete ritual",
      "Eight simultaneous worship activities",
      "Detailed archana and offerings",
      "Homa and fire offerings",
      "Aarti and Prasad",
      "All samagri and materials",
    ],
    samagri: [
      "Multiple types of flowers",
      "Incense (multiple varieties)",
      "Multiple Deepas (lamps)",
      "Ghee",
      "Panchamrit",
      "Coconut and fruits",
      "Turmeric and kumkum",
      "Camphor",
      "Betel leaves and nuts",
      "Sacred threads",
    ],
    procedure: [
      "Deity invocation and Dhyana",
      "Ganapati Pooja and Sankalpa",
      "Kalasha Sthapana",
      "Ashtavadhana preparation",
      "Eight simultaneous worship activities",
      "Specific Homa",
      "Archana and offerings",
      "Purnahuti",
      "Aarti, Prasad and blessings",
    ],
    faqs: [
      {
        question: "What are the eight activities in Ashtavadhana Seva?",
        answer:
          "The eight activities traditionally include reciting mantras, waving lamps, offering flowers, fanning, holding an umbrella, applying sandalwood, and other specific ritual acts — all performed simultaneously.",
      },
      {
        question: "Is this ceremony available for home performances?",
        answer:
          "Yes. R. Anand can perform Ashtavadhana Seva at your home for special occasions such as deity installations, significant anniversaries, or major life events.",
      },
      {
        question: "Is this different from Shodashopachara Pooja?",
        answer:
          "Shodashopachara involves 16 steps of worship performed sequentially. Ashtavadhana Seva specifically involves performing multiple actions simultaneously — a much rarer and more advanced skill.",
      },
      {
        question: "Can Ashtavadhana Seva be performed for any deity?",
        answer:
          "Yes. While traditionally associated with specific deities, R. Anand can perform Ashtavadhana Seva for the deity of your choice.",
      },
    ],
  },
];

export function getPujaBySlug(slug: string): PujaService | undefined {
  return PUJA_SERVICES.find((puja) => puja.slug === slug);
}

export function getPujasByCategory(category: string): PujaService[] {
  if (category === "All") return PUJA_SERVICES;
  return PUJA_SERVICES.filter((puja) => puja.category === category);
}
