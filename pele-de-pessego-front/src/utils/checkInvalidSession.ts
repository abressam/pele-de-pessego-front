import { AxiosError  } from 'axios'; // Importe AxiosResponse

export const handleApiResponse = (error: AxiosError<any>, navigate: any) => {
   if (error.response && error.response.status === 401 && error.response.data.message === "Invalid session") {
      localStorage.removeItem('jwt');
      localStorage.removeItem('isAdmin')
      
      navigate('/login');
      window.location.reload();
   } else {
      console.error('Erro na requisição:', error);
   }
};