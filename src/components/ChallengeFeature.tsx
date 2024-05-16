import Image from "next/image";
import BlobIcon from "../assets/img/blob-big.svg";
import BlobSmallIcon from "../assets/img/blob-small.svg";
import IllustrationRight from "../assets/img/illustration-right.png";
import ChallengeList from "@/components/ChallengeList";
import { H2 } from "./Heading";
import { Button } from "./ui/button";

export default function ChallengeFeature() {
  return (
    <section className="bg-white relative">
      <div className="container flex pl-16 pr-20 pt-20 pb-48 mx-auto items-center justify-center sm:flex-col md:flex-col lg:flex-row xl:flex-row">
        <div className="flex flex-col sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
          <H2 className="text-dark">
            Introducing FundedNext Stellar Challenge 🙌
          </H2>
          <ChallengeList />
          <div className="flex justify-start mt-10">
            <Button className="py-4">Learn More</Button>
          </div>
        </div>
        <div className="flex flex-row sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
          <div className="sm:mt-5 md:mt-5 lg:pl-5 xl:pl-5">
            <Image src={IllustrationRight} alt="illustration" />
          </div>
        </div>
      </div>
      <Image
        src={BlobIcon}
        alt="blob icon"
        className="absolute bottom-10 left-10"
      />
      <Image
        src={BlobSmallIcon}
        alt="blob small icon"
        className="absolute top-0 right-5"
      />
    </section>
  );
}
