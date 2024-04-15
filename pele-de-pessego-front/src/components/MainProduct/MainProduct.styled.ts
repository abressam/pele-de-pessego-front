import styled from 'styled-components';

export const MainProductWrapper = styled.div`
    background-color: white;
    border-radius: 8px;
    padding: 30px;

    .items {
        display: flex;
        flex-direction: row;
    }

    @media (max-width: 768px) {
        .items { 
            flex-direction: column; 
        } 
    }

    @media (min-width: 768px) { 
        .items {
            flex-direction: row; 
        } 
    }
`;
