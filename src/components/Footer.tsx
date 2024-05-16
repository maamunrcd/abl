import Image from "next/image";
import CallIcon from "../assets/img/call.svg";
import DiscordIcon from "../assets/img/discord.svg";
import FacebookIcon from "../assets/img/facebook.svg";
import LinkedinIcon from "../assets/img/linkedin.svg";
import SmsIcon from "../assets/img/sms.svg";
import TwitterIcon from "../assets/img/twitter.svg";
import { H6 } from "./Heading";
import { Paragraph } from "./Text";
import CommunitySection from "./CommunitySection";
import Link from "next/link";
// import CommunitySection from "./core/CommunitySection";

export default function Footer() {
  return (
    <footer className="bg-body">
      <div className="flex flex-col py-12 sm:w-full md:w-full lg:px-20 xl:px-20">
        <CommunitySection />
        <div className="mt-16 mx-8">
          <div className="gap-5 flex sm:flex-col md:flex-col lg:flex-row xl:flex-row">
            <div className="flex flex-col sm:w-full md:w-full lg:w-1/4 xl:w-1/4">
              <Paragraph className="paragraph text-base text-white">
                Empowering global traders with unrivalled financial support.
                Navigate markets confidently with our innovative funding models
                and expert guidance.
              </Paragraph>
              <ul className="flex items-center mt-8 text-white">
                <li className="inline-block mr-5">
                  <Link href="/twitter">
                    <Image src={TwitterIcon} alt="twitter-icon"></Image>
                  </Link>
                </li>
                <li className="inline-block mr-5">
                  <Link href="/linkdin">
                    <Image src={LinkedinIcon} alt="twitter-icon"></Image>
                  </Link>
                </li>
                <li className="inline-block mr-5">
                  <Link href="/facebook">
                    <Image src={FacebookIcon} alt="facebook-icon"></Image>
                  </Link>
                </li>
                <li className="inline-block mr-5">
                  <Link href="/facebook">
                    <Image src={DiscordIcon} alt="fi-icon"></Image>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:w-full md:w-full lg:w-1/4 xl:w-1/4 text-white">
              <H6 className="text-xl">Important Link</H6>
              <ul className="footer-list mt-4">
                <li className="py-2">
                  <Link href="">Overview</Link>
                </li>
                <li className="py-2">
                  <Link href="">Affiliate Partner</Link>
                </li>
                <li className="py-2">
                  <Link href="">Payment Partner</Link>
                </li>
                <li className="py-2">
                  <Link href="">Success Stories</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:w-full md:w-full lg:w-1/4 xl:w-1/4 text-white">
              <h6 className="text-xl">Models</h6>
              <ul className="footer-list mt-4">
                <li className="py-2">
                  <Link href="">Express</Link>
                </li>
                <li className="py-2">
                  <Link href="">Evaluation </Link>
                </li>
                <li className="py-2">
                  <Link href="">Stellar Challenge</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:w-full md:w-full lg:w-1/4 xl:w-1/4 text-white">
              <h6 className="text-white text-xl">Contact Information</h6>
              <ul className="text-white mt-4">
                <li className="py-2">
                  <Link className="flex" href="mailto:info@wearenext.com">
                    <Image className="mr-3" src={SmsIcon} alt="sms icon" />
                    info@wearenext.com
                  </Link>
                </li>
                <li className="py-2">
                  <Link className="flex" href="tel:+986 8989 899">
                    <Image className="mr-3" src={CallIcon} alt="sms icon" />
                    +986 8989 899{" "}
                  </Link>
                </li>
                <li className="py-2">
                  <Link className="flex" href="tel:+986 8989 899">
                    <Image className="mr-3" src={CallIcon} alt="sms icon" />
                    +986 8989 899{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t-[color:var(--Gray-600,#475467)] flex justify-between gap-5 mt-16 pt-8 border-t border-solid mx-8 sm:flex-col md:flex-col lg:flex-row xl:flex-row">
          <Paragraph className="text-gray-300 text-base font-normal">
            © 2023 alll rights reserved.
          </Paragraph>
          <ul className="flex gap-5 text-white">
            <li>
              <Link href="">Cookie Policy</Link>
            </li>
            <li>
              <Link href="">Privacy Policy</Link>
            </li>
            <li>
              <Link href="">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
