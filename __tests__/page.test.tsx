import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../app/page';

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt} />;
  },
}));

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />);

    const heading = screen.getByText('TP 7 - Plan de desarrollo y mantenimiento');
    expect(heading).toBeInTheDocument();
  });

  it('renders the main element', () => {
    render(<Home />);

    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });

  it('has correct CSS classes', () => {
    render(<Home />);

    const main = screen.getByRole('main');
    expect(main).toHaveClass('flex', 'flex-col', 'gap-[32px]');
  });
});
