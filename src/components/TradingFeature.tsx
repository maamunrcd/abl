import Image from "next/image";
import BlobIcon from "../assets/img/blob.svg";
import GroupOneIcon from "../assets/img/group-1.svg";
import GroupTwpIcon from "../assets/img/group-2.svg";
import GroupThreeIcon from "../assets/img/group-3.svg";
import GroupFourIcon from "../assets/img/group-4.svg";
import HomeGridImgAlt from "../assets/img/home-grid-bg-alt.png";
import Card from "./Card";
import { H2 } from "./Heading";
import ImageStack from "./ImageStack";
import Review from "./Review";
import { Paragraph } from "./Text";

const cardsData = [
  {
    isActive: false,
    icon: GroupThreeIcon,
    imgSrc: HomeGridImgAlt,
    title: "Balance Drawdown Performance Overview",
    description:
      "Daily drawdown uses balance, not equity, for utmost prop firm reliability.",
    gradientBg: "linear-gradient(91deg, #3F68FF 0%, #CD63FF 100%)",
  },
  {
    isActive: false,
    icon: GroupFourIcon,
    imgSrc: HomeGridImgAlt,
    title: "No Time Limit on Challenge Phase",
    description:
      "Daily drawdown uses balance, not equity, for utmost prop firm reliability.",
    gradientBg: "linear-gradient(91deg, #3F68FF 0%, #CD63FF 100%)",
  },
  {
    isActive: true,
    icon: GroupOneIcon,
    imgSrc: HomeGridImgAlt,
    title: "15% Profit Sharing from Challenge Phase",
    description:
      "FundedNext is the only prop firm to offer a 15% profit sharing from the profit you make",
    gradientBg: "linear-gradient(91deg, #3F68FF 0%, #CD63FF 100%)",
  },
  {
    isActive: false,
    icon: GroupTwpIcon,
    imgSrc: HomeGridImgAlt,
    title: "Competitive Low Commission Rates",
    description:
      "FundedNext offers raw spread with Swap Free: World's best prop trading conditions.",
    gradientBg: "linear-gradient(91deg, #3F68FF 0%, #CD63FF 100%)",
  },
];

export default function TradingFeature() {
  return (
    <section className="bg-indigo-50 relative">
      <div className="container flex pt-20 pb-10 mx-auto items-center sm:flex-col md:flex-col lg:flex-row xl:flex-row px-6">
        <div className="flex flex-col sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
          <H2 className="text-dark">What Makes FundedNext Different?</H2>
          <Paragraph className="text-darkLight text-xl leading-8 font-normal mt-5">
            FundedNext offers no time limits in its funding challenges.
          </Paragraph>
          <div className="flex justify-start gap-3 mt-9">
            <ImageStack count={3} />
            <Review rating={4.9} reviewCount={1500} />
          </div>
        </div>
        <div className="flex sm:w-full md:w-full lg:w-1/2 xl:w-1/2 sm:flex-col md:flex-col lg:flex-row xl:flex-row sm:mt-10 md:mt-10">
          <div className="flex flex-col sm:w-full md:w-full lg:w-1/2 xl:w-1/2 lg:ml-5 xl:ml-5">
            <Card {...cardsData[2]} />
            <Card {...cardsData[3]} />
          </div>
          <div className="flex flex-col sm:w-full md:w-full lg:w-1/2 xl:w-1/2 lg:ml-5 xl:ml-5 sm:mt-5 md:mt-5 lg:mt-10 xl:mt-10">
            <Card {...cardsData[0]} />
            <Card {...cardsData[1]} />
          </div>
        </div>
      </div>
      <Image
        src={BlobIcon}
        alt="blob icon"
        className="absolute bottom-10 left-20"
      />
    </section>
  );
}
