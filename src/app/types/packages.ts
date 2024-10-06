export interface IPackage {
  id: number;
  image: string;
  name: string;
  slug: string;
  duration: number;
  price: number;
  mekkaHotelStar: number;
  madinaHotelStar: number;
}

export interface IPackageDetail extends IPackage {
  packageStar: number;
  priceInclude: string[];
  priceExclude: string[];
  hotels: { city: string; hotel: string }[];
}
