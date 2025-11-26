import { Product } from "../types/product";

import gonguraChickenImg from "@assets/generated_images/Gongura_Chicken_Pickle_Jar_067ef5b1.png";
import nellooreFishImg from "@assets/generated_images/Nellore_Fish_Pickle_Jar_e0ba3f31.png";
import prawnPickleImg from "@assets/generated_images/Prawn_Pickle_Jar_60419c02.png";
import andhraChickenImg from "@assets/generated_images/Andhra_Chicken_Pickle_Jar_39d754f1.png";
import muttonPickleImg from "@assets/generated_images/Mutton_Pickle_Jar_e318bd55.png";
import royyalaAvakayaImg from "@assets/generated_images/Royyala_Avakaya_Pickle_Jar_bc531801.png";

export const products: Product[] = [
  {
    id: "andhra-chicken-250g",
    name: "Boneless Chicken Pickle",
    description: "Classic Andhra-style chicken pickle with the perfect balance of heat and flavor. A must-try for spice enthusiasts.",
    price: 350,
    weight: "250g",
    spiceLevel: 5,
    category: "pickles",
    image: andhraChickenImg,
    ingredients: ["Chicken", "Red chili powder", "Mustard oil", "Garlic", "Ginger", "Authentic Telanagana spices"],
    shelfLife: "3 months (refrigerated)",
    inStock: true,
  },
  {
    id: "gongura-chicken-200g",
    name: "Gongura Chicken Pickle",
    description: "Tangy gongura leaves combined with tender chicken pieces in aromatic spices. A Telangana specialty that's perfect with rice or roti.",
    price: 320,
    weight: "200g",
    spiceLevel: 4,
    category: "pickles",
    image: gonguraChickenImg,
    ingredients: ["Chicken", "Gongura leaves", "Red chili", "Mustard oil", "Garlic", "Traditional spices"],
    shelfLife: "3 months (refrigerated)",
    inStock: true,
  },
  {
    id: "nellore-fish-200g",
    name: "Korameenu Fish Pickle",
    description: "Fresh fish marinated in traditional Nellore-style spices. Rich, spicy, and bursting with coastal flavors.",
    price: 280,
    weight: "200g",
    spiceLevel: 4,
    category: "pickles",
    image: nellooreFishImg,
    ingredients: ["Fresh fish", "Red chili powder", "Tamarind", "Curry leaves", "Sesame oil", "Fenugreek"],
    shelfLife: "3 months (refrigerated)",
    inStock: true,
  },
  {
    id: "prawn-pickle-200g",
    name: "Prawn Pickle",
    description: "Succulent prawns cooked in a fiery blend of spices. A seafood lover's delight with authentic coastal taste.",
    price: 380,
    weight: "200g",
    spiceLevel: 5,
    category: "pickles",
    image: prawnPickleImg,
    ingredients: ["Fresh prawns", "Red chili", "Mustard seeds", "Curry leaves", "Coconut oil", "Traditional masala"],
    shelfLife: "2 months (refrigerated)",
    inStock: true,
  },
   {
    id: "royyala-avakaya-200g",
    name: "Gonura Prawns Pickle",
    description: "A unique fusion of prawns and raw mango. The tanginess of avakaya meets the richness of prawns in this special pickle.",
    price: 400,
    weight: "200g",
    spiceLevel: 4,
    category: "pickles",
    image: royyalaAvakayaImg,
    ingredients: ["Prawns", "Raw mango", "Red chili powder", "Mustard seeds", "Fenugreek", "Sesame oil"],
    shelfLife: "2 months (refrigerated)",
    inStock: true,
  },
  {
    id: "mutton-pickle-200g",
    name: "Mutton Pickle",
    description: "Tender mutton pieces slow-cooked with aromatic spices. Rich, flavorful, and absolutely irresistible.",
    price: 420,
    weight: "200g",
    spiceLevel: 3,
    category: "pickles",
    image: muttonPickleImg,
    ingredients: ["Mutton", "Red chili", "Coriander powder", "Turmeric", "Ginger-garlic", "Premium spices"],
    shelfLife: "3 months (refrigerated)",
    inStock: true,
  },
];