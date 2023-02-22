import { ImageBlock } from "../../../components/image-block/ImageBlock";
import { PreviewInfo } from "./preview-info/PreviewInfo";
export const PreviewSection = () => {
  return (
    <section className="mt-[56px] flex-col w-full flex md:mt-[156px] justify-end hd:flex-row">
      <PreviewInfo />
      <ImageBlock />
    </section>
  );
};
