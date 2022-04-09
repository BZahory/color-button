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

test('should have button start enabled and box unchecked', () => {
  render(<App/>);

  //check that button starts out enabled
  const colorButton = screen.getByRole('button', {name:"change to blue"})
  expect(colorButton).toBeEnabled();

  //check that checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
  
})

test('should disable button when checked', () => {
  render(<App/>)

  //expect box to be unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();

  //check that button is enabled
  const button = screen.getByRole('button', {name:"change to blue"})
  expect(button).toBeEnabled();

  fireEvent.click(checkbox);

  //expect button and box to toggle
  expect(button).toBeDisabled();
  expect(checkbox).toBeChecked();
  
  fireEvent.click(checkbox);

  //expect button and box to toggle
  expect(button).toBeEnabled();
  expect(checkbox).not.toBeChecked();

})

