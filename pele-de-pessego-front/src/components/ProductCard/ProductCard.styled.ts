import styled from 'styled-components';


export const ProductCardWrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 10px;

    .custom-card-style {
        width: 15rem;
        height: 21rem;
        box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.15);
        border-radius: 10px;
    }

    .custom-card-img {
        width: 12rem;
        height: auto;
        background-color: #F4CFC7;
        margin-top: 15px;
        border-radius: 10px;
    }

    .product-type, .product-brand, .product-price {
        margin: 5px 20px 0px 20px;
        text-align: left;
        padding: 3px;
        font-family: "Montserrat", sans-serif;
    }

    .product-type {
        font-size: 14px;
        color: black;
        font-weight: 500;
    }

    .product-brand {
        font-size: 12px;
        color: black;
        font-weight: 300;
    }

    .product-price {
        font-size: 18px;
        color: black;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 600;
    }

    .custom-card {
        transition: transform 0.5s ease-in-out;
    }
    
    .custom-card:hover {
        transform: scale(1.1);
    }
`;
