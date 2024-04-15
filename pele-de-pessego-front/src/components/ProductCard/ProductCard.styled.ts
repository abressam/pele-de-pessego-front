import styled from 'styled-components';


export const ProductCardWrapper = styled.div`
    .custom-card-style {
        width: 250px
        height: 350px;
        box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.15);
        border-radius: 8px;
        padding: 8px;
    }

    .custom-card-img {
        height: 200px;
    }

    .product-type, .product-brand, .product-price {
        margin: 5px 20px 0px 20px;
        text-align: left;
        padding: 3px;
        color: #34513A;
        font-family: "DM Sans", sans-serif;
    }

    .product-type {
        font-size: 18px;
        font-weight: 700;
    }

    .product-brand {
        font-size: 14px;
        font-weight: 700;
    }

    .product-price {
        font-size: 18px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 700;
    }

    .custom-card {
        transition: transform 0.5s ease-in-out;
    }
    
    .custom-card:hover {
        transform: scale(1.1);
    }
`;
