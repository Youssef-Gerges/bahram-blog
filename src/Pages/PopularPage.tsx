import React from 'react';
import { BounceLoader } from 'react-spinners';
import BreadCrumb from '../Components/BreadCrumb';
import { HorizentalCard } from '../Components/HorizentalCard';
import PageHeader from '../Components/PageHeader';
import { ScrollCard } from '../Components/ScrollCard';
import { SectionWrapper } from '../Components/SectionWrapper';
import { Slider } from '../Components/Slider';
import SubscribtionForm from '../Components/SubscribtionForm';
import usePopularPosts from '../utils/usePopularPosts';
import useReadingList from '../utils/useReadingList';
import './PopularPage.scss';

const PopularPage: React.FC = () => {
  const { readinglists } = useReadingList();
  const { posts: popularPosts, loading } = usePopularPosts(10);

  return (
    <div className="page popular-Page">
      {loading === true ? (
        <div
          style={{
            height: '100vh',
            width: '100vw',
            backgroundColor: 'white',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 10000000,
          }}
        >
          <BounceLoader
            color="#36d7b7"
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
            }}
          />
        </div>
      ) : (
        <>
          <div className="wrapper white-bg">
            <div className="container">
              <PageHeader
                title="Popular"
                description="Check out the most-read and most-shared posts from the 3layers blog."
              />
            </div>
          </div>
          <div className="wrapper">
            <BreadCrumb />
            <section className="container cards-container">
              {popularPosts.map((post) => (
                <HorizentalCard
                  key={post.id}
                  img={post.image}
                  text={{
                    number: String(post.views),
                    title: post.title,
                    description: post.body,
                  }}
                />
              ))}
            </section>

            <section className="container">
              <SectionWrapper
                title="Reading lists"
                separator={false}
                link={{
                  text: 'View all',
                  to: '/reading-list',
                }}
              >
                <Slider>
                  {readinglists.map((reading) => (
                    <ScrollCard img={reading.photo} text={reading.name} />
                  ))}
                </Slider>
              </SectionWrapper>
            </section>

            <SubscribtionForm />
          </div>
        </>
      )}
    </div>
  );
};

export default PopularPage;
