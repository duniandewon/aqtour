import Image from "next/image";
import Link from "next/link";
import { MainMenu } from "./MainMenu";
import { Instagram } from "@/icons/Instagram";
import { Globe } from "@/icons/Globe";
import { Phone } from "@/icons/Phone";
import { RegisterForm } from "./RegisterForm";

interface Props {
  children: React.ReactNode;
}

export function PageLayout({ children }: Readonly<Props>) {
  return (
    <div>
      <header className="relative z-50">
        <div className="flex items-center py-4 px-10 absolute top-0 left-0 w-full">
          <Link href="/" className="z-50">
            <Image src="/logo.svg" alt="logo" width={296} height={112} />
          </Link>
          <MainMenu />
        </div>
      </header>
      <main>
        <div>{children}</div>
        <div className="bg-primary text-center py-10">
          <h2 className="text-4xl font-bold">Apply Now And Get 10% DISCOUNT</h2>
        </div>
        <div className="bg-white px-10 py-10">
          <RegisterForm />
        </div>
      </main>
      <footer className="bg-black">
        <div className="px-10 py-10 flex items-center justify-between">
          <div>
            <Image
              src="/logo-vertical.png"
              alt="logo"
              width={254}
              height={222}
            />
          </div>
          <div className="text-primary text-right w-[35%] border-r-4 border-primary pr-4">
            <p className="text-white">
              Suvarna Sutera, Ruko Terrace 8 No. 62 Blok B Kec. Sindang Jaya,
              Kel. Wana Kerta Kab. Tangerang - Banten 15560
            </p>
            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center gap-4">
                <p>@aqtour</p>
                <Instagram width="40" height="40" />
              </div>
              <div className="flex items-center gap-4">
                <p>www.aqtour-bekasi.com</p>
                <Globe width="40" height="40" />
              </div>
              <div className="flex items-center gap-4">
                <p>082252222553</p>
                <Phone width="40" height="40" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
