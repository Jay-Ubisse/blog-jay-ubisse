"use client";

import { useQuery } from "react-query";

import { getAllPosts } from "@/services/posts";
import { generateDate } from "@/lib/generate-date";
import { Icons } from "./loading-spinner";

export const PostSection = () => {
  const {
    data: posts,
    isLoading,
    error,
    refetch,
  } = useQuery("posts", getAllPosts);

  if (isLoading) {
    return (
      <div className="flex justify-between items-center px-4 py-2 w-full min-h-[300px]">
        <div className="flex justify-between items-center px-4 py-2 w-full">
          <Icons.spinner className="h-6 w-6 mx-auto animate-spin text-primary" />
        </div>
      </div>
    );
  }

  if (error)
    return (
      <div className="flex justify-between items-center px-4 py-2 min-h-[300px]">
        <div className="flex justify-between items-center bg-red-200 px-4 py-2">
          <p>Ocorreu um erro ao carregar artigos.</p>
          <button
            className="bg-white px-2 py-1 rounded-md"
            onClick={refetch as unknown as () => void}
          >
            Recarregar
          </button>
        </div>
      </div>
    );

  if (!posts || posts.length == 0 || posts.length < 0)
    return (
      <div className="flex justify-between items-center px-4 py-2 min-h-[300px]">
        <div className="flex justify-between items-center bg-violet-500 text-white px-4 py-2 w-4/5 mx-auto">
          <p>Nenhum artigo encontrado</p>
          <button
            className="bg-white px-2 py-1 rounded-md text-violet-500 font-medium"
            onClick={refetch as unknown as () => void}
          >
            Recarregar
          </button>
        </div>
      </div>
    );

  return (
    <>
      <section className="flex laptop:flex-row mobile:flex-col-reverse laptop:justify-between laptop:gap-0 mobile:gap-6 w-3/4 mx-auto py-2">
        <div>
          <label htmlFor="category" className="text-slate-800 font-medium mr-3">
            Categoria:
          </label>
          <select
            name="category"
            className="py-2 text-slate-800 bg-transparent outline-bone border-b border-violet-700 focus:outline-none focus:border-2 placeholder:text-slate-500"
          >
            <option value="all">Todos</option>
            <option value="AI">Inteligencia Artificial</option>
            <option value="news">Notícias</option>
            <option value="programming">Programação</option>
            <option value="robotics">Robótica</option>
          </select>
        </div>
        <form className="laptop:px-3 mobile:px-1 border-b border-violet-700 flex items-center">
          <input
            type="search"
            name="search"
            placeholder="Pesquisar..."
            className="py-2 text-slate-800 bg-transparent outline-bone focus:outline-none focus:border-none placeholder:text-slate-500"
          />
        </form>
      </section>
      <section className="laptop:w-3/4 mobile:w-[95%] mx-auto grid laptop:grid-cols-2 mobile:grid-cols-1 gap-5 py-10">
        {posts.map((post) => (
          <div
            className="shadow-lg shadow-slate-300 bg-slate-50 rounded-md p-5"
            key={post.id}
          >
            <h1 className="text-xl font-semibold mb-3">{post.title}</h1>
            <p className="text-slate-600 font-normal text-sm mb-1">
              {generateDate(new Date(post.createdAt))}
            </p>
            <p className="text-slate-600 font-normal text-sm mb-6 underline underline-offset-2">
              Jay Ubisse
            </p>
            <div className="ql-editor text-slate-800 font-normal text-base">
              {post.description}
            </div>
            <div className="flex justify-end mt-6 max-h-20 overflow-hide">
              <button className="bg-violet-700 px-4 py-2 rounded-md text-white hover:bg-violet-600">
                Ver mais
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
