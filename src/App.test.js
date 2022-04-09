import { render, screen, fireEvent } from '@testing-library/react';
import App, {replaceCamelWithSpaces} from './App';

test('should have initial color', () => {
  render(<App/>);

  //find an element with the role button and text "change to MidnightBlue"
  const colorButton = screen.getByRole('button', {name: "change to MidnightBlue"});

  //expect the background to be MediumVioletRed
  expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'})
})

test('should have initial text', () => {
  render(<App/>);

  //find an element with the role button and text "change to MidnightBlue"
  const colorButton = screen.getByRole('button', {name: "change to MidnightBlue"});

  //expect the text to be "change to MidnightBlue"
  expect(colorButton).toHaveTextContent("change to MidnightBlue");
})

test('should turn MidnightBlue when clicked', () => {
  render(<App />);
  
  const colorButton = screen.getByRole('button', {name:"change to MidnightBlue"});

  //expect button to be MediumVioletRed
  expect(colorButton).toHaveStyle({backgroundColor:'MediumVioletRed'});

  fireEvent.click(colorButton);

  //expect button to be MidnightBlue
  expect(colorButton).toHaveStyle({backgroundColor: 'MidnightBlue'});

  //expect text to be "change to MediumVioletRed"
  expect(colorButton.textContent).toBe("change to MediumVioletRed");
})

test('should have button start enabled and box unchecked', () => {
  render(<App/>);

  //check that button starts out enabled
  const colorButton = screen.getByRole('button', {name:"change to MidnightBlue"})
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
  const button = screen.getByRole('button', {name:"change to MidnightBlue"})
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

  const button = screen.getByRole('button', {name:"change to MidnightBlue"});
  expect(button).toBeEnabled();

  const checkbox = screen.getByRole('checkbox', {name:"disable button"});
  expect(checkbox).not.toBeChecked();

  //disable button, expect gray button
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(button).toHaveStyle({backgroundColor:"gray"});

  //enable button, expect MediumVioletRed button
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({backgroundColor:"MediumVioletRed"});

  //click button, then disable button, expect gray button
  fireEvent.click(button);
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({backgroundColor:"gray"});

  //enable button, expect MidnightBlue button
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({backgroundColor: "MidnightBlue"});


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
