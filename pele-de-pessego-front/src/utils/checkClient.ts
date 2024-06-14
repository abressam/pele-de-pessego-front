import { NavigateFunction } from 'react-router-dom';

export const checkClient = (navigate: NavigateFunction) => {    
    const isAdmin = localStorage.getItem('isAdmin');
    if (isAdmin === 'false') {
        navigate('/');
    }
};