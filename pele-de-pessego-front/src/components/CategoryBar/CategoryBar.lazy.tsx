import React, { lazy, Suspense } from 'react';

const LazyCategoryBar = lazy(() => import('./CategoryBar'));

const CategoryBar = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCategoryBar {...props} />
  </Suspense>
);

export default CategoryBar;
