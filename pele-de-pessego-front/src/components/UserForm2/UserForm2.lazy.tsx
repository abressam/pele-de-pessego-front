import React, { lazy, Suspense } from 'react';

const LazyUserForm2 = lazy(() => import('./UserForm2'));

const UserForm2 = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyUserForm2 {...props} />
  </Suspense>
);

export default UserForm2;
