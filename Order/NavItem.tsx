import * as React from 'react';
import { NavItemProps } from './types';

export const NavItem: React.FC<NavItemProps> = ({ label, isActive }) => {
  return (
    <div className="flex flex-col justify-center items-center whitespace-nowrap min-h-[66px]">
      <div>{label}</div>
      {isActive && (
        <div className="shrink-0 self-end mt-5 mr-0 bg-black border border-black border-solid h-[3px]" />
      )}
    </div>
  );
};
