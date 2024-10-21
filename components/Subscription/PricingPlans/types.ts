export interface PricingPlan {
  title: string;
  price: string;
  originalPrice?: string;
  description: string;
  buttonText: string;
  disclaimer: string;
  isPopular: boolean;
  discountCode: string | null;
  variant: "default" | "highlighted";
}
