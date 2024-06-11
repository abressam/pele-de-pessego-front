import React, { FC } from 'react';
import { AdminCategoryBarWrapper } from './AdminCategoryBar.styled';
import { CategoryLink } from '../CategoryBar/CategoryBar.styled';
import { Link } from 'react-router-dom';

interface AdminCategoryBarProps {}

const AdminCategoryBar: FC<AdminCategoryBarProps> = () => (
   <div>
      <AdminCategoryBarWrapper data-testid="AdminCategoryBar">
         <CategoryLink>
            <Link to="/productform" style={{ textDecoration: 'none', color: 'inherit' }}>CADASTRAR PRODUTO</Link>
         </CategoryLink>
         <CategoryLink>
            <Link to="/productstock" style={{ textDecoration: 'none', color: 'inherit' }}>ESTOQUE</Link>
         </CategoryLink>
         <CategoryLink href="#">DASHBOARD</CategoryLink>
      </AdminCategoryBarWrapper>
   </div>
 
);

export default AdminCategoryBar;
