import { render, screen, fireEvent } from '@testing-library/react';
import App, {replaceCamelWithSpaces} from './App';

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
  const checkbox = screen.getByRole('checkbox', {name: "disable button"});
  expect(checkbox).not.toBeChecked();
  
})

test('should disable button when checked', () => {
  render(<App/>)

  //expect box to be unchecked
  const checkbox = screen.getByRole('checkbox', {name: "disable button"});
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

test('should be gray when disabled and return to the old color when enabled', () => {
  render(<App />);

  const button = screen.getByRole('button', {name:"change to blue"});
  expect(button).toBeEnabled();

  const checkbox = screen.getByRole('checkbox', {name:"disable button"});
  expect(checkbox).not.toBeChecked();

  //disable button, expect gray button
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(button).toHaveStyle({backgroundColor:"gray"});

  //enable button, expect red button
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({backgroundColor:"red"});

  //click button, then disable button, expect gray button
  fireEvent.click(button);
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({backgroundColor:"gray"});

  //enable button, expect blue button
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({backgroundColor: "blue"});


})

describe('spaces before camel-case capital letters', () => {
  test('should work for no inner capital letters', () => {
    expect(replaceCamelWithSpaces("Red")).toBe('Red');
  })
  
  test('should work for one inner capital letter', () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue")
  })

  test('should work for multiple capital letters', () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  })
  
  test('should work for empty string', () => {
    expect(replaceCamelWithSpaces("")).toBe("");
    
  })
  
  test('should work for string with length 1', () => {
    expect(replaceCamelWithSpaces("L")).toBe("L");
  })
  
})
