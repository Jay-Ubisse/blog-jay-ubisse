'use client'

import Link from "next/link";
import {
  GithubLogo,
  TwitterLogo,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  MagnifyingGlass,
} from "@phosphor-icons/react";
import Image from "next/image";
import { FormEvent } from "react";

import { Header } from "@/components/Header"
import logotipo from "@/app/assets/img/logo-2.png";

async function fetchPosts() {
  const res = await fetch("http://localhost:3000/api/blog", {
    next: {
      revalidate: 10,
    },
  });

  const data = await res.json();
  return data.posts;
}

function generateDate(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  let monthName = "";

  switch (month) {
    case 1:
        monthName = "Janeiro"
      break;
    case 2:
        monthName = "Fevereiro"
      break;
    case 3:
        monthName = "Março"
      break;
    case 4:
        monthName = "Abril"
      break;
    case 5:
        monthName = "Maio"
      break;
    case 6:
        monthName = "Junho"
      break;
    case 7:
        monthName = "Julho"
      break;
    case 8:
        monthName = "Agosto"
      break;
    case 9:
        monthName = "Setembro"
      break;
    case 10:
        monthName = "Outubro"
      break;
    case 11:
        monthName = "Novembro"
      break;
    case 12:
        monthName = "Dezembro"
      break;
    default:
      break;
  }

  return `${day} de ${monthName} de ${year}`;
}
export default async function Home() {
  const posts = await fetchPosts();

  function handleSearchSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string;
    console.log("oiii");
    alert('ppp');
  }

  return (
    <div>
      <Header />
      <main>
        <section className="bg-gradient-to-tr from-violet-500 to-violet-900 min-h-[calc(100vh-80px)] w-screen p-1 flex justify-around">
          <div className="mt-36 ml-20 w-1/3">
            <h1 className="text-white text-5xl font-medium">
              A Dose Diária de Tecnologia.
            </h1>
            <div className="border border-white text-white px-4 py-2 rounded-md flex gap-3 mt-10 w-fit">
              <Link href=""
                className="hover:text-violet-900"
              >
                <GithubLogo size={32} weight="fill" />
              </Link>
              <Link href=""
                className="hover:text-violet-900"
              >
                <TwitterLogo size={32} weight="fill" />
              </Link>
              <Link href=""
                className="hover:text-violet-900"
              >
                <LinkedinLogo size={32} weight="fill" />
              </Link>
              <Link href=""
                className="hover:text-violet-900"
              >
                <FacebookLogo size={32} weight="fill" />
              </Link>
              <Link href=""
                className="hover:text-violet-900"
              >
                <InstagramLogo size={32} weight="fill" />
              </Link>
            </div>
          </div>
          <div className="w-2/5">
            <Image
              src={logotipo}
              alt="Logo"
              className="w-full"
            />
          </div>
        </section>
        <section className="flex flex-row justify-between w-3/4 mx-auto py-2">
          <div>
            <label htmlFor="category" className="text-slate-800 font-medium mr-3">Categoria:</label>
            <select name="category"
              className="py-2 text-slate-800 bg-transparent outline-bone border-b border-violet-700 focus:outline-none focus:border-2 placeholder:text-slate-500"
            >
              <option value="all">Todos</option>
              <option value="AI">Inteligencia Artificial</option>
              <option value="programming">Programação</option>
              <option value="robotics">Robótica</option>
              <option value="news">Notícias</option>
            </select>
          </div>
          <form onSubmit={handleSearchSubmit} className="px-3 border-b border-violet-700 flex items-center">
            <input
              type="search"
              name="search"
              placeholder="Pesquisar..."
              className="py-2 text-slate-800 bg-transparent outline-bone focus:outline-none focus:border-none placeholder:text-slate-500"
            />
            <button type="submit"><MagnifyingGlass className="text-violet-700 cursor-pointer" size={24} /></button>
          </form>
        </section>
        <section className="w-3/4 mx-auto grid grid-cols-2 py-10">
          {posts?.map((post: any) => (
            <div className="border border-violet-700 rounded-md p-5">
              <h1 className="text-xl font-semibold mb-3">{post.title}</h1>
              <p className="text-slate-600 font-normal text-sm mb-1">{generateDate(new Date(post.date))}</p>
              <p className="text-slate-600 font-normal text-sm mb-6 underline underline-offset-2">Jay Ubisse</p>
              <div className="ql-editor text-slate-800 font-normal text-base">
                {post.description}
              </div>
              <div className="flex justify-end mt-6 max-h-20 overflow-hide">
                  <button className="bg-violet-700 px-4 py-2 rounded-md text-white hover:bg-violet-600">Ver mais</button>
              </div>
            </div>
          ))
          }
        </section>
      </main>
    </div>
  )
}
