import { IPackage } from "@/app/types/packages";
import Image from "next/image";
import { StarRating } from "./StarRating";

interface Props {
  data: IPackage;
}

export function Package({ data }: Readonly<Props>) {
  return (
    <div className="rounded-[35px] overflow-hidden bg-white border-2 border-primary max-w-[385px] hover:transform hover:translate-y-[-5px] transition-transform duration-200">
      <div>
        <Image width={385} height={243} src={data.image} alt={data.name} />
      </div>
      <div className="px-10 py-6">
        <h2 className="text-center text-xl font-semibold mx-auto">
          {data.name}
        </h2>
        <div className="space-y-2 mb-4 mt-2">
          <div className="grid grid-cols-[110px_1fr] gap-5 items-center">
            <p className="text-base">Makkah</p>
            <StarRating star={data.mekkaHotelStar} size={18} />
          </div>
          <div className="grid grid-cols-[110px_1fr] gap-5 items-center justify-items-start">
            <p className="text-base">Madina</p>
            <StarRating star={data.madinaHotelStar} size={18} />
          </div>
        </div>
        <div className="text-center">
          <p className="text-xs">start from</p>
          <h2 className="font-bold text-5xl">{data.price}JT</h2>
        </div>
      </div>
    </div>
  );
}
