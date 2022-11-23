import React from 'react'
import { AiFillTwitterCircle, AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import { FaFacebook, FaPinterest } from 'react-icons/fa'
import BreadCrumb from '../Components/BreadCrumb'
import VerticalCard from '../Components/VerticalCard'
import VCard2Img from '../assets/imges/Card2.png';
import vectorImg from '../assets/imges/vector.png';
import './AuthorPage.scss'
import SubscribtionForm from '../Components/SubscribtionForm'
import { HorizentalCard } from '../Components/HorizentalCard'
import { TextCard } from '../Components/TextCard'

const AuthorPage: React.FC = () => {
    return (
        <div className='page author-page'>
            <div className="wrapper">
                <BreadCrumb />
                <div className="page-layout">
                    <div className="content">
                        <div className="author-details card">
                            <img src={vectorImg} alt="" />
                            <h4>TOMAS LAURINAVICIUS</h4>
                            <h5>Hi, my name is Daniel, I'm the CTO here at Kinsta.</h5>
                            <div className="social-container">
                                <FaFacebook />
                                <FaPinterest />
                                <AiFillTwitterCircle />
                            </div>
                        </div>
                        <div className="blogs">
                            <VerticalCard img={VCard2Img}
                                text={{
                                    author: 'TOMAS LAURINAVICIUS',
                                    category: 'RESOURCE',
                                    title: 'How to Migrate from Wix to WordPress (Complete Guide)',
                                }} />
                            <VerticalCard img={VCard2Img}
                                text={{
                                    author: 'TOMAS LAURINAVICIUS',
                                    category: 'RESOURCE',
                                    title: 'How to Migrate from Wix to WordPress (Complete Guide)',
                                }} />
                            <VerticalCard img={VCard2Img}
                                text={{
                                    author: 'TOMAS LAURINAVICIUS',
                                    category: 'RESOURCE',
                                    title: 'How to Migrate from Wix to WordPress (Complete Guide)',
                                }} />
                            <VerticalCard img={VCard2Img}
                                text={{
                                    author: 'TOMAS LAURINAVICIUS',
                                    category: 'RESOURCE',
                                    title: 'How to Migrate from Wix to WordPress (Complete Guide)',
                                }} />
                            <VerticalCard img={VCard2Img}
                                text={{
                                    author: 'TOMAS LAURINAVICIUS',
                                    category: 'RESOURCE',
                                    title: 'How to Migrate from Wix to WordPress (Complete Guide)',
                                }} />
                        </div>

                        <div className="paginator">
                            <button> {'<'} </button>
                            <button> 1 </button>
                            <button> 2 </button>
                            <button> 3 </button>
                            <button> 4 </button>
                            <button className='active'> 5 </button>
                            <button> 6 </button>
                            <button> {'>'} </button>
                        </div>
                    </div>

                    <div className="side">
                        <div className="search card">
                            <div className="search-group">
                                <input type="text" placeholder='Search' />
                                <AiOutlineSearch />
                            </div>
                        </div>

                        <div className="card popular-posts">
                            <h4 className='card-header'>Popular Posts</h4>
                            <HorizentalCard
                                img={VCard2Img}
                                text={{
                                    description: 'DESIGN PROCESS',
                                    title: 'Our 15 favorite websites from August '
                                }}
                                style={{ 'flexDirection': 'row-reverse' }}
                            />

                        </div>

                        <div className="card recent-posts">
                            <h4 className='card-header'>Recent Posts</h4>
                            <TextCard
                                title='DESIGN PROCESS'
                                description='Our 15 favorite websites from August '
                            />
                            <TextCard
                                title='DESIGN PROCESS'
                                description='Our 15 favorite websites from August '
                            />
                            <TextCard
                                title='DESIGN PROCESS'
                                description='Our 15 favorite websites from August '
                            />
                        </div>
                        <div className="category-filter">
                            <div className="category">Sale </div>
                            <div className="category">Resources </div>
                            <div className="category">Values </div>
                            <div className="category active">Benefits </div>
                            <div className="category">Sale </div>
                            <div className="category">Resources </div>
                            <div className="category">Values </div>
                            <div className="category">Benefits </div>
                            <div className="category">Sale </div>
                            <div className="category">Resources </div>
                            <div className="category">Values </div>
                            <div className="category">Benefits </div>
                            <div className="category">Sale </div>
                            <div className="category">Resources </div>
                            <div className="category">Values </div>
                            <div className="category">Benefits </div>
                            <div className="category">Sale </div>
                            <div className="category">Resources </div>
                            <div className="category">Values </div>
                            <div className="category">Benefits </div>
                        </div>
                    </div>
                </div>
                <SubscribtionForm />


            </div>
        </div>
    )
}

export default AuthorPage