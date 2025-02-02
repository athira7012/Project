import * as React from "react";
import { ProductCardProps } from "../types";
import { RatingDisplay } from "./RatingDisplay";

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  currentPrice,
  originalPrice,
  rating,
  reviews,
  imageSrc
}) => {
  return (
    <div className="flex flex-col min-w-[240px] w-[270px]">
      <div className="flex overflow-hidden flex-col pt-3 pr-3 pb-14 pl-7 max-w-full rounded bg-neutral-100 w-[270px] max-md:pl-5">
        <div className="flex flex-col self-end w-[34px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/00d93adab53c5214ab1a164999c542db25c2e68622e0085e7c9140fbeae9a9e5?placeholderIfAbsent=true&apiKey=4385c741b6a740cbb15f37d7bfe806cd"
            className="object-contain w-full aspect-square"
            alt=""
          />
        </div>
        <img
          loading="lazy"
          src={imageSrc}
          className="object-contain self-center mt-1.5 max-w-full aspect-[0.96] w-[140px]"
          alt={name}
        />
      </div>
      <div className="flex flex-col self-start mt-4 text-base">
        <div className="font-black text-black">{name}</div>
        <div className="flex gap-3 items-start self-start mt-2 font-medium whitespace-nowrap">
          <div className="text-zinc-800">${currentPrice}</div>
          {originalPrice && <div className="text-black opacity-50">${originalPrice}</div>}
        </div>
        <RatingDisplay rating={rating} reviews={reviews} />
      </div>
    </div>
  );
};