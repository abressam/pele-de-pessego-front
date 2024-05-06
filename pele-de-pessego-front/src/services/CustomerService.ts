import httpCustomer from "../common/http-customer";
import CustomerData from "../types/CustomerData";
import { setAuthorizationHeader } from "./AuthHeader";

const getCustomer = () => {
    setAuthorizationHeader(httpCustomer)
    return httpCustomer.get("/customer/info");
};

const createCustomer = (data: CustomerData) => {
    setAuthorizationHeader(httpCustomer)
    return httpCustomer.put<CustomerData>("/customer/insert", data);
};

const deleteCustomer = () => {
    setAuthorizationHeader(httpCustomer)
    return httpCustomer.delete("/customer/remove");
};

const CustomerService = {
    getCustomer,
    createCustomer,
    deleteCustomer
};

export default CustomerService;