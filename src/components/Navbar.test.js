import { fireEvent, render, screen } from '@testing-library/react';
import * as router from 'react-router';
import { MemoryRouter } from 'react-router-dom';

import Navbar from './Navbar';

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
});

describe('navbar component tests', () => {
  test('must call the  links when the user clicks on the <a> tags', () => {
    render(

      <MemoryRouter>
        <Navbar />

      </MemoryRouter>,

    );

    const calculatorLink = screen.getByText('Calculator', { selector: 'a' });
    fireEvent.click(calculatorLink);
    const homeLink = screen.getByText('Home', { selector: 'a' });
    fireEvent.click(homeLink);
    const quoteLink = screen.getByText('Quotes', { selector: 'a' });
    fireEvent.click(quoteLink);

    expect(navigate).toHaveBeenCalledWith('/', { replace: true });
    expect(navigate).toHaveBeenCalledWith('/calculator', { replace: false });
    expect(navigate).toHaveBeenCalledWith('/quotes', { replace: false });
  });

  test('active class is applied when the link is active', () => {
    render(
      <MemoryRouter initialEntries={['/Calculator']}>
        <Navbar />
      </MemoryRouter>,
    );

    const calculatorLink = screen.getByText('Calculator', { selector: 'a' });
    expect(calculatorLink).toHaveClass('active');
  });

  test('active class is not applied when the link is not active', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Navbar />
      </MemoryRouter>,
    );

    const calculatorLink = screen.getByText('Calculator', { selector: 'a' });
    expect(calculatorLink).not.toHaveClass('active');
  });
});
