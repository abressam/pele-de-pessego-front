import styled from 'styled-components';
import { CartProductsWrapper } from './../Cart/CartProducts.styled';

export const PurchaseWrapper = styled.div`
    font-family: 'DM Sans', sans-serif;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 32px;
    padding: 20px;
    font-size: 18px;

  .shipment {
    color: #B54E4A;
  }

  .payment-form {
    color: #34513A;
    font-family: 'DM Sans', sans-serif;
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    padding: 20px;
  }

  .purchase-summary {
    background-color: white;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    padding: 20px;
    color: #34513A;

  }

  .customer-card {
    margin-bottom: 20px;
  }
`;

export const StyledCartProductsWrapper = CartProductsWrapper;

export const StyledForm = styled.form`
  font-family: 'DM Sans', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  width: 400px;
  gap: 15px;
`;

export const StyledFormGroup = styled.div`
  font-family: 'DM Sans', sans-serif;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledLabel = styled.label`
  justify-content: center;
  font-weight: bold;
  font-size: 16px;
`;

export const StyledSelect = styled.select`
  font-family: 'DM Sans', sans-serif;
  color: #34513A;
  padding: 10px;
  border: 1px solid #B54E4A;
  border-radius: 4px;
  font-size: 16px;
  &:focus {
    border-color: #B54E4A;
    box-shadow: 0 0 5px #B54E4A;
    outline: none;
  }
`;

export const StyledInput = styled.input`
  color: #34513A;
  padding: 10px;
  border: 1px solid #B54E4A;
  border-radius: 4px;
  font-size: 16px;
  &:focus {
    border-color: #B54E4A;
    box-shadow: 0 0 5px #B54E4A;
    outline: none;
  }
`;
