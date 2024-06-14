import { NavigateFunction } from 'react-router-dom';

export const checkAdmin = (navigate: NavigateFunction) => {    
    const isAdmin = localStorage.getItem('isAdmin');
    if (isAdmin === 'true') {
        navigate('/productstock');
    }
};