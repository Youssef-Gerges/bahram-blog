import React from 'react';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.scss';
import { HomePage } from './Pages/HomePage';
import PopularPage from './Pages/PopularPage';
import NewPage from './Pages/NewPage';
import ReadingListsPage from './Pages/ReadingListsPage';
import SubscribtionForm from './Components/SubscribtionForm';
import TopicsPage from './Pages/TopicsPage';
import SingleBlogPage from './Pages/SingleBlogPage';
import AuthorPage from './Pages/AuthorPage';

const App: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className="App">
      <div
        className={`wrapper ${
          pathname != '/subscribe' && pathname != '/author' && pathname != '/'
            ? 'white-bg'
            : ''
        }`}
      >
        <Nav />
      </div>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/popular" element={<PopularPage />} />
        <Route path="/popular/page/t" element={<PopularPage />} />
        <Route path="/new" element={<NewPage />} />
        <Route path="/reading-list" element={<ReadingListsPage />} />
        {/* <Route path='/topics' element={<TopicsPage />} /> */}
        <Route path="/subscribe" element={<SubscribtionForm />} />
        <Route path="/single-blog" element={<SingleBlogPage />} />
        <Route path="/author" element={<AuthorPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
