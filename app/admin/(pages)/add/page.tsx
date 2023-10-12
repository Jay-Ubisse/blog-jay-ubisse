import AdminHeader from "@/components/AdminHeader";

const AddPost = () => {
    return ( 
        <div className="bg-white">
            <AdminHeader />
            <main className="h-[calc(100vh-5rem)] flex justify-center items-center">
                <form
                    className="laptop:w-fit mobile:w-[95%] py-5 laptop:border-l-2 mobile:border-b-2 laptop:border-b-0 border-violet-700 flex flex-col gap-8 rounded-tr-lg rounded-br-lg bg-slate-50 shadow-xl shadow-slate-300 text-slate-800"
                >
                    <h1 className="text-violet-700 text-lg font-semibold w-fit mx-auto pl-1">
                        Olá, Joaquim! Qual é o assunto de hoje?
                    </h1>
                    <input
                        type="text"
                        required
                        placeholder="Título"
                        autoComplete="off"
                        id="title"
                        className="bg-transparent py-1 px-2 w-[90%] mx-auto border-b border-slate-800 hover:border-violet-700 hover:border-b-2 focus:outline-none focus:border-violet-700 focus:border-b-2"
                    />
                    <textarea
                        required
                        placeholder="Descrição"
                        autoComplete="off"
                        id="description"
                        cols={50}
                        className="bg-transparent py-1 px-2 w-[90%] mx-auto border-b border-slate-800 hover:border-violet-700 hover:border-b-2 focus:outline-none focus:border-violet-700 focus:border-b-2"
                    ></textarea>
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
 
export default AddPost;