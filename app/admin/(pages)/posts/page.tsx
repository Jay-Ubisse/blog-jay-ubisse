"use client";

import Link from "next/link";
import { useQuery } from "react-query";

import { getAllPosts } from "@/services/posts";
import { Icons } from "@/components/loading-spinner";
import { generateDate } from "@/lib/generate-date";
import AdminHeader from "@/components/AdminHeader";

export default function PostsPage() {
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
    <div>
      <AdminHeader />
      <section className="w-3/4 mx-auto grid grid-cols-1 gap-5 py-10">
        {posts.map((post) => (
          <div
            className="shadow-lg shadow-slate-300 bg-slate-50 rounded-md p-5"
            key={post.id}
          >
            <h1 className="text-xl font-semibold mb-3">{post.title}</h1>
            <p className="text-slate-600 font-normal text-sm mb-1">
              {generateDate(
                new Date(post.createdAt ? post.createdAt : new Date())
              )}
            </p>
            <p className="text-slate-600 font-normal text-sm mb-6 underline underline-offset-2">
              Jay Ubisse
            </p>
            <div className="flex justify-end mt-6 max-h-20 gap-2">
              <Link
                href=""
                className="bg-violet-700 px-4 py-2 rounded-md text-white hover:bg-violet-600"
              >
                Ver
              </Link>
              <Link
                href=""
                className="bg-green-700 px-4 py-2 rounded-md text-white hover:bg-green-600"
              >
                Editar
              </Link>
              <Link
                href=""
                className="bg-red-700 px-4 py-2 rounded-md text-white hover:bg-red-600"
              >
                Eliminar
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
