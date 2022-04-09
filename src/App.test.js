import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('should have initial color', () => {
  render(<App/>);

  //find an element with the role button and text "change to blue"
  const colorButton = screen.getByRole('button', {name: "change to blue"});

  //expect the background to be red
  expect(colorButton).toHaveStyle({backgroundColor: 'red'})
})

test('should have initial text', () => {
  render(<App/>);

  //find an element with the role button and text "change to blue"
  const colorButton = screen.getByRole('button', {name: "change to blue"});

  //expect the text to be "change to blue"
  expect(colorButton).toHaveTextContent("change to blue");
})

test('should turn blue when clicked', () => {
  render(<App />);
  
  const colorButton = screen.getByRole('button', {name:"change to blue"});

  //expect button to be red
  expect(colorButton).toHaveStyle({backgroundColor:'red'});

  fireEvent.click(colorButton);

  //expect button to be blue
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'});

  //expect text to be "change to red"
  expect(colorButton.textContent).toBe("change to red");
})

test('should have button start enabled and unchecked', () => {
  render(<App/>);

  //check that button starts out enabled
  const colorButton = screen.getByRole('button', {name:"change to blue"})
  expect(colorButton).toBeEnabled();

  //check that button starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
  
})
