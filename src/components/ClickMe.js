import React, { useState } from 'react';

const ClickMe = () => {
  const [title, setTitle] = useState('Click Me');
  const onClickMe = () => {
    setTitle('Click Me Again');
  };
  return (
    <button className="gtm-click-me" onClick={onClickMe}>
      {title}
    </button>
  );
};

export default ClickMe;
