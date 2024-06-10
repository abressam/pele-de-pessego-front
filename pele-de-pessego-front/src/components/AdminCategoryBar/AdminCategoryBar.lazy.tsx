import React, { lazy, Suspense } from 'react';

const LazyAdminCategoryBar = lazy(() => import('./AdminCategoryBar'));

const AdminCategoryBar = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyAdminCategoryBar {...props} />
  </Suspense>
);

export default AdminCategoryBar;
