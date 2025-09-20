import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Test básico para verificar que Jest funciona
describe('Example Test', () => {
  it('should pass a basic test', () => {
    expect(1 + 1).toBe(2);
  });

  it('should render a simple component', () => {
    const TestComponent = () => <div>Hello World</div>;
    render(<TestComponent />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
