const AdvantagesItem = (props) => {
  return (
    <div className="flex gap-[30px] mb-[35px] tablet:mb-[50px] last:mb-0">
      <div className="hidden tablet:flex justify-center items-center min-w-[93px] h-[93px] bg-svgBg">
        <img src={props.src} alt="icon-svg" />
      </div>
      <div>
        <h3 className="text-[24px] hd:text-[36px] text-title-color uppercase mb-[19px]">
          {props.title}
        </h3>
        <p className="text-[18px] text-text-color">{props.text}</p>
      </div>
    </div>
  );
};

export default AdvantagesItem;
