import decode from 'jwt-decode';
import axios from 'axios';

export default class AuthService {
  // Initializing important variables
  constructor(domain) {
    const apiURl = 'https://vast-ravine-24080.herokuapp.com';
    // this.domain = domain || 'http://localhost:9000'; // API server domain
    this.domain = apiURl;
    this.fetch = this.fetch.bind(this); // React binding stuff
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  getDomain() {
    return this.domain;
  }

  async signup(username, email, password) {
    const signUpUrl = `${this.domain}/signup`;

    const options = {
      method: 'POST',
      headers: {
        // 'Access-Control-Allow-Origin': '*',
      },
      url: signUpUrl,
      data: {
        username,
        password,
        email,
      },
    };
    try {
      const response = await axios(options);
      console.log(JSON.stringify(response, null, '\t'));
      this.setToken(response.token);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  async login(username, password) {

    // Get a token from api server using the fetch api
    // return this.fetch(`${this.domain}/login`, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     username,
    //     password,
    //   })
    // }).then(res => {
    //   this.setToken(res.token); // Setting the token in localStorage
    //   return Promise.resolve(res);
    // });

    const loginUrl = `${this.domain}/login`;

    const options = {
      method: 'POST',
      headers: {
        // 'Access-Control-Allow-Origin': '*',
      },
      url: loginUrl,
      data: {
        username,
        password,
      },
    };
    try {
      const response = await axios(options);
      console.log(JSON.stringify(response, null, '\t'));
      if (response.data.token) {
        this.setToken(response.data.token);
        return response;
      }
      throw new Error('Login failure');
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken(); // Getting token from localstorage
    if (token && !this.isTokenExpired(token)) {
      return true;
    }
    return false;
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  }

  setToken(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
  }

  getProfile() {
    // Using jwt-decode npm package to decode the token
    const token = this.getToken();
    if (token) {
      try {
        const decodedTokenObject = decode(token);
        return decodedTokenObject.user;
      } catch (error) {
        console.error(error);
        return {};
      }

    }
    return {};
  }


  fetch(url, options) {
    // performs api calls sending the required authentication headers
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    // Setting Authorization header
    // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
    if (this.loggedIn()) {
      headers.Authorization = 'Bearer ' + this.getToken();
    }

    return fetch(url, {
      headers,
      ...options,
    })
      .then(this._checkStatus)
      .then(response => response.json());
  }

  _checkStatus(response) {
    // raises an error in case response status is not a success
    if (response.status >= 200 && response.status < 300) { // Success status lies between 200 to 300
      return response
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }
}
