// ==========================================================================
// AGRA RESTAURANT PUNE CAMP - ARCHIVAL DATA REPOSITORY
// Authentic culinary menu, historical narrative, gallery items & reviews
// ==========================================================================

export const RESTAURANT_INFO = {
  name: "Agra Restaurant",
  city: "Pune Camp",
  tagline: "Traditional Taste of Pune",
  description: "Delicious food, warm hospitality and a dining experience that feels like home since 1968. Treasured for slow-cooked earthen dum biryanis, live charcoal sigri grills, and royal Mughlai curries in the historic Cantonment quarter.",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "reservations@agrarestaurantpunecamp.com",
  address: "Camp Road, Near Main Cantonment Market, Pune Camp, Pune, Maharashtra 411001",
  landmark: "Near East Street & Main Cantonment Market",
  googleMapsUrl: "https://maps.google.com/?q=Pune+Camp+Pune+Maharashtra+411001",
  foundedYear: 1968,
  hours: {
    general: "10:00 AM – 11:00 PM (Monday to Sunday)",
    lunch: "11:30 AM – 04:00 PM",
    dinner: "07:00 PM – 11:30 PM",
    sigri: "Live Charcoal Tandoor from 06:00 PM onwards"
  },
  highlights: [
    { id: 1, title: "Authentic Cuisine", subtitle: "Mughlai & North Indian", icon: "skillet" },
    { id: 2, title: "Family Friendly", subtitle: "Comfortable AC Suites", icon: "family_restroom" },
    { id: 3, title: "Prime Location", subtitle: "Heart of Pune Camp", icon: "pin_drop" },
    { id: 4, title: "Loved by Thousands", subtitle: "Serving 3 Generations", icon: "stars" }
  ],
  pillars: [
    {
      num: "01",
      title: "Authentic Indian Flavours",
      desc: "Every dish is seasoned with bespoke, hand-roasted masala blends that preserve century-old culinary secrets without synthetic shortcuts."
    },
    {
      num: "02",
      title: "Warm Generational Hospitality",
      desc: "Our staff greets you like family, ensuring fast service, attentive dining care, and personal recommendations for your gathering."
    },
    {
      num: "03",
      title: "Generous Portions",
      desc: "Wholesome biryani handis and rich curry bowls designed for shared laughter and fulfilling multi-generational family meals."
    },
    {
      num: "04",
      title: "Heart of Pune Camp",
      desc: "Centrally accessible with effortless proximity to Pune’s iconic cantonment avenues, shopping promenades, and transit hubs."
    }
  ],
  milestones: [
    { number: "1968", label: "Founded in Camp" },
    { number: "3rd", label: "Generation Led" },
    { number: "40+", label: "Signature Recipes" },
    { number: "500k+", label: "Guests Welcomed" }
  ]
};

