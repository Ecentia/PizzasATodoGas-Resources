import { montaditos } from "./montaditos";
import { serranitos } from "./serranitos";
import { sandwiches } from "./sandwiches";
import { tapas } from "./tapas";
import { platos } from "./platos";
import { kebabYPatatas } from "./kebabypatatas";
import { hamburguesas } from "./hamburguesas";
import { pizzas } from "./pizzas";
import { MenuItem } from "./montaditos";

// Exportación individual de cada categoría
export * from "./montaditos";
export * from "./serranitos";
export * from "./sandwiches";
export * from "./tapas";
export * from "./platos";
export * from "./kebabypatatas";
export * from "./hamburguesas";
export * from "./pizzas";

// Exportación de la carta completa en un solo array
export const menuCompleto: MenuItem[] = [
  ...montaditos,
  ...serranitos,
  ...sandwiches,
  ...tapas,
  ...platos,
  ...kebabYPatatas,
  ...hamburguesas,
  ...pizzas
];