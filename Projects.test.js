import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { getByText } from '@testing-library/jest-dom/extend-expect';
import Projects from './pages/Projects'; // Update the path to match your actual file structure
import API from './api/hello'; // Update the path to match your actual file structure

describe('Projects component', () => {
  it('displays an error message when API does not return data', async () => {
    // Mock the API response
    jest.spyOn(API, 'getrepos').mockResolvedValue({ data: [] });

    // Render the component
    const { getByText } = render(<Projects />);

    // Wait for the component to render and the error message to appear
    await waitFor(() => {
      expect(getByText('API is not currently returning any data.')).toBeInTheDocument();
    });
  });
});
