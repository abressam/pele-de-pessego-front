import React, { lazy, Suspense } from 'react';

const LazyProductHeader = lazy(() => import('./ProductHeader'));

const ProductHeader = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyProductHeader {...props} />
  </Suspense>
);

export default ProductHeader;
