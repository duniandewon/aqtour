import { Package } from "@/components/Package";
import { Section } from "@/components/Section";

export function PopularProductSection() {
  return (
    <Section title="OUR POPULAR PRODUCT">
      <div className="flex justify-between gap-6">
        <Package
          data={{
            duration: 9,
            id: 2,
            image: "/mantap-umrah-reguler-9-hari.png",
            madinaHotelStar: 5,
            mekkaHotelStar: 5,
            name: "Mantap Umrah Reguler 9 Hari",
            price: 40,
            slug: "mantap-umrah",
          }}
        />
        <Package
          data={{
            duration: 9,
            id: 2,
            image: "/mantap-umrah-plus-12-hari.png",
            madinaHotelStar: 5,
            mekkaHotelStar: 5,
            name: "Mantap Umrah Plus 12 Hari",
            price: 40,
            slug: "mantap-umrah",
          }}
        />
        <Package
          data={{
            duration: 9,
            id: 2,
            image: "/man-tap-haji-go-haji-no-antri.png",
            madinaHotelStar: 5,
            mekkaHotelStar: 5,
            name: "Mantap Haji Go Haji No Antri",
            price: 40,
            slug: "mantap-umrah",
          }}
        />
      </div>
    </Section>
  );
}
