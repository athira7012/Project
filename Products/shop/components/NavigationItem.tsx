import * as React from "react";
import { NavigationItemProps } from "../types";

export const NavigationItem: React.FC<NavigationItemProps> = ({ label, isActive }) => {
  return (
    <div className="flex flex-col py-px my-auto">
      <div>{label}</div>
      {isActive && (
        <div className="z-10 shrink-0 w-12 h-px bg-black border border-black border-solid max-md:mr-2" />
      )}
    </div>
  );
};