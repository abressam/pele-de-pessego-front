import React, { lazy, Suspense } from 'react';

const LazyProductDescription = lazy(() => import('./ProductDescription'));

const ProductDescription = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyProductDescription {...props} />
  </Suspense>
);

export default ProductDescription;
