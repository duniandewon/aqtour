import { Hero } from "@/components/Hero";
import { PageLayout } from "@/components/PageLayout";
import Image from "next/image";

export default function About() {
  return (
    <PageLayout>
      <Hero backgroundImage="/hero.png">
        <h1 className="font-serif text-7xl">About</h1>
      </Hero>
      <div>
        <div className="w-fit mx-auto">
          <Image src="/logo-vertical.png" alt="logo" width={500} height={455} />
        </div>
        <div className="bg-white py-10 text-center space-y-5">
          <h2 className="font-serif text-5xl">
            Tentang <span className="text-primary">AQ TOUR INDONESIA</span>
          </h2>
          <div className="w-9/12 mx-auto space-y-9">
            <p>
              PT. Ahsan Qolbi Indonesia adalah perusahaan yang bergerak di
              bidang Tour and Travel dan sudah berdiri sejak{" "}
              <span className="text-primary">2018</span>. Sebagai perusahaan
              yang mengedepankan{" "}
              <span className="text-primary font-semibold">Pelayanan</span> dan{" "}
              <span className="text-primary font-semibold">Kualitas</span>{" "}
              menjadi kami sebagai perusahaan penyedia jasa perjalanan wisata
              Haji, Umrah, Tour Domestic serta Tour International yang{" "}
              <span className="text-primary font-semibold">Amanah</span>,{" "}
              <span className="text-primary font-semibold">Aman</span> dan{" "}
              <span className="text-primary font-semibold">Terpercaya</span>.
            </p>

            <p>
              PT. Ahsan Qolbi Indonesia secara resmi terdaftar di{" "}
              <span className="text-primary font-semibold">
                Kementerian Hukum dan HAM
              </span>{" "}
              pada tahun{" "}
              <span className="text-primary font-semibold">2018</span> dan
              mengantongi izin sebagai{" "}
              <span className="text-primary font-semibold">
                Biro Perjalanan Wisata
              </span>{" "}
              dengan nomor{" "}
              <span className="text-primary font-serif">
                556.1/12-DPMPTSP/2019
              </span>
              .
            </p>

            <p>
              PT. Ahsan Qolbi Indonesia secara resmi terlah terdaftar di
              Kementerian Agama sebagai{" "}
              <span className="text-primary font-semibold">
                Penyelenggara Perjalanan Ibadah Umrah (PPIU)
              </span>{" "}
              dengan nomor berizin{" "}
              <span className="text-primary font-serif">19042200647730002</span>{" "}
              pada tahun <span className="text-primary font-serif">2024</span>.
            </p>
          </div>
        </div>
        <div className="py-10 text-center space-y-10">
          <h2 className="font-serif text-5xl">
            <span className="text-primary">VISI</span> dan{" "}
            <span className="text-primary">MISI</span>
          </h2>
          <div className="space-y-10 w-9/12 mx-auto">
            <div className="space-y-4">
              <h3 className="font-serif text-primary text-4xl">VISI</h3>
              <p>
                Menjadi penyedia jasa perjalanan wisata Haji, Umrah, Tour
                International dan Domestic yang Terbaik, Aman, Terpercaya dan
                Ekonomis
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-primary text-4xl">MISI</h3>
              <p>
                Menjadi penyedia jasa perjalanan wisata Haji, Umrah, Tour
                International dan Domestic yang Terbaik, Aman, Terpercaya dan
                Ekonomis
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
