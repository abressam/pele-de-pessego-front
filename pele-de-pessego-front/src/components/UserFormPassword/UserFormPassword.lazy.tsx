import React, { lazy, Suspense } from 'react';

const LazyUserFormPassword = lazy(() => import('./UserFormPassword'));

const UserFormPassword = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyUserFormPassword {...props} />
  </Suspense>
);

export default UserFormPassword;
