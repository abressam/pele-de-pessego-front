import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
  .search {
    position: relative;
    display: flex;
    align-items: center; 
  }
  
  .searchIcon {
    width: 18px; 
    height: 18px; 
  }

  .input-group {
    display: flex;
    flex-direction: row;
  }
  
  .searchBar {
    width: 450px;
    height: 32px;
    background-color: #F7E9DE;
    font-family: 'DM Sans', sans-serif;
    border: none; 
    box-shadow: none; 
    border-radius: 0;
    padding-left: 16px; 
    transition: border-color 0.3s; 
    outline: none; 
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px; 
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

  .searchBar:focus-within,
  .searchBar .form-control:focus {
    border: none !important;
  }
  .searchBar::placeholder {
      color: #B54E4A;
  }

  .button {
    width: 40px;
    height: 32px;
    background-color: #F7E9DE;
    border: inherit;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    border-top-left-radius: 0; 
    border-bottom-left-radius: 0;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  .BsSearchIcon {
    width: 14x;
    height: 14px;
    color: #34513A;
  }

  
`;