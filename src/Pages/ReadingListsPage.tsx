import React from 'react'
import BreadCrumb from '../Components/BreadCrumbComponent/BreadCrumb'
import PageHeader from '../Components/PageHeaderComponent/PageHeader'
import { HorizentalCard } from '../Components/HorizentalCardComponent/HorizentalCard'
import horizontalImg from '../assets/imges/horizontal.png'

import './ReadingListsPage.scss'

const ReadingListsPage: React.FC = () => {
    return (
        <div className='page reading-lists-page'>
            <div className="wrapper white-bg">
                <div className="container">
                    <PageHeader
                        title='All reading lists                        '
                        description='Get in-depth insights on web design, freelancing, content management, and more with these series of related reads.'
                    />
                </div>
            </div>

            <div className="wrapper">
                <BreadCrumb />

                <section className="container cards-container">
                    <HorizentalCard
                        img={horizontalImg}
                        style={{
                            'backgroundColor': 'transparent',
                            'flexDirection': 'row-reverse',
                            'alignItems': 'flexStart'
                        }}
                        text={{
                            description: 'Every website is a user interface. Learn to build yours right.',
                            title: 'UI design'
                        }} />
                    <HorizentalCard
                        img={horizontalImg}
                        style={{
                            'backgroundColor': 'transparent',
                            'flexDirection': 'row-reverse',
                            'alignItems': 'flexStart'
                        }}
                        text={{
                            description: 'Every website is a user interface. Learn to build yours right.',
                            title: 'UI design'
                        }} />
                    <HorizentalCard
                        img={horizontalImg}
                        style={{
                            'backgroundColor': 'transparent',
                            'flexDirection': 'row-reverse',
                            'alignItems': 'flexStart'
                        }}
                        text={{
                            description: 'Every website is a user interface. Learn to build yours right.',
                            title: 'UI design'
                        }} />
                    <HorizentalCard
                        img={horizontalImg}
                        style={{
                            'backgroundColor': 'transparent',
                            'flexDirection': 'row-reverse',
                            'alignItems': 'flexStart'
                        }}
                        text={{
                            description: 'Every website is a user interface. Learn to build yours right.',
                            title: 'UI design'
                        }} />
                    <HorizentalCard
                        img={horizontalImg}
                        style={{
                            'backgroundColor': 'transparent',
                            'flexDirection': 'row-reverse',
                            'alignItems': 'flexStart'
                        }}
                        text={{
                            description: 'Every website is a user interface. Learn to build yours right.',
                            title: 'UI design'
                        }} />
                    <HorizentalCard
                        img={horizontalImg}
                        style={{
                            'backgroundColor': 'transparent',
                            'flexDirection': 'row-reverse',
                            'alignItems': 'flexStart'
                        }}
                        text={{
                            description: 'Every website is a user interface. Learn to build yours right.',
                            title: 'UI design'
                        }} />
                    <HorizentalCard
                        img={horizontalImg}
                        style={{
                            'backgroundColor': 'transparent',
                            'flexDirection': 'row-reverse',
                            'alignItems': 'flexStart'
                        }}
                        text={{
                            description: 'Every website is a user interface. Learn to build yours right.',
                            title: 'UI design'
                        }} />
                    <HorizentalCard
                        img={horizontalImg}
                        style={{
                            'backgroundColor': 'transparent',
                            'flexDirection': 'row-reverse',
                            'alignItems': 'flexStart'
                        }}
                        text={{
                            description: 'Every website is a user interface. Learn to build yours right.',
                            title: 'UI design'
                        }} />


                </section>
            </div>
        </div>
    )
}

export default ReadingListsPage