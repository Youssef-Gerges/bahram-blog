import React from 'react';
import { Link } from 'react-router-dom';
import ISelectionWrapperProps from '../interfaces/ISelectionWrapperProps';
import './SectionWrapper.scss'

export const SectionWrapper: React.FC<ISelectionWrapperProps> = ({ title, link, separator, children, width, titleCName }) => {
    return (
        <div className="section-wrapper" style={{ width: width ?? '100%' }} >
            <div className="section-text">
                <h2 className={titleCName}>{title}</h2>
                {link ?
                    <Link to={link.to}>{link.text}</Link>
                    : null
                }
            </div>
            {separator ? <hr /> : null}
            <div className='content'>
                {children}
            </div>
        </div>

    )
}
