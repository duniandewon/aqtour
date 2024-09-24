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

interface IActivity {
  hour: string;
  activity: string;
}

export interface IItenary {
  day: number;
  date: Date;
  route: string[];
  title: string;
  activities: IActivity[];
}

export interface IPackageDetail extends IPackage {
  packageStar: number;
  priceInclude: { description: string; items: string[] };
  priceExclude: { description: string; items: string[] };
  services: string[];
  itenary: IItenary;
  priceList: { type: string; price: number }[];
}
