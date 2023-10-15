import { generateDate } from "@/app/page";
import AdminHeader from "@/components/AdminHeader";
import Link from "next/link";

async function fetchPosts() {
    const res = await fetch("http://localhost:3000/api/blog", {
        next: {
            revalidate: 10,
        },
    });

    const data = await res.json();
    return data.posts;
}

export default async function PostsPage() {
    const posts = await fetchPosts();

    return (
        <div>
            <AdminHeader />
            <section className="w-3/4 mx-auto grid grid-cols-1 gap-5 py-10">
                {posts?.map((post: any) => (
                    <div className="shadow-lg shadow-slate-300 bg-slate-50 rounded-md p-5" key={post.id}>
                        <h1 className="text-xl font-semibold mb-3">{post.title}</h1>
                        <p className="text-slate-600 font-normal text-sm mb-1">{generateDate(new Date(post.date))}</p>
                        <p className="text-slate-600 font-normal text-sm mb-6 underline underline-offset-2">Jay Ubisse</p>
                        <div className="flex justify-end mt-6 max-h-20 gap-2">
                            <Link href="" className="bg-violet-700 px-4 py-2 rounded-md text-white hover:bg-violet-600">Ver</Link>
                            <Link href="" className="bg-green-700 px-4 py-2 rounded-md text-white hover:bg-green-600">Editar</Link>
                            <Link href="" className="bg-red-700 px-4 py-2 rounded-md text-white hover:bg-red-600">Eliminar</Link>
                        </div>
                    </div>
                ))
                }
            </section>
        </div>
    );
}