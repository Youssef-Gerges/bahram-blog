import React from 'react'
import './PageHeader.scss'

const PageHeader: React.FC<{ title: string, description: string }> = ({ title, description }) => {
    return (
        <div className='page-header'>
            <h2 className="page-title">{title}</h2>
            <h4 className="page-description">{description}</h4>
        </div>
    )
}

export default PageHeader