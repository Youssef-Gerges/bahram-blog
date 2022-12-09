import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import PageHeader from '../Components/PageHeader';
import { HorizentalCard } from '../Components/HorizentalCard';
import horizontalImg from '../assets/imges/horizontal.png';

import './ReadingListsPage.scss';
import useReadingList from '../utils/useReadingList';
import { BounceLoader } from 'react-spinners';

const ReadingListsPage: React.FC = () => {
  const { readinglists, loading } = useReadingList();

  return (
    <div className="page reading-lists-page">
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
                title="All reading lists                        "
                description="Get in-depth insights on web design, freelancing, content management, and more with these series of related reads."
              />
            </div>
          </div>

          <div className="wrapper">
            <BreadCrumb />

            <section className="container cards-container">
              {readinglists.map((list) => (
                <HorizentalCard
                  img={list.photo}
                  style={{
                    backgroundColor: 'transparent',
                    flexDirection: 'row-reverse',
                    alignItems: 'flexStart',
                  }}
                  text={{
                    description: list.description,
                    title: list.name,
                  }}
                />
              ))}
            </section>
          </div>
        </>
      )}
    </div>
  );
};

export default ReadingListsPage;
