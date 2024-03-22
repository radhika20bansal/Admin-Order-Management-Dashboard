import React from 'react';
import './App.css';
import ProfileHeader from './common-components/ProfileHeader';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ProfileHeader/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
