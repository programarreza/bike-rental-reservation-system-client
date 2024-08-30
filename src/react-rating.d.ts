declare module "react-rating" {
  import * as React from "react";

  export interface RatingProps {
    emptySymbol?: React.ReactNode;
    fullSymbol?: React.ReactNode;
    fractions?: number;
    initialRating?: number;
    readonly?: boolean;
    onChange?: (rating: number) => void;
  }

  const Rating: React.FC<RatingProps>;

  export default Rating;
}
