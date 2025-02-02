export interface ProductCardProps {
    name: string;
    currentPrice: number;
    originalPrice?: number;
    rating: number;
    reviews: number;
    imageSrc: string;
  }
  
  export interface RatingDisplayProps {
    rating: number;
    reviews: number;
  }
  
  export interface NavigationItemProps {
    label: string;
    isActive?: boolean;
  }