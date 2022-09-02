import axios from "axios";
import { configData } from "../../config/config.helper";

export const authenticationService = {
    login,
    logout,
    register,
};

function login(email, password) {
    const apiRequest = axios.post(configData.API_URL + "users/login", {
        email,
        password
      });
      return apiRequest.then(response => {
    
        // console.log("response", response);
        if (response.data.token) {
          
          var response_data = response.data;
          localStorage.setItem("user", JSON.stringify(response_data));
        }
    
        return response_data;
    });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}



function register(user) {
 
}


