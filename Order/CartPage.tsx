import * as React from 'react';
import { NavItem } from './NavItem';
import { CartItem } from './CartItem';
import { OrderSummaryItem } from './OrderSummaryItem';

const navItems = [
  { label: 'home' },
  { label: 'login' },
  { label: 'register' },
  { label: 'product' },
  { label: 'order', isActive: true },
  { label: 'Payment' },
  { label: 'user details' }
];

export const CartPage: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col items-start px-10 pb-44 bg-white max-md:px-5 max-md:pb-24">
      <div className="flex flex-wrap gap-10 items-center ml-4 w-full text-black max-md:max-w-full">
        <div className="grow shrink self-stretch my-auto text-2xl font-bold tracking-wider leading-none w-[142px]">
          Online shop
        </div>
        <div className="flex flex-wrap gap-10 self-stretch text-base text-center capitalize max-md:max-w-full">
          {navItems.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6d2c0d899c1a409c2818470ec2a26e9d0bbd4e21c28ed407c97c0085ed0526b?placeholderIfAbsent=true&apiKey=4385c741b6a740cbb15f37d7bfe806cd"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
        />
      </div>
      
      <div className="mt-16 text-4xl font-bold tracking-widest leading-none text-black uppercase max-md:mt-10">
        Your cart
      </div>
      
      <div className="self-stretch mt-6 max-md:mr-1 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
            <CartItem
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/86c759a7a16bcbb36d7d26216bb6989397205d3532c82c3b8accc5584144377c?placeholderIfAbsent=true&apiKey=4385c741b6a740cbb15f37d7bfe806cd"
              title="Gradient Graphic T-shirt"
              size="Large"
              color="White"
              price={145}
              onDelete={() => {}}
            />
          </div>
          
          <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden flex-col px-6 pt-5 pb-24 w-full rounded-3xl border border-solid border-black border-opacity-10 min-h-[458px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-2xl font-black text-black">Order Summary</div>
              <div className="flex flex-col mt-6 w-full max-md:max-w-full">
                <OrderSummaryItem label="Subtotal" amount="$145" />
                <div className="mt-5">
                  <OrderSummaryItem label="Discount (-20%)" amount="-$15" isNegative />
                </div>
                <div className="mt-5">
                  <OrderSummaryItem label="Delivery Fee" amount="$15" />
                </div>
                <div className="mt-5 w-full min-h-0 border border-solid border-black border-opacity-10 max-md:max-w-full" />
                <div className="flex gap-10 justify-between items-center mt-5 w-full font-black text-black whitespace-nowrap max-md:max-w-full">
                  <div className="self-stretch my-auto text-xl">Total</div>
                  <div className="self-stretch my-auto text-2xl text-right">$145</div>
                </div>
              </div>
              
              <button className="flex overflow-hidden gap-3 justify-center items-center px-14 py-5 mt-6 w-full text-base font-medium text-white bg-black rounded min-h-[60px] max-md:px-5 max-md:max-w-full">
                <span className="self-stretch my-auto">Go to Checkout</span>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/126f6373b7bfcaf37bfd41f34339db929d71788bb1e6eb8a6385232fc988cd74?placeholderIfAbsent=true&apiKey=4385c741b6a740cbb15f37d7bfe806cd"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};