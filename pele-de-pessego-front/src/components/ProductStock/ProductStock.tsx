import React, { FC, useState, useEffect } from 'react';
import { ProductStockWrapper } from './ProductStock.styled';
import Card from 'react-bootstrap/Card';
import ProductService from '../../services/ProductService';
import { Trash, PencilSquare } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

const ProductStock: FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    ProductService.getAllProducts()
      .then(response => {
        setProducts(response.data.product);
      })
      .catch(error => {
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
        console.error("Erro ao excluir o produto:", error);
      });
    }
  };

  const handleEditClick = (id: number) => {
    // Lógica para editar o produto
    console.log('Editar produto');
    navigate(`/productform/${id}`);

  };

  return (
    <ProductStockWrapper data-testid="ProductStock">
      <div className="vertical">
      {products.map((product, index) => (
        <Card className="custom-card" key={index}>
          <Card.Body className="custom-card-style">
            <div className="row">
              <Card.Img className="custom-card-img" src={`data:image/jpeg;base64,${product.image}`} />
              <div className="column-info">
                <div className="info">
                  <span>Nome (PT): {product.pt_name}</span>
                  <span>Nome (EN): {product.en_name}</span>
                </div>

                <div className="info">
                  <span>Tipo (PT): {product.pt_type}</span>
                  <span>Tipo (EN): {product.en_type}</span>
                </div>

                <div className="info">
                  <span>Marca: {product.brand}</span>
                  <span>Preço: R$ {product.price}</span>
                </div>
              </div>

              <div className="info info-desc">
                <span>Descrição (PT)</span>
                <p className="text-box">{product.pt_desc}</p>
              </div>

              <div className="info info-desc">
                <span>Descrição (EN)</span>
                <p className="text-box">{product.en_desc}</p>
              </div>

              <div className="icons">
                <button onClick={() => handleDeleteClick(product.id)} className="btn btn-danger">
                  <Trash size={20} />
                </button>
                <button onClick={() => handleEditClick(product.id)} className="btn btn-primary">
                  <PencilSquare size={20} />
                </button>
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
    </ProductStockWrapper>
  );
};

export default ProductStock;
