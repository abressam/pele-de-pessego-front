import styled from 'styled-components';

export const AdminCategoryBarWrapper = styled.div`

  top: 55px; /* Adjust this value to match the height of your navbar */
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
  display: flex;
  justify-content: center;
  align-items: center;
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
`;
