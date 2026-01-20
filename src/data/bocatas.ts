export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  category: string;     // Categoría principal para el filtro: "Bocatas"
  subcategory?: string;  // Subtipo específico (Montaditos, Sandwiches, etc.)
  allergens?: string[];
}

export const montaditos: MenuItem[] = [
  {
    id: 'mont-lomo-patatas',
    name: 'Lomo y patatas',
    price: 3.50,
    category: 'Bocatas',
    subcategory: 'Montaditos'
  },
  {
    id: 'mont-pollo-patatas',
    name: 'Pollo y patatas',
    price: 3.50,
    category: 'Bocatas',
    subcategory: 'Montaditos'
  }
];

export const sandwiches: MenuItem[] = [
  {
    id: 'sandwich-mixto-york-queso-patatas',
    name: 'Mixto: york, queso y patatas',
    price: 3.50,
    category: 'Bocatas',
    subcategory: 'Sandwiches'
  },
  {
    id: 'sandwich-vegetal-esparragos-lechuga-mahonesa-patatas',
    name: 'Vegetal: espárragos, lechuga, mahonesa y patatas',
    price: 4.00,
    category: 'Bocatas',
    subcategory: 'Sandwiches'
  },
  {
    id: 'sandwich-pollo-york-mahonesa-patatas',
    name: 'Pollo: pollo, york, mahonesa y patatas',
    price: 4.00,
    category: 'Bocatas',
    subcategory: 'Sandwiches'
  }
];

export const serranitos: MenuItem[] = [
  {
    id: 'serranito-lomo-jamon-pimiento-patatas',
    name: 'De lomo, jamón, pimiento y patatas',
    price: 4.00,
    category: 'Bocatas',
    subcategory: 'Serranitos'
  },
  {
    id: 'serranito-pollo-jamon-pimiento-patatas',
    name: 'De pollo, jamón, pimiento y patatas',
    price: 4.00,
    category: 'Bocatas',
    subcategory: 'Serranitos'
  }
];

export const baguettes: MenuItem[] = [
  {
    id: 'baguette-lomo-pimiento-jamon',
    name: 'Lomo, pimiento, jamón',
    price: 5.00,
    category: 'Bocatas',
    subcategory: 'Baguettes'
  },
  {
    id: 'baguette-tortilla-patatas',
    name: 'Tortilla de patatas',
    price: 4.50,
    category: 'Bocatas',
    subcategory: 'Baguettes'
  },
  {
    id: 'baguette-jamon-serrano-tomate',
    name: 'Jamón serrano, tomate',
    price: 4.50,
    category: 'Bocatas',
    subcategory: 'Baguettes'
  },
  {
    id: 'baguette-pollo-lechuga-tomate',
    name: 'Pollo, lechuga, tomate',
    price: 5.00,
    category: 'Bocatas',
    subcategory: 'Baguettes'
  },
  {
    id: 'baguette-lomo-bacon-lechuga-tomate-queso-mahononesa',
    name: 'Lomo, bacon, lechuga, tomate, queso, mahonesa',
    price: 5.00,
    category: 'Bocatas',
    subcategory: 'Baguettes'
  },
  {
    id: 'baguette-pollo-jamon-york-salsa-rosa',
    name: 'Pollo, jamón york, salsa rosa',
    price: 5.00,
    category: 'Bocatas',
    subcategory: 'Baguettes'
  },
  {
    id: 'baguette-lomo-queso',
    name: 'Lomo, queso',
    price: 4.50,
    category: 'Bocatas',
    subcategory: 'Baguettes'
  },
  {
    id: 'baguette-cochinito-tomate-cebolla',
    name: 'Cochinito, tomate, cebolla',
    price: 4.50,
    category: 'Bocatas',
    subcategory: 'Baguettes'
  },
  {
    id: 'baguette-beicon-queso',
    name: 'Beicon, queso',
    price: 4.50,
    category: 'Bocatas',
    subcategory: 'Baguettes'
  },
  {
    id: 'baguette-pollo-pimiento-jamon',
    name: 'Pollo, pimiento, jamón',
    price: 5.00,
    category: 'Bocatas',
    subcategory: 'Baguettes'
  },
  {
    id: 'baguette-kebab',
    name: 'Baguete Kebab: carne kebab de ternera, pollo o mixto, lechuga, cebolla, tomate, salsa kebab',
    price: 5.00,
    category: 'Bocatas',
    subcategory: 'Baguettes'
  },
  {
    id: 'baguette-pollo-beicon-cebolla-cheddar-salsa-rosa',
    name: 'Pollo, beicon, cebolla, cheddar, salsa rosa',
    price: 5.00,
    category: 'Bocatas',
    subcategory: 'Baguettes'
  }
];
