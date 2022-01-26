import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import App from './App';

ReactDOM.render(
  <React.Fragment>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.Fragment>,
  document.getElementById('root')
);

