import { FC } from 'react';
import { MdOutlineShoppingBag } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import { FormattedMessage } from 'react-intl';
import { ProductButtonWrapper } from './ProductButton.styled';

interface ProductButtonProps {}

const ProductButton: FC<ProductButtonProps> = () => (
 <ProductButtonWrapper data-testid="ProductButton">
   <Button>
      <div className="items">
      <MdOutlineShoppingBag />
      <FormattedMessage id="ProductButton.name" defaultMessage="Adicionar ao carrinho" />
      </div>
   </Button>
 </ProductButtonWrapper>
);

export default ProductButton;
