import React, { FC } from 'react';
import { ProductFormWrapper } from './ProductForm.styled';
import { Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import CustomerData from '../../types/CustomerData';
import CustomerService from '../../services/CustomerService';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';

interface ProductFormProps {}

const ProductForm: FC<ProductFormProps> = () => (
 <ProductFormWrapper data-testid="ProductForm">
    <Form className='productForm'>
      <Form.Group controlId="productName">
         <Form.Label className='label'>
            <FormattedMessage id="ProductForm.name"/>
         </Form.Label><br/>
         <Form.Control className="input" type="text"  required/>
      </Form.Group><br/>

      <Form.Group controlId="productType">
         <Form.Label className='label'>
            <FormattedMessage id="ProductForm.type"/>
         </Form.Label><br/>
         <Form.Control as="select" className="input" required>
            <option value="">Selecione um tipo</option> 
            <option value="perfumaria">Perfumaria</option>
            <option value="maquiagem">Maquiagem</option>
            <option value="corpo_banho">Corpo e Banho</option>
            <option value="cabelo">Cabelo</option>
            <option value="pele">Cuidados com a pele</option>
            <option value="outros">Outros</option>
         </Form.Control>
      </Form.Group><br/>

      <Form.Group controlId="productBrand">
         <Form.Label className='label'>
            <FormattedMessage id="ProductForm.brand"/>
         </Form.Label><br/>
         <Form.Control as="select" className="inputBrand"   required>
            <option value="">Selecione uma marca</option> 
            <option value="boticario">Boticário</option>
            <option value="natura">Natura</option>
            <option value="avon">Avon</option>
         </Form.Control>
      </Form.Group><br/>

      <Form.Group controlId="productPrice">
         <Form.Label className='label'>
            <FormattedMessage id="ProductForm.price"/>
         </Form.Label><br/>
         <Form.Control className="inputPrice" type="text" placeholder='R$' required/>
      </Form.Group><br/>

      <Form.Group controlId="productQuantity">
         <Form.Label className='label'>
            <FormattedMessage id="ProductForm.quantity"/>
         </Form.Label><br/>
         <Form.Control className="inputQuantity" type="number"  required/>
      </Form.Group><br/>

      <Form.Group controlId="productDescriptin">
         <Form.Label className='label'>
            <FormattedMessage id="ProductForm.description"/>
         </Form.Label><br/>
         <Form.Control as="textarea" className="inputDescription"   required/>
      </Form.Group><br/><br/>

      <Form.Group controlId="productImage">
        <Form.Label className='label'></Form.Label>
        <Form.Control className="inputImage" type="file" />
      </Form.Group><br/><br/>

      <div className='divButton'>
         <Button variant="primary" type="submit" form="productForm">
            <FormattedMessage id="UserFormButton.register" />
         </Button>
      </div>
   </Form>
 </ProductFormWrapper>
);

export default ProductForm;
