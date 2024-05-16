import React from "react";
import ReviewStarIcon from "../assets/img/review-star.svg";
import { Paragraph } from "./Text";
import Image from "next/image";

interface ReviewProps {
  rating: number;
  reviewCount: number;
}

const Review: React.FC<ReviewProps> = ({ rating, reviewCount }) => {
  return (
    <div className="flex flex-col pb-1.5">
      <Paragraph className="text-dark text-lg leading-7 font-semibold">
        Our Happy Traders
      </Paragraph>
      <div className="flex items-center justify-start">
        <Image src={ReviewStarIcon} alt="review start" />
        <div className="flex ml-2">
          <Paragraph className="text-dark text-base leading-7 font-medium">
            {rating}
          </Paragraph>
          <Paragraph className="text-gray text-base leading-7 font-medium ml-1">
            ({reviewCount} reviews)
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default Review;
