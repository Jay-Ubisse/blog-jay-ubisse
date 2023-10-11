'use client'

import { useForm } from "react-hook-form";
import { Header } from "@/components/Header";

type Login = {
  username: "";
  password: "";
};

const LoginPage = () => {
  const { register, handleSubmit } = useForm<Login>();

  function onSubmit(login: Login) {
    console.log(`Submited details: `, login);
  }

  return (
    <div className="bg-white">
      <Header />
      <main className="min-h-[calc(100vh-5rem)]">
      <form
            onSubmit={handleSubmit(onSubmit)}
            className="laptop:w-1/3 mobile:w-[95%] mx-auto py-5 laptop:mt-24 mobile:mt-8 laptop:border-x-2 mobile:border-b-2 laptop:border-b-0 border-violet-700 flex flex-col gap-8 h-[80%] rounded-lg bg-white shadow-xl shadow-slate-300 text-slate-800"
          >
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
};

export default LoginPage;