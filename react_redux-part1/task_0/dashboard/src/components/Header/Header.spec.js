import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('renders an h1 with "School dashboard"', () => {
  const user = { email: '', password: '', isLoggedIn: false };
  const logOut = jest.fn();

  render(<Header user={ user } logOut={ logOut } />);
  const heading = screen.getByRole('heading', { name: /school dashboard/i });
  expect(heading).toBeInTheDocument();
});

test('renders the logo image', () => {
  const user = { email: '', password: '', isLoggedIn: false };
  const logOut = jest.fn();

  render(<Header user={ user } logOut={ logOut } />);
  const image = screen.getByAltText(/holberton logo/i);
  expect(image).toBeInTheDocument();
});

test('does not render logout section when user is not logged in', () => {
  const user = { email: '', password: '', isLoggedIn: false };
  const logOut = jest.fn();

  render(<Header user={ user } logOut={ logOut } />);

  const logoutSection = screen.queryByText(/logout/i);
  expect(logoutSection).not.toBeInTheDocument();
});

test('renders logout section when user is logged in', () => {
  const user = { email: 'user@example.com', password: 'password123', isLoggedIn: true };
  const logOut = jest.fn();

  render(<Header user={ user } logOut={ logOut } />);

  expect(screen.getByText(/Welcome user@example.com/i)).toBeInTheDocument();
  expect(screen.getByText(/logout/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /logout/i })).toBeInTheDocument();
});

test('calls logOut function when logout link is clicked', () => {
  const user = { email: 'user@example.com', password: 'password123', isLoggedIn: true };
  const logOut = jest.fn();

  render(<Header user={ user } logOut={ logOut } />);

  const logoutLink = screen.getByRole('link', { name: /logout/i });
  fireEvent.click(logoutLink);

  expect(logOut).toHaveBeenCalled();
});
