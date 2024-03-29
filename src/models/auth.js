const url = `https://pink-fuzzy-crocodile.cyclic.app/api/v1`

class AuthModel {

  static register = (data) => {
    return fetch(`${url}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
  }

  static login = (data) => {
    return fetch(`${url}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
  };

  static profile = () => {
    return fetch(`${url}/profile`, {
      method: "GET",
      headers: { 
        authorization: `Bearer ${localStorage.getItem("uid")}`, 
        
      },
    }).then((response) => response.json());
  }

}

export default AuthModel;