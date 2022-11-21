import React from 'react';
import './HorizentalCard.scss';
import IImageCardProps from '../../interfaces/IImageCardProps';

export const HorizentalCard: React.FC<IImageCardProps> = ({ img, text, width }) => {
    return (
        <div className='horizental-card'>
            <div className="text" >
                {
                    text.author ? (<p className='details'>By<span>{text.author}</span>in<span>{text.category}</span></p>) :
                        <p className="details">{text.number}</p>

                }
                <h3 className="title">{text.title}</h3>
                <p className="description">{text.description}</p>
            </div >

            <img src={img} alt={text.title} />
        </div>
    )
}
