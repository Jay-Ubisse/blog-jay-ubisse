"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type Login = {
  username: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<Login>();

  const onSubmit = (login: Login) => {
    console.log(`Submitted details: `, login);
  };

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
};

export default Login;
