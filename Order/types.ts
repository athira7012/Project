export interface NavItemProps {
    label: string;
    isActive?: boolean;
  }
  
  export interface CartItemProps {
    image: string;
    title: string;
    size: string;
    color: string;
    price: number;
    onDelete: () => void;
  }
  
  export interface OrderSummaryItemProps {
    label: string;
    amount: string;
    isNegative?: boolean;
  }
