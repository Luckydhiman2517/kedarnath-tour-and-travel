export const site = {
  name: "Kedarnath Tour & Travels",
  shortName: "Kedarnath Travels",
  tagline: "Haridwar to Char Dham — Yatra made simple, safe and soulful",
  owner: "Abhishek Dhiman",
  phonePrimary: "9368424496",
  phoneSecondary: "6397658572",
  email: "abhishekdhiman092@gmail.com",
  address: "Haridwar, Uttarakhand (UK), India",
  whatsapp: "919368424496",
  mapsQuery: "Haridwar, Uttarakhand, India",
  established: 2012,
  copyrightYear: 2026,
} as const;

export const telHref = (n: string) => `tel:+91${n}`;
export const waHref = (text = "Hi, I would like to enquire about a tour package.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const img = {
  heroPeaks:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2560&q=85",
  heroTemple:
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2560&q=85",
  heroPass:
    "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?auto=format&fit=crop&w=2560&q=85",
  heroGhat:
    "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=2560&q=85",
  river:
    "https://images.unsplash.com/photo-1609920658906-8223bd289001?auto=format&fit=crop&w=1800&q=85",
  taj: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1800&q=85",
  tajGate:
    "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1800&q=85",
  jaipur:
    "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1800&q=85",
  mistyHills:
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1800&q=85",
  goa: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1800&q=85",
  kerala:
    "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1800&q=85",
} as const;

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Packages", href: "/packages" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export type Pkg = {
  slug: string;
  title: string;
  subtitle: string;
  category: "Char Dham" | "Do Dham" | "Ek Dham" | "Hill Station" | "India Tour";
  days: number;
  nights: number;
  price: number;
  oldPrice?: number;
  route: string[];
  image: string;
  highlights: string[];
  badge?: string;
  featured?: boolean;
};

/* NOTE: Prices and routes below are placeholders for layout purposes.
   Replace with the official rate card when it is shared. */
