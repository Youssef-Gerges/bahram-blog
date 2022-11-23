import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import PageHeader from '../Components/PageHeader'
import VerticalCard from '../Components/VerticalCard'
import VCard1Img from '../assets/imges/Card-1.png';
import VCard2Img from '../assets/imges/Card2.png';
import './NewPage.scss'
import { SectionWrapper } from '../Components/SectionWrapper';
import { TextCard } from '../Components/TextCard';
import { FcDocument } from 'react-icons/fc'
import SubscribtionForm from '../Components/SubscribtionForm';


const NewPage: React.FC = () => {
    return (
        <div className='page new-page'>
            <div className="wrapper white-bg">
                <div className="container">
                    <PageHeader
                        title='New'
                        description='Our latest web design tips, tricks, insights, and resources, hot off the presses.'
                    />
                </div>
            </div>
            <div className="wrapper">
                <BreadCrumb />
                <section className="container vertical-cards-container" >
                    <VerticalCard
                        img={VCard1Img}
                        text={{
                            author: 'TOMAS LAURINAVICIUS',
                            category: 'RESOURCE',
                            description: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.',
                            title: 'Website Downtime: Applicable Tips on How to Prevent It'
                        }}
                    />
                    <VerticalCard img={VCard2Img} text={{
                        author: 'TOMAS LAURINAVICIUS',
                        category: 'RESOURCE',
                        description: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.',
                        title: 'Website Downtime: Applicable Tips on How to Prevent It'
                    }}
                    />
                    <VerticalCard
                        img={VCard1Img}
                        text={{
                            author: 'TOMAS LAURINAVICIUS',
                            category: 'RESOURCE',
                            description: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.',
                            title: 'Website Downtime: Applicable Tips on How to Prevent It'
                        }}
                    />
                    <VerticalCard img={VCard2Img} text={{
                        author: 'TOMAS LAURINAVICIUS',
                        category: 'RESOURCE',
                        description: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.',
                        title: 'Website Downtime: Applicable Tips on How to Prevent It'
                    }}
                    />
                    <VerticalCard
                        img={VCard1Img}
                        text={{
                            author: 'TOMAS LAURINAVICIUS',
                            category: 'RESOURCE',
                            description: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.',
                            title: 'Website Downtime: Applicable Tips on How to Prevent It'
                        }}
                    />
                    <VerticalCard img={VCard2Img} text={{
                        author: 'TOMAS LAURINAVICIUS',
                        category: 'RESOURCE',
                        description: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.',
                        title: 'Website Downtime: Applicable Tips on How to Prevent It'
                    }}
                    />
                </section>

                <section className="container loadmore-container">
                    <button id="loadmore">
                        Load More
                    </button>
                </section>

                <section className='container'>
                    <SectionWrapper title='All topics' separator={false}>
                        <div className="text-cards-container">
                            <TextCard description='Inspiration' icon={<FcDocument />} />
                            <TextCard description='Inspiration' icon={<FcDocument />} />
                            <TextCard description='Inspiration' icon={<FcDocument />} />
                            <TextCard description='Inspiration' icon={<FcDocument />} />
                            <TextCard description='Inspiration' icon={<FcDocument />} />
                            <TextCard description='Inspiration' icon={<FcDocument />} />
                            <TextCard description='Inspiration' icon={<FcDocument />} />
                            <TextCard description='Inspiration' icon={<FcDocument />} />
                            <TextCard description='Inspiration' icon={<FcDocument />} />
                            <TextCard description='Inspiration' icon={<FcDocument />} />
                            <TextCard description='Inspiration' icon={<FcDocument />} />
                            <TextCard description='Inspiration' icon={<FcDocument />} />
                        </div>
                    </SectionWrapper>
                </section>

                <SubscribtionForm />

            </div>
        </div>
    )
}

export default NewPage