import React, { lazy, Suspense } from 'react';

const LazyUserFormSenha = lazy(() => import('./UserFormSenha'));

const UserFormSenha = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyUserFormSenha {...props} />
  </Suspense>
);

export default UserFormSenha;
