import { AxiosError  } from 'axios'; // Importe AxiosResponse

export const handleApiResponse = (error: AxiosError<any>, navigate: any) => {
   if (error.response && error.response.status === 401 && error.response.data.message === "Invalid session") {
      // Limpar JWT do localStorage
      localStorage.removeItem('jwt');
      localStorage.removeItem('isAdmin')
      // Redirecionar para a tela de login
      navigate('/login');
      window.location.reload();
   } else {
      // Se desejar, você pode lidar com outros erros aqui
      console.error('Erro na requisição:', error);
   }
};
