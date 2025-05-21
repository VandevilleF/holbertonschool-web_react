import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('App component', () => {
  render(<App />);
});

test('should call logOut function when ctrl+h is pressed', () => {
  // Create a mock function for logOut prop
  const logOutMock = jest.fn();
  // Spy alert and mock alert popup
  const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

  // Render the component with the mock logOut function
  render(<App logOut={logOutMock} />);

  // Simulate the keydown event (Ctrl+h)
  fireEvent.keyDown(document, { key: 'h', ctrlKey: true });

  expect(alertSpy).toHaveBeenCalledWith('Logging you out');
  expect(logOutMock).toHaveBeenCalledTimes(1);

  // Restore alert after test
  alertSpy.mockRestore();
});

test('displays "Log in to continue" title when isLoggedIn is false', () => {
  render(<App />);
  const text = screen.getByText(/Log in to continue/i);
  expect(text).toBeInTheDocument();
});

test('Check that a title "News from the School" and paragraph are displayed by default', () => {
  render(<App />);

  const heading = screen.getByRole('heading', { level: 2, name: /News from the School/i });
  const paragraph = screen.getByText(/Holberton School News goes here/i);

  expect(heading).toBeInTheDocument();
  expect(paragraph).toBeInTheDocument();
});

test('displays "Course list" title when user logs in', () => {
  render(<App />);

  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const submitButton = screen.getByRole('button', { name: /ok/i });

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });
  fireEvent.click(submitButton);

  const title = screen.getByText(/Course list/i);
  expect(title).toBeInTheDocument();
});
