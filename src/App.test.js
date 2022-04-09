import { render, screen } from '@testing-library/react';
import App from './App';

test('should have initial color', () => {
  render(<App/>);

  //find an element with the role button and text "change to blue"
  const colorButton = screen.getByRole('button', {name: "change to blue"});

  //expect the background to be red
  expect(colorButton).toHaveStyle({backgroundColor: 'red'})
})

test('should have initial text', () => {
  
})

test('should turn blue when clicked', () => {
  
})
