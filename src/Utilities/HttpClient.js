import axios from "axios";

class HttpClient {
  api_url;

  constructor() {
    this.api_url = "http://idos.ch/Idos/wp-json/wp/v2"
  }

  generateHeaders(customHeaders) {
    return {
      headers: {
        ...customHeaders
      }
    };
  }

  async request(endpoint, method, body, customHeaders) {
    switch (method) {
      case "GET":
        return await axios.get(
          this.api_url + endpoint,
          this.generateHeaders(customHeaders)
        );
      case "POST":
        return await axios.post(
          this.api_url + endpoint,
          body,
          this.generateHeaders(customHeaders)
        );
      case "PUT":
        return await axios.put(
          this.api_url + endpoint,
          body,
          this.generateHeaders(customHeaders)
        );
      case "DELETE":
        return await axios.delete(
          this.api_url + endpoint,
          this.generateHeaders(customHeaders)
        );
    }
  }

  async downloadRequest(endpoint, customHeaders) {
    return fetch(this.api_url + endpoint, this.generateHeaders(customHeaders));
  }
}

export default new HttpClient();
