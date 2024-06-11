import { NavigateFunction } from 'react-router-dom';

export const checkJwt = (navigate: NavigateFunction) => {
    const jwt = localStorage.getItem('jwt');
    
    if (!jwt) {
        navigate('/login');
    }
};