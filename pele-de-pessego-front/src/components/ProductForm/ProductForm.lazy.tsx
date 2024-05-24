import React, { lazy, Suspense } from 'react';

const LazyProductForm = lazy(() => import('./ProductForm'));

const ProductForm = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyProductForm {...props} />
  </Suspense>
);

export default ProductForm;
