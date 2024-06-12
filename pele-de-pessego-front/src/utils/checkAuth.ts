import { NavigateFunction } from 'react-router-dom';

export const checkAdminAndRedirect = (navigate: NavigateFunction) => {
    const isAdmin = localStorage.getItem('isAdmin');
    
    if (isAdmin === 'true') {
      navigate('/productstock');
    } else {
      navigate('/');
    }
};