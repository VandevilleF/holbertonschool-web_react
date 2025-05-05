import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test('App component', () => {
  render(<App />);
});

test('Display alert when Ctrl + H si press', () => {
  // Spy alert and mock alert popup
  const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

  render(<App />);

  // Simulate the keydown event (Ctrl+h)
  fireEvent.keyDown(window, { key: 'h', ctrlKey: true });

  expect(alertSpy).toHaveBeenCalledWith('Logging you out');

  // Restore alert after test
  alertSpy.mockRestore();
});

test('should call logOut function when ctrl+h is pressed', () => {
  // Create a mock function for logOut prop
  const logOutMock = jest.fn();

  const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

  // Render the component with the mock logOut function
  render(<App logOut={logOutMock} />);

  fireEvent.keyDown(window, { key: 'h', ctrlKey: true });

  expect(logOutMock).toHaveBeenCalledTimes(1);

  alertSpy.mockRestore();
});
