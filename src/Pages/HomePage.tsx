import React from 'react';
import { Link } from 'react-router-dom';
import cardImg from '../assets/imges/Pic.png';
import scroll1 from '../assets/imges/scroll-1.png';
import scroll2 from '../assets/imges/scroll-2.png';
import scroll3 from '../assets/imges/scroll-3.png';
import scroll4 from '../assets/imges/scroll-4.png';
import scroll5 from '../assets/imges/scroll-5.png';
import smallCardImg from '../assets/imges/Card.png';
import Card2Img from '../assets/imges/Card-2.png';
import VCard1Img from '../assets/imges/Card-1.png';
import VCard2Img from '../assets/imges/Card2.png';
import horizontalImg from '../assets/imges/horizontal.png';
import { CardWidth } from '../interfaces/IImageCardProps';
import { ImageCard } from '../Components/ImageCardComponent/ImageCard';
import { ScrollCard } from '../Components/ScrollCardComponent/ScrollCard';
import { SectionWrapper } from '../Components/SectionWrapperComponent/SectionWrapper';
import { Slider } from '../Components/SliderComponent/Slider';
import './HomePage.scss';
import { TextCard } from '../Components/TextCardComponent/TextCard';
import { HorizentalCard } from '../Components/HorizentalCardComponent/HorizentalCard';
import VerticalCard from '../Components/VerticalCardComponent/VerticalCard';


export const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            <div className="hero">
                <ImageCard
                    width={CardWidth.LARGE}
                    img={cardImg}
                    text={{
                        author: 'TOMAS LAURINAVICIUS',
                        category: 'INSPIRATION',
                        title: 'How to accept rejection gracefully — and use it to grow',
                        description: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.'
                    }}
                />
                <SectionWrapper
                    width='40%'
                    title='New'
                    separator={true}
                    titleCName='quote'
                    link={{ text: 'View all new', to: '/new' }}
                >
                    <div className="new-card">
                        <p className="date">SEP  04  2018</p>
                        <Link
                            to="/"
                            className="title-small news"
                        >
                            Web page layout 101: website anatomy every designer needs to learn
                        </Link>
                    </div>
                    <div className="new-card">
                        <p className="date">SEP  04  2018</p>
                        <Link
                            to="/"
                            className="title-small news"
                        >
                            Web page layout 101: website anatomy every designer needs to learn
                        </Link>
                    </div>
                    <div className="new-card">
                        <p className="date">SEP  04  2018</p>
                        <Link
                            to="/"
                            className="title-small news"
                        >
                            Our 15 favorite websites from August 2018
                        </Link>
                    </div>
                    <div className="new-card">
                        <p className="date">SEP  04  2018</p>
                        <Link
                            to="/"
                            className="title-small news"
                        >
                            Our 15 favorite websites from August 2018
                        </Link>
                    </div>
                </SectionWrapper>
            </div>

            <section className="container">
                <SectionWrapper
                    title='Reading lists'
                    separator={false}
                    link={{
                        text: 'View all',
                        to: '/reading-list'
                    }}
                >
                    <Slider>
                        <ScrollCard img={scroll1} text='UI design' />
                        <ScrollCard img={scroll2} text='UX design' />
                        <ScrollCard img={scroll3} text='SEO' />
                        <ScrollCard img={scroll4} text='Popular' />
                        <ScrollCard img={scroll5} text='Essentials' />
                    </Slider>
                </SectionWrapper>
            </section>

            <section className='container'>
                <SectionWrapper
                    separator={false}
                    title='Popular'
                    link={{ to: '/popular', text: 'View all' }}
                >
                    <div className='cards-section'>
                        <ImageCard
                            width={CardWidth.SMALL}
                            img={smallCardImg}
                            text={{
                                author: 'TOMAS LAURINAVICIUS',
                                category: 'DESIGN PROCESS',
                                title: 'Web page layout 101: website anatomy every designer needs to learn', description: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.'
                            }} />
                        <div className="text-cards-container">
                            <TextCard description='Affiliate Systems Suck, So We Rolled Our Own' title='FREELANCING' />
                            <TextCard title='RESOURCE' description='How not to design web forms' />
                            <TextCard title='DESIGN PROCESS' description='B2B Lead Generation – Tips and Strategies for 2018' />
                            <TextCard title='INSPIRATION' description='8 Best WordPress Ecommerce Plugins' />
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            <section className="container">
                <SectionWrapper title='Random' separator={false}>
                    <HorizentalCard img={horizontalImg} text={{
                        author: 'TOMAS LAURINAVICIUS',
                        category: 'TUTORIALS',
                        description: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.',
                        title: 'Mind-Blowing Twitter Stats and Facts on Our Favorite Network (2018)'
                    }} />
                </SectionWrapper>
            </section>

            <section className='container'>
                <SectionWrapper
                    separator={false}
                    title='Essentials'
                    link={{ to: '/popular', text: 'View all' }}
                >
                    <div className='cards-section'>
                        <div className="text-cards-container">
                            <TextCard description='Affiliate Systems Suck, So We Rolled Our Own' title='FREELANCING' />
                            <TextCard title='RESOURCE' description='How not to design web forms' />
                            <TextCard title='DESIGN PROCESS' description='B2B Lead Generation – Tips and Strategies for 2018' />
                            <TextCard title='INSPIRATION' description='8 Best WordPress Ecommerce Plugins' />
                        </div>
                        <ImageCard
                            width={CardWidth.SMALL}
                            img={Card2Img}
                            text={{
                                author: 'TOMAS LAURINAVICIUS',
                                category: 'DESIGN PROCESS',
                                title: 'How to Fix the WordPress HTTP Error (Uploading Images to Media Library)',
                                description: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.'
                            }} />
                    </div>
                </SectionWrapper>
            </section>

            <section className="container vertical-cards-container" >
                <VerticalCard
                    img={VCard1Img}
                    text={{
                        author: 'TOMAS LAURINAVICIUS',
                        category: 'RESOURCE',
                        description: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.',
                        title: 'Website Downtime: Applicable Tips on How to Prevent It'
                    }} />
                <VerticalCard img={VCard2Img} text={{
                    author: 'TOMAS LAURINAVICIUS',
                    category: 'RESOURCE',
                    description: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.',
                    title: 'Website Downtime: Applicable Tips on How to Prevent It'
                }} />
            </section>

        </div>
    )
}
