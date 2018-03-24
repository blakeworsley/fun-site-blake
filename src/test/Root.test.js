import React from 'react';
import ReactDOM from 'react-dom';
import root from '../components/root';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<root />, div);
  ReactDOM.unmountComponentAtNode(div);
});
