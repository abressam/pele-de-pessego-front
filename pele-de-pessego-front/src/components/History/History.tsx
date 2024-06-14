import React, { FC, useState, useEffect } from 'react';
import { HistoryWrapper } from './History.styled';
import Card from 'react-bootstrap/Card';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { IoBagHandleSharp } from "react-icons/io5";
import { checkJwt } from '../../utils/checkJwt';
import { checkAdmin } from '../../utils/checkAdmin';
import { handleApiResponse } from '../../utils/checkInvalidSession';
import PurchaseService from '../../services/PurchaseService';
import PurchaseData from '../../types/PurchaseData';

const History: FC = () => {
  const navigate = useNavigate();

  const [purchases, setPurchases] = useState<PurchaseData[]>([]);

  useEffect(() => {
    checkJwt(navigate);
  }, []); // Remova navigate das dependências

  useEffect(() => {
    checkAdmin(navigate);
  }, []); // Remova navigate das dependências

  useEffect(() => {
    PurchaseService.getClosePurchase()
      .then(response => {
        const purchaseItems: PurchaseData[] = response.data.purchases; // Acesso ao array purchases
        setPurchases(purchaseItems);
      })
      .catch(error => {
        handleApiResponse(error, navigate);
      });
  }, []); // Remova navigate das dependências

  const handleButtonClick = () => {
    checkJwt(navigate);
    navigate('/customerprofile');
  };

  const formatPrice = (price: number) => {
    return price.toFixed(2).replace('.', ',');
  };

  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const adjustedDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
  
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
  
    return adjustedDate.toLocaleDateString(navigator.language, options);
  };

  const handleBackClick = () => {
    navigate(`/customerprofile`);
  };

  if (purchases.length === 0) {
    return <HistoryWrapper>Loading...</HistoryWrapper>;
  }

  return (
    <HistoryWrapper data-testid="History">
      {purchases.map((purchase, index) => (
        <Card className="custom-card" key={index}>
          <Card.Body className="custom-card-style">
            <div className="first-info">
              <div className="product-type">
                <FormattedMessage id="Payment.method" />:  {purchase.type}
              </div>
              <div className="product-brand">
                <FormattedMessage id="PurchaseDate.customer" />
                {formatDate(purchase.date)}
              </div>
              <div className="product-brand">
                {purchase.parcel}
              </div>
            </div>

            <div className="info second-info">
              <div className="product-type">
                <FormattedMessage id="ProductForm.price" />
              </div>
              <div className="product-price">
                R$ {formatPrice(purchase.price)}
              </div>
            </div>

            <div className="info second-info">
              <div className="product-type">
                <FormattedMessage id="Payment.parcelas" />
              </div>
              <div className="product-price">
                {purchase.qt_parcel}
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}

      <div className="button-position">
        <button onClick={handleBackClick} className='custom-button'>
          <div className="button-size">
            <FormattedMessage id="Payment.button" />
          </div>
        </button>
      </div>
    </HistoryWrapper>
  );
}

export default History;
