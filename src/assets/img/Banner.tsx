import BannerContent from "@/components/BannerContent";
import BannerImage from "@/components/BannerImage";
import BgBlobImg from "../assets/img/bg-grid.png";
import ShadowSvg from "../assets/img/shadow.svg";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="bg-body relative">
      <div className="container flex items-center justify-center px-6 mx-auto pb-10 space-y-0 sm:flex-col md:flex-col lg:flex-row xl:flex-row">
        <BannerContent />
        <BannerImage />
      </div>
      <Image
        src={BgBlobImg}
        alt="BgBlobImg"
        className="absolute bottom-0 right-0 z-0"
      />
      <ShadowSvg className="absolute bottom-0 right-0 z-0" />
    </section>
  );
}
