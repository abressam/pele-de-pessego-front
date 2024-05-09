import axios from "axios";

const httpCustomer = axios.create({
  baseURL: "http://localhost:8082/pdp-ms-customer",
  headers: {
    "Content-type": "application/json"
  }
});

export default httpCustomer;