import React from 'react';
import ClickOthers from '../components/ClickOthers';
import './app.scss';

const React1Home = () => {
  return (
    <div className="text-center">
      <h2 className="text-center">Welcome to React 1</h2>
      <div className="action">
        <ClickOthers />
      </div>
    </div>
  );
};

export default React1Home;
