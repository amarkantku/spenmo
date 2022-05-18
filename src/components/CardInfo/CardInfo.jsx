import React from 'react';
import CompanyIcon from '../../icons/React';
import { CardInfoContainer, CardInfoContent } from './CardInfo.styled';
import MasterCardIcon from '../../icons/MasterCard';

const CardInfo = ({ card, onClick }) => {
    return (
        <CardInfoContainer
            data-testid={'card-info-container'}
            onClick={onClick}
        >
            <CardInfoContent
                style={{
                    background: card.color,
                    border: `1px solid ${card.color}`,
                }}
            >
                <div>
                    <div className="companyIcon">
                        <CompanyIcon />
                    </div>
                    <div className="info">{card.cardHolderName}</div>
                    <div className="info">{`**** **** **** ${card.cardLastFourDigit}`}</div>
                    <div className="info">
                        <span>EXPIRY</span>
                        <span>
                            {card.expiry.month}/{card.expiry.year}
                        </span>
                    </div>
                </div>
                <div className="icon">
                    <MasterCardIcon />
                </div>
            </CardInfoContent>
        </CardInfoContainer>
    );
};

export default CardInfo;
