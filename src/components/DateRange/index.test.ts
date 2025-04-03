// import { render, screen, fireEvent } from '@testing-library/react';
// import { describe, it, expect, vi } from 'vitest';
// import DateRangePicker from './index';

// describe('DateRangePicker Component', () => {
//   it('renders start and end date selectors', () => {
//     render(DateRangePicker);

//     // Check if the start and end date buttons are rendered
//     expect(screen.getByText('Select Start Date')).toBeInTheDocument();
//     expect(screen.getByText('Select End Date')).toBeInTheDocument();
//   });

//   it('toggles the calendar when start date button is clicked', () => {
//     render(DateRangePicker);

//     // Click the start date button
//     const startDateButton = screen.getByText('Select Start Date');
//     fireEvent.click(startDateButton);

//     // Check if the calendar is displayed
//     expect(screen.getByText('Mon')).toBeInTheDocument(); // Weekday header
//     expect(screen.getByText('Tue')).toBeInTheDocument();
//   });

//   it('selects a date and updates the start date', () => {
//     const setFilterMock = vi.fn();
//     render(DateRangePicker);

//     // Open the calendar
//     const startDateButton = screen.getByText('Select Start Date');
//     fireEvent.click(startDateButton);

//     // Select a date (e.g., 15th)
//     const dateButton = screen.getByText('15');
//     fireEvent.click(dateButton);

//     // Check if the start date is updated
//     expect(screen.getByText(/15/)).toBeInTheDocument();
//     expect(setFilterMock).toHaveBeenCalledWith(
//       expect.objectContaining({ dateStart: expect.any(String) })
//     );
//   });

//   it('toggles the calendar when end date button is clicked', () => {
//     render(DateRangePicker);

//     // Click the end date button
//     const endDateButton = screen.getByText('Select End Date');
//     fireEvent.click(endDateButton);

//     // Check if the calendar is displayed
//     expect(screen.getByText('Mon')).toBeInTheDocument(); // Weekday header
//     expect(screen.getByText('Tue')).toBeInTheDocument();
//   });
// });
