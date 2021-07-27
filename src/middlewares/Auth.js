import store from "./../store";
export const isAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next("/");
    return;
  }
  next();
};

export const isNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next("/register");
    return;
  }
  next();
};