// Signature Popular Dishes
export const SIGNATURE_DISHES = [
  {
    id: "sig-1",
    name: "Agra Shahi Chicken Biryani",
    shortName: "Chicken Biryani",
    tagline: "Our signature dish, rich in flavours",
    price: 340,
    category: "biryani",
    isVeg: false,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuClnfukkMfc7d0t1yUFP66aFhng_Z8VjAApxfS4JqfHDTEVR1aKBlmahAH4KTq7_pnVid1NNscytogqXI0p-RnsjXI1jAuoG1-tz-ozESvP9gVrjEcphekHnzESGm4d5nK9-SyvwqvtmL6_r0C9Fb_3h88gY0x4aTP8xHsx5vCfLkTktAql2WIIFlLsf95HMLmv8lhl34TJOpNWyp79jRo7gpLTuGFBMt8f2_sPqQ",
    badge: "House Legend",
    portion: "750g (Serves 1-2)",
    spice: "Medium Spice"
  },
  {
    id: "sig-2",
    name: "Camp Special Chicken Tandoori",
    shortName: "Chicken Tandoori",
    tagline: "Perfectly grilled with traditional spices",
    price: 280,
    category: "tandoor",
    isVeg: false,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA63bkYJEGv_hz6y9-gerGTGmA9VPV5q1F9UBwFXYKJ7Dz2Kc_D95ROum1lXYaqcwWnfzPSsO4G5i1kyZSis-3DRybTAnvXJFRdi9AYZdSPU3nbVeu3nCMK3DwEnXkprU6hPF-Yvte2LfA2I-hKiAAb7LwQveS8MiA8rvAGC1vTYPyR-cmYbh4VdgrhoJ47DUBjIerHINNEwZBfamrKdZezS11oaB1-yngpg09Bxw",
    badge: "Sigri Grilled",
    portion: "Half (4 pcs) / Full available",
    spice: "Charcoal Crisp"
  },
  {
    id: "sig-3",
    name: "Slow Cooked Mutton Curry (Rogan Josh)",
    shortName: "Mutton Curry",
    tagline: "Slow cooked to perfection for 5 hours",
    price: 420,
    category: "curries",
    isVeg: false,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVIRmxWAbeTJiajBKwlZrZSyVvSa2gJBSug3vdx94SzwOyq6mp8sFsliou0OTof8SwBXU2gQVWN9jtKIkyb5mwo9vsFDU8cynlYC33rk-DPzdeInMrsduXMaYv9Nku5PsLE8iCbeEEyOL_ZitoFAGdl4AtNkCiXrDGiEI79Lr9IBw_ej5Kb_25wDFDkOKm8eGUqy6yqZEVTduJr_QxhHrjBeDIYkSoMc9eOAihrg",
    badge: "Chef's Choice",
    portion: "450ml Copper Handi",
    spice: "Rich & Aromatic"
  },
  {
    id: "sig-4",
    name: "Paneer Tikka Sufiyana",
    shortName: "Paneer Tikka",
    tagline: "A flavourful vegetarian favourite",
    price: 280,
    category: "tandoor",
    isVeg: true,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVo8-csRJ247oT8ybA7aktiIrMBGyVcTGP0ARNM3Q5QzWvHVhWDQYII2P6zwisKfajYTXF-LW20dNSSRN8UVBQeZh8yYyNeQLvEvdCrplwE5KfiYbeyGm4xfek7KPXk6DqmVW06Abr7DqfnEawUBT9EIECAgxcVD8TLvDciC74wA5IdoV7tATfFUC8kvVnFwzZklkwscQmCGBbfbHHGU8NtadFAlwAQlkZEDPV0Q",
    badge: "Pure Veg Hit",
    portion: "6 Charred Cubes",
    spice: "Mild Spiced"
  }
];

// Full Culinary Ledger Menu Items
export const MENU_CATEGORIES = [
  { id: "all", label: "All Specialties" },
  { id: "biryani", label: "Handi & Biryanis" },
  { id: "tandoor", label: "Tandoori & Kebabs" },
  { id: "curries", label: "Mughlai Curries" },
  { id: "breads", label: "Breads & Roti" },
  { id: "desserts", label: "Desserts & Drinks" }
];

