import React, { useState, useRef, useEffect } from 'react';
import './CustomDropdown.css';

interface Option {
  value: string;
  label: string;
  imageUrl: string;
}

interface CustomDropdownProps {
  options: Option[];
  value: Option | null;
  onChange: (value: Option) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option: Option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        {value ? (
          <>
            <img src={value.imageUrl} alt={value.label} className="option-image" />
            <span className="option-label">{value.label}</span>
          </>
        ) : (
          'Select an option'
        )}
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </div>
      {isOpen && (
        <div className="dropdown-list">
          {options.map(option => (
            <div
              key={option.value}
              className="dropdown-option"
              onClick={() => handleOptionClick(option)}
            >
              <img src={option.imageUrl} alt={option.label} className="option-image" />
              <span className="option-label">{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;