import React from 'react';
import { Link } from 'react-router-dom';
import './ScrollCard.scss';

export const ScrollCard: React.FC<{ img: string; text: string }> = ({
  img,
  text,
}) => {
  return (
    <Link to="" style={{ color: '#000', textDecoration: 'none' }}>
      <div className="scroll-card">
        <img src={img} alt={text} />
        <p style={{ textAlign: 'center' }}>{text}</p>
      </div>
    </Link>
  );
};
