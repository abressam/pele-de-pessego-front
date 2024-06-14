import React, { FC, useEffect, useState } from 'react';
import { ProductFormWrapper } from './ProductForm.styled';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import ProductData from '../../types/ProductData';
import ProductService from '../../services/ProductService';
import { useParams, useNavigate } from 'react-router-dom';
import { checkClient } from '../../utils/checkClient';
import { handleApiResponse } from '../../utils/checkInvalidSession';

interface ProductFormProps {}

const ProductForm: FC = () => {
   const { id } = useParams<{ id: string }>();
   const navigate = useNavigate();

   
   const { register, handleSubmit, reset, setValue } = useForm<ProductData>();
   const [imageBase64, setImageBase64] = useState<string>("");

   useEffect(() => {
      checkClient(navigate)
   }, [navigate]);

   useEffect(() => {
      if (id) {
        ProductService.getProductById(Number(id))
          .then(response => {
            const product = response.data.product;
            Object.keys(product).forEach(key => {
              setValue(key as keyof ProductData, product[key]);
            });
            setImageBase64(product.image);
          })
          .catch(error => {
            console.error('Erro ao carregar produto:', error);
          });
      }
    }, [id, setValue]);

   const initialUserState: ProductData = {
      brand: "",
      price: 0.00,
      quantity: 1,
      image: "",
      en_name: "",
      pt_name: "",
      en_type: "Perfumaria",
      pt_type: "Perfumery",
      en_desc: "",
      pt_desc: "",
   };

   const onSubmit = (data: ProductData) => {
      data.image = imageBase64;
      data.price = parseFloat(data.price.toString());
      data.quantity = parseInt(data.quantity.toString());
      console.log(data);

      if (id) {
         ProductService.createOrUpdateProduct(data)
           .then(response => {
             console.log('Produto atualizado com sucesso:', response.data);
             console.log()
             navigate("/productstock");
           })
           .catch(error => {
            handleApiResponse(error, navigate);
             console.error('Erro ao atualizar produto:', error);
           });
       } else {
         ProductService.createOrUpdateProduct(data)
           .then(response => {
             console.log('Produto criado com sucesso:', response.data);
             reset(initialUserState);
             navigate("/productstock");
           })
           .catch(error => {
             handleApiResponse(error, navigate);
             console.error('Erro ao criar produto:', error);
           });
       }
   };

   const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result as string;
          const base64WithoutPrefix = base64String.split(',')[1]; // Remove o prefixo
          setImageBase64(base64WithoutPrefix);
          setValue("image", base64WithoutPrefix);
          console.log("Imagem convertida para Base64:", base64WithoutPrefix);
        };
        reader.readAsDataURL(file);
      }
    };

   return (
      <ProductFormWrapper data-testid="ProductForm">
            <Form className='productForm' id="productForm" onSubmit={handleSubmit(onSubmit)}>
               <div className="form-style">
                  <Form.Group controlId="productNamePt">
                     <Form.Label className='label'>
                        Nome (PT):
                     </Form.Label><br/>
                     <Form.Control 
                        className="input" 
                        type="text"  
                        {...register("pt_name", { required: true })}
                     />
                  </Form.Group>
               </div>

               <div className="form-style">
                  <Form.Group controlId="productNameEn">
                     <Form.Label className='label'>
                        Nome (EN):
                     </Form.Label><br/>
                     <Form.Control 
                        className="input" 
                        type="text"  
                        {...register("en_name", { required: true })}
                     />
                  </Form.Group>
               </div>
      
            <div className="form-style">
               <Form.Group controlId="productTypePt">
                  <Form.Label className='label'>
                     Tipo (PT):
                  </Form.Label><br/>
                  <Form.Control as="select" className="input" {...register("pt_type", { required: true })}>
                     <option value="Perfumaria">Perfumaria</option>
                     <option value="Maquiagem">Maquiagem</option>
                     <option value="Corpo e Banho">Corpo e Banho</option>
                     <option value="Cabelo">Cabelo</option>
                     <option value="Cuidados com a pele">Cuidados com a pele</option>
                  </Form.Control>
               </Form.Group>
            </div>

            <div className="form-style">
               <Form.Group controlId="productTypeEn">
                  <Form.Label className='label'>
                     Tipo (EN):
                  </Form.Label><br/>
                  <Form.Control as="select" className="input" {...register("en_type", { required: true })}>
                     <option value="Perfumery">Perfumery</option>
                     <option value="Makeup">Makeup</option>
                     <option value="Body and Bath">Body and Bath</option>
                     <option value="Hair">Hair</option>
                     <option value="Skincare">Skincare</option>
                  </Form.Control>
               </Form.Group>
            </div>

            <div className="form-style">
               <Form.Group controlId="productBrand">
               <Form.Label className='label'>
                  Marca:
               </Form.Label><br/>
               <Form.Control as="select" className="inputBrand" {...register("brand", { required: true })}>
                  <option value="O Boticário">O Boticário</option>
                  <option value="Natura">Natura</option>
                  <option value="La Roche-Posay">La Roche-Posay</option>
                  <option value="L'Oréal Paris">L'Oréal Paris</option>
                  <option value="Nivea">Nivea</option>
               </Form.Control>
               </Form.Group>
            </div>

            <div className="form-style">
               <Form.Group controlId="productPrice">
               <Form.Label className='label'>
                  Preço:
               </Form.Label><br/>
               <Form.Control 
                  className="inputPrice" 
                  type="text" 
                  placeholder='R$' 
                  {...register("price", { required: true })}
               />
               </Form.Group>
            </div>

            <div className="form-style">
               <Form.Group controlId="productQuantity">
               <Form.Label className='label'>
                  Quantidade:
               </Form.Label><br/>
               <Form.Control 
                  className="inputQuantity" 
                  type="number"  
                  {...register("quantity", { required: true })}
               />
               </Form.Group>
            </div>

            <div className="form-style">
               <Form.Group controlId="productDescriptinPt">
               <Form.Label className='label'>
                  Descrição (PT):
               </Form.Label><br/>
               <Form.Control 
                  as="textarea" 
                  className="inputDescription"   
                  {...register("pt_desc", { required: true })}
               />
               </Form.Group>
            </div>

            <div className="form-style">
               <Form.Group controlId="productDescriptinEn">
               <Form.Label className='label'>
                  Descrição (EN):
               </Form.Label><br/>
               <Form.Control 
                  as="textarea" 
                  className="inputDescription"   
                  {...register("en_desc", { required: true })}
               />               
               </Form.Group>
            </div>

            <div className="form-style">
               <Form.Group controlId="productImage">
               <Form.Label className='label'></Form.Label><br/>
               <Form.Control 
                  className="inputImage" 
                  type="file" 
                  onChange={handleImageChange} 
               />
               </Form.Group>
            </div>

            <div className='divButton'>
               <Button variant="primary" type="submit" form="productForm">
                  {id ? 'Atualizar' : 'Cadastrar'}
               </Button>
            </div>

         </Form> 
      </ProductFormWrapper>
     );
} 

export default ProductForm;