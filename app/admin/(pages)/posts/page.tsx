'use client'
import AdminHeader from "@/components/AdminHeader";

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
            <section className="w-3/4 mx-auto grid grid-cols-1 py-10">
                {posts?.map((post: any) => (
                    <div className="border border-violet-700 rounded-md p-5">
                        <h1 className="text-xl font-semibold mb-3">{post.title}</h1>
                        <p className="text-slate-600 font-normal text-sm mb-1">{new Date(post.date).getUTCDate()}</p>
                        <p className="text-slate-600 font-normal text-sm mb-6 underline underline-offset-2">Jay Ubisse</p>
                        <div className="flex justify-end mt-6 max-h-20 overflow-hide">
                            <button className="bg-violet-700 px-4 py-2 rounded-md text-white hover:bg-violet-600">Ver</button>
                            <button className="bg-violet-700 px-4 py-2 rounded-md text-white hover:bg-violet-600">Editar</button>
                            <button className="bg-violet-700 px-4 py-2 rounded-md text-white hover:bg-violet-600">Eliminar</button>
                        </div>
                    </div>
                ))
                }
            </section>
        </div>
    );
}