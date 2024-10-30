// import jwt from "jsonwebtoken";
// Decodes User Token to validate Credentials
import decode from "jwt-decode";

// export default function handler(req, res) {
//   const jwtSecretKey = process.env.JWT_SECRET;
//   const { username, password } = req.body;
//   // Validates entered User Password
//   if (password !== "pikachu") {
//     return res.status(401).json({ message: "Invalid password" });
//   }
//   let data = {
//     // signInTime: Date.now(),
//     username,
//   };

//   const token = jwt.sign(data, jwtSecretKey);
//   res.status(200).json({ message: "success", token });
// }

// create a new class to instantiate for a user
class AuthService {
  // get user data
  getProfile() {
    return decode(this.getToken());
  }

  // Returns User Name
  getUserName() {
    // let token = this.getToken();
    // console.log("authorize.js Line 31", token);
    // const tokenDecoded = decode(token);
    const tokenDecoded = decode(this.getToken());
    // console.log("authorize.js Line 34", tokenDecoded);
    const user = tokenDecoded.data.userName;
    // console.log("authorize.js Line 36", user);
    return user;
  }

  // getUserPassword() {
  //   const passwordDecoded = decode(this.getToken());
  //   const password = passwordDecoded.data.password;
  //   return password;
  // }

  // check if user's logged in
  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token); // handwaiving here
  }

  // check if token is expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem("id_token");
  }

  login(idToken) {
    // Saves user token to localStorage
    localStorage.setItem("id_token", idToken);
    window.location.assign("/");
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem("id_token");
    // this will reload the page and reset the state of the application
    window.location.assign("/");
  }
}

export default new AuthService();
