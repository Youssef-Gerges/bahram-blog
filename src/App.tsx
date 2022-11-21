import React, { useEffect } from 'react';
import Nav from './Components/NavComponent/Nav';
import Footer from './Components/FooterComponent/Footer';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.scss';
import { HomePage } from './Pages/HomePage';
import PopularPage from './Pages/PopularPage';
import NewPage from './Pages/NewPage';
import ReadingListsPage from './Pages/ReadingListsPage';

const App: React.FC = () => {
    const { pathname } = useLocation();

    return (
        <div className="App">
            <div className={`wrapper ${pathname != '/' ? 'white-bg' : ''}`}>
                <Nav />
            </div>
            <Routes>
                <Route path='/' index element={<HomePage />} />
                <Route path='/popular' element={<PopularPage />} />
                <Route path='/popular/page/t' element={<PopularPage />} />
                <Route path='/new' element={<NewPage />} />
                <Route path='/reading-list' element={<ReadingListsPage />} />
                <Route path='/topics' />
                <Route path='/subscribe' />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
