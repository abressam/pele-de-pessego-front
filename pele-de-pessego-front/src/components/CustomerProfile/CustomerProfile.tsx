import React, { FC, useEffect, useState } from 'react';
import { CustomerProfileWrapper } from './CustomerProfile.styled';
import { useNavigate } from 'react-router-dom';

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
        </CustomerProfileWrapper>
    );
} 

export default CustomerProfile;
