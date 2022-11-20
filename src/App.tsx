import React from 'react';
import Nav from './Components/NavComponent/Nav';
import Footer from './Components/FooterComponent/Footer';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { HomePage } from './Pages/HomePage';

const App: React.FC = () => {
    return (
        <div className="App">
            <div className="wrapper">
                <Nav />

                <div className="container">
                    <Routes>
                        <Route path='/' index element={<HomePage />} />
                        <Route path='/popular' />
                        <Route path='/new' />
                        <Route path='/reading-list' />
                        <Route path='/topics' />
                        <Route path='/subscribe' />
                    </Routes>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default App;
