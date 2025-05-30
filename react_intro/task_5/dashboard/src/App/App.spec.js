import { render, screen } from "@testing-library/react";
import App from "./App";

test('h1 element with the text School Dashboard is rendered', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /School Dashboard/i });
  expect(heading).toBeInTheDocument();
});

test('the text content within the 2 p elements in the app-body and app-footer divs matches', () => {
  render(<App />);
  const divbody = screen.getByText(/Login to access the full dashboard/i);
  const divfooter = screen.getByText(/Copyright 2025 - holberton School/i);

  expect(divbody).toBeInTheDocument();
  expect(divfooter).toBeInTheDocument();
});

test('an img element is rendered', () => {
  render(<App />);
  const image = screen.getByAltText(/holberton logo/i);
  expect(image).toBeInTheDocument();
});

test('renders 2 input elements', () => {
  render(<App />);
  const labelemail = screen.getByLabelText(/Email/i);
  const labelpassword = screen.getByLabelText(/Password/i);

  expect(labelemail).toBeInTheDocument();
  expect(labelpassword).toBeInTheDocument();
});

test('renders 2 label elements with the text Email and Password', () => {
  render(<App />);
  const labelemail = screen.getByLabelText(/email/i);
  const labelpassword = screen.getByLabelText(/password/i);

  expect(labelemail).toBeInTheDocument();
  expect(labelpassword).toBeInTheDocument();
});

test('renders a button with the text OK', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /ok/i });

  expect(button).toBeInTheDocument();
});