export const packages: Pkg[] = [
  {
    slug: "char-dham-yatra-ex-haridwar",
    title: "Char Dham Yatra",
    subtitle: "Yamunotri · Gangotri · Kedarnath · Badrinath",
    category: "Char Dham",
    days: 11,
    nights: 10,
    price: 24999,
    oldPrice: 29999,
    route: ["Haridwar", "Barkot", "Uttarkashi", "Guptkashi", "Kedarnath", "Badrinath", "Haridwar"],
    image: img.heroTemple,
    highlights: [
      "All four Dhams with comfortable night halts",
      "AC vehicle for the entire tour",
      "Hotels on twin / triple sharing with meals",
      "Darshan assistance & experienced driver-guide",
    ],
    badge: "Most Booked",
    featured: true,
  },
  {
    slug: "do-dham-kedarnath-badrinath",
    title: "Do Dham Yatra",
    subtitle: "Kedarnath & Badrinath",
    category: "Do Dham",
    days: 6,
    nights: 5,
    price: 14999,
    oldPrice: 17999,
    route: ["Haridwar", "Guptkashi", "Kedarnath", "Badrinath", "Rudraprayag", "Haridwar"],
    image: img.heroPeaks,
    highlights: [
      "Ideal short Yatra for working travellers",
      "Helicopter upgrade available for Kedarnath",
      "Clean, verified hotels close to the temple route",
      "Daily breakfast and dinner included",
    ],
    badge: "Best Value",
    featured: true,
  },
  {
    slug: "kedarnath-ek-dham",
    title: "Kedarnath Ek Dham",
    subtitle: "The Lord of Kedar, in three days",
    category: "Ek Dham",
    days: 3,
    nights: 2,
    price: 7999,
    route: ["Haridwar", "Sitapur / Sonprayag", "Kedarnath", "Haridwar"],
    image: img.river,
    highlights: [
      "Quick weekend Yatra from Haridwar",
      "Pony / palki & helicopter arrangement on request",
      "Pickup from Haridwar, Rishikesh or Dehradun",
      "Small group and private car options",
    ],
    featured: true,
  },
  {
    slug: "char-dham-by-helicopter",
    title: "Char Dham by Helicopter",
    subtitle: "All four Dhams in five days",
    category: "Char Dham",
    days: 5,
    nights: 4,
    price: 189000,
    route: ["Dehradun", "Yamunotri", "Gangotri", "Kedarnath", "Badrinath", "Dehradun"],
    image: img.heroPass,
    highlights: [
      "Ex-Dehradun helicopter circuit",
      "VIP darshan assistance at every Dham",
      "Premium stay and on-ground transfers",
      "Perfect for senior citizens and short trips",
    ],
    badge: "Premium",
  },
  {
    slug: "do-dham-gangotri-yamunotri",
    title: "Gangotri & Yamunotri",
    subtitle: "The river sources of the Himalayas",
    category: "Do Dham",
    days: 5,
    nights: 4,
    price: 12999,
    route: ["Haridwar", "Barkot", "Yamunotri", "Uttarkashi", "Gangotri", "Haridwar"],
    image: img.mistyHills,
    highlights: [
      "Barkot and Uttarkashi overnight halts",
      "Janki Chatti trek support arranged",
      "Ganga Aarti evening at Haridwar",
      "Comfortable Innova / Tempo Traveller",
    ],
  },
  {
    slug: "haridwar-rishikesh-mussoorie",
    title: "Haridwar · Rishikesh · Mussoorie",
    subtitle: "Ghats, rafting and the Queen of Hills",
    category: "Hill Station",
    days: 4,
    nights: 3,
    price: 9499,
    route: ["Haridwar", "Rishikesh", "Mussoorie", "Dehradun"],
    image: img.heroGhat,
    highlights: [
      "Ganga Aarti at Har Ki Pauri",
      "River rafting and Laxman Jhula",
      "Kempty Falls and Mall Road evening",
      "Great family and first-timer itinerary",
    ],
  },
  {
    slug: "golden-triangle",
    title: "Golden Triangle",
    subtitle: "Delhi · Agra · Jaipur",
    category: "India Tour",
    days: 6,
    nights: 5,
    price: 18999,
    route: ["Delhi", "Agra", "Fatehpur Sikri", "Jaipur", "Delhi"],
    image: img.tajGate,
    highlights: [
      "Taj Mahal at sunrise",
      "Amber Fort and Hawa Mahal",
      "Handpicked 3★ / 4★ hotels",
      "English / Hindi speaking guide",
    ],
  },
  {
    slug: "kerala-backwaters",
    title: "Kerala Backwaters",
    subtitle: "Munnar · Alleppey · Kochi",
    category: "India Tour",
    days: 7,
    nights: 6,
    price: 26999,
    route: ["Kochi", "Munnar", "Thekkady", "Alleppey", "Kochi"],
    image: img.kerala,
    highlights: [
      "Overnight premium houseboat",
      "Tea gardens and spice plantations",
      "Ayurvedic spa session included",
      "Honeymoon-friendly add-ons",
    ],
  },
  {
    slug: "goa-beach-escape",
    title: "Goa Beach Escape",
    subtitle: "North & South Goa",
    category: "India Tour",
    days: 4,
    nights: 3,
    price: 13999,
    route: ["Goa", "North Goa", "South Goa", "Goa"],
    image: img.goa,
    highlights: [
      "Beachside resort stay",
      "Sunset cruise on the Mandovi",
      "Water sports at Baga & Calangute",
      "Flight and train tickets arranged",
    ],
  },
];

export const categories = [
  "All",
  "Char Dham",
  "Do Dham",
  "Ek Dham",
  "Hill Station",
  "India Tour",
] as const;

export type Service = { title: string; desc: string; icon: string };

export const services: Service[] = [
  { title: "Domestic Packages", desc: "Char Dham, hill stations and every corner of India, planned end to end.", icon: "mountain" },
  { title: "International Packages", desc: "Dubai, Thailand, Singapore, Nepal and Europe holidays with visa support.", icon: "globe" },
  { title: "Group Packages", desc: "Temple groups, schools and corporate offsites — 10 to 200 travellers.", icon: "users" },
  { title: "Customised Packages", desc: "Tell us your dates, budget and pace. We build the itinerary around you.", icon: "sliders" },
  { title: "Flight Tickets", desc: "Domestic and international ticketing at the best available fare.", icon: "plane" },
  { title: "Railway Tickets", desc: "Confirmed rail bookings, tatkal assistance and group reservations.", icon: "train" },
  { title: "Passport Services", desc: "Fresh application, renewal and documentation handled for you.", icon: "idcard" },
  { title: "Money Exchange", desc: "Forex at live rates with full documentation before you fly.", icon: "coins" },
  { title: "Foreign Parcel", desc: "Trusted international courier and parcel service from Haridwar.", icon: "package" },
];

