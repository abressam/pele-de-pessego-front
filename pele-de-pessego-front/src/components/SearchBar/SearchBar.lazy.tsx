import React, { lazy, Suspense } from 'react';

const LazySearchBar = lazy(() => import('./SearchBar'));

const SearchBar = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySearchBar {...props} />
  </Suspense>
);

export default SearchBar;
