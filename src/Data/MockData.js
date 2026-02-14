export const STORES = [
  {
    id: 1,
    name: "Classic Threads",
    owner: "John Doe",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80",
    description: "Premium vintage wear and custom tailoring.",
    location: "Downtown",
    rating: 4.8,
    coupons: [{ id: 'C1', title: '20% Off Suits', price: 50 }]
  },
  {
    id: 2,
    name: "Fresh Mart",
    owner: "Sarah Smith",
    category: "Groceries",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    description: "Organic farm-to-table vegetables and fruits.",
    location: "Westside",
    rating: 4.5,
    coupons: [{ id: 'C2', title: '$10 Off Groceries', price: 20 }]
  },
  {
    id: 3,
    name: "Tech Hub",
    owner: "Mike Ross",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
    description: "Latest gadgets and expert repair services.",
    location: "East End",
    rating: 4.9,
    coupons: [{ id: 'C3', title: 'Free Screen Guard', price: 10 }]
  },
  {
    id: 4,
    name: "Baker's Delight",
    owner: "Anna Bell",
    category: "Bakery",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    description: "Daily fresh sourdough and artisan pastries.",
    location: "Old Town",
    rating: 4.7,
    coupons: [{ id: 'C4', title: 'Buy 1 Get 1 Croissant', price: 15 }]
  },
  {
    id: 5,
    name: "Fit Gear",
    owner: "Chris Evans",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    description: "Your local destination for gym equipment and supplements.",
    location: "North Plaza",
    rating: 4.6,
    coupons: [{ id: 'C5', title: '15% Off Protein', price: 30 }]
  },
  {
    id: 6,
    name: "Pet Paradise",
    owner: "Linda Gray",
    category: "Pets",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    description: "Grooming services and premium pet food.",
    location: "Downtown",
    rating: 4.4,
    coupons: [{ id: 'C6', title: 'Free Dog Wash', price: 100 }]
  },
  {
    id: 7,
    name: "Home Accents",
    owner: "David Miller",
    category: "Decor",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    description: "Handmade pottery and modern home decor.",
    location: "Westside",
    rating: 4.3,
    coupons: [{ id: 'C7', title: '10% Off Lamps', price: 25 }]
  },
  {
    id: 8,
    name: "The Coffee Bean",
    owner: "Rachel Green",
    category: "Cafe",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    description: "Locally roasted beans and cozy workspace.",
    location: "Library Square",
    rating: 4.9,
    coupons: [{ id: 'C8', title: 'Free Muffin w/ Latte', price: 12 }]
  },
  {
    id: 9,
    name: "Auto Fix",
    owner: "Tom Hardy",
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80",
    description: "Reliable car maintenance and tire changes.",
    location: "Industrial Zone",
    rating: 4.2,
    coupons: [{ id: 'C9', title: '$20 Off Oil Change', price: 40 }]
  },
  {
    id: 10,
    name: "Green Thumb",
    owner: "Lily Potter",
    category: "Gardening",
    image: "https://images.unsplash.com/photo-1416874334776-c2fa80735d4e?auto=format&fit=crop&w=800&q=80",
    description: "Exotic indoor plants and gardening tools.",
    location: "North Plaza",
    rating: 4.8,
    coupons: [{ id: 'C10', title: 'Free Succulent', price: 15 }]
  },
  {
    id: 11,
    name: "Page Turners",
    owner: "Arthur Dent",
    category: "Books",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80",
    description: "New releases and rare second-hand books.",
    location: "Old Town",
    rating: 4.7,
    coupons: [{ id: 'C11', title: 'Buy 2 Get 1 Free', price: 0 }]
  },
  {
    id: 12,
    name: "Gamer's Den",
    owner: "Leon S.",
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    description: "PC hardware and gaming console accessories.",
    location: "East End",
    rating: 4.6,
    coupons: [{ id: 'C12', title: '5% Off GPU', price: 200 }]
  },
  {
    id: 13,
    name: "Silver Screen",
    owner: "Cillian M.",
    category: "Entertainment",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
    description: "Local independent cinema and memorabilia.",
    location: "Downtown",
    rating: 4.5,
    coupons: [{ id: 'C13', title: 'Popcorn Combo', price: 10 }]
  },
  {
    id: 14,
    name: "Pure Wellness",
    owner: "Gwyneth P.",
    category: "Health",
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=800&q=80",
    description: "Vitamins, minerals, and holistic health advice.",
    location: "Westside",
    rating: 4.4,
    coupons: [{ id: 'C14', title: '$5 Off First Visit', price: 10 }]
  },
  {
    id: 15,
    name: "The Toy Box",
    owner: "Andy Davis",
    category: "Toys",
    image: "https://images.unsplash.com/photo-1532330393533-443990a51d10?auto=format&fit=crop&w=800&q=80",
    description: "Classic wooden toys and educational board games.",
    location: "Library Square",
    rating: 4.8,
    coupons: [{ id: 'C15', title: '15% Off Lego', price: 50 }]
  },
  {
    id: 16,
    name: "Luxe Jewelry",
    owner: "Elizabeth T.",
    category: "Jewelry",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    description: "Custom diamond pieces and watch repair.",
    location: "Downtown",
    rating: 4.9,
    coupons: [{ id: 'C16', title: 'Free Polishing', price: 20 }]
  },
  {
    id: 17,
    name: "Urban Kicks",
    owner: "Jordan B.",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
    description: "Limited edition sneakers and streetwear.",
    location: "East End",
    rating: 4.7,
    coupons: [{ id: 'C17', title: '10% Off Sneakers', price: 60 }]
  },
  {
    id: 18,
    name: "Vinyl Records",
    owner: "Rob Fleming",
    category: "Music",
    image: "https://images.unsplash.com/photo-1539375665275-f9ad415ef9ac?auto=format&fit=crop&w=800&q=80",
    description: "Vintage vinyl and rare audio equipment.",
    location: "Old Town",
    rating: 4.8,
    coupons: [{ id: 'C18', title: 'Free Record Sleeve', price: 5 }]
  },
  {
    id: 19,
    name: "Camera World",
    owner: "Peter Parker",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    description: "Professional camera gear and printing lab.",
    location: "Westside",
    rating: 4.6,
    coupons: [{ id: 'C19', title: 'Free Sensor Clean', price: 80 }]
  },
  {
    id: 20,
    name: "The Daily Grind",
    owner: "Steve Rogers",
    category: "Hardware",
    image: "https://images.unsplash.com/photo-1530124560578-186217273fe0?auto=format&fit=crop&w=800&q=80",
    description: "All the tools you need for home DIY projects.",
    location: "Industrial Zone",
    rating: 4.5,
    coupons: [{ id: 'C20', title: '$10 Off Drills', price: 30 }]
  }
];

export const CATEGORIES = [
  "Fashion", "Groceries", "Electronics", "Bakery", "Sports", "Pets", "Decor", "Cafe", "Music", "Books"
];