'use client'
import { useForm } from "react-hook-form";
import { ListBullets, PlusCircle } from "@phosphor-icons/react";
import Link from "next/link";
import AdminHeader from "@/components/AdminHeader";
import { useState } from "react";

type Login = {
    username: string;
    password: string;
};

let content = <Login />;

function Login() {
    const { register, handleSubmit } = useForm<Login>();
    const onSubmit = (login: Login) => {
        console.log(`Submitted details: `, login);
    
        if (login.username === "zuhura2000" && login.password === "ximbeta97") {
            content = <Dashboard />;
        } else {
            content = <Login />;
        }
    }

    return (
        <div className="bg-white">
            <main className="h-screen flex justify-center items-center">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="laptop:w-1/3 mobile:w-[95%] py-5 laptop:border-l-2 mobile:border-b-2 laptop:border-b-0 border-violet-700 flex flex-col gap-8 rounded-tr-lg rounded-br-lg shadow-xl shadow-slate-300 text-slate-800 bg-slate-50"
                >
                    <h1 className="text-violet-700 text-2xl font-semibold w-fit mx-auto pl-1">
                        Bem-vindo de volta, Joaquim!
                    </h1>
                    <input
                        type="text"
                        required
                        placeholder="Nome de Usuário"
                        autoComplete="off"
                        {...register("username")}
                        id="username"
                        className="bg-transparent py-1 px-2 w-[90%] mx-auto border-b border-slate-800 hover:border-violet-700 hover:border-b-2 focus:outline-none focus:border-violet-700 focus:border-b-2"
                    />
                    <input
                        type="password"
                        required
                        placeholder="Palavra-Passe"
                        autoComplete="off"
                        {...register("password")}
                        id="password"
                        className="bg-transparent py-1 px-2 w-[90%] mx-auto border-b border-slate-800 hover:border-violet-700 hover:border-b-2 focus:outline-none focus:border-violet-700 focus:border-b-2"
                    />
                    <button
                        type="submit"
                        className="border-2 text-white bg-violet-700 border-violet-700 w-[90%] mx-auto px-2 py-1 font-medium text-base hover:border-violet-600 hover:bg-violet-600"
                    >
                        Entrar
                    </button>
                </form>
            </main>
        </div>
    );
}
const Dashboard = () => {
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

const Home = () => {
   return content;
}


export default Home;