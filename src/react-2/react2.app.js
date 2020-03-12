import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import React2Home from './react2.home';

function domElementGetter() {
  return document.getElementById('react-2');
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: React2Home,
  domElementGetter,
});

export const bootstrap = [reactLifecycles.bootstrap];

export const mount = [reactLifecycles.mount];

export const unmount = [reactLifecycles.unmount];
