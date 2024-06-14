import httpProduct from "../common/http-product";
import ProductData from "../types/ProductData";
import { setAuthorizationHeader } from "./AuthHeader";

const getAllProducts = (type?: string) => {
    setAuthorizationHeader(httpProduct)
    const url = type ? `/product/info?type=${type}` : '/product/info';
    return httpProduct.get(url);
};

const getProductById = (id: number) => {
    setAuthorizationHeader(httpProduct)
    return httpProduct.get(`/product/info/${id}`);
};

const createOrUpdateProduct = (data: ProductData) => {
    setAuthorizationHeader(httpProduct)
    if (data.id) {
        return httpProduct.put<ProductData>(`/product/insert/`, data);
    } else {
        return httpProduct.put<ProductData>("/product/insert", data);
    }
};

const deleteProduct = (id: number) => {
    setAuthorizationHeader(httpProduct)
    return httpProduct.delete(`/product/remove/${id}`);
};

const ProductService = {
    getAllProducts,
    getProductById,
    createOrUpdateProduct,
    deleteProduct
};

export default ProductService;