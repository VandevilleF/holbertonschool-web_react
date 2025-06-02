import { render, screen } from "@testing-library/react";
import { getCurrentYear, getFooterCopy } from "../../utils/utils";
import Footer from "./Footer";

test('the text content within the 2 p elements in the app-body and app-footer divs matches', () => {
  render(<Footer />);
  const divfooter = screen.getByText(/Copyright 2025 - holberton School/i);

  expect(divfooter).toBeInTheDocument();
});

test('renders correct footer content when isIndex is true', () => {
  render(<Footer />);

  const year = getCurrentYear();
  const copy = getFooterCopy(true);
  const expectedText = `Copyright ${year} - ${copy}`;

  const footerText = screen.getByText(expectedText, { exact: false });
  expect(footerText).toBeInTheDocument();
});
describe('Footer component', () => {
  test('does not display "Contact us" link when user is logged out', () => {
    const mockuser = {
      email: '',
      password: '',
      isLoggedIn: false,
    };

    render(<Footer user={ mockuser } />);

    const link = screen.queryByText(/contact us/i);
    expect(link).not.toBeInTheDocument();
  });

  test('displays "Contact us" link when user is logged in', () => {
    const mockuser = {
      email: 'test@example.com',
      password: 'pass',
      isLoggedIn: true,
    };

    render(<Footer user={ mockuser } />);

    const link = screen.getByText(/contact us/i);
    expect(link).toBeInTheDocument();
    expect(link.tagName.toLowerCase()).toBe('a');
  });
});
