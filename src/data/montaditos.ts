export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  category: string;
  allergens?: string[]; // Opcional, por si queremos añadir alérgenos más tarde
}

export const montaditos: MenuItem[] = [
  {
    id: 'mont-lomo-patatas',
    name: 'Lomo y patatas',
    price: 3.50,
    category: 'Montaditos'
  },
  {
    id: 'mont-pollo-patatas',
    name: 'Pollo y patatas',
    price: 3.50,
    category: 'Montaditos'
  }
];