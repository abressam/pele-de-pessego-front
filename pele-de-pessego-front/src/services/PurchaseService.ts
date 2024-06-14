import httpPurchase from "../common/http-purchase";
import PurchaseData from "../types/PurchaseData";
import { setAuthorizationHeader } from "./AuthHeader";

const executePurchase = (data: PurchaseData) => {
    setAuthorizationHeader(httpPurchase);
    return httpPurchase.post<PurchaseData>("/purchase/insert", data);
};

const getPurchases = () => {
    setAuthorizationHeader(httpPurchase);
    return httpPurchase.get("/purchase/info/open");
};

const PurchaseService = {
    executePurchase,
    getPurchases
};

export default PurchaseService;
