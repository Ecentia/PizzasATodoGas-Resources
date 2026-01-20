export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  category: string;     // Categoría principal (Filtro: "Bocatas")
  subcategory: string;  // Subtipo específico (Montaditos, Sandwiches, etc.)
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