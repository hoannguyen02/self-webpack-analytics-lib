import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import React1Home from './react1.home';

function domElementGetter() {
  return document.getElementById('react-1');
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: React1Home,
  domElementGetter,
});

export const bootstrap = [reactLifecycles.bootstrap];

export const mount = [reactLifecycles.mount];

export const unmount = [reactLifecycles.unmount];
