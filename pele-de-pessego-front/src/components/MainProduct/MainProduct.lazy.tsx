import React, { lazy, Suspense } from 'react';

const LazyMainProduct = lazy(() => import('./MainProduct'));

const MainProduct = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMainProduct {...props} />
  </Suspense>
);

export default MainProduct;
