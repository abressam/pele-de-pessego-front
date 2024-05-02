import React, { FC } from 'react';
import { SearchBarWrapper } from './SearchBar.styled';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs'; // Import magnifying glass icon

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = () => (
  <SearchBarWrapper data-testid="SearchBar">
    <Form className='search'>
        <Form.Control
          className="searchBar"
          type="search"
          placeholder="O que você procura?"
          aria-label="Search"
        />
          <Button className="button" type="submit">
            <BsSearch className="BsSearchIcon" />
          </Button>
    </Form>
  </SearchBarWrapper>
);

export default SearchBar;
