import React, { lazy, Suspense } from 'react';

const LazySuccess = lazy(() => import('./Success'));

const Success = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySuccess {...props} />
  </Suspense>
);

export default Success;
