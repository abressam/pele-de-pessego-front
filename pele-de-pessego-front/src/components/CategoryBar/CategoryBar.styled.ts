import styled from 'styled-components';

export const CategoryBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 65px; /* Adjust this value to match the height of your navbar */
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #34513A;
  color: #FFFFFF;
  position: fixed;
  height: 40px;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
`;

export const CategoryLink = styled.a`
  color: #FFFFFF; /* Link text color */
  text-decoration: none; /* Remove underline */
  transition: color 0.3s ease; /* Smooth transition */
  &:hover {
    color: #B54E4A; /* Change text color on hover */
  }

  &:not(:last-child) {
    margin-right: 64px; /* Add margin to all links except the last one */
  }
  cursor: pointer;
`;

export const ImageBody = styled.div`
  display: flex;
  margin: 80px 0px 30px 0px;
  width: 100%
  justify-content: center;
  align-items: center;
`;
