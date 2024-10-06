import { Hero } from "@/components/Hero";
import { PageLayout } from "@/components/PageLayout";

import { IPackageDetail } from "../types/packages";
import { Package } from "@/components/Package";

export default function Umroh() {
  const packages: IPackageDetail[] = [
    {
      duration: 9,
      id: 2,
      image: "/mantap-umrah-reguler-9-hari.png",
      madinaHotelStar: 5,
      mekkaHotelStar: 5,
      name: "Mantap Umrah Reguler 9 Hari",
      price: 40,
      slug: "mantap-umrah",
      packageStar: 4,
      priceExclude: [
        "Pembuatan Paspor & Pengurusan Dokumen Pribadi",
        "City Tour diluar Program",
        "Pulsa atau Paket Internet Roaming",
        "Biaya-Biaya diluar Paket",
      ],
      priceInclude: [
        "Tiket Pesawat PP",
        "Hotel Makkah dan Madinah",
        "Visa",
        "Lounge Bandara",
      ],
      hotels: [
        { city: "makkah", hotel: "talat ajyad" },
        { city: "madinah", hotel: "andalus palace" },
      ],
    },
    {
      duration: 9,
      id: 2,
      image: "/mantap-umrah-reguler-9-hari.png",
      madinaHotelStar: 5,
      mekkaHotelStar: 5,
      name: "Mantap Umrah Reguler 9 Hari",
      price: 40,
      slug: "mantap-umrah",
      packageStar: 4,
      priceExclude: [
        "Pembuatan Paspor & Pengurusan Dokumen Pribadi",
        "City Tour diluar Program",
        "Pulsa atau Paket Internet Roaming",
        "Biaya-Biaya diluar Paket",
      ],
      priceInclude: [
        "Tiket Pesawat PP",
        "Hotel Makkah dan Madinah",
        "Visa",
        "Lounge Bandara",
      ],
      hotels: [
        { city: "makkah", hotel: "talat ajyad" },
        { city: "madinah", hotel: "andalus palace" },
      ],
    },
    {
      duration: 9,
      id: 2,
      image: "/mantap-umrah-reguler-9-hari.png",
      madinaHotelStar: 5,
      mekkaHotelStar: 5,
      name: "Mantap Umrah Reguler 9 Hari",
      price: 40,
      slug: "mantap-umrah",
      packageStar: 4,
      priceExclude: [
        "Pembuatan Paspor & Pengurusan Dokumen Pribadi",
        "City Tour diluar Program",
        "Pulsa atau Paket Internet Roaming",
        "Biaya-Biaya diluar Paket",
      ],
      priceInclude: [
        "Tiket Pesawat PP",
        "Hotel Makkah dan Madinah",
        "Visa",
        "Lounge Bandara",
      ],
      hotels: [
        { city: "makkah", hotel: "talat ajyad" },
        { city: "madinah", hotel: "andalus palace" },
      ],
    },
  ];
  return (
    <PageLayout>
      <Hero backgroundImage="/hero.png">
        <h1 className="font-serif text-7xl">Mantap Umroh</h1>
      </Hero>
      <div className="px-10 py-10 space-y-10">
        {packages.map((pkg) => (
          <div key={pkg.id} className="flex gap-8">
            <Package data={{ ...pkg }} />
            <div className="w-full">
              <h2 className="font-serif text-4xl">{pkg.name}</h2>
              <div className="h-2 w-full bg-primary mt-4 mb-8" />
              <h3 className="font-serif">Fasilitas</h3>
              <ul>
                {pkg.hotels.map((hotel) => (
                  <li key={hotel.hotel} className="flex gap-2">
                    <p className="capitalize">{hotel.city}</p>
                    <span>:</span>
                    <p className="capitalize">
                      <span className="font-semibold">{hotel.hotel}</span> /
                      Setaraf
                    </p>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between mt-8">
                <div className="flex-1">
                  <h2 className="font-serif text-4xl">Price Includes</h2>
                  <ul className="mt-5">
                    {pkg.priceInclude.map((inc) => (
                      <li key={inc}>
                        <p>{inc}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-4xl">Price Excludes</h2>
                  <ul className="mt-5">
                    {pkg.priceExclude.map((exc) => (
                      <li key={exc}>
                        <p>{exc}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
