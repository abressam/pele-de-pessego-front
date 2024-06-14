import React, { FC, useState, useEffect } from 'react';
import { ProductStockWrapper } from './ProductStock.styled';
import Card from 'react-bootstrap/Card';
import ProductService from '../../services/ProductService';
import { Trash, PencilSquare } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { checkClient } from '../../utils/checkClient';
import { handleApiResponse } from '../../utils/checkInvalidSession';

const ProductStock: FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const needsReload = sessionStorage.getItem('needsReload');
    if (needsReload === 'true') {
      sessionStorage.removeItem('needsReload');
      window.location.reload();
    }
  }, []);

  useEffect(() => {
    checkClient(navigate)
 }, [navigate]);

  useEffect(() => {
    ProductService.getAllProducts()
      .then(response => {
        setProducts(response.data.product);
      })
      .catch(error => {
        handleApiResponse(error, navigate);
        console.error('Erro ao carregar produtos:', error);
      });
  }, []);

  const handleDeleteClick = (id: number) => {
    const confirmDelete = window.confirm('Tem certeza que deseja excluir este produto?');
    if (confirmDelete) {

      console.log(id);

      ProductService.deleteProduct(id)
      .then(response => {
        console.log("Produto excluído com sucesso!");
        setProducts(prevProducts => prevProducts.filter(product => product.id !== id))
      })
      .catch(error => {
        handleApiResponse(error, navigate);
        console.error("Erro ao excluir o produto:", error);
      });
    }
  };

  const handleEditClick = (id: number) => {
    // Lógica para editar o produto
    console.log('Editar produto');
    navigate(`/productform/${id}`);

  };

  if (products.length === 0) {
    return <ProductStockWrapper>Loading...</ProductStockWrapper>;
  } 

  return (
    <ProductStockWrapper data-testid="ProductStock">
      <div className="vertical">
      {products.map((product, index) => (
        <Card className="custom-card" key={index}>
            <Card.Body className="custom-card-style">
                <Card.Img className="custom-card-img" src={`data:image/jpeg;base64,${product.image}`} />
                <div className="first-info">
                  <div className="product-type">
                      Nome (PT): {product.pt_name}
                  </div>
                  <div className="product-type">
                      Nome (EN): {product.en_name}
                  </div>
                  <div className="product-brand">
                      Tipo (PT): {product.pt_type}
                  </div>
                  <div className="product-brand">
                      Tipo (EN): {product.en_type}
                  </div>
                  <div className="product-brand">
                     Marca: {product.brand}
                  </div>
                  <div className="product-type">
                      Preço: R$ {product.price}
                  </div>
                  <div className="product-type">
                      Quantidade Total: {product.quantity} unidades
                  </div>
                </div>

                <div className="info second-info">
                    <div className="product-type">
                      Descrição (PT)
                    </div>
                    <div className="product-price">
                      {product.pt_desc}
                    </div>
                </div>

                <div className="info second-info">
                  <div className="product-type">
                    Descrição (EN)
                  </div>
                  <div className="product-price">
                    {product.en_desc}
                  </div>
                </div>

                <div className="info icons">
                  <button onClick={() => product.id && handleDeleteClick(product.id)} className="custom-button trash-button">
                      <Trash className='icons' size={20} />
                  </button>
                  <button onClick={() => product.id && handleEditClick(product.id)} className="custom-button pencil-button">
                      <PencilSquare className='icons' size={20} />
                  </button>
                </div>
            </Card.Body>
          </Card>
      ))}
    </div>
    </ProductStockWrapper>
  );
};

export default ProductStock;
