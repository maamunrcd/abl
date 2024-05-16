import React from "react";
import AvatarImg from "../assets/img/avatar-ali.png";
import { Paragraph } from "./Text";
import Image from "next/image";

interface ImageStackGroupProps {
  count: number;
}

const ImageStack: React.FC<ImageStackGroupProps> = ({ count }) => {
  return (
    <div className="flex -space-x-4 rtl:space-x-reverse">
      {[...Array(count)].map((_, index) => (
        <Image
          key={index}
          className="w-[55px] h-[55px] border-2 border-white rounded-full dark:border-gray-800"
          src={AvatarImg}
          alt={`AvatarImg${index}`}
        />
      ))}
      <div className="w-[55px] h-[55px] border-2 border-white rounded-full dark:border-gray-800 flex items-center justify-center bg-white">
        <Paragraph className="text-dark text-base leading-7 font-bold">
          +{count}
        </Paragraph>
      </div>
    </div>
  );
};

export default ImageStack;
