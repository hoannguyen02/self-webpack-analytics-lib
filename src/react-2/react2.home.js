import React from 'react';
import ClickMe from '../components/ClickMe';
import './app.scss';

const React2Home = () => {
  return (
    <div className="text-center">
      <h2 className="text-center">Welcome to React 2</h2>
      <div className="action">
        <ClickMe />
      </div>
    </div>
  );
};

export default React2Home;
