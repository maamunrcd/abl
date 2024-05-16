import BannerContent from "./BannerContent";
import BannerImage from "./BannerImage";
import BackgroundBlob from "../assets/img/bg-grid.png";
import ShadowImage from "../assets/img/shadow.svg";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="bg-body relative">
      <div className="container flex items-center justify-center px-6 mx-auto pb-10 space-y-0 sm:flex-col md:flex-col lg:flex-row xl:flex-row">
        <BannerContent />
        <BannerImage />
      </div>
      <Image
        src={BackgroundBlob}
        alt="BgBlobImg"
        className="absolute bottom-0 right-0 z-0"
      />
      <Image
        src={ShadowImage}
        alt="shadow"
        className="absolute bottom-0 right-0 z-0"
      />
    </section>
  );
};

export default Banner;
