import React from "react";
import DiscordIcon from "../assets/img/discord.svg";
import { H2 } from "./Heading";
import { Button } from "./ui/button";
import Image from "next/image";

const CommunitySection: React.FC = () => (
  <div className="border-b-[color:var(--Gray-600,#475467)] flex gap-5 mt-3.5 mx-8 pb-12 border-b border-solid items-center sm:flex-col md:flex-col lg:flex-row xl:flex-row sm:justify-start md:justify-start lg:justify-between xl:justify-between">
    <H2 className="text-white w-2/4 sm:w-full md:w-full">
      Join the Global Community for the Traders ✌️
    </H2>
    <div className="flex gap-2.5 p-4 rounded-xl sm:mr-auto md:mr-auto w-2/4 mx-auto justify-end sm:w-full md:w-full">
      <Button className="flex items-center py-4">
        Join our Discord
        <Image src={DiscordIcon} alt="discord icon" className="ml-2" />
      </Button>
    </div>
  </div>
);

export default CommunitySection;
