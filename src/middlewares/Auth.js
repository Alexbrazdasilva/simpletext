const isAuthenticated = (to, from, next) => {
  next("/register");
};

export default isAuthenticated;
