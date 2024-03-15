import React, { lazy, Suspense } from 'react';

const LazyProductCard = lazy(() => import('./ProductCard'));

const ProductCard = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyProductCard {...props} />
  </Suspense>
);

export default ProductCard;
