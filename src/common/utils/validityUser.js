export const isEmpty = (value) =>
  (typeof value == "string" && value.length >= 1) || "O campo está vazio!";
export const isMin = (value, min) =>
  value.length >= min || `Insira ao menos ${min} caracteres`;
