export const loginUser = (username, password) => {
  if (username === "Pravin" && password === "password") {
    localStorage.setItem("isLoggedIn", "true");
    return { username: "Pravin" };
  }
  return null;
};

// Function to simulate user logout.
export const logoutUser = () => {
  localStorage.removeItem("isLoggedIn");
};

// Function to check if the user is logged in.
export const userIsLoggedIn = () => {
  return localStorage.getItem("isLoggedIn") === "true";
};