export const inclusions = [
  { title: "Hotel Accommodation", desc: "Verified hotels on twin / triple sharing", icon: "hotel" },
  { title: "Delicious Meals", desc: "Pure vegetarian breakfast & dinner", icon: "utensils" },
  { title: "AC Transport", desc: "AC vehicle for the entire tour", icon: "car" },
  { title: "Sightseeing & Darshan", desc: "Darshan assistance at every stop", icon: "camera" },
  { title: "Experienced Tour Guide", desc: "Local drivers who know every turn", icon: "guide" },
];

export const stats = [
  { value: 13, suffix: "+", label: "Years in the Yatra business" },
  { value: 25000, suffix: "+", label: "Happy pilgrims travelled" },
  { value: 120, suffix: "+", label: "Curated itineraries" },
  { value: 4.9, suffix: "/5", label: "Average traveller rating", decimals: 1 },
];

export const terms = [
  "AC vehicle will be provided for the entire tour.",
  "Accommodation on twin / triple sharing basis.",
  "We are not responsible for natural calamities and roadblocks.",
  "Tour can be changed or cancelled due to unforeseen circumstances.",
  "Advance booking is required to confirm your dates.",
  "For detailed terms and the latest rate card, please contact us.",
];

export type Testimonial = { name: string; city: string; text: string; rating: number; trip: string };

export const testimonials: Testimonial[] = [
  {
    name: "Rakesh Sharma",
    city: "Delhi",
    trip: "Char Dham Yatra",
    rating: 5,
    text: "We travelled with our parents and everything was handled — hotels, meals, even the pony booking at Kedarnath. The driver was patient on every hairpin bend.",
  },
  {
    name: "Meera Joshi",
    city: "Pune",
    trip: "Do Dham Yatra",
    rating: 5,
    text: "Abhishek ji personally called before the trip and after we reached home. That kind of care is rare. The AC tempo was spotless.",
  },
  {
    name: "Sandeep Verma",
    city: "Jaipur",
    trip: "Kedarnath Ek Dham",
    rating: 5,
    text: "Booked a last-minute weekend Yatra. Pickup at Haridwar station was on time and the hotel at Sonprayag was far better than expected.",
  },
  {
    name: "Anita & Family",
    city: "Lucknow",
    trip: "Char Dham by Helicopter",
    rating: 5,
    text: "My mother is 72 and could never have done the trek. The helicopter circuit made all four Dhams possible for her. Beautifully organised.",
  },
  {
    name: "Harish Nair",
    city: "Kochi",
    trip: "Haridwar · Rishikesh",
    rating: 5,
    text: "The Ganga Aarti evening was arranged with front seating. Great value for the price and a very honest team to deal with.",
  },
  {
    name: "Pooja Agarwal",
    city: "Kanpur",
    trip: "Golden Triangle",
    rating: 5,
    text: "Clear pricing with no hidden charges, and the guide in Agra was excellent. We are booking our Kerala trip with them next.",
  },
];

export const faqs = [
  {
    q: "When does the Char Dham Yatra season open?",
    a: "The portals of all four Dhams usually open around Akshaya Tritiya (late April / early May) and close around Diwali (late October / November). We recommend May–June and September–October for the most comfortable weather.",
  },
  {
    q: "Do you arrange helicopter tickets for Kedarnath?",
    a: "Yes. We arrange helicopter shuttle tickets from Phata, Sersi and Guptkashi, as well as the full ex-Dehradun Char Dham helicopter circuit. Seats are limited in peak season, so book early.",
  },
  {
    q: "Where does the tour start and end?",
    a: "Most of our Yatra packages start and end at Haridwar. We also offer pickup from Rishikesh, Dehradun Airport and Delhi at an additional cost.",
  },
  {
    q: "Is the package suitable for senior citizens?",
    a: "Yes. We plan shorter driving days, arrange ponies, palkis and porters at Kedarnath and Yamunotri, and can upgrade you to a helicopter circuit where walking is difficult.",
  },
  {
    q: "What is the booking and payment process?",
    a: "A confirmation advance secures your dates and hotels; the balance is payable before departure. Share your travel dates on WhatsApp and we will send a detailed itinerary with the current rate card.",
  },
  {
    q: "Can I customise an itinerary?",
    a: "Absolutely. Tell us your dates, group size, budget and the places you want to cover, and we will build a private itinerary around you — including flights, trains and hotels.",
  },
];
