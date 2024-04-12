import React, { lazy, Suspense } from 'react';

const LazyProductImage = lazy(() => import('./ProductImage'));

const ProductImage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyProductImage {...props} />
  </Suspense>
);

export default ProductImage;
