import React, { useState } from 'react';
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { DateRangePickerProps } from '../../types';

const DateRangePicker: React.FC<DateRangePickerProps> = ({ setFilter, filters }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [activeDate, setActiveDate] = useState<'start' | 'end' | null>(null);

  // Helper to format date
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  // Go to previous month
  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  // Go to next month
  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  // Select a date
  const selectDate = (day: number) => {
    const selected = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(day);
    const formattedDate = formatDate(selected);

    if (activeDate === 'start') {
      setStartDate(formattedDate);
      setFilter({ ...filters, dateStart: formattedDate });
    } else if (activeDate === 'end') {
      setEndDate(formattedDate);
      setFilter({ ...filters, dateEnd: formattedDate });
    }

    setShowCalendar(false); // Hide calendar after selection
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const days = [];
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const daysInMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();

    // Add empty slots for days before the first day of the month
    for (let i = 0; i < (firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1); i++) {
      days.push(<div key={`empty-${i}`} className="h-12 w-12"></div>);
    }

    // Add actual days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <div
          key={i}
          onClick={() => selectDate(i)}
          className={`flex items-center justify-center h-12 w-12 cursor-pointer ${
            i === selectedDate
              ? 'bg-black text-white rounded-full'
              : 'hover:bg-gray-100 rounded-full'
          }`}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="w-full max-w-3xl relative mt-1">
      <div className="flex gap-4">
        {/* Start date selector */}
        <button
          className={`flex-1 px-4 py-2 ${
            activeDate === 'start' ? 'border-2 border-black' : 'bg-gray-100'
          } rounded-md flex justify-between items-center`}
          onClick={() => {
            setShowCalendar(!showCalendar);
            setActiveDate('start');
          }}
        >
          <span className="text-sm">{startDate || 'Select Start Date'}</span>
          <ChevronUp size={24} />
        </button>

        {/* End date selector */}
        <button
          onClick={() => {
            setShowCalendar(!showCalendar);
            setActiveDate('end');
          }}
          className={`flex-1 px-4 py-2 ${
            activeDate === 'end' ? 'border-2 border-black' : 'bg-gray-100'
          } rounded-md flex justify-between items-center`}
        >
          <span className="text-sm">{endDate || 'Select End Date'}</span>
          <ChevronDown size={24} />
        </button>
      </div>

      {/* Calendar */}
      {showCalendar && (
        <div className="bg-white rounded-3xl shadow-lg p-6 mb-4 absolute left-0 top-14 z-50">
          {/* Calendar header */}
          <div className="flex justify-between items-center mb-8">
            <button onClick={prevMonth} className="p-2">
              <ChevronLeft size={24} />
            </button>
            <h3 className="text-sm font-medium">
              {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </h3>
            <button onClick={nextMonth} className="p-2">
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Weekday headers */}
          <div className="grid grid-cols-7 mb-4">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
              <div key={day} className="text-center text-gray-500">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-y-4">{generateCalendarDays()}</div>
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;
