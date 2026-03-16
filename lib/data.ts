export const categories = ["All", "PPE & Safety", "Corporate Wear", "Promotional", "School Wear", "Event Branding", "Sports Wear"];

export const products = [
  // FEATURED SHIRTS (Mainstays)
  {
    id: 11,
    name: "180g Cotton T-Shirt",
    category: "Promotional",
    image: "/assets/products/cotton-tshirt.png",
    description: "Standard fit t-shirt perfect for bulk printing. Our mainstay product.",
    specs: ["100% Cotton", "Crew Neck", "Double Stitched"],
    featured: true,
    industries: ["Promotional", "Events", "Corporate"]
  },
  {
    id: 2,
    name: "Executive Pique Polo",
    category: "Corporate Wear",
    image: "/assets/products/pique-polo.png",
    description: "220g High-quality cotton blend. Ideal for corporate branding.",
    specs: ["Anti-pill fabric", "Ribbed collar", "Available in 12 colors"],
    featured: true
  },

  // NEW SAFETY ITEMS
  {
    id: 16,
    name: "Heavy Duty Gumboots",
    category: "PPE & Safety",
    image: "/assets/products/heavy-gumboots.png",
    description: "Waterproof PVC gumboots with steel toe cap option.",
    specs: ["Waterproof", "Slip Resistant", "Ankle Protection"],
    featured: true,
    industries: ["Mining", "Agriculture", "Construction"]
  },
  {
    id: 17,
    name: "Safety Goggles",
    category: "PPE & Safety",
    image: "/assets/products/safety-goggles.png",
    description: "Anti-fog clear safety goggles for industrial eye protection.",
    specs: ["Anti-Fog", "Impact Resistant", "Adjustable Strap"],
    featured: false
  },
  {
    id: 18,
    name: "Latex Safety Gloves",
    category: "PPE & Safety",
    image: "/assets/products/latex-safety-gloves.png",
    description: "Disposable latex gloves for hygiene and light protection.",
    specs: ["Powder-Free", "Textured Grip", "Box of 100"],
    featured: false
  },

  // EXISTING PRODUCTS (Reordered)
  {
    id: 1,
    name: "Heavy Duty Conti Suit",
    category: "PPE & Safety",
    image: "/assets/products/conti-suit.png",
    description: "Triple-stitched, 100% Cotton. Built for the toughest sites.",
    specs: ["SABS Approved", "Reflective Tape", "Reinforced Knees"],
    featured: true,
    industries: ["Mining", "Construction", "Agriculture"]
  },
  {
    id: 55,
    name: "Acid Resistant Conti Suit",
    category: "PPE & Safety",
    image: "/assets/products/acid-resistant-suit.png",
    description: "Specialized green acid-resistant poly-viscose blend for chemical handling.",
    specs: ["Acid Resistant", "SABS Approved", "Chem Safe"],
    featured: false,
    industries: ["Chemical", "Mining", "light Industry"]
  },
  {
    id: 56,
    name: "Industrial Dustcoat",
    category: "PPE & Safety",
    image: "/assets/products/industrial-dustcoat.png",
    description: "Long sleeve poly-cotton dustcoat for warehouse and lab use.",
    specs: ["Chest Pocket", "Button Down", "Durable Fabric"],
    featured: false,
    industries: ["Medical", "Warehousing", "Food Processing"]
  },
  {
    id: 3,
    name: "S5 Safety Boots",
    category: "PPE & Safety",
    image: "/assets/products/safety-boots.png",
    description: "Steel toe cap, oil and acid resistant sole.",
    specs: ["Steel Toe", "Oil Resistant", "Ankle Support"],
    featured: false
  },
  {
    id: 4,
    name: "Reflective Vest (High-Vis)",
    category: "PPE & Safety",
    image: "/assets/products/reflective-vest.png",
    description: "Class 2 reflective vest with zip closure and pockets.",
    specs: ["EN ISO 20471", "Mesh Fabric", "ID Pocket"],
    featured: false,
    industries: ["Mining", "Construction", "Security", "Events"]
  },
  {
    id: 5,
    name: "Industrial Hard Hat",
    category: "PPE & Safety",
    image: "/assets/products/hard-hat.png",
    description: "Durable HDPE shell with adjustable suspension.",
    specs: ["Vented", "Rain Trough", "Adjustable Fit"],
    featured: false,
    industries: ["Mining", "Construction"]
  },
  {
    id: 59,
    name: "Delivery Rider Suit",
    category: "PPE & Safety",
    image: "/assets/products/rider-suit.png",
    description: "2-piece waterproof motorcycle delivery suit with reflective strips.",
    specs: ["Waterproof", "High Visibility", "Abrasion Resistant"],
    featured: true,
    industries: ["Logistics", "Delivery", "Transport"]
  },
  {
    id: 60,
    name: "Rider Boots",
    category: "PPE & Safety",
    image: "/assets/products/rider-boots.png",
    description: "Protective motorcycle boots with ankle support and gear shift pad.",
    specs: ["Ankle Protection", "Oil Resistant Sole", "Waterproof"],
    featured: false,
    industries: ["Logistics", "Delivery"]
  },
  {
    id: 61,
    name: "Motorcycle Gloves",
    category: "PPE & Safety",
    image: "/assets/products/rider-gloves.png",
    description: "Armoured gloves for maximum hand protection.",
    specs: ["Knuckle Armor", "Leather/Textile", "Touchscreen Compatible"],
    featured: false,
    industries: ["Logistics", "Delivery"]
  },
  {
    id: 62,
    name: "Delivery Helmet",
    category: "PPE & Safety",
    image: "/assets/products/delivery-helmet.png",
    description: "Open face helmet with clear visor, ideal for delivery drivers.",
    specs: ["DOT Approved", "Clear Visor", "Quick Release Strap"],
    featured: false,
    industries: ["Logistics", "Delivery"]
  },
  {
    id: 63,
    name: "Kidney Belt",
    category: "PPE & Safety",
    image: "/assets/products/kidney-belt.png",
    description: "Elasticated back support belt for long hours on the road.",
    specs: ["Adjustable Velcro", "Breathable Mesh", "Lower Back Support"],
    featured: false,
    industries: ["Logistics", "Delivery"]
  },
  {
    id: 54,
    name: "Safety Shoes (Low Cut)",
    category: "PPE & Safety",
    image: "/assets/products/safety-shoes.png",
    description: "Low-cut steel toe safety shoe for factory/warehouse use.",
    specs: ["Steel Toe", "Anti-Static", "Slip Resistant"],
    featured: false,
    industries: ["Warehousing", "Light Industry", "Hospitality"]
  },
  {
    id: 6,
    name: "Heavy Duty Work Gloves",
    category: "PPE & Safety",
    image: "/assets/products/work-gloves.png",
    description: "Reinforced leather palm for maximum grip and protection.",
    specs: ["Leather Palm", "Safety Cuff", "Abrasion Resistant"],
    featured: false
  },
  {
    id: 7,
    name: "Oxford Long Sleeve Shirt",
    category: "Corporate Wear",
    image: "/assets/products/oxford-shirt.png",
    description: "Classic fit formal shirt. Easy-care fabric.",
    specs: ["Wrinkle Resistant", "Chest Pocket", "Cotton Blend"],
    featured: false,
    industries: ["Corporate", "Hospitality", "Security"]
  },
  {
    id: 8,
    name: "Ladies Blouse",
    category: "Corporate Wear",
    image: "/assets/products/ladies-blouse.png",
    description: "Elegant cut with 3/4 sleeves for office comfort.",
    specs: ["Tailored Fit", "Stretch Fabric", "V-Neck"],
    featured: false
  },
  {
    id: 9,
    name: "Softshell Jacket",
    category: "Corporate Wear",
    image: "/assets/products/softshell-jacket.png",
    description: "Wind and water-resistant jacket for outdoor teams.",
    specs: ["Fleece Lined", "Zip Pockets", "Water Resistant"],
    featured: true,
    industries: ["Corporate", "Schools", "Events"]
  },
  {
    id: 10,
    name: "Chino Trousers",
    category: "Corporate Wear",
    image: "/assets/products/chino-trousers.png",
    description: "Durable cotton twill trousers for smart-casual wear.",
    specs: ["Stretch Cotton", "Slim Fit", "4 Pockets"],
    featured: false
  },
  {
    id: 57,
    name: "Corporate Blazer",
    category: "Corporate Wear",
    image: "/assets/products/corporate-blazer.png",
    description: "Tailored fit blazer suitable for front-office reception and executive wear.",
    specs: ["Fully Lined", "Internal Pockets", "Crease Resistant"],
    featured: false,
    industries: ["Corporate", "Hospitality"]
  },
  {
    id: 58,
    name: "Formal Pencil Skirt",
    category: "Corporate Wear",
    image: "/assets/products/formal-pencil-skirt.png",
    description: "Knee-length formal skirt with stretch lining for comfort.",
    specs: ["Back Vent", "Concealed Zip", "Easy Care"],
    featured: false,
    industries: ["Corporate", "Hospitality"]
  },
  {
    id: 12,
    name: "Snapback Cap",
    category: "Promotional",
    image: "/assets/products/snapback-cap.png",
    description: "6-panel snapback with flat peak. Great for 3D embroidery.",
    specs: ["Adjustable", "Acrylic Blend", "Flat Peak"],
    featured: false
  },
  {
    id: 64,
    name: "Baseball Cap (6-Panel)",
    category: "Promotional",
    image: "/assets/products/baseball-cap.png",
    description: "Classic 6-panel brushed cotton cap. Perfect for embroidery.",
    specs: ["Brushed Cotton", "Adjustable Strap", "Curved Peak"],
    featured: false
  },
  {
    id: 65,
    name: "Trucker Cap",
    category: "Promotional",
    image: "/assets/products/trucker-cap.png",
    description: "Trendy 5-panel trucker cap with foam front and mesh back.",
    specs: ["Snapback", "Mesh Back", "Foam Front"],
    featured: false
  },
  {
    id: 13,
    name: "Branded Lanyard",
    category: "Promotional",
    image: "/assets/products/branded-lanyard.png",
    description: "20mm sublimation lanyard with safety breakaway.",
    specs: ["Full Color Print", "Lobster Claw", "Safety Breakaway"],
    featured: false
  },
  {
    id: 14,
    name: "Event Gazebo (3m x 3m)",
    category: "Event Branding",
    image: "/assets/products/event-gazebo.png",
    description: "Lightweight aluminium frame with fully branded canopy.",
    specs: ["Waterproof", "Carry Bag Included", "Full Walls Optional"],
    featured: true,
    industries: ["Events", "Corporate", "Sports"]
  },
  {
    id: 15,
    name: "Drawstring Bag",
    category: "Promotional",
    image: "/assets/products/drawstring-bag.png",
    description: "Nylon drawstring bag. Budget-friendly event giveaway.",
    specs: ["210D Nylon", " Reinforced Corners", "Large Print Area"],
    featured: false
  },
  {
    id: 19,
    name: "Corporate Wall Calendar",
    category: "Promotional",
    image: "/assets/products/wall-calendar.png",
    description: "A2/A3 wall calendars helping your brand stay visible all year round.",
    specs: ["170gsm Gloss", "Wiro Bound", "Rimmed Top & Bottom"],
    featured: false
  },
  {
    id: 20,
    name: "Tri-Fold Brochure",
    category: "Promotional",
    image: "/assets/products/tri-fold-brochure.png",
    description: "High-quality full color brochures for product information.",
    specs: ["A4 to DL", "130gsm Gloss", "Full Color Print"],
    featured: false
  },
  {
    id: 21,
    name: "Marketing Pamphlet",
    category: "Promotional",
    image: "/assets/products/marketing-pamphlet.png",
    description: "Cost-effective handouts for mass distribution.",
    specs: ["A5 or A6", "80gsm Bond", "Double Sided"],
    featured: false
  },

  // SCHOOL WEAR
  {
    id: 22,
    name: "School Uniform Set",
    category: "School Wear",
    image: "/assets/products/school-uniform-set.png",
    description: "Durable school shirts, shorts, and dresses customized for any school.",
    specs: ["Poly-Cotton Blend", "Reinforced Seams", "Custom Colors"],
    featured: true,
    industries: ["Schools"]
  },
  {
    id: 23,
    name: "School Backpack",
    category: "School Wear",
    image: "/assets/products/school-backpack.png",
    description: "Tough backpacks with school logo embroidery.",
    specs: ["Orthopedic Back", "Multiple Compartments", "Water Resistant"],
    featured: false
  },
  {
    id: 42,
    name: "Kids Cotton T-Shirt",
    category: "School Wear",
    image: "/assets/products/kids-cotton-tshirt.png",
    description: "160g combed cotton t-shirt for school sports and events.",
    specs: ["Age 4-14", "Breathable", "Color Fast"],
    featured: false
  },

  // BAGS
  {
    id: 24,
    name: "Team Sports Bag",
    category: "Promotional",
    image: "/assets/products/team-sports-bag.png",
    description: "Large capacity bag for sports teams.",
    specs: ["Shoe Compartment", "Adjustable Strap", "Ripstop Fabric"],
    featured: false
  },
  {
    id: 25,
    name: "Insulated Cooler Bag",
    category: "Promotional",
    image: "/assets/products/insulated-cooler-bag.png",
    description: "Keeps drinks and food cold for events.",
    specs: ["Foil Lining", "6-Can Capacity", "Front Pocket"],
    featured: false
  },

  // HEADWEAR
  {
    id: 26,
    name: "Brush Cotton Floppy Hat",
    category: "Promotional",
    image: "/assets/products/floppy-hat.png",
    description: "Wide brim hat for sun protection.",
    specs: ["100% Cotton", "Chin Strap", "Metal Eyelets"],
    featured: false
  },
  {
    id: 27,
    name: "Knitted Beanie",
    category: "Promotional",
    image: "/assets/products/knitted-beanie.png",
    description: "Warm acrylic beanie for winter promotions.",
    specs: ["One Size Fits All", "Embroidery Ready", "Various Colors"],
    featured: false
  },
  {
    id: 28,
    name: "Reversible Bucket Hat",
    category: "Promotional",
    image: "/assets/products/reversible-bucket-hat.png",
    description: "Trendy two-tone bucket hat.",
    specs: ["Reversible", "Polyester Blend", "Full Brim"],
    featured: false
  },

  // STATIONERY & ACCESSORIES
  {
    id: 29,
    name: "Branded Water Bottle",
    category: "Promotional",
    image: "/assets/products/water-bottle.png",
    description: "BPA-free plastic or aluminum bottles.",
    specs: ["750ml", "Leak Proof", "Screw Cap"],
    featured: false
  },
  {
    id: 30,
    name: "30cm Ruler",
    category: "Promotional",
    image: "/assets/products/30cm-ruler.png",
    description: "Standard plastic ruler with logo print area.",
    specs: ["Shatterproof", "Clear or White", "Metric/Imperial"],
    featured: false
  },
  {
    id: 31,
    name: "Promotional Pen",
    category: "Promotional",
    image: "/assets/products/promotional-pen.png",
    description: "Budget ballpoint pen for mass giveaways.",
    specs: ["Blue/Black Ink", "Click Action", "Barrel Print"],
    featured: false
  },
  {
    id: 32,
    name: "Executive Pen",
    category: "Promotional",
    image: "/assets/products/executive-pen.png",
    description: "Premium metal barrel pen with laser engraving.",
    specs: ["Gift Box", "Metal Barrel", "Smooth Flow"],
    featured: false
  },
  {
    id: 33,
    name: "A5 Diary",
    category: "Promotional",
    image: "/assets/products/a5-diary.png",
    description: "Page-a-day diary with custom cover.",
    specs: ["Bond Paper", "Ribbon Marker", "Corner Dates"],
    featured: false
  },
  {
    id: 34,
    name: "Executive Notebook",
    category: "Promotional",
    image: "/assets/products/executive-notebook.png",
    description: "Leather-look PU notebook with elastic closure.",
    specs: ["Lined Pages", "Pen Loop", "Back Pocket"],
    featured: false
  },

  // EVENT BRANDING
  {
    id: 35,
    name: "Sharkfin Flag (3m)",
    category: "Event Branding",
    image: "/assets/products/sharkfin-flag.png",
    description: "High-visibility sharkfin flag for outdoor events.",
    specs: ["Fiberglass Rods", "Carry Bag", "Ground Spike Info"],
    featured: false
  },
  {
    id: 36,
    name: "Teardrop Flag (3m)",
    category: "Event Branding",
    image: "/assets/products/teardrop-flag.png",
    description: "Teardrop-shaped banner for wind-resistant branding.",
    specs: ["Double Sided Print", "Rotates in Wind", "Indoor Base avail."],
    featured: false
  },
  {
    id: 37,
    name: "Telescopic Flag",
    category: "Event Branding",
    image: "/assets/products/telescopic-flag.png",
    description: "Rectangular telescopic flag, ideal for sponsor logos.",
    specs: ["Visual Impact", "Easy Assembly", "Full Color"],
    featured: false
  },
  {
    id: 38,
    name: "Pull-Up Banner",
    category: "Event Branding",
    image: "/assets/products/pull-up-banner.png",
    description: "Portable retractable banner stand (Roll-up).",
    specs: ["PVC or Fabric", "Aluminum Base", "0.85m x 2m"],
    featured: true
  },
  {
    id: 39,
    name: "Exhibition Backdrop Wall",
    category: "Event Branding",
    image: "/assets/products/exhibition-backdrop.png",
    description: "Large fabric display wall for media backdrops or expos.",
    specs: ["Concertina Frame", "Velcro / Zipper", "Wrinkle Free"],
    featured: false
  },
  {
    id: 40,
    name: "PVC Banner (Rope & Eyelets)",
    category: "Event Branding",
    image: "/assets/products/pvc-banner.png",
    description: "Durable PVC banner for fences and walls.",
    specs: ["Black Back PVC", "UV Resistant", "Custom Size"],
    featured: false
  },
  {
    id: 41,
    name: "Billboard Construction",
    category: "Event Branding",
    image: "/assets/products/billboard-construction.png",
    description: "Full service steel billboard manufacturing and flighting.",
    specs: ["Structural Cert.", "LED Lighting Opt", "Flighting Service"],
    featured: true
  },

  // SPORTS WEAR
  {
    id: 43,
    name: "Full Sports Tracksuit",
    category: "Sports Wear",
    image: "/assets/products/full-sports-tracksuit.png",
    description: "Polyester or micro-active tracksuit set (Jacket & Pants).",
    specs: ["Zip Pockets", "Elasticated Cuffs", "Custom Colors"],
    featured: false,
    industries: ["Sports", "Schools", "Corporate"]
  },
  {
    id: 44,
    name: "Soccer Kit (Full Set)",
    category: "Sports Wear",
    image: "/assets/products/soccer-kit.png",
    description: "Complete team soccer kit including jerseys, shorts, and socks.",
    specs: ["14 Tops/Shorts", "Sublimation Print", "Goalkeeper Kit Included"],
    featured: true,
    industries: ["Sports", "Schools"]
  },
  {
    id: 45,
    name: "Netball Kit",
    category: "Sports Wear",
    image: "/assets/products/netball-kit.png",
    description: "Professional netball tops and skirts/skorts.",
    specs: ["Velcro Bibs Optional", "Breathable Fabric", "Custom Design"],
    featured: false
  },
  {
    id: 46,
    name: "Volleyball Kit",
    category: "Sports Wear",
    image: "/assets/products/volleyball-kit.png",
    description: "Sleeveless tops and shorts for volleyball teams.",
    specs: ["Lightweight", "Moisture Wicking", "Number Printing"],
    featured: false
  },

  // NEW PROMOTIONAL ITEMS
  {
    id: 47,
    name: "Ordinary Umbrella",
    category: "Promotional",
    image: "/assets/products/ordinary-umbrella.png",
    description: "Standard storm-proof golf or rain umbrella.",
    specs: ["Windproof Frame", "Screen Print Branding", "Various Colors"],
    featured: false
  },
  {
    id: 48,
    name: "Executive Umbrella",
    category: "Promotional",
    image: "/assets/products/executive-umbrella.png",
    description: "Premium automatic opening umbrella with wooden/rubber handle.",
    specs: ["Auto-Open", "Fiberglass Ribs", "Gift Sheath"],
    featured: false
  },
  {
    id: 49,
    name: "Branded Gift Bags",
    category: "Promotional",
    image: "/assets/products/branded-gift-bags.png",
    description: "Custom printed paper or canvas gift bags for corporate events.",
    specs: ["Laminated Paper", "Rope Handles", "Full Color Print"],
    featured: false
  },
  {
    id: 50,
    name: "Coffee Mug (Ceramic)",
    category: "Promotional",
    image: "/assets/products/coffee-mug.png",
    description: "Standard 330ml ceramic mug with full color wrap branding.",
    specs: ["Dishwasher Safe", "Sublimation Print", "Gift Boxed"],
    featured: false
  },
  {
    id: 51,
    name: "Gym/Sport Towel",
    category: "Promotional",
    image: "/assets/products/gym-sport-towel.png",
    description: "absorbent cotton towel with embroidery or print branding.",
    specs: ["100% Cotton", "Zip Pocket Option", "Hook Included"],
    featured: false
  },

  // NEW CORPORATE WEAR
  {
    id: 52,
    name: "Denim Shirt",
    category: "Corporate Wear",
    image: "/assets/products/denim-shirt.png",
    description: "Durable 100% cotton denim shirt in long or short sleeves.",
    specs: ["Stone Wash", "Double Stitching", "Soft Finish"],
    featured: false,
    industries: ["Agriculture", "Construction", "Light Industry"]
  },
  {
    id: 53,
    name: "Industrial Jeans",
    category: "Corporate Wear",
    image: "/assets/products/industrial-jeans.png",
    description: "Heavy duty work jeans for industrial environments.",
    specs: ["Reinforced Pockets", "Triple Stitched", "Relaxed Fit"],
    featured: false
  },
  {
    id: 66,
    name: "Corporate Uniform Pack",
    category: "Corporate Wear",
    image: "/assets/products/corporate-uniform-pack.png",
    description: "Complete 3-piece uniform set (Shirt, Trousers/Skirt, Blazer).",
    specs: ["Custom Fitting", "Embroidered Logo", "Multiple Colorways"],
    featured: false,
    industries: ["Corporate", "Hospitality"]
  }
];
