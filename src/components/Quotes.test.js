import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Quotes from './Quotes';

describe('Quotes', () => {
  test('displays loading message while fetching data', async () => {
    render(<Quotes />);
    expect(screen.getByText('Loading...')).toBeTruthy();
  });

  test('displays error message when data fetch fails', async () => {
    jest.spyOn(window, 'fetch').mockRejectedValueOnce(new Error('Network response was not ok'));
    render(<Quotes />);
    await waitFor(() => expect(screen.getByText('Something went wrong!')).toBeInTheDocument());
  });

  test('renders a quote', async () => {
    const mockResponse = [
      {
        quote: 'Quote 1',
        author: 'Author 1',
      },
    ];
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: () => Promise.resolve(mockResponse),
      ok: true,
    });

    render(<Quotes />);
    const quoteText = await screen.findByText('Quote 1');
    const authorText = await screen.findByText('Author 1');
    expect(quoteText).toBeInTheDocument();
    expect(authorText).toBeInTheDocument();
  });
});
