import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8081/pdp-ms-user",
  headers: {
    "Content-type": "application/json"
  }
});