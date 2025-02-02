import * as React from "react";
import { RatingDisplayProps } from "../types";

export const RatingDisplay: React.FC<RatingDisplayProps> = ({ rating, reviews }) => {
  return (
    <div className="flex gap-2 items-start mt-2 text-sm font-semibold text-black whitespace-nowrap">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f79bd71a6471f38d5d1fc5e45c151fa99346fc4a5342fd2b25d87f1e68ade395?placeholderIfAbsent=true&apiKey=4385c741b6a740cbb15f37d7bfe806cd"
        className="object-contain shrink-0 aspect-[5] w-[100px]"
        alt={`${rating} out of 5 stars`}
      />
      <div className="w-8 opacity-50">({reviews})</div>
    </div>
  );
};