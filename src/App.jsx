import React, {useState} from 'react';
import './css/global.css';
import {Profile} from './components/profile/Profile';

function App() {
  const [isProfileExpanded, setIsProfileExpanded] = useState(true);

  return (
    <div className="App">
      <Profile isProfileExpanded={isProfileExpanded} />
      <button onClick={() => setIsProfileExpanded(!isProfileExpanded)}>toggle</button>
    </div>
  );
}

export default App;
