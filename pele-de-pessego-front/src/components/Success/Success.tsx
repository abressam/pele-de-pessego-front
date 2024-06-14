import React, { FC } from 'react';
import { SuccessWrapper } from './Success.styled';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import successGif from './../../assets/gif.webp';


interface SuccessProps { }

const Success = () => {
   const navigate = useNavigate();
   const redirectToProfile = () => {
      navigate('/customerprofile');
   };

   return (
      <SuccessWrapper data-testid="Success">
        <div className='container'>
          <div>
            <p><FormattedMessage id="Success.purchase" defaultMessage="Purchase completed successfully!" /></p>
            <img src={successGif} alt="Success GIF" style={{ width: '450px', height: '300px' }} />
          </div>
          <div className='message'>
            <p></p>
          </div>
          {/* Your other JSX */}
          <div className="button-address">
            <button className='custom-button button-size' onClick={redirectToProfile}>
              <p><FormattedMessage id="Payment.button" /></p>
            </button>
          </div>
        </div>
      </SuccessWrapper>
   );
};

export default Success;
