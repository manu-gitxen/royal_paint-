const royalProducts = [
  {
    id: 1,
    title: "U951 Auto flex-Aerosols",
    category: "paints",
    categoryName: "Paint & Aerosols",
    brand: "HB Body",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230513084224.png",
    badge: "Aerosol Refinish",
    desc: "Premium peelable elastomeric protective aerosol coating for custom bodywork and alloy wheels."
  },
  {
    id: 2,
    title: "BODY 615 FIBER FILLER",
    category: "fillers",
    categoryName: "Primers & Fillers",
    brand: "HB Body",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230513083555.png",
    badge: "Fiber Reinforced",
    desc: "Heavy-duty 2K polyester filler reinforced with short glass fibers for repairing rusted and holed car panels."
  },
  {
    id: 3,
    title: "BODY 698 CLEAR HS SR 2:1",
    category: "clearcoats",
    categoryName: "Clear Coats & Topcoats",
    brand: "HB Body",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230513075806.png",
    badge: "Scratch Resistant HS",
    desc: "High solids scratch-resistant clear coat delivering supreme deep gloss, UV resistance, and quick curing."
  },
  {
    id: 4,
    title: "LENS CLEAR",
    category: "clearcoats",
    categoryName: "Clear Coats & Topcoats",
    brand: "HB Body",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230513074406.png",
    badge: "Headlight Restorer",
    desc: "Specialized 2K elasticized protective clear coat formulated specifically for polycarbonate headlamp restoration."
  },
  {
    id: 5,
    title: "IRIDA ACRYLIC PAINT CLEAR COAT",
    category: "clearcoats",
    categoryName: "Clear Coats & Topcoats",
    brand: "Irida",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230513073405.png",
    badge: "High Gloss Clear",
    desc: "Exceptional transparency and mirror-depth automotive acrylic clear coat designed for full resprays."
  },
  {
    id: 6,
    title: "BODY 620 HARDENER",
    category: "hardeners",
    categoryName: "Hardeners & Activators",
    brand: "HB Body",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230513071320.png",
    badge: "Isocyanate Hardener",
    desc: "Specialized curing agent formulated for 2K acrylic and polyurethane topcoats and primers."
  },
  {
    id: 7,
    title: "20:80 HARDENER",
    category: "hardeners",
    categoryName: "Hardeners & Activators",
    brand: "Royal Pro",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230513065941.png",
    badge: "Standard Hardener",
    desc: "Reliable medium-speed hardener suited for panel repairs in Middle East temperature conditions."
  },
  {
    id: 8,
    title: "BODY 650 STONE CHIP",
    category: "solvents",
    categoryName: "Solvents & Underbody",
    brand: "HB Body",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230511085508.png",
    badge: "Underbody Protective",
    desc: "Soundproofing and gravel anti-stone chip rubberized coating for chassis, sills, and wheel arches."
  },
  {
    id: 9,
    title: "Heat-resistant tape",
    category: "masking",
    categoryName: "Masking & Protection",
    brand: "Pro Mask",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230510162217.png",
    badge: "Bake-Oven Rated",
    desc: "High-temperature resistant crepe masking tape designed to withstand booth bake cycles up to 110°C cleanly."
  },
  {
    id: 10,
    title: "F232 UNIVERSAL",
    category: "solvents",
    categoryName: "Solvents & Underbody",
    brand: "Challenger",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230510101855.png",
    badge: "Universal Thinner",
    desc: "Precision blended universal solvent engineered for smooth paint atomization and flawless leveling."
  },
  {
    id: 11,
    title: "P340 PLASTOFIX",
    category: "solvents",
    categoryName: "Solvents & Underbody",
    brand: "HB Body",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230510100907.png",
    badge: "Plastic Adhesion",
    desc: "1K transparent adhesion promoter for all unprimed exterior and interior automotive plastic substrates."
  },
  {
    id: 12,
    title: "770 ANTISIL NORMAL",
    category: "solvents",
    categoryName: "Solvents & Underbody",
    brand: "HB Body",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230510094523.png",
    badge: "Degreaser / Cleaner",
    desc: "Anti-silicone solvent degreaser that thoroughly eliminates silicone, grease, oil, and wax before painting."
  },
  {
    id: 13,
    title: "LEADER THINNER",
    category: "solvents",
    categoryName: "Solvents & Underbody",
    brand: "Leader",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230509161338.png",
    badge: "Standard Thinner",
    desc: "High purity automotive solvent thinner for 1K basecoats and spray gun cleaning operations."
  },
  {
    id: 14,
    title: "COARSE POLISHING COMPOUND FOR ROTARY POLISHERS",
    category: "polishing",
    categoryName: "Polishing & Detailing",
    brand: "Rupes / Pro-Cut",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230509155546.png",
    badge: "Heavy Cut Rotary",
    desc: "Aggressive scratch-removal compound engineered to eradicate P1500 sanding marks swiftly on rotary machines."
  },
  {
    id: 15,
    title: "HIGH PERFORMANCE CUT POLISHING COMPOUND – D-A COARSE",
    category: "polishing",
    categoryName: "Polishing & Detailing",
    brand: "Rupes",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230509154858.png",
    badge: "Dual Action Cut",
    desc: "High-lubricity cutting paste optimized for random orbital dual-action polishers with low dusting."
  },
  {
    id: 16,
    title: "803 FLEX AGENT",
    category: "solvents",
    categoryName: "Solvents & Underbody",
    brand: "HB Body",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230509124003.png",
    badge: "Elasticity Additive",
    desc: "Flexibility additive that imparts elasticity into 2K clear coats and primers for plastic bumper covers."
  },
  {
    id: 17,
    title: "700 PAINT REMOVER",
    category: "solvents",
    categoryName: "Solvents & Underbody",
    brand: "HB Body",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230509123801.png",
    badge: "Stripper Gel",
    desc: "Fast-acting paint and varnish stripper gel that dissolves baked enameled layers without pitting metal."
  },
  {
    id: 18,
    title: "770 ANTISIL NORMAL DEGREASER (Aerosol)",
    category: "solvents",
    categoryName: "Solvents & Underbody",
    brand: "HB Body",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230509091619.png",
    badge: "Aerosol Degreaser",
    desc: "Convenient pressurized spray degreaser for spot-repairs, ensuring pristine surface decontamination."
  },
  {
    id: 19,
    title: "PAINT BRUSH",
    category: "tools",
    categoryName: "Equipment & Tools",
    brand: "Royal Tools",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230509131156.png",
    badge: "Workshop Essential",
    desc: "Pure bristle workshop touch-up and seam-sealer application brush with solvent-resistant epoxy bonding."
  },
  {
    id: 20,
    title: "PAINT SCRAPER",
    category: "tools",
    categoryName: "Equipment & Tools",
    brand: "Royal Tools",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230509131231.png",
    badge: "Putty Knife",
    desc: "Flexible Japanese-style stainless steel putty spreader for contour smoothing and seam finishing."
  },
  {
    id: 21,
    title: "SAFETY MASK",
    category: "tools",
    categoryName: "Equipment & Tools",
    brand: "Pro Safe",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230509125630.png",
    badge: "PPE Protection",
    desc: "Dual organic vapor respirator cartridge mask providing full respiratory safety in spray booths."
  },
  {
    id: 22,
    title: "VILOTE SPRAY GUN",
    category: "tools",
    categoryName: "Equipment & Tools",
    brand: "Vilote",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230509130848.png",
    badge: "HVLP Professional",
    desc: "Precision gravity-feed HVLP refinish spray gun with ultra-fine atomization for basecoats and clears."
  },
  {
    id: 23,
    title: "DCRYSTA SPRAY GUN FOR AUTOMOTIVE PAINTING 601 AS",
    category: "tools",
    categoryName: "Equipment & Tools",
    brand: "DCRYSTA",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230508160503.png",
    badge: "Suction Feed",
    desc: "Industrial grade automotive paint spray gun with stainless steel needle, nozzle, and ergonomic grip."
  },
  {
    id: 24,
    title: "DCRYSTA SPRAY GUN FOR AUTOMOTIVE PAINTING 601 AG",
    category: "tools",
    categoryName: "Equipment & Tools",
    brand: "DCRYSTA",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230509124228.png",
    badge: "Gravity Feed Pro",
    desc: "High transfer efficiency gravity gun designed for metallic basecoats and clear coat application."
  },
  {
    id: 25,
    title: "POLISHING MACHINE",
    category: "tools",
    categoryName: "Equipment & Tools",
    brand: "DCRYSTA Pro",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230508155904.png",
    badge: "Variable Speed",
    desc: "Ergonomic electronic variable-speed automotive polisher with constant torque control for detailing."
  },
  {
    id: 26,
    title: "DCRYSTA AIR ORBIT VACUUM SANDER",
    category: "tools",
    categoryName: "Equipment & Tools",
    brand: "DCRYSTA",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230508155742.png",
    badge: "Pneumatic Orbital",
    desc: "Dust-free central vacuum random orbital sander (150mm) engineered for uniform bodywork prep."
  },
  {
    id: 27,
    title: "SANDING BLOCK",
    category: "tools",
    categoryName: "Equipment & Tools",
    brand: "Royal Tools",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230509130257.png",
    badge: "Hand Block",
    desc: "Hook & loop ergonomic hand sanding block for flat leveling of body filler and primer surfacer."
  },
  {
    id: 28,
    title: "SANDING DISCS",
    category: "tools",
    categoryName: "Equipment & Tools",
    brand: "Royal Abrasives",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230508154507.png",
    badge: "Velcro Discs",
    desc: "Multi-hole anti-clogging stearate-coated 150mm sanding discs available from P80 up to P3000 grit."
  },
  {
    id: 29,
    title: "SANDING PAPER",
    category: "tools",
    categoryName: "Equipment & Tools",
    brand: "Royal Abrasives",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230509124757.png",
    badge: "Wet & Dry",
    desc: "Waterproof silicon carbide wet-and-dry sheets delivering a razor-smooth finish before color compounding."
  },
  {
    id: 30,
    title: "GEM AUTOMOTIVE MASKING TAPE",
    category: "masking",
    categoryName: "Masking & Protection",
    brand: "GEM",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230508154034.png",
    badge: "Sharp Line Tape",
    desc: "Residue-free automotive grade masking tape designed for sharp edge masking along curves and trims."
  },
  {
    id: 31,
    title: "MASKING FILM",
    category: "masking",
    categoryName: "Masking & Protection",
    brand: "GEM",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230509130136.png",
    badge: "Static Cling Film",
    desc: "Corona-treated static overspray absorbent polyethylene sheeting that grips tightly to vehicle contours."
  },
  {
    id: 32,
    title: "GEM MASKING ROLL PAPER",
    category: "masking",
    categoryName: "Masking & Protection",
    brand: "GEM",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230509124945.png",
    badge: "Kraft Masking",
    desc: "Non-porous tightly-woven kraft masking paper roll preventing solvent and clear coat bleed-through."
  },
  {
    id: 33,
    title: "1K PLASTIC PRIMER",
    category: "fillers",
    categoryName: "Primers & Fillers",
    brand: "Royal Pro",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230508153359.png",
    badge: "Fast 1K Primer",
    desc: "Ready-to-spray fast drying adhesion primer for automotive PP, ABS, and polycarbonate plastic components."
  },
  {
    id: 34,
    NC_Primer_968: true,
    title: "NC PRIMER 968",
    category: "fillers",
    categoryName: "Primers & Fillers",
    brand: "HB Body",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230508153208.png",
    badge: "Nitrocellulose",
    desc: "Quick air-drying nitrocellulose primer surfacer formulated for spot fixes and small panel refinishes."
  },
  {
    id: 35,
    title: "989 2K EPOXI PRIMER 4:1 WITH HARDNER",
    category: "fillers",
    categoryName: "Primers & Fillers",
    brand: "HB Body",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230508153029.png",
    badge: "Anti-Corrosive Epoxy",
    desc: "Exceptional anti-corrosion barrier epoxy primer providing supreme chemical resistance on bare metals."
  },
  {
    id: 36,
    title: "980 1K PRIMER",
    category: "fillers",
    categoryName: "Primers & Fillers",
    brand: "HB Body",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230508152928.png",
    badge: "1K Surfacer",
    desc: "Single-component primer surfacer delivering fast flash-off and easy sandability for featheredge prep."
  },
  {
    id: 37,
    title: "CL 470 1K FILLER",
    category: "fillers",
    categoryName: "Primers & Fillers",
    brand: "Challenger",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230509131120.png",
    badge: "Fine 1K Surfacer",
    desc: "High solids 1K primer filler from Challenger designed for quick turnaround spot repair sanding."
  },
  {
    id: 38,
    title: "960 WASH PRIMER WITH ACTIVATOR",
    category: "fillers",
    categoryName: "Primers & Fillers",
    brand: "HB Body",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230508152507.png",
    badge: "Etch Wash Primer",
    desc: "2K acid-curing etch wash primer providing maximum adhesion and rust inhibition over bare steel and aluminum."
  },
  {
    id: 39,
    title: "CL4000 1K WASH PRIMER FILLER",
    category: "fillers",
    categoryName: "Primers & Fillers",
    brand: "Challenger",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230508152226.png",
    badge: "Challenger Wash",
    desc: "Single component chromate-free etch primer surfacer with exceptional direct-to-metal bonding."
  },
  {
    id: 40,
    title: "P334 4:1 FILLER WITH HARDNER",
    category: "fillers",
    categoryName: "Primers & Fillers",
    brand: "HB Body",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230508152042.png",
    badge: "High Build 4:1",
    desc: "Versatile high-build acrylic filler surfacer offering high film thickness and ultra-smooth sanding."
  },
  {
    id: 41,
    title: "CL 440 2K FILLER WHITE",
    category: "fillers",
    categoryName: "Primers & Fillers",
    brand: "Challenger",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230508151831.png",
    badge: "White HS Filler",
    desc: "Challenger premium white 2K filler surfacer engineered for bright, light basecoat color matching."
  },
  {
    id: 42,
    title: "CL 440 2K FILLER GRAY",
    category: "fillers",
    categoryName: "Primers & Fillers",
    brand: "Challenger",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230508151600.png",
    badge: "Gray HS Filler",
    desc: "Challenger medium-gray 2K primer surfacer delivering balanced undercoat value for topcoat coverage."
  },
  {
    id: 43,
    title: "CL420 2K HIGH PRODUCTIVE HS FILLER",
    category: "fillers",
    categoryName: "Primers & Fillers",
    brand: "Challenger",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230508151438.png",
    badge: "High Productive HS",
    desc: "Fast air-drying high-solids filler maximizing workshop throughput with reduced baking energy."
  },
  {
    id: 44,
    title: "TOUGH LINER 955 ALL COLOUR",
    category: "paints",
    categoryName: "Paint & Aerosols",
    brand: "HB Body",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230508151250.png",
    badge: "Bedliner & Armour",
    desc: "Extreme polyurethane protective 2K textured bedliner coating, tintable to any vehicle color scheme."
  },
  {
    id: 45,
    title: "U951 AUTO FLEX",
    category: "paints",
    categoryName: "Paint & Aerosols",
    brand: "HB Body",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230508151133.png",
    badge: "Peelable Liquid Wrap",
    desc: "Sprayable synthetic rubber coating that cures to a flexible, removable matte or satin protective film."
  },
  {
    id: 46,
    title: "GEMEX RUBBING COMPOUND",
    category: "polishing",
    categoryName: "Polishing & Detailing",
    brand: "Gemex",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230508150929.png",
    badge: "Heavy Duty Rubbing",
    desc: "Fast cutting rubbing compound engineered for heavy surface oxidation and orange-peel correction."
  },
  {
    id: 47,
    title: "FOAM PAD",
    category: "polishing",
    categoryName: "Polishing & Detailing",
    brand: "Royal Pro",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230509131349.png",
    badge: "Cutting Pad",
    desc: "Open-cell high density polyurethane foam pad designed for heavy cutting and compounding."
  },
  {
    id: 48,
    title: "COTTON WOOL",
    category: "polishing",
    categoryName: "Polishing & Detailing",
    brand: "Royal Detailing",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230509125524.png",
    badge: "Ultra-Soft Wiping",
    desc: "100% natural pure cotton roll for scratch-free glaze application, wiping, and final inspection."
  },
  {
    id: 49,
    title: "POLISHING PADS",
    category: "polishing",
    categoryName: "Polishing & Detailing",
    brand: "Royal Detailing",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230509125845.png",
    badge: "Finish & Glaze Pad",
    desc: "Waffle-face finishing foam pads to eliminate buffer holograms and amplify mirror paint reflections."
  },
  {
    id: 50,
    title: "807 SEAL POLISH",
    category: "polishing",
    categoryName: "Polishing & Detailing",
    brand: "HB Body",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230509124450.png",
    badge: "Sealant & Protectant",
    desc: "Polymer sealant wax that locks in high gloss while shielding fresh paint against harsh desert UV rays."
  },
  {
    id: 51,
    title: "806 POWER POLISH",
    category: "polishing",
    categoryName: "Polishing & Detailing",
    brand: "HB Body",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230509130528.png",
    badge: "Medium Cut Polish",
    desc: "Step-2 polish removing micro-marring and swirl marks to restore deep optical color brilliance."
  },
  {
    id: 52,
    title: "805 SUPER CUT",
    category: "polishing",
    categoryName: "Polishing & Detailing",
    brand: "HB Body",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230509124347.png",
    badge: "Fast Cut Compound",
    desc: "Diminishing micro-abrasive compounding paste that swiftly removes P1200-P1500 sandpaper scratches."
  },
  {
    id: 53,
    title: "RUBBING COMPOUND",
    category: "polishing",
    categoryName: "Polishing & Detailing",
    brand: "Royal Pro",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230509125353.png",
    badge: "Workshop Rubbing",
    desc: "Classic bodyshop abrasive paste for quick oxidation removal and paint surface renovation."
  },
  {
    id: 54,
    title: "777 BLEND-IN THINNER",
    category: "solvents",
    categoryName: "Solvents & Underbody",
    brand: "HB Body",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230510090819.png",
    badge: "Fade-Out Thinner",
    desc: "Specialized fade-out aerosol/liquid solvent for invisible blending of clear coat fade-out edges."
  },
  {
    id: 55,
    title: "2K THINNER STANDARD IMLAR",
    category: "solvents",
    categoryName: "Solvents & Underbody",
    brand: "Imlar / Axalta",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230509130429.png",
    badge: "Imlar 2K Reducer",
    desc: "Premium quality standard thinner for Imlar 2K enamels, basecoats, and urethane clears."
  },
  {
    id: 56,
    title: "CL 705/710/715 REDUCER",
    category: "solvents",
    categoryName: "Solvents & Underbody",
    brand: "Challenger",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230510084957.png",
    badge: "Challenger Reducer",
    desc: "Temperature-matched reducer series providing pinpoint evaporation control in Qatar climates."
  },
  {
    id: 57,
    title: "ACRYL 740 NORMAL THINNER",
    category: "solvents",
    categoryName: "Solvents & Underbody",
    brand: "HB Body",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230510090600.png",
    badge: "HB Acrylic Thinner",
    desc: "Pure acrylic solvent for thinning 2K acrylic paints, clear coats, and 2K polyurethane primers."
  },
  {
    id: 58,
    title: "ACRYL 741 SLOW THINNER",
    category: "solvents",
    categoryName: "Solvents & Underbody",
    brand: "HB Body",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230508143308.png",
    badge: "High-Temp Thinner",
    desc: "Slow evaporating acrylic thinner designed for large-area resprays in ambient temperatures above 35°C."
  },
  {
    id: 59,
    title: "P980 1K FINE FILLER",
    category: "fillers",
    categoryName: "Primers & Fillers",
    brand: "HB Body",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230508143120.png",
    badge: "Fine Glaze Putty",
    desc: "Ultra-smooth 1K nitrocellulose fine filler for pinhole filling and hairline scratch leveling."
  },
  {
    id: 60,
    title: "243 NITROGLAZE 1K FILLER",
    category: "fillers",
    categoryName: "Primers & Fillers",
    brand: "HB Body",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230508142956.png",
    badge: "1K Spot Glaze",
    desc: "Ready-to-use quick air-drying stopper paste for minor scratches and sanding imperfections."
  },
  {
    id: 61,
    title: "F215 FIBERLIGHT",
    category: "fillers",
    categoryName: "Primers & Fillers",
    brand: "HB Body",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230508142449.png",
    badge: "Lightweight Fiberglass",
    desc: "Low-density lightweight glass fiber filler offering high structural strength and easy sanding."
  },
  {
    id: 62,
    title: "CL500 CHALLENGER PUTTY",
    category: "fillers",
    categoryName: "Primers & Fillers",
    brand: "Challenger",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230508142313.png",
    badge: "Challenger Putty",
    desc: "Smooth creamy 2K polyester body putty with pinpoint adhesion to galvanized steel and sheet metal."
  },
  {
    id: 63,
    title: "F202 ZINC PLUS",
    category: "fillers",
    categoryName: "Primers & Fillers",
    brand: "HB Body",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230508142047.png",
    badge: "Galvanized Metal Putty",
    desc: "Specialized 2K polyester filler formulated for direct application on zinc and galvanized automotive bodies."
  },
  {
    id: 64,
    title: "BODY 611 MULTI FILLER",
    category: "fillers",
    categoryName: "Primers & Fillers",
    brand: "HB Body",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230508141912.png",
    badge: "Multi-Substrate",
    desc: "Versatile 2K body filler adhering strongly to steel, aluminum, wood, and fiberglass composites."
  },
  {
    id: 65,
    title: "210 UNISOFT UNIVERSAL POLYESTER FILLER",
    category: "fillers",
    categoryName: "Primers & Fillers",
    brand: "HB Body",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230508141739.png",
    badge: "Soft-Sand Putty",
    desc: "Easy-to-sand 2K polyester body filler with pore-free spreadability for flawless curved panels."
  },
  {
    id: 66,
    title: "C496 2K HS CLEAR",
    category: "clearcoats",
    categoryName: "Clear Coats & Topcoats",
    brand: "HB Body",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230509125946.png",
    badge: "Premium HS Clear",
    desc: "High solids crystal-clear 2K varnish delivering long-term gloss retention and weather defense."
  },
  {
    id: 67,
    title: "C493 MATT CLEAR HS 2:1",
    category: "clearcoats",
    categoryName: "Clear Coats & Topcoats",
    brand: "HB Body",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230508141013.png",
    badge: "Matte Finish Clear",
    desc: "High-spec 2K matte clear coat for creating uniform, non-reflective matte and satin vehicle finishes."
  },
  {
    id: 68,
    title: "495 SR EXPRESS RAPID CLEAR",
    category: "clearcoats",
    categoryName: "Clear Coats & Topcoats",
    brand: "HB Body",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230508140721.png",
    badge: "Express Rapid Clear",
    desc: "Ultra-fast drying scratch-resistant clear coat curing in just 15 minutes at 60°C for rapid job turnaround."
  },
  {
    id: 69,
    title: "2K UNIVERSAL CLEAR",
    category: "clearcoats",
    categoryName: "Clear Coats & Topcoats",
    brand: "Royal Pro",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230508140528.png",
    badge: "Universal Clear",
    desc: "Economical reliable 2K clear coat formulated for full vehicle sprays and panel spot refinishing."
  },
  {
    id: 70,
    title: "Body 691 SR CLEAR COAT",
    category: "clearcoats",
    categoryName: "Clear Coats & Topcoats",
    brand: "HB Body",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230508135636.png",
    badge: "Scratch Resistant",
    desc: "Superior scratch resistant 2:1 clear coat formulated with nanotechnology resin for showroom gloss."
  },
  {
    id: 71,
    title: "CL240 HS APPEARANCE CLEAR",
    category: "clearcoats",
    categoryName: "Clear Coats & Topcoats",
    brand: "Challenger",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230508135207.png",
    badge: "Challenger HS Clear",
    desc: "High solids appearance clear coat with outstanding vertical stability, depth, and mirror distinctness."
  },
  {
    id: 72,
    title: "HIGH PERFORMANCE FINE POLISHING COMPOUND – D-A FINE",
    category: "polishing",
    categoryName: "Polishing & Detailing",
    brand: "Rupes",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230509131829.png",
    badge: "Fine Finishing Cut",
    desc: "Fine micro-polishing compound providing swirl-free perfection on dark sensitive paint finishes."
  },
  {
    id: 73,
    title: "754 FAST HARDENER HB Body",
    category: "hardeners",
    categoryName: "Hardeners & Activators",
    brand: "HB Body",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230506150546.png",
    badge: "Fast Hardener",
    desc: "Rapid curing isocyanate hardener designed for low temperatures and rapid spot-repair cycles."
  },
  {
    id: 74,
    title: "H725 HARDENERS FOR PRIMERS",
    category: "hardeners",
    categoryName: "Hardeners & Activators",
    brand: "HB Body",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230509091154.png",
    badge: "Primer Hardener",
    desc: "Dedicated activator formulated specifically for HB Body 2K primer fillers and epoxy base surfacers."
  },
  {
    id: 75,
    title: "STANDARD ACTIVATOR IMLAR",
    category: "hardeners",
    categoryName: "Hardeners & Activators",
    brand: "Imlar / Axalta",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230506150207.png",
    badge: "Imlar Activator",
    desc: "High performance activator for Imlar 2K enamels and polyurethane clears."
  },
  {
    id: 76,
    title: "753 HARDENER HB Body",
    category: "hardeners",
    categoryName: "Hardeners & Activators",
    brand: "HB Body",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230506150004.png",
    badge: "Standard Hardener",
    desc: "Standard speed isocyanate hardener ensuring optimal crosslinking and film hardness."
  },
  {
    id: 77,
    title: "CL640 HS HARDENER Fast",
    category: "hardeners",
    categoryName: "Hardeners & Activators",
    brand: "Challenger",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230506145824.png",
    badge: "Challenger Fast",
    desc: "Fast hardener for Challenger 2K clears and fillers, optimized for spot and panel repaints."
  },
  {
    id: 78,
    title: "CL680 HS HARDENER SLOW",
    category: "hardeners",
    categoryName: "Hardeners & Activators",
    brand: "Challenger",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230506145658.png",
    badge: "Challenger Slow",
    desc: "Slow hardener for total resprays and hot atmospheric booth conditions up to 45°C."
  },
  {
    id: 79,
    title: "CL650 HS HARDENER MEDIUM",
    category: "hardeners",
    categoryName: "Hardeners & Activators",
    brand: "Challenger",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230506145109.png",
    badge: "Challenger Medium",
    desc: "All-round medium hardener for standard workshop ambient conditions (20°C - 30°C)."
  },
  {
    id: 80,
    title: "PEELABLE PAINT",
    category: "paints",
    categoryName: "Paint & Aerosols",
    brand: "Royal Pro",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230506144603.png",
    badge: "Liquid Peelable",
    desc: "High elasticity spray wrap forming an easily removable protective shield over original clear coat."
  },
  {
    id: 81,
    title: "BASECOAT 1K MIXING SYSTEM",
    category: "paints",
    categoryName: "Paint & Aerosols",
    brand: "Royal Mix",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230506144250.png",
    badge: "Computerized Mixing",
    desc: "Comprehensive 1K solvent-borne mixing toner system covering thousands of global OEM car formulas."
  },
  {
    id: 82,
    title: "NC PAINTS",
    category: "paints",
    categoryName: "Paint & Aerosols",
    brand: "Royal Pro",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230509170441.png",
    badge: "Industrial & Auto NC",
    desc: "Fast drying nitrocellulose industrial and automotive paints with high opacity and glossy finishes."
  },
  {
    id: 83,
    title: "2K ACRYLIC PAINT MIX SYSTEM",
    category: "paints",
    categoryName: "Paint & Aerosols",
    brand: "Royal Mix",
    image: "https://www.royalautopaints.com/assets/uploads/product/20230503141156.png",
    badge: "2K OEM Direct Gloss",
    desc: "Heavy-duty 2K polyurethane direct gloss mixing bank for commercial vehicles and solid car color matches."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = royalProducts;
}
