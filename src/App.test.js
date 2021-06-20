import { render, screen } from '@testing-library/react';
import App from './App';

//TODO: Add more tests
test('renders app', () => {
  render(<App />);
  const appWrapper = screen.queryByTestId('App')
  expect(appWrapper).toBeInTheDocument();
});

