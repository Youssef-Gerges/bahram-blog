import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import PageHeader from '../Components/PageHeader';
import VerticalCard from '../Components/VerticalCard';
import VCard1Img from '../assets/imges/Card-1.png';
import VCard2Img from '../assets/imges/Card2.png';
import './NewPage.scss';
import { SectionWrapper } from '../Components/SectionWrapper';
import { TextCard } from '../Components/TextCard';
import { FcDocument } from 'react-icons/fc';
import SubscribtionForm from '../Components/SubscribtionForm';
import useNewPosts from '../utils/useNewPosts';
import { BounceLoader } from 'react-spinners';
import useCategories from '../utils/useCategory';

const NewPage: React.FC = () => {
  const { posts, loading, error } = useNewPosts(10);
  const { categories } = useCategories();

  return (
    <div className="page new-page">
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
                title="New"
                description="Our latest web design tips, tricks, insights, and resources, hot off the presses."
              />
            </div>
          </div>
          <div className="wrapper">
            <BreadCrumb />
            <section className="container vertical-cards-container">
              {posts.map((post) => (
                <VerticalCard
                  key={post.id}
                  img={post.image}
                  text={{
                    author: post.user.name,
                    category: post.category.name,
                    description: post.body,
                    title: post.title,
                  }}
                />
              ))}
            </section>

            <section className="container">
              <SectionWrapper title="All topics" separator={false}>
                <div className="text-cards-container">
                  {categories.map((category) => (
                    <TextCard key={category.id} description={category.name} />
                  ))}
                </div>
              </SectionWrapper>
            </section>

            <SubscribtionForm />
          </div>{' '}
        </>
      )}
    </div>
  );
};

export default NewPage;
