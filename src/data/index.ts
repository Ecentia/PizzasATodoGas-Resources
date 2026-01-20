/* src/data/index.ts */
import { 
  montaditos, 
  sandwiches, 
  serranitos, 
  baguettes, 
  type MenuItem 
} from "./bocatas";
import { tapas } from "./tapas";
import { platos } from "./platos";
import { kebabYPatatas } from "./kebabypatatas";
import { hamburguesas } from "./hamburguesas";
import { pizzas } from "./pizzas";

// Exportación individual de cada categoría
export * from "./bocatas";
export * from "./tapas";
export * from "./platos";
export * from "./kebabypatatas";
export * from "./hamburguesas";
export * from "./pizzas";

// Exportación de la carta completa en un solo array
export const menuCompleto: MenuItem[] = [
  ...montaditos,
  ...sandwiches,
  ...serranitos,
  ...baguettes,
  ...tapas,
  ...platos,
  ...kebabYPatatas,
  ...hamburguesas,
  ...pizzas
];