import React from 'react'
import { FcDocument } from 'react-icons/fc'
import BreadCrumb from '../Components/BreadCrumbComponent/BreadCrumb'
import PageHeader from '../Components/PageHeaderComponent/PageHeader'
import { TextCard } from '../Components/TextCardComponent/TextCard'
import './TopicsPage.scss'

const TopicsPage: React.FC = () => {
    return (
        <div className='page topics-page'>
            <div className="wrapper white-bg">
                <div className="container">
                    <PageHeader
                        title='Topics'
                        description='Find everything from design inspiration to best practices, freelancing tips to tools.'
                    />
                </div>
            </div>
            <div className="wrapper">
                <BreadCrumb />
                <section className="container cards-container">
                    <TextCard
                        description='Inspiration'
                        icon={<FcDocument />}
                        Subdescription="Get the web design inspiration you need from top 3layers users, amazing landing page and site designs, and 3layers Workshops."
                    />
                    <TextCard
                        description='Inspiration'
                        icon={<FcDocument />}
                        Subdescription="Get the web design inspiration you need from top 3layers users, amazing landing page and site designs, and 3layers Workshops."
                    />
                    <TextCard
                        description='Inspiration'
                        icon={<FcDocument />}
                        Subdescription="Get the web design inspiration you need from top 3layers users, amazing landing page and site designs, and 3layers Workshops."
                    />
                    <TextCard
                        description='Inspiration'
                        icon={<FcDocument />}
                        Subdescription="Get the web design inspiration you need from top 3layers users, amazing landing page and site designs, and 3layers Workshops."
                    />
                    <TextCard
                        description='Inspiration'
                        icon={<FcDocument />}
                        Subdescription="Get the web design inspiration you need from top 3layers users, amazing landing page and site designs, and 3layers Workshops."
                    />
                    <TextCard
                        description='Inspiration'
                        icon={<FcDocument />}
                        Subdescription="Get the web design inspiration you need from top 3layers users, amazing landing page and site designs, and 3layers Workshops."
                    />
                    <TextCard
                        description='Inspiration'
                        icon={<FcDocument />}
                        Subdescription="Get the web design inspiration you need from top 3layers users, amazing landing page and site designs, and 3layers Workshops."
                    />
                </section>

            </div>
        </div>
    )
}

export default TopicsPage