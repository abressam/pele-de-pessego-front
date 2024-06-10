import React, { FC } from 'react';
import { AdminCategoryBarWrapper } from './AdminCategoryBar.styled';
import { CategoryLink } from '../CategoryBar/CategoryBar.styled';

interface AdminCategoryBarProps {}

const AdminCategoryBar: FC<AdminCategoryBarProps> = () => (
   <div>
      <AdminCategoryBarWrapper data-testid="AdminCategoryBar">
         <CategoryLink href="ProductForm">CADASTRAR PRODUTO</CategoryLink>
         <CategoryLink href="#">ESTOQUE</CategoryLink>
         <CategoryLink href="#">DASHBOARD</CategoryLink>
      </AdminCategoryBarWrapper>
   </div>
 
);

export default AdminCategoryBar;
