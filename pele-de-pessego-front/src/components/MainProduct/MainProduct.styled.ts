import styled from 'styled-components';

export const MainProductWrapper = styled.div`
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
