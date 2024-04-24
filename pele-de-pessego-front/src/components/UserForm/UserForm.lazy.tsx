import React, { lazy, Suspense } from 'react';

const LazyUserForm = lazy(() => import('./UserForm'));

const UserForm = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyUserForm {...props} />
  </Suspense>
);

export default UserForm;
