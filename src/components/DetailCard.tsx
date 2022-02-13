import Counter from "./Counter";

interface IWindProps {
  detailName: string;
  detailStat: number;
  detailUnit: String;
  detailDescription: String;
  descriptionIcon: string;
}
function DetailCard({
  detailName,
  detailStat,
  detailUnit,
  detailDescription,
  descriptionIcon,
}: IWindProps) {
  return (
    <div className="rounded-2xl  w-[calc(100%/3-10px)] flex flex-col  shadow-md p-5 h-[200px] bg-[#ffff]">
      <h3 className="mb-5 text-lg font-normal">{detailName}</h3>
      <p className="flex items-center mb-5">
        <Counter className="text-5xl	font-bold mr-3" value={detailStat} />
        <span>{detailUnit}</span>
      </p>
      <div className="flex items-center ">
        <img
          className="w-[24px] h-[24px]"
          src={descriptionIcon}
          alt={detailName}
        />
        <span className="ml-4 font-normal">{detailDescription}</span>
      </div>
    </div>
  );
}

export default DetailCard;
