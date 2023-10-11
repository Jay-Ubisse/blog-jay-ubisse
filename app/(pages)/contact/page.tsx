'use client'

import { useForm } from "react-hook-form";
import { Header } from "@/components/Header";

type Contact = {
  name: "";
  email: "";
  message: "";
};

const ContactPage = () => {
  const { register, handleSubmit } = useForm<Contact>();

  function onSubmit(contact: Contact) {
    console.log(`Submited details: `, contact);
  }

  return (
    <div className="bg-white">
      <Header />
      <main className="min-h-[calc(100vh-5rem)]">
        <section className="laptop:w-[70%] mobile:w-[95%] mx-auto laptop:mt-16 mobile:mt-8 mobile:mb-6 py-12 h-[80%] rounded-lg bg-white shadow-xl shadow-slate-300 flex laptop:flex-row mobile:flex-col text-slate-800">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="laptop:w-1/2 mobile:w-[95%] mobile:mx-auto py-5 laptop:border-r-2 mobile:border-b-2 laptop:border-b-0 border-violet-700 flex flex-col gap-8"
          >
            <input
              type="text"
              required
              placeholder="Nome"
              autoComplete="off"
              {...register("name")}
              id="name"
              className="bg-transparent py-1 px-2 w-[90%] mx-auto border-b border-slate-800 hover:border-violet-700 hover:border-b-2 focus:outline-none focus:border-violet-700 focus:border-b-2"
            />
            <input
              type="email"
              required
              placeholder="Email"
              autoComplete="off"
              {...register("email")}
              id="email"
              className="bg-transparent py-1 px-2 w-[90%] mx-auto border-b border-slate-800 hover:border-violet-700 hover:border-b-2 focus:outline-none focus:border-violet-700 focus:border-b-2"
            />
            <textarea
              required
              placeholder="Mensagem"
              autoComplete="off"
              {...register("message")}
              id="message"
              className="bg-transparent py-1 px-2 w-[90%] mx-auto border-b border-slate-800 hover:border-violet-700 hover:border-b-2 focus:outline-none focus:border-violet-700 focus:border-b-2"
            ></textarea>
            <button
              type="submit"
              className="border-2 text-white bg-violet-700 border-violet-700 w-[90%] mx-auto px-2 py-1 font-medium text-base hover:border-violet-600 hover:bg-violet-600"
            >
              Enviar
            </button>
          </form>
          <div className="laptop:w-1/2 mobile:w-[95%] mx-auto py-5 px-5 flex flex-col gap-5">
            <div>
              <p className="text-lg font-semibold">Email</p>
              <p>joaquimubisse@gmail.com</p>
            </div>
            <div>
              <p className="text-lg font-semibold">WhatsApp</p>
              <p>+285 84 883 9501</p>
            </div>
            <div>
              <p className="text-lg font-semibold">Chamadas</p>
              <p>+285 84 883 9501</p>
              <p>+285 87 702 7713</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;