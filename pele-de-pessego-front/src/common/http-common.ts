import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/pdp-ms-user",
  headers: {
    "Content-type": "application/json"
  }
});