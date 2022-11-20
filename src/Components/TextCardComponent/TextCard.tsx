import React from 'react';
import './TextCard.scss';

export const TextCard: React.FC<{ title: string, description: string, width?: string }> = ({ title, description }) => {
    return (
        <div className='text-card'>
            <p className="card-title">{title}</p>
            <h4 className='card-description'>{description}</h4>
        </div>
    )
}