export const MENU_ITEMS = [
  // Biryani & Rice
  {
    id: "bir-1",
    category: "biryani",
    name: "Agra Shahi Chicken Dum Biryani",
    price: 340,
    isVeg: false,
    badge: "Chef's Special",
    spiceLevel: "Medium Spice",
    portion: "750g (Serves 1-2)",
    description: "Long-grain aged Basmati rice layered with succulent farm chicken marinated in saffron milk, brown onions, and proprietary potli garam masala. Served with burani raita and mirchi ka salan."
  },
  {
    id: "bir-2",
    category: "biryani",
    name: "Nawabi Mutton Dum Biryani",
    price: 440,
    isVeg: false,
    badge: "House Classic",
    spiceLevel: "Mild-Medium",
    portion: "800g (Serves 2)",
    description: "Tender baby goat cuts slow-cooked over wood charcoal embers in heavy copper degh for 4 hours until meltingly soft. Perfumed with kewra water and green cardamom."
  },
  {
    id: "bir-3",
    category: "biryani",
    name: "Tandoori Paneer Tikka Biryani",
    price: 280,
    isVeg: true,
    badge: "Vegetarian Special",
    spiceLevel: "Mild Spice",
    portion: "650g (Serves 1-2)",
    description: "Char-grilled cottage cheese cubes tossed in spicy tandoor gravy, layered between saffron scented rice and caramelized crisp shallots."
  },
  {
    id: "bir-4",
    category: "biryani",
    name: "Desi Ghee Jeera Rice",
    price: 160,
    isVeg: true,
    badge: "Side Order",
    spiceLevel: "Mild",
    portion: "500g",
    description: "Aged long-grain basmati rice tempered in pure aromatic cow ghee, whole bay leaves and crackling roasted cumin seeds."
  },
  {
    id: "bir-5",
    category: "biryani",
    name: "Camp Moong Dal Khichdi",
    price: 180,
    isVeg: true,
    badge: "Comfort Meal",
    spiceLevel: "Mild",
    portion: "550g",
    description: "Comforting slow-tempered yellow lentils and rice with crushed garlic, roasted cumin, and a generous dollop of country ghee."
  },

  // Tandoor & Kebabs
  {
    id: "tan-1",
    category: "tandoor",
    name: "Camp Special Tandoori Chicken",
    price: 280,
    priceNote: "₹280 (Half) / ₹480 (Full)",
    isVeg: false,
    badge: "House Icon",
    spiceLevel: "Spicy & Charred",
    portion: "Half (4 pcs) / Full (8 pcs)",
    description: "Whole spring chicken steeped for 18 hours in spiced hung yogurt, Kashmiri deghi mirch, ginger juice, and mustard oil, roasted on charcoal skewer."
  },
  {
    id: "tan-2",
    category: "tandoor",
    name: "Murgh Malai Reshmi Tikka",
    price: 320,
    isVeg: false,
    badge: "Mild & Velvety",
    spiceLevel: "Mild",
    portion: "6 Skewer Portions",
    description: "Boneless supreme of chicken steeped in heavy malai, cashew paste, white pepper, and mace. Melt-in-mouth creamy finish with charred edges."
  },
  {
    id: "tan-3",
    category: "tandoor",
    name: "Agra Royal Mutton Seekh Kebab",
    price: 360,
    isVeg: false,
    badge: "Chef's Choice",
    spiceLevel: "Medium Spice",
    portion: "4 Long Skewers",
    description: "Fine minced lamb hand-pounded with fresh mint, coriander roots, toasted spices, and skewered directly over active coals. Served with laccha onion and lemon wedges."
  },
  {
    id: "tan-4",
    category: "tandoor",
    name: "Charcoal Paneer Tikka Bharwan",
    price: 260,
    isVeg: true,
    badge: "Vegetarian Favourite",
    spiceLevel: "Medium",
    portion: "6 Large Cubes",
    description: "Thick slices of fresh farm paneer stuffed with plum chutney, marinated in carom seeds (ajwain) and yellow chilli blend."
  },
  {
    id: "tan-5",
    category: "tandoor",
    name: "Dahi Ke Kebab (Awadhi Style)",
    price: 240,
    isVeg: true,
    badge: "Crispy Melt",
    spiceLevel: "Mild",
    portion: "6 Pieces",
    description: "Silken hung yogurt patties spiced with finely chopped green chilies, coriander, and crushed pink peppercorns, shallow fried until golden."
  },

  // Curries & Gravies
  {
    id: "cur-1",
    category: "curries",
    name: "Old Delhi Butter Chicken (Murgh Makhani)",
    price: 340,
    isVeg: false,
    badge: "Pune Camp Favorite",
    spiceLevel: "Mild Sweet & Tangy",
    portion: "450ml Bowl",
    description: "Smoked tandoori chicken cooked in a rich tomato, butter, and cashew emulsion, gently spiced and scented with dried kasuri methi and wild mountain honey."
  },
  {
    id: "cur-2",
    category: "curries",
    name: "Kashmiri Mutton Rogan Josh",
    price: 420,
    isVeg: false,
    badge: "House Classic",
    spiceLevel: "Medium Aromatic",
    portion: "450ml Copper Handi",
    description: "Tender lamb cuts braised in a velvety gravy flavored with ratan jot (alkanet root), dried ginger powder, fennel seeds, and gentle whole spices."
  },
  {
    id: "cur-3",
    category: "curries",
    name: "Mutton Bhuna Gosht",
    price: 410,
    isVeg: false,
    badge: "Karahi Roast",
    spiceLevel: "High Fire",
    portion: "400ml Karahi",
    description: "Boneless lamb morsels roasted in iron karahi with browned onions, crushed black pepper, cloves, and rich dark roasting jus."
  },
  {
    id: "cur-4",
    category: "curries",
    name: "Dal Makhani Agra 24-Hour",
    price: 220,
    isVeg: true,
    badge: "Signature Lentils",
    spiceLevel: "Mild & Creamy",
    portion: "450ml Earthen Pot",
    description: "Whole black lentils and kidney beans simmered overnight on the declining embers of the tandoor with fresh churned white butter and sweet cream."
  },
  {
    id: "cur-5",
    category: "curries",
    name: "Kadai Paneer Lazeez",
    price: 250,
    isVeg: true,
    badge: "Popular Vegetarian",
    spiceLevel: "Medium Spice",
    portion: "400ml Handi",
    description: "Cottage cheese batons stir-cooked with crunchy bell peppers, whole coriander seeds, and dry roasted red chillies in thick tomato onion gravy."
  },
  {
    id: "cur-6",
    category: "curries",
    name: "Murgh Mughlai Korma",
    price: 330,
    isVeg: false,
    badge: "Royal Recipe",
    spiceLevel: "Mild Sweet Fragrance",
    portion: "450ml Bowl",
    description: "Chicken steeped in an almond and poppy seed gravy scented with rose water, green cardamom, and golden caramelized onion gravy."
  },

  // Breads & Rotis
  {
    id: "brd-1",
    category: "breads",
    name: "Butter Naan",
    price: 55,
    isVeg: true,
    badge: "Clay Oven",
    portion: "1 Large Flatbread",
    description: "Soft leavened refined flour flatbread baked on the vertical clay walls of the tandoor and brushed generously with salted butter."
  },
  {
    id: "brd-2",
    category: "breads",
    name: "Crispy Garlic Naan",
    price: 75,
    isVeg: true,
    badge: "Chef's Favorite",
    portion: "1 Large Flatbread",
    description: "Studded with burnt chopped garlic slivers, nigella seeds, and fresh coriander leaves."
  },
  {
    id: "brd-3",
    category: "breads",
    name: "Laccha Paratha",
    price: 60,
    isVeg: true,
    badge: "Whole Wheat",
    portion: "1 Spiral Bread",
    description: "Multi-layered flaky whole wheat bread layered with ghee and crisped in the tandoor."
  },
  {
    id: "brd-4",
    category: "breads",
    name: "Tandoori Roti (Butter / Plain)",
    price: 35,
    priceNote: "₹30 Plain / ₹35 Butter",
    isVeg: true,
    badge: "Classic",
    portion: "1 Piece",
    description: "Stone ground whole wheat crisp bread directly pulled from the hot pit."
  },
  {
    id: "brd-5",
    category: "breads",
    name: "Traditional Roomali Roti",
    price: 40,
    isVeg: true,
    badge: "Hand-Tossed",
    portion: "1 Large Folded",
    description: "Handkerchief-thin delicate bread tossed high in the air and baked on an inverted domed iron wok (kadai)."
  },
  {
    id: "brd-6",
    category: "breads",
    name: "Amritsari Stuffed Kulcha",
    price: 85,
    isVeg: true,
    badge: "Stuffed",
    portion: "1 Stuffed Bread",
    description: "Crispy crusted bread stuffed with spiced potatoes, onions, green chilies, and tangy dried pomegranate seeds (anardana)."
  },

  // Desserts & Beverages
  {
    id: "des-1",
    category: "desserts",
    name: "Shahi Tukda with Rabdi",
    price: 150,
    isVeg: true,
    badge: "Royal Sweet",
    portion: "2 Pieces with Rabdi",
    description: "Desi ghee-fried brioche steeped in warm saffron syrup, blanketed with slow-thickened malai rabdi and silver vark."
  },
  {
    id: "des-2",
    category: "desserts",
    name: "Warm Gulab Jamun (2 pcs)",
    price: 90,
    isVeg: true,
    badge: "House Classic",
    portion: "2 Dumplings",
    description: "Deep fried reduced khoya milk dumplings soaked in green cardamom, saffron, and rose sugar syrup."
  },
  {
    id: "des-3",
    category: "desserts",
    name: "Agra Royal Malai Firni",
    price: 120,
    isVeg: true,
    badge: "Earthen Pot",
    portion: "1 Shikora Bowl",
    description: "Creamy ground rice pudding slow-simmered in milk, chilled in natural porous clay pots, and garnished with Iranian pistachios."
  },
  {
    id: "des-4",
    category: "desserts",
    name: "Fresh Mint & Cumin Chaas",
    price: 60,
    isVeg: true,
    badge: "Digestive Drink",
    portion: "300ml Glass",
    description: "Light spiced buttermilk churned with roasted cumin seeds, fresh mountain mint, black salt, and ginger essence."
  },
  {
    id: "des-5",
    category: "desserts",
    name: "Traditional Sweet Mango Lassi",
    price: 90,
    isVeg: true,
    badge: "Refreshing",
    portion: "350ml Kulhad",
    description: "Thick curd whipped with Alphonso mango pulp, saffron strands, and crushed green cardamom."
  }
];

