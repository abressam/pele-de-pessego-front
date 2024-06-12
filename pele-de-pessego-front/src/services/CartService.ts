import httpPurchase from "../common/http-purchase";
import CartData from "../types/CartData";
import { setAuthorizationHeader } from "./AuthHeader";

const getOpenCart = () => {
    setAuthorizationHeader(httpPurchase)
    return httpPurchase.get("/cart/info/open");
};

const getCloseCart = () => {
    setAuthorizationHeader(httpPurchase)
    return httpPurchase.get(`/cart/info/closed`);
};

const createOrUpdateCart = (data: CartData) => {
    setAuthorizationHeader(httpPurchase)
    if (data.productId) {
        return httpPurchase.put<CartData>(`/cart/insert/`, data);
    } else {
        return httpPurchase.put<CartData>("/cart/insert", data);
    }
};

const deleteCartProduct = (productId: number) => {
    setAuthorizationHeader(httpPurchase)
    return httpPurchase.delete(`/cart/remove/${productId}`);
};

const CartService = {
    getOpenCart,
    getCloseCart,
    createOrUpdateCart,
    deleteCartProduct
};

export default CartService;