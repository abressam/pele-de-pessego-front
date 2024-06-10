import React, { lazy, Suspense } from 'react';

const LazyNavbarAdmin = lazy(() => import('./NavbarAdmin'));

const NavbarAdmin = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyNavbarAdmin {...props} />
  </Suspense>
);

export default NavbarAdmin;
