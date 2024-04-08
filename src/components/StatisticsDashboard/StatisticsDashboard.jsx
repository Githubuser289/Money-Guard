import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Select, { components } from 'react-select';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import { getSummary } from '../../redux/operations';
import {
  DashboardContainer,
  SelectContainer,
  SelectWrapper,
} from './StatisticsDashboard.styled';

const StatisticsDashboard = () => {
  // Initialize current month and year
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  // Generate an array of months and years
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const startingYear = 2020;
  const years = Array.from(
    { length: currentYear - startingYear + 1 },
    (_, i) => startingYear + i
  );

  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const dispatch = useDispatch();

  // Event handlers for month and year selection
  const handleMonthChange = selectedOption => {
    setSelectedMonth(selectedOption.value);
    dispatch(getSummary({ month: selectedOption.value, year: selectedYear }));
  };
  const handleYearChange = selectedOption => {
    setSelectedYear(selectedOption.value);
    dispatch(getSummary({ month: selectedMonth, year: selectedOption.value }));
  };

  // Fetch summary data when selected month or year changes
  useEffect(() => {
    dispatch(getSummary({ month: selectedMonth, year: selectedYear }));
  }, [dispatch, selectedMonth, selectedYear]);

  const selectStyle = {
    container: styles => ({
      ...styles,
      fontFamily: "'Poppins-Regular', sans-serif",
      width: '280px',
      height: '50px',
      paddingLeft: '16px',
      cursor: 'pointer',
      appearance: 'none',
      '@media (min-width: 768px)': {
        width: '215px',
        padding: '10px',
        paddingRight: '0px',
      },
    }),
    control: styles => ({
      ...styles,
      backgroundColor: 'rgba(74, 86, 226, 0.1)',
      border: '1px solid white',
      borderRadius: '8px',
      cursor: 'pointer',
      height: '50px',
      marginBottom: '-6px',
      outline: 'none',
      paddingRight: '13px',
    }),

    singleValue: styles => ({
      ...styles,
      color: '#FBFBFB',
      fontSize: '16px',
    }),
    placeholder: styles => ({
      ...styles,
      color: 'white',
      fontSize: '16px',
    }),
    menu: styles => ({
      ...styles,
      borderRadius: '8px',
      backgroundColor: 'white',
      background:
        'linear-gradient(0deg, rgba(83, 61, 186, 0.70) 0%, rgba(80, 48, 154, 0.70) 43.14%, rgba(106, 70, 165, 0.52) 73.27%, rgba(133, 93, 175, 0.13) 120.03%)',
      boxShadow: '0px 4px 60px 0px rgba(0, 0, 0, 0.25)',
      backdropFilter: 'blur(50px)',
      color: '#FBFBFB',
      fontFamily: "'Poppins-Regular', sans-serif",
      fontSize: '16px',
      fontWeight: '400',
      overflow: 'hidden',
    }),
    option: (styles, { isFocused, isSelected }) => {
      if (isFocused) {
        return {
          ...styles,
          background: '#FFFFFF1A',
          color: '#FF868D',
        };
      } else if (isSelected) {
        return {
          ...styles,
          background: 'transparent',
        };
      } else {
        return {
          ...styles,
        };
      }
    },
    menuList: base => ({
      ...base,
      '&::-webkit-scrollbar': {
        width: '6px',
      },
      '&::-webkit-scrollbar-track': {
        background: 'transparent',
      },
      '&::-webkit-scrollbar-thumb': {
        background: '#BFB4DD',
        borderRadius: '12px',
      },
    }),
  };
  useEffect(() => {
    const separators = document.getElementsByClassName(
      'css-1u9des2-indicatorSeparator'
    );
    if (separators && separators.length > 0) {
      Array.from(separators).forEach(separator => {
        separator.style.display = 'none';
      });
    }
  }, []);

  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        {props.selectProps.menuIsOpen ? (
          <SlArrowUp size={18} label="Arrow up" color={'var(--white)'} />
        ) : (
          <SlArrowDown size={18} label="Arrow down" color={'var(--white)'} />
        )}
      </components.DropdownIndicator>
    );
  };

  return (
    <DashboardContainer>
      <SelectWrapper>
        <SelectContainer>
          <Select
            styles={selectStyle}
            options={months.map(month => ({
              value: month,
              label: new Date(0, month - 1).toLocaleString('default', {
                month: 'long',
              }),
            }))}
            value={months.find(month => month.value === selectedMonth)}
            onChange={handleMonthChange}
            components={{ DropdownIndicator }}
            isSearchable={false}
            placeholder={new Date().toLocaleString('default', {
              month: 'long',
            })}
          />
        </SelectContainer>

        <SelectContainer>
          <Select
            options={years.map(year => ({
              value: year,
              label: year.toString(),
            }))}
            value={years.find(year => year.value === selectedYear)}
            onChange={handleYearChange}
            styles={selectStyle}
            components={{ DropdownIndicator }}
            isSearchable={false}
            placeholder={currentYear}
          />
        </SelectContainer>
      </SelectWrapper>
    </DashboardContainer>
  );
};

export default StatisticsDashboard;
