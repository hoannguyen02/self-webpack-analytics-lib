import React, { useState } from 'react';

const ClickOthers = () => {
  const [title, setTitle] = useState('Click Others');
  const onClickOthers = () => {
    setTitle('Click Others Again');
    RubrikkGTM.trigger({ event: 'onClickOthers' });
  };
  return <button onClick={onClickOthers}>{title}</button>;
};

export default ClickOthers;
