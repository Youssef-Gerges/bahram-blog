import React from 'react';
import './TextCard.scss';

export const TextCard: React.FC<{ title?: string, description: string, icon?: React.ReactNode }> = ({ title, description, icon }) => {
    return (
        <div className='text-card'>

            <p className="card-title">{title}</p>
            <h4 className='card-description'>{icon} {description}</h4>
        </div>
    )
}
