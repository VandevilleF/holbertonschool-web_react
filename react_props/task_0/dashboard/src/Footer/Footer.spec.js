import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test('the text content within the 2 p elements in the app-body and app-footer divs matches', () => {
  render(<Footer />);
  const divfooter = screen.getByText(/Copyright 2025 - holberton School/i);

  expect(divfooter).toBeInTheDocument();
});
