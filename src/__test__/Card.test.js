import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Card from '../components/UIComponents/Card/Card';
import { MOCK_DATA } from './CONST_TEST';
// Checking for the card
describe('Test suits for Card', () => {
  it('should match with snapshot of Card  Element', () => {
    const cardElement = render(
      <MemoryRouter>
        <Card data={MOCK_DATA} />
      </MemoryRouter>
    );
    const body_type = cardElement.container.querySelector('.body-type');
    const fuel_type = cardElement.container.querySelector('.fuel_type');
    const model_variant = cardElement.container.querySelector('.model_variant');
    expect(body_type).toBeInTheDocument();
    expect(fuel_type).toBeInTheDocument();
    expect(model_variant).toBeInTheDocument();
  });
});
