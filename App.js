import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Routes} from'react-router-dom';
import ShowList from './ShowList';
import ShowDetails from './ShowDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ShowList/>} />
        <Route path="/show/:id" element={<ShowDetails/> } />
      </Routes>
    </Router>
  );
}

export default App;
