import React from 'react';
import IImageCardProps from '../interfaces/IImageCardProps';
import './VerticalCard.scss';

const VerticalCard: React.FC<IImageCardProps> = ({ img, text, style }) => {
  return (
    <div className="vertical-card" style={style}>
      <img src={img} alt={text.title} height="400px" />
      <div className="text">
        <p className="details">
          By<span>{text.author}</span>in<span>{text.category}</span>
        </p>
        <h3 className="title">{text.title}</h3>
        <p className="description">{text.description}</p>
      </div>
    </div>
  );
};

export default VerticalCard;
