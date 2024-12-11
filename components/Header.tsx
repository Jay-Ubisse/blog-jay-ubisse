"use client";

import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [menuState, setMenuState] = useState(false);

  const pathname = usePathname();
  return (
    <header className="bg-white h-20">
      <section className="relative h-full flex justify-between items-center laptop:flex-row laptop:w-[98%] laptop:mx-auto">
        <div>
          <Link href="/" className="flex flex-row laptop:gap-1">
            <Image
              src={"/logo.png"}
              alt="logo"
              width="500"
              height="500"
              className="laptop:w-20 laptop:h-20 mobile:w-20 mobile:h-20"
            />
            <div className="flex flex-col gap-[2px] justify-center">
              <h1 className="font-bold laptop:text-3xl mobile:text-2xl text-violet-700">
                Jay Ubisse
              </h1>
              <h2 className="font-medium laptop:text-base mobile:text-sm text-slate-800">
                Blog de Tecnologia
              </h2>
            </div>
          </Link>
        </div>
        <div
          className={`${
            menuState ? "mobile:flex mobile:bg-white" : "mobile:hidden"
          } relative laptop:gap-2 mobile:gap-16 items-center laptop:flex laptop:flex-row-reverse mobile:flex-col laptop:bg-transparent mobile:bg-gradient-to-tr mobile:from-app-green-200 laptop:from-transparent laptop:to-transparent mobile:to-app-green-400 mobile:w-screen laptop:w-fit mobile:h-screen laptop:h-fit mobile:overflow-scroll laptop:overflow-hidden mobile:fixed laptop:relative top-0 left-0 mobile:pt-10 laptop:pt-0 z-30`}
        >
          <div className="flex flex-row justify-end mobile:w-full laptop:w-fit">
            <X
              size={32}
              weight="bold"
              className="mr-5 laptop:hidden"
              onClick={() => setMenuState(false)}
            />
          </div>
          <nav className="flex mobile:gap-6 laptop:gap-12 laptop:flex-row mobile:flex-col mobile:text-xl laptop:text-base text-center mobile:min-h-[calc(100vh-270px)] laptop:min-h-fit text-slate-800 laptop:mr-20">
            <Link
              href="/"
              className={`${
                pathname == "/" ? "text-violet-700" : "text-slate-800"
              } hover:text-violet-700`}
            >
              Blog
            </Link>
            <Link href="https://tutoriais.jay-ubisse.com/" target="_blank">
              Tutoriais
            </Link>
            <Link href="https://jay-ubisse.com/" target="_blank">
              Portfolio
            </Link>
            <Link
              href="/contact"
              className={`${
                pathname == "/contact" ? "text-violet-700" : "text-slate-800"
              } hover:text-violet-700`}
            >
              Contacto
            </Link>
          </nav>
          <section className="laptop:hidden mobile:flex rounded flex justify-center py-1 bg-white text-app-green-400 w-[90%] mx-auto"></section>
        </div>
        <List
          size={32}
          className="mr-5 laptop:hidden"
          onClick={() => setMenuState(true)}
        />
      </section>
    </header>
  );
};
