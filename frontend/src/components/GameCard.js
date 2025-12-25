import React from 'react';
import './GameCard.css';

const GameCard = ({ game }) => {
  console.log(game);
  const {
    id,
    title,
    platform,
    region,
    original_price,
    current_price,
    discount,
    cashback,
    likes,
    image_url,
    platformIcon,
    cashbackLabel = true,
    bannerText
  } = game;

  const formatPrice = (price) => {
    return `€${price}`;
  };

  return (
    <div className="game-card">
      <div className="game-card-image-container">
        {image_url ? (
          <img src={image_url} alt={title} className="game-card-image" />
        ) : (
          <div className="game-card-image-placeholder">
            <span>{title}</span>
          </div>
        )}
        {cashbackLabel && (
          <div className="cashback-badge">
            <svg className="cashback-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 6v12M8 10h8M8 14h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>CASHBACK</span>
          </div>
        )}
        {bannerText && (
          <div className="banner-text">{bannerText}</div>
        )}
      </div>
      
      <div className="game-card-content">
        {platformIcon && (
          <div className="platform-icon">
            <img src={platformIcon} alt={platform} />
          </div>
        )}
        
        <h3 className="game-card-title">{title}</h3>
        
        <div className="game-card-region">
          <span className={`region-badge ${region?.toLowerCase()}`}>{region}</span>
        </div>
        
        <div className="game-card-pricing">
          {original_price && discount && (
            <div className="price-original">
              From {formatPrice(original_price)} <span className="discount">-{discount}%</span>
            </div>
          )}
          <div className="price-current">
            <strong>{formatPrice(current_price)}</strong>
            <svg className="info-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 16v-4M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          {cashback && (
            <div className="cashback-amount">Cashback: {formatPrice(cashback)}</div>
          )}
        </div>
        
        {likes !== undefined && (
          <div className="game-card-likes">
            <svg className="heart-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>{likes.toLocaleString()}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameCard;

