import React, { lazy, Suspense } from 'react';

const LazyUserFormEmail = lazy(() => import('./UserFormEmail'));

const UserFormEmail = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyUserFormEmail {...props} />
  </Suspense>
);

export default UserFormEmail;
