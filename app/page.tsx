import Image from "next/image";

import { Header } from "@/components/Header";
import { SocialMediaIconsGroup } from "@/components/SocialMediaIconsGroup";
import { PostSection } from "@/components/post-section";

export default async function Home() {
  return (
    <div>
      <Header />
      <main>
        <section className="bg-gradient-to-tr from-violet-500 to-violet-900 min-h-[calc(100vh-80px)] w-screen p-1 flex justify-around">
          <div className="laptop:mt-36 mobile:mt-24 laptop:ml-20 laptop:w-1/3 mobile:w-[98%] mobile:mx-auto">
            <h1 className="text-white text-5xl font-medium">
              A Dose Diária de Tecnologia.
            </h1>
            <SocialMediaIconsGroup />
          </div>
          <div className="w-2/5 mobile:hidden laptop:block">
            <Image
              src={"/logo-2.png"}
              alt="Logo"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </section>
        <PostSection />
      </main>
    </div>
  );
}
