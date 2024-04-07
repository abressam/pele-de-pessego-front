import React, { lazy, Suspense } from 'react';

const LazyProductButton = lazy(() => import('./ProductButton'));

const ProductButton = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyProductButton {...props} />
  </Suspense>
);

export default ProductButton;
