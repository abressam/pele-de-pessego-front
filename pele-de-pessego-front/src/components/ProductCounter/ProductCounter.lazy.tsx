import React, { lazy, Suspense } from 'react';

const LazyProductCounter = lazy(() => import('./ProductCounter'));

const ProductCounter = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyProductCounter {...props} />
  </Suspense>
);

export default ProductCounter;
