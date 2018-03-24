import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../components/Root';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Root />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('runs this function', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Root />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('add function works correctly', () => {
  function add(num1, num2) {
    return num1 + num2;
  }
  expect(add(2, 3)).toBe(5);
});
