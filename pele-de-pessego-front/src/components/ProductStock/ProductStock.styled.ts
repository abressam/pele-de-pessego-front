import styled from 'styled-components';

export const ProductStockWrapper = styled.div`
    display: flex;
    align-items: center;
    border-radius: 10px;
    margin-top: 150px;

    .custom-card-style {
        width: 100%;
        background-color: white;
        height: 180px;
        box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.15);
        border-radius: 8px;
        padding: 8px;
        display: flex;
        align-items: center;
    }

    .custom-card-img {
        height: 180px;
        display: flex;
        align-items: center;
    }

    .info {
        display: flex;
        flex-direction: column;
        text-align: justify;
        color: #00000;
        font-size: 14px;
        font-family: "DM Sans", sans-serif;
        padding: 10px 30px 10px 10px;
    }

    .info-desc {
        width: 200px;
    }

    .column-info {
        display: flex;
        flex-direction: column;
    }

    .vertical {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .text-box {
        max-width: 300px;
        overflow-wrap: break-word;
    }    

    .row {
        display: flex;
        flex-direction: row
    }

    .icons {
        width: 40px;
        height: 100px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
`;
