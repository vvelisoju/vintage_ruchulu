import { Product } from "../types/product";

import gonguraChickenImg from "@assets/generated_images/Gongura_Chicken_Pickle_Jar_067ef5b1.png";
import nellooreFishImg from "@assets/generated_images/Nellore_Fish_Pickle_Jar_e0ba3f31.png";
import prawnPickleImg from "@assets/generated_images/Prawn_Pickle_Jar_60419c02.png";
import andhraChickenImg from "@assets/generated_images/Andhra_Chicken_Pickle_Jar_39d754f1.png";
import muttonPickleImg from "@assets/generated_images/Mutton_Pickle_Jar_e318bd55.png";
import royyalaAvakayaImg from "@assets/generated_images/Royyala_Avakaya_Pickle_Jar_bc531801.png";

export const products: Product[] = [
  {
    id: "andhra-chicken",
    name: "Boneless Chicken Pickle",
    description: "Classic Andhra-style chicken pickle with the perfect balance of heat and flavor. A must-try for spice enthusiasts.",
    quantities: [
      { weight: "200g", price: 300 },
      { weight: "500g", price: 720 },
      { weight: "1kg", price: 1400 },
    ],
    spiceLevel: 5,
    category: "pickles",
    image: andhraChickenImg,
    ingredients: ["Chicken", "Red chili powder", "Mustard oil", "Garlic", "Ginger", "Authentic Telanagana spices"],
    shelfLife: "3 months (refrigerated)",
    inStock: true,
    tags: ["Most Selling", "Hot", "Bestseller"],
  },
  {
    id: "gongura-chicken",
    name: "Gongura Chicken Pickle",
    description: "Tangy gongura leaves combined with tender chicken pieces in aromatic spices. A Telangana specialty that's perfect with rice or roti.",
    quantities: [
      { weight: "200g", price: 320 },
      { weight: "500g", price: 780 },
      { weight: "1kg", price: 1500 },
    ],
    spiceLevel: 4,
    category: "pickles",
    image: gonguraChickenImg,
    ingredients: ["Chicken", "Gongura leaves", "Red chili", "Mustard oil", "Garlic", "Traditional spices"],
    shelfLife: "3 months (refrigerated)",
    inStock: true,
    tags: ["Specialty", "Traditional"],
  },
  {
    id: "nellore-fish",
    name: "Korameenu Fish Pickle",
    description: "Fresh fish marinated in traditional Nellore-style spices. Rich, spicy, and bursting with coastal flavors.",
    quantities: [
      { weight: "200g", price: 400 },
      { weight: "500g", price: 950 },
      { weight: "1kg", price: 1800 },
    ],
    spiceLevel: 4,
    category: "pickles",
    image: nellooreFishImg,
    ingredients: ["Fresh fish", "Red chili powder", "Tamarind", "Curry leaves", "Sesame oil", "Fenugreek"],
    shelfLife: "3 months (refrigerated)",
    inStock: true,
    tags: ["Coastal", "Popular", "Fresh"],
  },
  {
    id: "prawn-pickle",
    name: "Prawn Pickle",
    description: "Succulent prawns cooked in a fiery blend of spices. A seafood lover's delight with authentic coastal taste.",
    quantities: [
      { weight: "200g", price: 400 },
      { weight: "500g", price: 950 },
      { weight: "1kg", price: 1800 },
    ],
    spiceLevel: 5,
    category: "pickles",
    image: prawnPickleImg,
    ingredients: ["Fresh prawns", "Red chili", "Mustard seeds", "Curry leaves", "Coconut oil", "Traditional masala"],
    shelfLife: "3 months (refrigerated)",
    inStock: true,
    tags: ["Hot", "Seafood", "Spicy", "Succulent"],
  },
  {
    id: "royyala-avakaya",
    name: "Gongura Prawns Pickle",
    description: "A unique fusion of prawns and raw mango. The tanginess of avakaya meets the richness of prawns in this special pickle.",
    quantities: [
      { weight: "200g", price: 400 },
      { weight: "500g", price: 950 },
      { weight: "1kg", price: 1850 },
    ],
    spiceLevel: 4,
    category: "pickles",
    image: royyalaAvakayaImg,
    ingredients: ["Prawns", "Gongura leaves", "Red chili powder", "Mustard seeds", "Fenugreek", "Sesame oil"],
    shelfLife: "3 months (refrigerated)",
    inStock: true,
    tags: ["Unique", "Fusion", "Tangy", "Rich"],
  },
  {
    id: "mutton-pickle",
    name: "Mutton Pickle",
    description: "Tender mutton pieces slow-cooked with aromatic spices. Rich, flavorful, and absolutely irresistible.",
    quantities: [
      { weight: "200g", price: 420 },
      { weight: "500g", price: 1050 },
      { weight: "1kg", price: 2000 },
    ],
    spiceLevel: 3,
    category: "pickles",
    image: muttonPickleImg,
    ingredients: ["Mutton", "Red chili", "Coriander powder", "Turmeric", "Ginger-garlic", "Premium spices"],
    shelfLife: "3 months (refrigerated)",
    inStock: true,
    tags: ["Premium", "Rich Taste", "Tender"],
  },
];