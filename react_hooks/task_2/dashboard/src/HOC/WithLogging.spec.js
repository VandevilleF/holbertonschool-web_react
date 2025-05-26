import React from 'react';
import { render, screen } from '@testing-library/react';
import WithLogging from './WithLogging';

class MockApp extends React.Component {
  render() {
    return <h1>Hello from Mock App Component</h1>;
  }
}

const MockAppWithLogging = WithLogging(MockApp);

test('renders the wrapped component content', () => {
  render(<MockAppWithLogging />);

  const heading = screen.getByRole('heading', { level: 1, name: /hello from mock app component/i });
  expect(heading).toBeInTheDocument();
});
