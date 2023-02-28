import { ImageBlock } from "../../../components/image-block/ImageBlock";
import { PreviewInfo } from "./preview-info/PreviewInfo";
import PreviewImg from "../../../images/home-page/preview-img.png";
export const PreviewSection = () => {
  return (
    <section className="max-w-[1315px] mx-auto mt-[56px] flex-col flex md:mt-[156px] justify-center hd:flex-row desktop:justify-between">
      <PreviewInfo />
      <ImageBlock src={PreviewImg} styles={"flex justify-center order-1"} />
    </section>
  );
};
