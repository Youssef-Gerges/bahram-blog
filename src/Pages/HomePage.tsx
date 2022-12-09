import React from 'react';
import { Link } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import { HorizentalCard } from '../Components/HorizentalCard';
import { ImageCard } from '../Components/ImageCard';
import { ScrollCard } from '../Components/ScrollCard';
import { SectionWrapper } from '../Components/SectionWrapper';
import { Slider } from '../Components/Slider';
import { TextCard } from '../Components/TextCard';
import VerticalCard from '../Components/VerticalCard';
import { CardWidth } from '../interfaces/IImageCardProps';
import IReadingList from '../interfaces/IReadingList';
import useNewPosts from '../utils/useNewPosts';
import usePopularPosts from '../utils/usePopularPosts';
import useReadingList from '../utils/useReadingList';
import './HomePage.scss';

export const HomePage: React.FC = () => {
  const { readinglists } = useReadingList();
  const { posts: popularPosts } = usePopularPosts(8);
  const { posts, loading, error } = useNewPosts(5);

  return (
    <div className="home-page">
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
        <div className="wrapper">
          <div className="container">
            <div className="hero">
              <ImageCard
                width={CardWidth.LARGE}
                img={posts[0]?.image}
                text={{
                  author: posts[0]?.user.name,
                  category: posts[0]?.category.name,
                  title: posts[0]?.title,
                  description: posts[0]?.body,
                }}
              />
              <SectionWrapper
                width="40%"
                title="New"
                separator={true}
                titleCName="quote"
                link={{ text: 'View all new', to: '/new' }}
              >
                {posts.slice(1).map((post) => (
                  <div className="new-card" key={post.id}>
                    <p className="date">{post.date.toString()}</p>
                    <Link to={`/post/${post.id}`} className="title-small news">
                      {post.title}
                    </Link>
                  </div>
                ))}
              </SectionWrapper>
            </div>

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
                  {readinglists.map((readingList: IReadingList) => (
                    <ScrollCard
                      img={readingList.photo}
                      text={readingList.name}
                      key={readingList.id}
                    />
                  ))}
                </Slider>
              </SectionWrapper>
            </section>

            <section className="container">
              <SectionWrapper
                separator={false}
                title="Popular"
                link={{ to: '/popular', text: 'View all' }}
              >
                <div className="cards-section">
                  <ImageCard
                    width={CardWidth.SMALL}
                    img={popularPosts[0]?.image}
                    text={{
                      author: popularPosts[0]?.user?.name,
                      category: popularPosts[0]?.category.name,
                      title: popularPosts[0]?.title,
                      description: popularPosts[0]?.body,
                    }}
                  />
                  <div className="text-cards-container">
                    {popularPosts.slice(1, 5).map((post) => (
                      <TextCard
                        key={post.id}
                        description={post.title}
                        title={post.category?.name}
                      />
                    ))}
                  </div>
                </div>
              </SectionWrapper>
            </section>

            <section className="container">
              <SectionWrapper title="Random" separator={false}>
                <HorizentalCard
                  img={popularPosts[5]?.image}
                  text={{
                    author: popularPosts[5]?.user.name,
                    category: popularPosts[5]?.category.name,
                    description: popularPosts[5]?.body,
                    title: popularPosts[5]?.title ?? '',
                  }}
                />
              </SectionWrapper>
            </section>

            <section className="container vertical-cards-container">
              <VerticalCard
                img={popularPosts[6]?.image}
                text={{
                  author: popularPosts[6]?.user.name,
                  category: popularPosts[6]?.category.name,
                  description: popularPosts[6]?.body,
                  title: popularPosts[6]?.title,
                }}
              />
              <VerticalCard
                img={popularPosts[7]?.image}
                text={{
                  author: popularPosts[7]?.user.name,
                  category: popularPosts[7]?.category.name,
                  description: popularPosts[7]?.body,
                  title: popularPosts[7]?.title,
                }}
              />
            </section>
          </div>
        </div>
      )}
    </div>
  );
};
