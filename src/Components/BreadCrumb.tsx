import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './BreadCrumb.scss'

const BreadCrumb: React.FC = () => {
    const { pathname } = useLocation();
    const segments = pathname.split('/').splice(1);


    return (
        <div className="bread-crumb">
            <Link to='/'>Home</Link>
            {segments.map((segment: string, index) => {
                return <span key={index}> - <Link to={pathname.split(segment)[0] + segment}>{segment}</Link></span>
            })}
        </div>
    )
}

export default BreadCrumb