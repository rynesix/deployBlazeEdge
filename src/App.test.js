// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders deployBlaze title', () => {
    render(<App />);
    const titleElement = screen.getByText(/deployBlaze/i);
    expect(titleElement).toBeInTheDocument();
});
