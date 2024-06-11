export const checkAdminAndRedirect = () => {
    const isAdmin = localStorage.getItem('isAdmin');
    
    if (isAdmin === 'true') {
      window.location.href = '/productform';
    } else if (isAdmin === 'false') {
      window.location.href = '/';
    } else {
      window.location.href = '/login';
    }
};