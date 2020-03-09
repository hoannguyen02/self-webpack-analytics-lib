import React, { useState } from 'react';

const ClickMe = () => {
  const [title, setTitle] = useState('Click Me');
  const onClickMe = () => {
    setTitle('Click Me Again');
    RubrikkGTM.trigger({ event: 'onClickMe' });
  };
  return <button onClick={onClickMe}>{title}</button>;
};

export default ClickMe;
