import Image from "next/image";
import StarSvg from "../assets/img/star.svg";
import { Paragraph } from "./Text";

interface ChallengeListItemProps {
  text: string;
}

const ChallengeListItem: React.FC<ChallengeListItemProps> = ({ text }) => (
  <div className="items-center flex gap-2 mt-3">
    <Image src={StarSvg} alt="star" />
    <Paragraph className="text-gray text-xl leading-8 font-medium">
      {text}
    </Paragraph>
  </div>
);

const ChallengeList: React.FC = () => {
  return (
    <div>
      <ChallengeListItem text="No Time Limit" />
      <ChallengeListItem text="Balance Based Drawdown" />
      <ChallengeListItem text="15% Profit Share from Challenge Phase" />
    </div>
  );
};

export default ChallengeList;
