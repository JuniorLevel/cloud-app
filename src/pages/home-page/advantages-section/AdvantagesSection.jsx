import AdvantagesItem from "./advantages-item/AdvantagesItem";
import { ImageBlock } from "../../../components/image-block/ImageBlock";
import AdvantagesImg from "../../../images/home-page/adv-img.png";
import iconSvg1 from "../../../images/home-page/svg/icon-1.svg";
import iconSvg2 from "../../../images/home-page/svg/icon-2.svg";
import iconSvg3 from "../../../images/home-page/svg/icon-3.svg";
import iconSvg4 from "../../../images/home-page/svg/icon-4.svg";
const AdvantagesSection = () => {
  return (
    <section className="flex space-between mt-[80px]">
      <div className="hidden hd:flex flex-[0_1_50%]">
        <ImageBlock
          src={AdvantagesImg}
          styles={"bg-advBg bg-no-repeat bg-contain w-[100%] h-[100%]"}
        />
      </div>
      <div className="flex-column hd:pt-[100px] hd:flex-[0_1_600px]">
        <AdvantagesItem
          title="SAFE AND SECURE"
          text="Safely store and backup all your essential files. From family photos & videos to important documents, you can rely on us to store all your media securely and forever."
          src={iconSvg1}
        />
        <AdvantagesItem
          title="Access from anywhere"
          text="Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web."
          src={iconSvg2}
        />
        <AdvantagesItem
          title="STORE AND MANAGE ALL YOUR FILES!"
          text="Upload multiple files at once and keep them forever on this site. If you're using FireFox or Chrome, you can simply drag & drop your files to begin uploading."
          src={iconSvg3}
        />
        <AdvantagesItem
          title="Any point of the globe"
          text="High speed from any location with internet access! Gigabit networking and high-performance server!"
          src={iconSvg4}
        />
      </div>
    </section>
  );
};

export default AdvantagesSection;
