import httpCustomer from "../common/http-customer";
import CustomerData from "../types/CustomerData";
import AuthHeader from "./AuthHeader";

const getCustomer = () => {
    return httpCustomer.get("/customer/info", {headers: AuthHeader()});
};

const createCustomer = (data: CustomerData) => {
    return httpCustomer.post<CustomerData>("/customer/insert", data, {headers: AuthHeader()});
};

const deleteCustomer = () => {
    return httpCustomer.delete("/customer/remove", {headers: AuthHeader()});
};

const CustomerService = {
    getCustomer,
    createCustomer,
    deleteCustomer
};

export default CustomerService;