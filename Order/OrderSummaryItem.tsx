import * as React from 'react';
import { OrderSummaryItemProps } from './types';

export const OrderSummaryItem: React.FC<OrderSummaryItemProps> = ({ label, amount, isNegative }) => {
  return (
    <div className="flex gap-10 justify-between items-center w-full text-xl whitespace-nowrap max-md:max-w-full">
      <div className="self-stretch my-auto text-black text-opacity-60">{label}</div>
      <div className={`self-stretch my-auto font-black text-right ${isNegative ? 'text-red-500' : 'text-black'}`}>
        {amount}
      </div>
    </div>
  );
};
