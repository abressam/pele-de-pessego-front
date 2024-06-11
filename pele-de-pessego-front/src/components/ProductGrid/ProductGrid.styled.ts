import styled from 'styled-components';

export const ProductGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px; /* Espaçamento entre os itens */
  padding: 16px;
`;