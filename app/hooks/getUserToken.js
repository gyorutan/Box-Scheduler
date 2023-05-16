import jwtDecode from "jwt-decode";

export const getUserToken = () => {
  const token = localStorage.getItem("USER");
  if (token) {
    const decodedToken = jwtDecode(token);
    return decodedToken;
  } else {
    return;
  }
};
