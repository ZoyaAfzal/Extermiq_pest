import {
  Bug,
  Bed,
  Mouse,
  TreePine,
  Building2,
  Home,
  Squirrel,
  Cookie,
} from "lucide-react";

export type IconType = React.ComponentType<{ className?: string }>;

export const SITE = {
  name: "Extermiq",
  tagline: "Your Home's Best Defense Against Pests",
  email: "hello@extermiq.com",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
];

export const SERVICES: {
  slug: string;
  name: string;
  short: string;
  description: string;
  image: string;
  icon: IconType;
}[] = [
  { 
    slug: "seasonal-pest-prevention", 
    name: "Seasonal Pest Prevention", 
    short: "Year-round protection tuned to every season.", 
    description: "Our seasonal program is designed to get ahead of pest cycles. From spring ant surges to winter rodent seeking, we apply specialized barriers that evolve with the weather.",
    image: "https://images.pexels.com/photos/31990806/pexels-photo-31990806.jpeg?q=80&w=800&auto=format&fit=crop",
    icon: TreePine 
  },
  { 
    slug: "bed-bug-control", 
    name: "Bed Bug Control", 
    short: "Heat & targeted treatment for total elimination.", 
    description: "We use a combination of precision heat treatments and target-specific applications to eliminate bed bugs at all life stages, ensuring your home is safe and comfortable again.",
    image: "https://images.pexels.com/photos/4098000/pexels-photo-4098000.jpeg?q=80&w=800&auto=format&fit=crop",
    icon: Bed 
  },
  { 
    slug: "rodent-removal", 
    name: "Rodent Removal", 
    short: "Humane trapping, exclusion, and sanitization.", 
    description: "Beyond just removal, we focus on exclusion. We identify every entry point and seal your home against future invasions while safely removing current occupants.",
    image: "https://images.pexels.com/photos/37774957/pexels-photo-37774957.jpeg?q=80&w=800&auto=format&fit=crop",
    icon: Mouse 
  },
  { 
    slug: "termite-treatment", 
    name: "Termite Treatment", 
    short: "Stop structural damage before it starts.", 
    description: "Termites never sleep, and neither does our protection. We use advanced baiting and liquid barriers to create a continuous perimeter of defense around your foundation.",
    image: "https://images.pexels.com/photos/3790391/pexels-photo-3790391.jpeg?q=80&w=800&auto=format&fit=crop",
    icon: Bug 
  },
  { 
    slug: "commercial-pest-control", 
    name: "Commercial Pest Control", 
    short: "Compliance-grade programs for businesses.", 
    description: "Maintaining a pest-free environment is critical for business. We provide discreet, compliance-ready programs tailored to the unique needs of your industry.",
    image: "https://images.pexels.com/photos/35303785/pexels-photo-35303785.jpeg?q=80&w=800&auto=format&fit=crop",
    icon: Building2 
  },
  { 
    slug: "residential-pest-control", 
    name: "Residential Pest Control", 
    short: "Family- and pet-safe home protection.", 
    description: "Family-first protection. We use EPA-approved methods that are tough on pests but safe for your children and pets, covering all common household invaders.",
    image: "https://images.pexels.com/photos/19789841/pexels-photo-19789841.jpeg?q=80&w=800&auto=format&fit=crop",
    icon: Home 
  },
  { 
    slug: "wildlife-removal", 
    name: "Wildlife Removal", 
    short: "Squirrels, raccoons, bats - safely relocated.", 
    description: "From raccoons in the attic to squirrels in the eaves, we provide humane relocation services and repair the damage left behind to prevent re-entry.",
    image: "https://images.pexels.com/photos/18001210/pexels-photo-18001210.jpeg?q=80&w=800&auto=format&fit=crop",
    icon: Squirrel 
  },
  { 
    slug: "ant-cockroach-control", 
    name: "Ant & Cockroach Control", 
    short: "Bait, barrier, and follow-up that lasts.", 
    description: "These persistent pests require a strategic approach. We target the heart of the colony using advanced gel baits and long-lasting barrier treatments.",
    image: "https://images.pexels.com/photos/10777467/pexels-photo-10777467.jpeg?q=80&w=800&auto=format&fit=crop",
    icon: Cookie 
  },
];

