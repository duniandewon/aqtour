import { Section } from "@/components/Section";
import { Certificate } from "@/icons/certificate";
import { HandShake } from "@/icons/HandShake";
import { People } from "@/icons/People";

export function WhyChooseUs() {
  return (
    <Section title="Why Choose Us" className="bg-white">
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="w-fit mx-auto">
            <Certificate width="180" height="180" />
          </div>
          <p>
            Berizin dan terdaftar di Kemenag dengan nomor PPIU{" "}
            <span className="font-semibold">19042200647730002</span>
          </p>
        </div>
        <div className="text-center">
          <div className="w-fit mx-auto">
            <People width="180" height="180" />
          </div>
          <p>
            Muthawif dan Tour Leader yang berpengalaman serta bersertifikasi
          </p>
        </div>
        <div className="text-center">
          <div className="w-fit mx-auto">
            <HandShake width="180" height="180" />
          </div>
          <p>
            Amanah dan Komitmen dengan Jamaah dengan menerapkan 5 Pasti Umrah
          </p>
        </div>
      </div>
    </Section>
  );
}
