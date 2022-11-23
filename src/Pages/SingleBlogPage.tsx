import React from 'react'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaEye, FaFacebook, FaHeart, FaPinterest } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import BreadCrumb from '../Components/BreadCrumb'
import PageHeader from '../Components/PageHeader'
import './SingleBlogPage.scss'

const SingleBlogPage: React.FC = () => {
    return (
        <div className='page single-blog-page'>
            <div className="wrapper white-bg">
                <div className="container header">
                    <PageHeader
                        title='10 Reasons to Build Your Website with WP Page Builder'
                        description='People’s quest for creating websites has easily taken us to a new era of site development. Where, with the availability of robust page building tools, creating websites has become a lot more fun (especially for non-developers).'
                    />
                    <p>By <Link to=''>TOMAS LAURINAVICIUS</Link> In <Link to=''>DESIGN PROCESS</Link></p>
                </div>
            </div>

            <div className="wrapper">
                <BreadCrumb />
                <section className=" container blog">
                    <div className="social-container">
                        <FaFacebook />
                        <FaPinterest />
                        <AiFillTwitterCircle />
                    </div>
                    <div className="blog-content">
                        <p>People’s quest for creating websites has easily taken us to a new era of site development. Where, with the availability of robust page building tools, creating websites has become a lot more fun (especially for non-developers). The multitude of tools and plugins available to you is vast when you try building websites on WordPress. Today we’ll explore a new one, WP Page Builder. If you’re tired of the same old page builder plugins, this is one you should try out.</p>
                        <br />
                        <p>People’s quest for creating websites has easily taken us to a new era of site development. Where, with the availability of robust page building tools, creating websites has become a lot more fun (especially for non-developers). The multitude of tools and plugins available to you is vast when you try building websites on WordPress. Today we’ll explore a new one, WP Page Builder. If you’re tired of the same old page builder plugins, this is one you should try out.</p>
                        <br />
                        <p>People’s quest for creating websites has easily taken us to a new era of site development. Where, with the availability of robust page building tools, creating websites has become a lot more fun (especially for non-developers). The multitude of tools and plugins available to you is vast when you try building websites on WordPress. Today we’ll explore a new one, WP Page Builder. If you’re tired of the same old page builder plugins, this is one you should try out.</p>
                        <br />
                        <p>People’s quest for creating websites has easily taken us to a new era of site development. Where, with the availability of robust page building tools, creating websites has become a lot more fun (especially for non-developers). The multitude of tools and plugins available to you is vast when you try building websites on WordPress. Today we’ll explore a new one, WP Page Builder. If you’re tired of the same old page builder plugins, this is one you should try out.</p>
                        <br />
                        <p>People’s quest for creating websites has easily taken us to a new era of site development. Where, with the availability of robust page building tools, creating websites has become a lot more fun (especially for non-developers). The multitude of tools and plugins available to you is vast when you try building websites on WordPress. Today we’ll explore a new one, WP Page Builder. If you’re tired of the same old page builder plugins, this is one you should try out.</p>
                        <br />
                        <p>People’s quest for creating websites has easily taken us to a new era of site development. Where, with the availability of robust page building tools, creating websites has become a lot more fun (especially for non-developers). The multitude of tools and plugins available to you is vast when you try building websites on WordPress. Today we’ll explore a new one, WP Page Builder. If you’re tired of the same old page builder plugins, this is one you should try out.</p>
                        <br />
                        <p>People’s quest for creating websites has easily taken us to a new era of site development. Where, with the availability of robust page building tools, creating websites has become a lot more fun (especially for non-developers). The multitude of tools and plugins available to you is vast when you try building websites on WordPress. Today we’ll explore a new one, WP Page Builder. If you’re tired of the same old page builder plugins, this is one you should try out.</p>
                        <br />
                        <p>People’s quest for creating websites has easily taken us to a new era of site development. Where, with the availability of robust page building tools, creating websites has become a lot more fun (especially for non-developers). The multitude of tools and plugins available to you is vast when you try building websites on WordPress. Today we’ll explore a new one, WP Page Builder. If you’re tired of the same old page builder plugins, this is one you should try out.</p>
                        <br />
                        <p>People’s quest for creating websites has easily taken us to a new era of site development. Where, with the availability of robust page building tools, creating websites has become a lot more fun (especially for non-developers). The multitude of tools and plugins available to you is vast when you try building websites on WordPress. Today we’ll explore a new one, WP Page Builder. If you’re tired of the same old page builder plugins, this is one you should try out.</p>
                        <br />
                        <p>People’s quest for creating websites has easily taken us to a new era of site development. Where, with the availability of robust page building tools, creating websites has become a lot more fun (especially for non-developers). The multitude of tools and plugins available to you is vast when you try building websites on WordPress. Today we’ll explore a new one, WP Page Builder. If you’re tired of the same old page builder plugins, this is one you should try out.</p>
                        <br />
                        <p>People’s quest for creating websites has easily taken us to a new era of site development. Where, with the availability of robust page building tools, creating websites has become a lot more fun (especially for non-developers). The multitude of tools and plugins available to you is vast when you try building websites on WordPress. Today we’ll explore a new one, WP Page Builder. If you’re tired of the same old page builder plugins, this is one you should try out.</p>
                        <br />
                    </div>
                    <div className="view-details">
                        <div className="like">
                            <FaHeart />
                            <p>20K</p>
                        </div>
                        <div className="view">
                            <FaEye />
                            <p>20k</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    )
}

export default SingleBlogPage