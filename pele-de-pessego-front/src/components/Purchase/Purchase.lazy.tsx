import React, { lazy, Suspense } from 'react';

const LazyPurchase = lazy(() => import('./Purchase'));

const Purchase = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPurchase {...props} />
  </Suspense>
);

export default Purchase;
