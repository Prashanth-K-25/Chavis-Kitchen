
import { FoodItem } from './types';

export const MENU_ITEMS: FoodItem[] = [
  // --- Rice items ---
  {
    id: 'r1',
    name: "Veg fried rice",
    price: 99,
    description: 'Classic wok-tossed aromatic rice with finely chopped garden vegetables.',
    category: 'Rice items',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'r2',
    name: "Egg fried rice",
    price: 109,
    description: 'Fluffy rice tossed with scrambled eggs and spring onions.',
    category: 'Rice items',
    image: 'https://images.unsplash.com/photo-1512058560366-cd2427ff1141?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'r3',
    name: "Paneer fried rice",
    price: 119,
    description: 'Indo-Chinese style fried rice with soft paneer cubes and herbs.',
    category: 'Rice items',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'r4',
    name: "Chicken fried rice",
    price: 129,
    description: 'Savory fried rice loaded with tender chicken pieces and seasonings.',
    category: 'Rice items',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=600&q=80',
    isPopular: true
  },
  {
    id: 'r5',
    name: "Dal kichadi",
    price: 119,
    description: 'Wholesome and comforting rice and lentil mash tempered with ghee.',
    category: 'Rice items',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80'
  },

  // --- Burger ---
  {
    id: 'b1',
    name: "Veg burger",
    price: 69,
    description: 'Golden fried vegetable patty served with lettuce and creamy mayo.',
    category: 'Burger',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'b2',
    name: "Chicken burger",
    price: 89,
    description: 'Juicy grilled chicken patty with fresh onions and signature sauce.',
    category: 'Burger',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    isPopular: true
  },

  // --- Pizza ---
  {
    id: 'p1',
    name: "Veg pizza",
    price: 89,
    description: 'Topped with fresh onion and capsicum on a hand-tossed crust.',
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'p2',
    name: "Corn cheese pizza",
    price: 99,
    description: 'Gooey mozzarella and sweet corn on a thin crispy crust.',
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    isPopular: true
  },
  {
    id: 'p3',
    name: "Paneer pizza",
    price: 109,
    description: 'Paneer with fresh seasonal veggies and zesty tomato sauce.',
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'p4',
    name: "Chicken pizza",
    price: 129,
    description: 'Succulent chicken with fresh veggies and melted mozzarella.',
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=600&q=80',
    isPopular: true
  },

  // --- Sandwich ---
  {
    id: 's1',
    name: "Veg sandwich",
    price: 69,
    description: 'Fresh vegetables and green chutney in toasted white bread.',
    category: 'Sandwich',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 's2',
    name: "Chilli cheese sandwich",
    price: 69,
    description: 'A spicy combination of green chillies and melted cheese.',
    category: 'Sandwich',
    image: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 's3',
    name: "Corn sandwich",
    price: 79,
    description: 'Buttery sweet corn filling pressed between golden toasted bread.',
    category: 'Sandwich',
    image: 'https://images.unsplash.com/photo-1481070414801-51fd732d7184?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 's4',
    name: "Paneer sandwich",
    price: 79,
    description: 'Spiced paneer cubes with onions and capsicum in a crisp toast.',
    category: 'Sandwich',
    image: 'https://images.unsplash.com/photo-1540713434306-58505cf1b6fc?auto=format&fit=crop&w=600&q=80'
  },

  // --- Momos ---
  {
    id: 'm1',
    name: "Veg steam momos",
    price: 69,
    description: 'Classic healthy steamed dumplings with a vegetable heart.',
    category: 'Momos',
    image: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'm2',
    name: "Veg fries momos",
    price: 79,
    description: 'Crispy fried vegetable momos served with spicy red chutney.',
    category: 'Momos',
    image: 'https://images.unsplash.com/photo-1523905330026-b8bd1f5f320e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'm3',
    name: "Veg fried dragon momos",
    price: 89,
    description: 'Extra spicy fried momos tossed in a fiery hot dragon sauce.',
    category: 'Momos',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'm4',
    name: "Chicken steam momos",
    price: 89,
    description: 'Juicy minced chicken steamed in thin dough covers.',
    category: 'Momos',
    image: 'https://images.unsplash.com/photo-1563245332-6903b89b35bc?auto=format&fit=crop&w=600&q=80',
    isPopular: true
  },
  {
    id: 'm5',
    name: "Chicken fried momos",
    price: 99,
    description: 'Crunchy fried dumplings filled with succulent chicken.',
    category: 'Momos',
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'm6',
    name: "Chicken fried dragon momos",
    price: 109,
    description: 'Fried chicken momos glazed in a tangy and spicy dragon coating.',
    category: 'Momos',
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=600&q=80',
    isPopular: true
  },

  // --- Chicken starters ---
  {
    id: 'cs1h',
    name: "Chicken kabab (Half)",
    price: 99,
    description: 'Classic spicy and juicy roasted chicken kababs.',
    category: 'Chicken starters',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'cs1f',
    name: "Chicken kabab (Full)",
    price: 149,
    description: 'Full portion of our signature spicy roasted chicken kababs.',
    category: 'Chicken starters',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80',
    isPopular: true
  },
  {
    id: 'cs2h',
    name: "Crispy fried chicken (H)",
    price: 89,
    description: 'Boneless half portion of extra crunchy fried chicken.',
    category: 'Chicken starters',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'cs2f',
    name: "Crispy fried chicken (F)",
    price: 139,
    description: 'Full portion of boneless extra crunchy fried chicken.',
    category: 'Chicken starters',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'cs3h',
    name: "Dragon chicken (Half)",
    price: 99,
    description: 'Boneless chicken tossed in spicy Indo-Chinese dragon sauce.',
    category: 'Chicken starters',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'cs3f',
    name: "Dragon chicken (Full)",
    price: 149,
    description: 'Full boneless portion of chicken in fiery dragon sauce.',
    category: 'Chicken starters',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'cs4h',
    name: "Chilli chicken (Half)",
    price: 99,
    description: 'Half portion of classic spicy chilli chicken gravy/dry.',
    category: 'Chicken starters',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'cs4f',
    name: "Chilli chicken (Full)",
    price: 149,
    description: 'Full portion of our famous spicy chilli chicken.',
    category: 'Chicken starters',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80'
  },

  // --- Maggie ---
  {
    id: 'mg1',
    name: "Veg Maggie",
    price: 69,
    description: 'Classic comfort noodles with colorful mixed vegetables.',
    category: 'Maggie',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'mg2',
    name: "Egg Maggie",
    price: 89,
    description: 'Spicy Maggie noodles enriched with scrambled eggs.',
    category: 'Maggie',
    image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=600&q=80'
  },

  // --- Veg starters ---
  {
    id: 'vs1',
    name: "French fries",
    price: 79,
    description: 'Golden, crispy, and perfectly salted potato fries.',
    category: 'Veg starters',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'vs2',
    name: "Paneer tikka",
    price: 149,
    description: 'Tandoori-style marinated paneer cubes grilled to perfection.',
    category: 'Veg starters',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80',
    isPopular: true
  },

  // --- Egg items ---
  {
    id: 'eg1',
    name: "Egg omelette",
    price: 59,
    description: 'Classic fluffy omelette with onions, chillies, and coriander.',
    category: 'Egg items',
    image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'eg2',
    name: "Egg bhurji",
    price: 69,
    description: 'Spicy and savory Indian-style scrambled eggs.',
    category: 'Egg items',
    image: 'https://images.unsplash.com/photo-1582450871972-ab5ca641643d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'eg3',
    name: "Egg bhurji Meal",
    price: 119,
    description: 'Wholesome meal with 2 chapati, Egg bhurji, and fresh veg salad.',
    category: 'Egg items',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80',
    isPopular: true
  }
];
