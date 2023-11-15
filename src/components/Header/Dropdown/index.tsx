import React from 'react';
import 'react-dropdown/style.css';
import { LayoutContainer } from './styles';

interface DropdownMenuProps {
  options: string[];
  title: string;
}

const CustomDropdownMenu: React.FC<DropdownMenuProps> = ({ options, title }) => {
  return (
    <LayoutContainer options={options} value={title} placeholder={`Select ${title}`} />
  );
};

export default CustomDropdownMenu;
