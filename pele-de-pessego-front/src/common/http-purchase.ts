import axios from "axios";

const httpPurchase = axios.create({
  baseURL: "http://localhost:8084/pdp-ms-purchase",
  headers: {
    "Content-type": "application/json"
  }
});

export default httpPurchase;