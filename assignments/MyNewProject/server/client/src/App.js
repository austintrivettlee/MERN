import React from 'react';
import Main from './views/Main';
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;