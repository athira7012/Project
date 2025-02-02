import * as React from "react";
import { ProductCard } from "./components/ProductCard";
import { NavigationItem } from "./components/NavigationItem";
import { products } from "./data/products";

export const ShopPage: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col px-14 pb-56 bg-white max-md:px-5 max-md:pb-24">
      <nav className="flex flex-wrap gap-10 items-center w-full text-black max-md:mr-2.5 max-md:max-w-full">
        <div className="grow shrink self-stretch my-auto text-2xl font-bold tracking-wider leading-none w-[142px]">
          Online shop
        </div>
        <div className="flex flex-wrap gap-10 self-stretch text-base text-center capitalize max-md:max-w-full">
          <NavigationItem label="home" />
          <div className="my-auto whitespace-nowrap">login</div>
          <div className="my-auto whitespace-nowrap">register</div>
          <NavigationItem label="product" isActive={true} />
          <div className="px-2 whitespace-nowrap min-h-[66px]">order</div>
          <div className="whitespace-nowrap min-h-[66px]">Payment</div>
          <div className="min-h-[66px]">user details</div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6d2c0d899c1a409c2818470ec2a26e9d0bbd4e21c28ed407c97c0085ed0526b?placeholderIfAbsent=true&apiKey=4385c741b6a740cbb15f37d7bfe806cd"
          className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
          alt=""
        />
      </nav>
      <main className="flex flex-col mt-7 max-md:max-w-full">
        <div className="flex items-end self-start">
          <div className="flex flex-col">
            <div className="flex gap-4 items-center w-5">
              <div className="flex self-stretch my-auto w-5 min-h-[40px]" />
            </div>
            <h1 className="mt-5 text-4xl font-bold tracking-widest leading-none text-black uppercase">
              Products
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 items-start mt-16 max-md:mt-10 max-md:max-w-full">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
};