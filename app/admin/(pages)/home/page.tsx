'use client'

import { ListBullets, PlusCircle } from "@phosphor-icons/react";
import Link from "next/link";
import AdminHeader from "@/components/AdminHeader";

const Home = () => {
    return (
        <div>
            <AdminHeader />
            <div className="bg-white h-[calc(100vh-5rem)] flex justify-center items-center">
                <main className="grid grid-cols-2 gap-5 shadow-lg shadow-slate-300 p-10 bg-slate-50">
                    <Link
                        href="/admin/add"
                        className="w-52 h-28 border border-violet-700 rounded-md text-violet-700 hover:text-white hover:bg-violet-700 flex justify-center items-center gap-5"
                    >
                        <span><PlusCircle size={32} weight="fill" /></span>
                        <span className="text-lg font-medium">Novo Post</span>
                    </Link>
                    <Link
                        href="/admin/posts"
                        className="w-52 h-28 border border-violet-700 rounded-md text-violet-700 hover:text-white hover:bg-violet-700 flex justify-center items-center gap-5"
                    >
                        <span><ListBullets size={32} weight="fill" /></span>
                        <span className="text-lg font-medium">Ver Posts</span>
                    </Link>
                </main>
            </div>
        </div>
    );
}

export default Home;