import axios from "axios";

const httpProduct = axios.create({
  baseURL: "http://localhost:8083/pdp-ms-product",
  headers: {
    "Content-type": "application/json"
  }
});

export default httpProduct;