// Special Feast Thaal
export const SIGNATURE_THAAL = {
  title: "The Camp Dawat Thaal",
  subtitle: "Signature Heritage Platter (Feeds 3-4 Persons)",
  price: 1450,
  tag: "Chef's Table Special",
  description: "An opulent curated banquet serving 3-4 persons: Half Tandoori Chicken, Kashmiri Mutton Rogan Josh, Dal Makhani Agra 24-Hr, Agra Shahi Chicken Dum Biryani, 4 Assorted Naans (2 Butter + 2 Garlic), Burani Raita, Laccha Salad, and 2 Bowls of Malai Firni.",
  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuACSpbSPC-3m52y2POawX2J9HbzxAs4dBnNGaRD5rkFfh09Cay0LNFkCttVXJoXRHGGbAqZ_pGfAxnd7TEZ6_mJwkq-1rXyiB1nrzUwHhxkXL6uBbDvNaerX-1wV-y35_eI-9-dk902UdK6AiRkh7k7kCsWXSliGPXwna2Si52mKL7PMo05ReRojtb1EnvTsDKP_gxJ-8mMskA4rOU9NMJKm-7CfF-THfszYvsVMg"
};

// Gallery Items
export const GALLERY_ITEMS = [
  {
    id: "gal-1",
    category: "interiors",
    tag: "Restaurant Interiors",
    title: "The Grand Dining Hall & Mezzanine",
    desc: "Spacious double-height dining hall with dark walnut tables, leather booth seating, ceiling fans, and upstairs mezzanine.",
    image: "/images/hero-dining-hall.png",
    featured: true
  },
  {
    id: "gal-2",
    category: "interiors",
    tag: "Restaurant Interiors",
    title: "Cane & Rattan Dining Enclave",
    desc: "Cozy dining room with handcrafted cane and rattan booths, olive green wall paneling, and warm ambient lighting.",
    image: "/images/rattan-dining-booths.png",
    featured: true
  },
  {
    id: "gal-3",
    category: "family",
    tag: "Family Dining",
    title: "Exposed Brick Dining Hall & Dessert Bar",
    desc: "Modern warm dining space featuring exposed brick accents, plush banquette seating, dessert display counter, and welcoming ambience.",
    image: "/images/brick-wall-dining.jpg",
    featured: true
  },
  {
    id: "gal-4",
    category: "dishes",
    tag: "Signature Dishes",
    title: "Charcoal Smoked Tandoori Delicacies",
    desc: "Marinated in hung yogurt and ground spices, charred over live coals and served with mint chutney and charred lime.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4wkiixJZkZxKrzbuF5meITD_Wft4KSfv7eaCKQAdApuS79rzM5AWId_wDLlgqjlEXJafgqZ5PYQO6m8J13yJbT2lfIjDQPqap6uD-2vKLJ8Aewl41vmxEOEj8z0K74fCDwSjUGEXTVQG07EwnPUa56yB1sq0HkSAYCLyyTbJVqHmx6dztMa3U9xcOOWdLnvT1Mh9tC53nxeVvpFBYmHsKAzmHqmwM5mX7oC2TvQ",
    featured: false
  },
  {
    id: "gal-5",
    category: "heritage",
    tag: "Heritage & Details",
    title: "Hand-Hammered Copper Tableware",
    desc: "Traditional hammered copper handis and engraved brass water jugs crafted by indigenous metalsmiths.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA61vIkNeJ9Q7fgxyNtW2r817VZfe3lCP19LplRSRGlPnfqYzkl_XRgoodBLhvuCdhcyB9p_mVF2me8KuDOf4In3uHH6iPdFBLuoWiTwFePaX-qb6RqQe1rUlosVwWNpAtr7V5xCFxnlcEFolxYjMBLhZ-Fl6l6tvg0qLBnRlDukt925tK6xpAqoFe9p3_zXVHi7CKJ86h-LSg9VDeoS0xs00tfHHvBemhltPhhbQ",
    featured: false
  },
  {
    id: "gal-6",
    category: "heritage",
    tag: "Heritage & Details",
    title: "Pune Camp Architectural Facade",
    desc: "The iconic Cantonment street presence that has greeted travelers and food lovers through seasons of time.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3r6kS3tYQwjmatXCMCajN5gUXWVZEmNE2IegW5TEYQem1YkjPawfhaicMD2qr0oQjx8oBBc33juKtGadjPFB0UyOEEyufMZQ2FBL0BhgpRmTtAxo15VPJpwf9AsJRPn7jy2cnbG-YtEdtMv6upOynwXvlvoPa7C0qyRS43Br4qENaYgYmp5hzoEBSmAL8zGyaYWa0z52ut4Z4LWZ8X8l20AgWVECqDY7WXVX_yQ",
    featured: false
  },
  {
    id: "gal-7",
    category: "dishes",
    tag: "Signature Dishes",
    title: "Buttery Garlic Naan & Dal Makhani",
    desc: "Tandoor-blistered garlic naan layered with butter, paired with slow-simmered black lentils infused with spices.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuaMoKYy8G3pqyNkciziNf0lc6ebEEBCwSnRhevWlf_QWydsVECN6GfgP9ajWzjBCEq8eS7B5s3B4_EqK_92xk7GJO2_J7MrQIl_1XVq9pucB8ph2NIOQWehXmZWg01bZVVxYmgN4J9BuCvDYeQfJsJMvxWjXhz-099lvWFFSt3goQWFo-C8ncTWwxFVrO5fIB7uPQ502WNf-OmRINgqceOJ8dZw__b5GmFgyPQw",
    featured: false
  },
  {
    id: "gal-8",
    category: "family",
    tag: "Family Dining",
    title: "Private Family AC Enclave",
    desc: "Air-conditioned family dining area thoughtfully designed for private gatherings and peaceful celebratory dinners.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAJB7qd5dZGdVKjCRbuWJFi_N6nxX1NO69ULyCBgq53v2p3mOkxVDNB4LUY1dvPREbnAM2czP0AzrNnDQOj0J6Z2NHPlyOsQ9mxDZQPAqLPnyQcOk5EGOoLWsEPE653nFEFArG3EMwZYNWBEezj76bwRVzr8HlzBWCe8v764AvwV1z0mOrgCK_XcARMd8aI6JS4j4mMxbWMk-NJp921r8Ek-wUKFXnFsYq0UUhzA",
    featured: false
  },
  {
    id: "gal-9",
    category: "interiors",
    tag: "Restaurant Interiors",
    title: "Warm Architectural Accents",
    desc: "Muted incandescent sconces reflecting on polished Burma teak paneling and exposed brick wall accents.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8zImSdIl0SP72HJP-tGSgHm-_0O5Zq5L-UlI75iS7G9qJRIDuznLizXX0g2UGCxJ4zAS6Znc8MCf6Rslz-rge6pVvha-Um2Tcu4uwRx7Egm4IBrAkG7RPH_u3n2MXF6QZ1Yb7QNWOBPA3C1TdKvXmZ394yOh8TmW0IKTd_4K-CKENsR2NrxDq-QHhtl6F-_rEZ1_owFUA8PFBBbd33TULZJhLASi6cPfNZHc_lg",
    featured: false
  },
  {
    id: "gal-10",
    category: "heritage",
    tag: "Heritage & Details",
    title: "Secret Spice Blends of Agra",
    desc: "Stone-ground cardamom pods, star anise, mace, and royal saffron that formulate our timeless Mughlai masala recipes.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxMxqrs4zY-ZOSpzYX09sSj6crGQ4df5FVHpCyMu8dyGWP0MxVvUV7xWik1XvoZEHkkspVbbgomg1dzcYoolxBKp0IDgJVnO3Udob4_dW6PcdVzZV116ae908IoxgMSSp3okYuJ5zctpfurHVAeam1bStfxf7EuK41Vf9zLtHu09RmxGCAtImCFwQHeIEUfUzKbIxgr7vPmwbWrp23M-2GQRICKkWfB1yYx2EcQg",
    featured: false
  }
];

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Col. Rajiv Deshmukh (Retd.)",
    title: "Resident of Pune Camp • Patron for 40 years",
    rating: 5,
    quote: "My grandfather first brought me here in 1984 after Sunday football at the cantonment ground. Today, I bring my two teenage daughters. The chicken biryani tastes identically divine—not a single aromatic note lost over four decades."
  },
  {
    id: 2,
    name: "Farida & Tariq Merchant",
    title: "Koregaon Park • Weekly Diners",
    rating: 5,
    quote: "In an age of cold ghost kitchens and modern fusion experiments, Agra Restaurant is Pune’s steady culinary sanctuary. The mutton handi and hot garlic butter naan here are unmatched anywhere in Western India."
  },
  {
    id: 3,
    name: "Pooja & Anand Kulkarni",
    title: "Shivajinagar • Regular Weekend Visitors",
    rating: 5,
    quote: "The staff recognizes every family member and greets our elderly mother with such graceful warmth. It feels less like an establishment and more like being invited to a royal home kitchen."
  },
  {
    id: 4,
    name: "Dr. Zulfikar Poonawala",
    title: "Cantonment Heritage Trust Member",
    rating: 5,
    quote: "Agra Restaurant is intrinsic to the living history of Pune Camp. The aroma drifting from their charcoal sigris at dusk is an indelible signature of our town's culinary heritage."
  }
];

