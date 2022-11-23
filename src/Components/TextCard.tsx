import React from 'react';
import './TextCard.scss';

export const TextCard: React.FC<{ title?: string, description: string, icon?: React.ReactNode, Subdescription?: string }> = ({ title, description, icon, Subdescription }) => {
    return (
        <div className='text-card'>

            <p className="card-title">{title}</p>
            <h4 className='card-description'>{icon} {description}</h4>
            <h5 className='card-description'>{Subdescription}</h5>
        </div>
    )
}
