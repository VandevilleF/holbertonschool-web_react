
import React from 'react';
import { render, screen } from '@testing-library/react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('BodySectionWithMarginBottom component', () => {
  test('contains a div with the class bodySectionWithMargin', () => {
    const { container } = render(
      <BodySectionWithMarginBottom title="Test">
        <p>Child</p>
      </BodySectionWithMarginBottom>
    );

    const div = container.querySelector('.bodySectionWithMargin');
    expect(div).toBeInTheDocument();
  });

  test('renders the BodySection component', () => {
    render(
      <BodySectionWithMarginBottom title="Test">
        <p>Child</p>
      </BodySectionWithMarginBottom>
    );

    const heading = screen.getByRole('heading', { level: 2, name: /Test/i });
    expect(heading).toBeInTheDocument();
  });
});
