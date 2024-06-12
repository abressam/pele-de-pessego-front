import React, { FC, useEffect, useState } from 'react';
import { CustomerProfileWrapper } from './CustomerProfile.styled';
import { Trash, PencilSquare } from 'react-bootstrap-icons';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

interface CustomerProfile {}

const CustomerProfile: FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const isAdmin = localStorage.getItem('isAdmin');
        if (isAdmin === 'true') {
            navigate('/productstock');
        }
    }, [navigate]);

    return(
        <CustomerProfileWrapper data-testid="CustomerProfile">
            <Card className="custom-card">
                <Card.Body className="custom-card-style">
                    <div className="first-info">
                        <div className="product-type">
                            Nome do usuário
                        </div>
                        <div className="product-brand">
                            E-mail
                        </div>
                    </div>


                    <div className="info icons">
                        <button className="custom-button pencil-button">
                            <PencilSquare className='icons' size={20} />
                        </button>
                    </div>

                </Card.Body>
            </Card>

            <Card className="custom-card">
                <Card.Body className="custom-card-style">
                    <div className="first-info">
                        <div className="product-type">
                            <FormattedMessage id="CustomerProfile.title"/>
                        </div>
                        <div className="product-brand">
                            <FormattedMessage id="CustomerForm.zipcode"/>
                            <span>85472369</span>
                        </div>
                        <div className="product-brand">
                            <FormattedMessage id="CustomerForm.city"/>
                            <span>Cidade</span>
                        </div>
                        <div className="product-brand">
                            <FormattedMessage id="CustomerForm.state"/>
                            <span>Estado</span>
                        </div>
                        <div className="product-brand">
                            <FormattedMessage id="CustomerForm.neighbourhood"/>
                            <span>Bairro</span>
                        </div>
                        <div className="product-brand">
                            <FormattedMessage id="CustomerForm.street"/>
                            <span>Rua</span>
                        </div>
                        <div className="product-brand">
                            <FormattedMessage id="CustomerForm.number"/>
                            <span>Número</span>
                        </div>
                        <div className="product-brand">
                            <FormattedMessage id="CustomerForm.complement"/>
                            <span>Complemento</span>
                        </div>
                        <div className="product-brand">
                            <FormattedMessage id="CustomerForm.phonenumber"/>
                            <span>Telefone</span>
                        </div>
                        <div className="product-brand">
                            <FormattedMessage id="UserForm.cpf"/>
                            <span>CPF</span>
                        </div>
                    </div>

                    <div className="info icons">
                        <button className="custom-button trash-button">
                            <Trash className='icons' size={20} />
                        </button>
                        <button className="custom-button pencil-button">
                            <PencilSquare className='icons' size={20} />
                        </button>
                    </div>

                </Card.Body>
            </Card>

        <div className="button-position">
            <button className='custom-button button-size'>
                <FormattedMessage id="CustomerProfile.delete" defaultMessage="Adicionar ao carrinho" />
            </button >
        </div>

        </CustomerProfileWrapper>
    );
}

export default CustomerProfile;
