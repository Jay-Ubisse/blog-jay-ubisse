import Link from "next/link";
import {
  GithubLogo,
  TwitterLogo,
  FacebookLogo,
  InstagramLogo,
} from "@phosphor-icons/react";

export const Footer = () => {
  const date = new Date();
  return (
    <footer className=" bg-appgreen-400 py-10 flex flex-col gap-20 mt-[1px]">
      <section className="text-white mx-auto laptop:w-[90%] flex laptop:flex-row mobile:flex-col mobile:gap-10 laptop:gap-0 laptop:justify-between">
        <div className="flex flex-row justify-between laptop:w-[20%] mobile:w-[50%]">
          <Link href="">
            <GithubLogo
              size="28px"
              weight="fill"
              className="hover:text-appgreen-100"
            />
          </Link>
          <Link href="">
            <TwitterLogo
              size="28px"
              weight="fill"
              className="hover:text-appgreen-100"
            />
          </Link>
          <Link href="">
            <FacebookLogo
              size="28px"
              weight="fill"
              className="hover:text-appgreen-100"
            />
          </Link>
          <Link href="">
            <InstagramLogo
              size="28px"
              weight="fill"
              className="hover:text-appgreen-100"
            />
          </Link>
        </div>
        <div className="laptop:w-[50%] flex justify-center">
          <form className="flex flex-col laptop:gap-3 mobile:gap-6">
            <label className="font-normal text-base">
              Para notícias e atualizações, assine a newsletter
            </label>
            <div>
              <input
                type="email"
                required
                placeholder="Introduza o seu email aqui"
                className="bg-transparent py-1 px-2 w-56 border-b border-white hover:border-appgreen-100 hover:border-b-2 focus:outline-none focus:border-appgreen-100 focus:border-b-2"
              />
              <button className="ml-2 border border-white px-2 py-1 font-normal text-base hover:border-appgreen-100 hover:bg-appgreen-100 hover:text-white hover:border-b-2">
                Assinar
              </button>
            </div>
          </form>
        </div>
        <div className="laptop:w-[10%] mobile:w-[40%] border-t-2 border-white flex flex-col gap-1 pt-4">
          <Link
            href=""
            className="hover:text-appgreen-100 font-normal text-base"
          >
            Portfolio
          </Link>
          <Link href="/about" className="hover:text-appgreen-100 font-normal text-base">
            Sobre
          </Link>
          <Link
            href="/contact"
            className="hover:text-appgreen-100 font-normal text-base"
          >
            Contacto
          </Link>
        </div>
      </section>
      <section className="bg-white text-appgreen-400 laptop:w-[90%] mobile:w-[97%] py-1 mx-auto">
        <p className="text-center laptop:text-base mobile:text-xs font-normal">
          &copy; {date.getFullYear()}{" "}
          <span className="font-medium">Jay Ubisse</span>. Desenvolvido e
          mantido pela{" "}
          <span className="text-appgreen-100 font-medium">Binario</span>
        </p>
      </section>
    </footer>
  );
};
