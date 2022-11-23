import React from 'react';
import Card2Img from '../assets/imges/Card-2.png';
import scroll1 from '../assets/imges/scroll-1.png';
import scroll2 from '../assets/imges/scroll-2.png';
import scroll3 from '../assets/imges/scroll-3.png';
import scroll4 from '../assets/imges/scroll-4.png';
import scroll5 from '../assets/imges/scroll-5.png';
import BreadCrumb from '../Components/BreadCrumb';
import { HorizentalCard } from '../Components/HorizentalCard';
import PageHeader from '../Components/PageHeader';
import { ScrollCard } from '../Components/ScrollCard';
import { SectionWrapper } from '../Components/SectionWrapper';
import { Slider } from '../Components/Slider';
import SubscribtionForm from '../Components/SubscribtionForm';
import './PopularPage.scss';

const PopularPage: React.FC = () => {
    return (
        <div className='page popular-Page'>
            <div className="wrapper white-bg">
                <div className="container">
                    <PageHeader
                        title='Popular'
                        description='Check out the most-read and most-shared posts from the 3layers blog.'
                    />
                </div>
            </div>
            <div className="wrapper">
                <BreadCrumb />
                <section className="container cards-container">
                    <HorizentalCard
                        img={Card2Img}
                        text={{
                            number: '01',
                            title: '5 Things More Important for Your Content Than Content-Length in 2018',
                            description: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.'
                        }}
                    />
                    <HorizentalCard
                        img={Card2Img}
                        text={{
                            number: '01',
                            title: '5 Things More Important for Your Content Than Content-Length in 2018',
                            description: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.'
                        }}
                    />
                    <HorizentalCard
                        img={Card2Img}
                        text={{
                            number: '01',
                            title: '5 Things More Important for Your Content Than Content-Length in 2018',
                            description: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.'
                        }}
                    />
                    <HorizentalCard
                        img={Card2Img}
                        text={{
                            number: '01',
                            title: '5 Things More Important for Your Content Than Content-Length in 2018',
                            description: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.'
                        }}
                    />
                    <HorizentalCard
                        img={Card2Img}
                        text={{
                            number: '01',
                            title: '5 Things More Important for Your Content Than Content-Length in 2018',
                            description: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.'
                        }}
                    />
                    <HorizentalCard
                        img={Card2Img}
                        text={{
                            number: '01',
                            title: '5 Things More Important for Your Content Than Content-Length in 2018',
                            description: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.'
                        }}
                    />
                </section>

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

                <SubscribtionForm />

            </div>
        </div>
    )
}

export default PopularPage