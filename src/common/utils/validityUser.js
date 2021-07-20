export const isEmpty = (value) =>
  typeof value == "string" && value.length > 0 ? true : "O campo está vazio!";
