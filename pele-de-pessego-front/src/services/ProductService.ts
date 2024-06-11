import httpProduct from "../common/http-product";
import ProductData from "../types/ProductData";
import { setAuthorizationHeader } from "./AuthHeader";

const getAllProducts = () => {
    setAuthorizationHeader(httpProduct)
    return httpProduct.get("/product/info");
};

// const getProductById = (data: ProductData) => {
//     setAuthorizationHeader(httpProduct)
//     return httpProduct.get("/product/info/id");
// };

const createProduct = (data: ProductData) => {
    setAuthorizationHeader(httpProduct)
    return httpProduct.put<ProductData>("/product/insert", data);
};

const deleteProduct = (id: number) => {
    setAuthorizationHeader(httpProduct)
    return httpProduct.delete(`/product/remove/${id}`);
};

const ProductService = {
    getAllProducts,
    // getProductById,
    createProduct,
    deleteProduct
};

export default ProductService;