import React, { FC, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import UserData from '../../types/UserData';
import CustomerData from '../../types/CustomerData';
import { UserProfileWrapper } from './UserProfile.styled';
import UserFormService from '../../services/UserFormService';

interface ProfileProps {}

// Interface que combina UserData e CustomerData
interface CombinedData extends UserData {
  customer: {
    cpf: string;
    phone: string;
    zipcode: string;
    city: string;
    complement: string;
    street: string;
    number: number;
    neighbourhood: string;
    state: string;
  };
}

const Profile: FC<ProfileProps> = () => {
  const initialUserData: CombinedData = {
    email: '',
    password: '',
    name: '',
    confirmpassword: '',
    is_admin: false,
    // Campos de CustomerData
    customer: {
      cpf: '',
      phone: '',
      zipcode: '',
      city: '',
      complement: '',
      street: '',
      number: 0,
      neighbourhood: '',
      state: ''
    }
  };

  const [userData, setUserData] = useState<CombinedData | null>(null);
  const { register, handleSubmit, reset } = useForm<CombinedData>(); // Usando CombinedData aqui

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await UserFormService.getUser();
        setUserData(response.data.user);
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    };

    fetchUserData();
  }, []);

  const onSubmit = async (data: CombinedData) => {
    try {
      await UserFormService.updateUser(data);
      console.log('Dados do usuário atualizados com sucesso');
      window.location.reload();
    } catch (error) {
      console.error('Erro ao salvar dados do usuário:', error);
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm('Você tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita.');

    if (confirmDelete) {
      try {
        await UserFormService.deleteUser(); // Assumindo que este método existe
        console.log('Conta do usuário excluída com sucesso');
        // Redirecionar ou atualizar a página após exclusão
        window.location.href = '/logout'; // Assumindo que redireciona para uma página de logout ou início
      } catch (error) {
        console.error('Erro ao excluir conta do usuário:', error);
      }
    }
  };

  return (
    <UserProfileWrapper>
      <div>
        {userData && (
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label><br/>
              <Form.Control type="email" {...register('email')} defaultValue={userData.email} />
            </Form.Group>
            
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label><br/>
              <Form.Control type="text" {...register('name')} defaultValue={userData.name} />
            </Form.Group>
            {/* Campos de CustomerData */}
            <Form.Group controlId="cpf">
              <Form.Label>CPF</Form.Label><br/>
              <Form.Control type="text" {...register('customer.cpf')} defaultValue={userData?.customer?.cpf} />
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label><br/>
              <Form.Control type="text" {...register('customer.phone')} defaultValue={userData?.customer?.phone} />
            </Form.Group>
            <Form.Group controlId="zipcode">
              <Form.Label>CEP</Form.Label><br/>
              <Form.Control type="text" {...register('customer.zipcode')} defaultValue={userData?.customer?.zipcode} />
            </Form.Group>
            <Form.Group controlId="city">
              <Form.Label>Cidade</Form.Label><br/>
              <Form.Control type="text" {...register('customer.city')} defaultValue={userData?.customer?.city} />
            </Form.Group>
            <Form.Group controlId="complement">
              <Form.Label>Complemento</Form.Label><br/>
              <Form.Control type="text" {...register('customer.complement')} defaultValue={userData?.customer?.complement} />
            </Form.Group>
            <Form.Group controlId="street">
              <Form.Label>Rua</Form.Label><br/>
              <Form.Control type="text" {...register('customer.street')} defaultValue={userData?.customer?.street} />
            </Form.Group>
            <Form.Group controlId="number">
              <Form.Label>Número</Form.Label><br/>
              <Form.Control type="text" {...register('customer.number')} defaultValue={userData?.customer?.number} />
            </Form.Group>
            <Form.Group controlId="neighbourhood">
              <Form.Label>Bairro</Form.Label><br/>
              <Form.Control type="text" {...register('customer.neighbourhood')} defaultValue={userData?.customer?.neighbourhood} />
            </Form.Group>
            <Form.Group controlId="state">
              <Form.Label>Estado</Form.Label><br/>
              <Form.Control type="text" {...register('customer.state')} defaultValue={userData?.customer?.state} />
            </Form.Group><br/>
            {/* Adicione mais campos conforme necessário */}
            <Button variant="primary" type="submit" className='divbutton'>
              Save
            </Button><br/>
            <Button variant="danger" onClick={handleDelete} className='divbutton'>
              Delete Account
            </Button>
          </Form>
        )}
      </div>
    </UserProfileWrapper>
  );
};

export default Profile;