// FAQs
export const FAQS = [
  {
    id: 1,
    q: "Do we need to pay an advance deposit for table reservations?",
    a: "No advance deposit is needed for standard tables up to 8 guests. For large banquet bookings exceeding 12 guests or tailored celebratory menus, a modest token advance may be requested by our reservations coordinator."
  },
  {
    id: 2,
    q: "What is your table hold policy if our party arrives late?",
    a: "We cheerfully hold your table for up to 15 minutes past your reserved booking time. In case of unexpected Pune traffic, simply call our desk at +91 98765 43210 to retain your slot."
  },
  {
    id: 3,
    q: "Is your meat 100% Halal certified?",
    a: "Yes, absolutely. All meat cuts and poultry preparations at Agra Restaurant are strictly 100% Halal certified, procured fresh daily from audited local butchers."
  },
  {
    id: 4,
    q: "Are vegetarian options prepared separately?",
    a: "Yes. We maintain strict kitchen hygiene and segregated cookware sections for our vegetarian dishes, including paneer specialties, dal makhani, and tawa rotis."
  },
  {
    id: 5,
    q: "Can we book the Private Family Mezzanine for large gatherings?",
    a: "Yes! Our air-conditioned mezzanine hall accommodates gatherings of up to 60-80 guests for birthdays, anniversaries, and family get-togethers with custom set menu packages."
  },
  {
    id: 6,
    q: "Is parking available at the restaurant?",
    a: "Yes, convenient street parking is available along the cantonment avenue right outside our entrance, and our doorman assists with parking coordination during busy peak dinner hours."
  }
];
