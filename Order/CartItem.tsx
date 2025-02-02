import * as React from 'react';
import { CartItemProps } from './types';

export const CartItem: React.FC<CartItemProps> = ({ image, title, size, color, price, onDelete }) => {
  return (
    <div className="flex overflow-hidden flex-col justify-center px-6 py-5 w-full rounded-3xl border border-solid border-black border-opacity-10 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full">
        <img
          loading="lazy"
          src={image}
          alt={title}
          className="object-contain shrink-0 self-stretch my-auto rounded-lg aspect-square w-[124px]"
        />
        <div className="flex flex-1 shrink gap-1 justify-between items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col justify-between self-stretch my-auto text-black min-h-[118px] min-w-[240px]">
            <div className="flex flex-col">
              <div className="text-xl font-black">{title}</div>
              <div className="flex flex-col self-start text-sm">
                <div>Size: <span className="text-black">{size}</span></div>
                <div className="mt-1">Color: <span className="text-black">{color}</span></div>
              </div>
            </div>
            <div className="mt-3 text-2xl font-black">${price}</div>
          </div>
          <div className="flex shrink-0 self-stretch my-auto w-6 h-6" />
          <button
            onClick={onDelete}
            className="overflow-hidden gap-3 self-stretch px-4 py-4 my-auto text-base font-bold text-white whitespace-nowrap bg-red-400 rounded-md min-h-[48px] w-[132px]"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
