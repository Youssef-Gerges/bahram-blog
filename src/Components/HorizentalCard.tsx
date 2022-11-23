import React from 'react';
import './HorizentalCard.scss';
import IImageCardProps from '../interfaces/IImageCardProps';

export const HorizentalCard: React.FC<IImageCardProps> = ({ img, text, style }) => {
    return (
        <div className='horizental-card' style={style}>
            <div className="text" >
                <div className='details'>
                    {text.author ? <p style={{ display: 'inline' }}>By<span>{text.author}</span></p> : ''}
                    {text.category ? <p style={{ display: 'inline' }}>In<span>{text.category}</span></p> : ''}
                    {text.number ? <p style={{ display: 'inline' }}>{text.number}</p> : ''}
                </div>

                <h3 className="title">{text.title}</h3>
                <p className="description">{text.description}</p>
            </div >

            <img src={img} alt={text.title} />
        </div >
    )
}
