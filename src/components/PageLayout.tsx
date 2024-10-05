import Image from "next/image";
import Link from "next/link";
import { MainMenu } from "./MainMenu";

interface Props {
  children: React.ReactNode;
}

export function PageLayout({ children }: Readonly<Props>) {
  return (
    <div>
      <header className="relative z-50">
        <div className="flex items-center py-4 px-10 absolute top-0 left-0 w-full">
          <Link href="/" className="z-50">
            <Image
              src="/logo.svg"
              alt="logo"
              width={296}
              height={112}
            />
          </Link>
          <MainMenu />
        </div>
      </header>
      <main>
        <div>{children}</div>
      </main>
      <footer>
        <div className="container">footer</div>
      </footer>
    </div>
  );
}
