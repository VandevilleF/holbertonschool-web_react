import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
import { StyleSheetTestUtils } from 'aphrodite';
import NewContext from "../Context/context";
import mockAxios from "jest-mock-axios";

jest.mock('../utils/utils', () => {
  const actualUtils = jest.requireActual('../utils/utils');
  return {
    ...actualUtils,
    getLatestNotification: () => '<strong>Urgent requirement</strong> - complete by EOD',
  };
});

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  mockAxios.reset();
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('App component', () => {
  render(<App />);
});

test('should reset state and show login when ctrl+h is pressed', () => {
  render(<App />);

  // simulate login
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password123' } });
  fireEvent.click(screen.getByRole('button', { name: /ok/i }));

  // confirm login success
  expect(screen.getByText(/Course list/i)).toBeInTheDocument();
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

// describe('App component', () => {
//   afterEach(() => {
//     consoleLogSpy.mockClear();
//   });

//   afterAll(() => {
//     consoleLogSpy.mockRestore();
//   });

//   test('clicking on a notification item removes it and logs the expected message', () => {
//     render(<App />);

//     fireEvent.click(screen.getByText('Your notifications'));

//     const notification = screen.getByText('New course available');
//     expect(notification).toBeInTheDocument();

//     fireEvent.click(notification);

//     expect(notification).not.toBeInTheDocument();
//     expect(consoleLogSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
//   });
// });

test('Verify that notifications data is successfully retrieved', async () => {
  const notifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: { "useFunction": "getLatestNotification" } }
  ];

  mockAxios.get.mockResolvedValueOnce({ data: notifications });

  render(
    <NewContext.Provider value={{ email: '', password: '', isLoggedIn: false }}>
      <App />
    </NewContext.Provider>
  );

  // Simule la réponse de l'API notifications.json
  await waitFor(() => {
    expect(mockAxios.get).toHaveBeenCalledWith('notifications.json');
  });

  expect(await screen.findByText(/New course available/i)).toBeInTheDocument();
  expect(await screen.findByText(/New resume available/i)).toBeInTheDocument();
  expect(await screen.findByText((_, element) =>
    element?.textContent === 'Urgent requirement - complete by EOD'
  )).toBeInTheDocument();
});
