//import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Loading from '../components/UIComponents/Loading/Loading';

// Renders App without crashing
it('renders without crashing', () => {
  shallow(<App />);
});
// Initial Load with loading
it('Initial Load renders with loading', () => {
  const wrapper = shallow(<App />);
  const loading = <Loading />;
  expect(wrapper.contains(loading)).toEqual(true);
});