export const PLANS = [
  {
    name: "Basic",
    price: { monthly: 49, annually: 470 },
    description: "Essential coverage for small homes.",
    features: ["Quarterly inspections", "Common pest treatment", "Email support", "Free re-treatment within 14 days"],
    featured: false,
  },
  {
    name: "Professional",
    price: { monthly: 129, annually: 1240 },
    description: "Our most popular full-home plan.",
    features: [
      "Bi-monthly inspections",
      "All common + seasonal pests",
      "Priority 2-hour response",
      "30-day guarantee",
      "Pet- and child-safe protocols",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: { monthly: null, annually: null },
    description: "Custom protection for large properties.",
    features: [
      "Monthly inspections",
      "Wildlife + termite included",
      "24/7 emergency callouts",
      "Dedicated technician",
      "Money-back pledge",
    ],
    featured: false,
  },
];

export const TESTIMONIALS = [
  { name: "Sarah K.", role: "Homeowner - Austin", rating: 5, quote: "Quick, clean, and respectful. Extermiq handled our rodent issue in a single visit and gave us a clear plan for prevention." },
  { name: "Marcus T.", role: "Restaurant Owner", rating: 5, quote: "Their commercial program kept us inspection-ready all year. Zero complaints from customers, ever." },
  { name: "Priya R.", role: "Homeowner - Round Rock", rating: 5, quote: "The technician explained every step and made sure our dog and toddler were safe the entire time." },
  { name: "Jordan M.", role: "Property Manager", rating: 5, quote: "Same-day booking. Showed up in the 2-hour window. This is how service should work." },
  { name: "Elena C.", role: "Homeowner - Cedar Park", rating: 5, quote: "Bed bugs gone in one treatment. No surprise charges, no upsells. Just results." },
  { name: "David L.", role: "Café Owner", rating: 5, quote: "Quietly professional. They've become the most reliable vendor we work with." },
];

export const BLOG_POSTS = [
  {
    slug: "spring-pest-prevention-checklist",
    title: "The 7-Step Spring Pest Prevention Checklist",
    excerpt: "Spring brings warmth and pests looking for new homes. Here's what to inspect this week.",
    category: "Seasonal",
    author: "Maya Chen",
    date: "Apr 12, 2026",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/31715997/pexels-photo-31715997.jpeg?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "are-pest-treatments-pet-safe",
    title: "Are Pest Treatments Really Pet-Safe?",
    excerpt: "A clear-eyed look at modern EPA-approved chemistry and what to ask any company before they spray.",
    category: "Safety",
    author: "Dr. Ravi Patel",
    date: "Mar 28, 2026",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/3985283/pexels-photo-3985283.jpeg?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "signs-of-termite-damage",
    title: "5 Early Signs of Termite Damage You're Missing",
    excerpt: "Termites are silent but not invisible. Catch them before they cost you tens of thousands.",
    category: "Termites",
    author: "Jordan Reyes",
    date: "Mar 14, 2026",
    readTime: "4 min read",
    image: "https://images.pexels.com/photos/34756485/pexels-photo-34756485.jpeg?q=80&w=800&auto=format&fit=crop",
  },
];

export const SEASONAL = {
  Spring: [
    { name: "Ants", desc: "Carpenter and sugar ants emerge looking for moisture and food.", tips: ["Seal entry points around windows and doors", "Wipe surfaces with vinegar after meals", "Trim shrubs at least 12\" from siding"] },
    { name: "Termite Swarmers", desc: "Reproductive termites take flight on warm days.", tips: ["Check for discarded wings on window sills", "Inspect crawl spaces for mud tubes", "Schedule a wood-moisture inspection"] },
    { name: "Wasps", desc: "Queens scout for nest sites under eaves and decks.", tips: ["Knock down starter nests weekly in April", "Cover trash cans tightly", "Avoid wearing strong fragrances outdoors"] },
  ],
  Summer: [
    { name: "Mosquitoes", desc: "Standing water becomes the #1 breeding ground.", tips: ["Empty bird baths twice weekly", "Treat gutters and downspouts", "Use yellow porch bulbs"] },
    { name: "Wasps & Hornets", desc: "Colonies hit peak size and aggression.", tips: ["Never spray a nest yourself", "Schedule a perimeter treatment", "Keep food sealed at outdoor meals"] },
    { name: "Roaches", desc: "Heat drives roaches indoors toward water and shelter.", tips: ["Fix dripping pipes immediately", "Store pantry items in glass", "Vacuum behind appliances weekly"] },
  ],
  Autumn: [
    { name: "Rodents", desc: "Mice and rats seek warm overwintering sites.", tips: ["Seal gaps larger than a quarter-inch", "Remove birdseed from decks", "Store pet food in metal bins"] },
    { name: "Spiders", desc: "Mating season pushes spiders into garages and basements.", tips: ["Clear cobwebs in low-traffic corners", "Reduce outdoor lighting", "Declutter storage areas"] },
    { name: "Stink Bugs", desc: "Bugs gather on sunny exterior walls before invading.", tips: ["Install fine-mesh attic vents", "Caulk around utility entries", "Vacuum - never squash - indoors"] },
  ],
  Winter: [
    { name: "Mice", desc: "Indoor populations grow quietly all winter.", tips: ["Set monitoring stations in the attic", "Check stored holiday decor for droppings", "Inspect garage door seals"] },
    { name: "Cockroaches", desc: "Heated spaces and humidity are roach heaven.", tips: ["Keep dishwashers running weekly", "Caulk under kitchen sinks", "Schedule a deep-clean treatment"] },
    { name: "Silverfish", desc: "Humidity in bathrooms and basements draws them out.", tips: ["Run a dehumidifier under 50% RH", "Store paper goods off the floor", "Inspect old book and linen storage"] },
  ],
} as const;
