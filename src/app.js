import React from 'react';
import './app.scss';
import ClickMe from './components/ClickMe';
import ClickOthers from './components/ClickOthers';

const App = () => {
  return (
    <div className="text-center">
      <h2 className="text-center">Welcome to Google Tag Manager Lib Example</h2>
      <div className="action">
        <ClickMe />
        <ClickOthers />
      </div>
    </div>
  );
};

export default App;
