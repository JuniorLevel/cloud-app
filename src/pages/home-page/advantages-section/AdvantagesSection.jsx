import AdvantagesItem from "./advantages-item/AdvantagesItem";
import { ImageBlock } from "../../../components/image-block/ImageBlock";

const AdvantagesSection = () => {
  return (
    <section>
      <div>
        <ImageBlock />
      </div>
      <div>
        <AdvantagesItem />
        <AdvantagesItem />
        <AdvantagesItem />
        <AdvantagesItem />
      </div>
    </section>
  );
};

export default AdvantagesSection;
