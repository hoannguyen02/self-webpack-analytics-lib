import { registerApplication, start } from 'single-spa';

registerApplication(
  'react-1',
  () => import('./src/react-1/react1.app.js'),
  () => (location.pathname === '/react-1' ? false : true)
);

registerApplication(
  'react-2',
  () => import('./src/react-2/react2.app.js'),
  () => (location.pathname === '/react-2' ? false : true)
);

start();
