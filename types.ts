export interface Chapter {
  id: number;
  title: string;
  description: string;
}

export interface PricingOption {
  title: string;
  price: number;
  features: string[];
  recommended?: boolean;
}