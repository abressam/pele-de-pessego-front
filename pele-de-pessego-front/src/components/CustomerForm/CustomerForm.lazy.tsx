import React, { lazy, Suspense } from 'react';

const LazyCustomerForm = lazy(() => import('./CustomerForm'));

const CustomerForm = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCustomerForm {...props} />
  </Suspense>
);

export default CustomerForm;
