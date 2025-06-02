import { render, screen } from '@testing-library/react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';


describe('BodySectionWithMarginBottom component', () => {
  test('renders the BodySection component', () => {
    render(
      <BodySectionWithMarginBottom title="Test">
        <p>Child</p>
      </BodySectionWithMarginBottom>
    );

    const heading = screen.getByRole('heading', { level: 2, name: /Test/i });
    const content = screen.getByText(/child/i);
    expect(heading).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });
});
