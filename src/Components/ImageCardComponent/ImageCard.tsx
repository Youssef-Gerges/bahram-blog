import React from 'react';
import './ImageCard.scss';
import IImageCardProps, { CardWidth } from '../../interfaces/IImageCardProps';

export const ImageCard: React.FC<IImageCardProps> = ({ text, img, width }) => {

    return (
        <div style={{ backgroundImage: `url(${img})` }} className={`image-card ${width == CardWidth.LARGE ? 'large-card' : 'small-card'}`}>

            <div className="text" >
                <p className='details'>By<span>{text.author}</span>in<span>{text.category}</span></p>
                <h3 className="title">{text.title}</h3>
                <p className="description">{text.description}</p>
            </div >
        </div>
    )
}
