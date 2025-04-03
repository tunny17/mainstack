import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown, Check } from 'lucide-react';
import { CheckboxDropdownProps } from '../../types';

const CheckboxDropdown: React.FC<CheckboxDropdownProps> = ({
  placeholder = 'Select options',
  options = [],
  selectedValues = {} as Record<string, boolean>,
  onChange,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Record<string, boolean>>(selectedValues);

  // Update local state when selectedValues prop changes
  useEffect(() => {
    setSelected(selectedValues);
  }, [selectedValues]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const toggleOption = (label: string) => {
    const option = options.find((opt) => opt.label === label);
    if (!option) return;

    const newSelected = {
      ...selected,
      [option.id]: !selected[option.id]
    };

    setSelected(newSelected);

    if (onChange) {
      onChange(newSelected);
    }
  };

  const getDisplayText = () => {
    if (Object.keys(selected).length === 0 || !options.length) {
      return placeholder;
    }

    const selectedItems = options
      .filter((option) => selected[option.id])
      .map((option) => option.label);

    if (selectedItems.length === 0) {
      return placeholder;
    }

    const displayText = selectedItems.join(', ');
    return displayText.length > 35 ? displayText.substring(0, 35) + '...' : displayText;
  };

  return (
    <div className={`relative w-full mt-1 ${className}`}>
      {/* Dropdown Header */}
      <button
        onClick={toggleDropdown}
        className="w-full px-4 py-2 border-2 border-black rounded-lg flex justify-between items-center"
        type="button"
      >
        <span className="text-sm truncate pr-2">{getDisplayText()}</span>
        {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="absolute w-full mt-2 bg-white rounded-md shadow-sm border-gray-200 overflow-hidden z-10">
          <div className="p-4 space-y-6">
            {options.map((option) => (
              <div
                key={option.id}
                className="flex items-center space-x-3 cursor-pointer text-sm"
                onClick={() => toggleOption(option.label)}
              >
                <div
                  className={`flex items-center justify-center w-6 h-6 ${
                    selected[option.id] ? 'bg-black' : 'border-2 border-black'
                  } rounded-sm`}
                >
                  {selected[option.id] && <Check size={16} color="white" />}
                </div>
                <span className="text-sm">{option.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckboxDropdown;
