import React, { lazy, Suspense } from 'react';

const LazyUserFormButton = lazy(() => import('./UserFormButton'));

const UserFormButton = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyUserFormButton buttonText={''} {...props} />
  </Suspense>
);

export default UserFormButton;
