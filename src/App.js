import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import SearchPage from './SearchPage';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
       <Header />
      <div className='app__page'>
        <Router>
          <Routes>
            <Route exact path='/search/:searchTerm'  element={<><Sidebar /><SearchPage /></>} />
            <Route  exact path='/'  element={<><Sidebar /><RecommendedVideos /></>} />
          </Routes>
        </Router>
  </div>
    </div>
  );
}

export default App;
