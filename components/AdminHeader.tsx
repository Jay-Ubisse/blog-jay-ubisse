'use client'
import { House, SignOut } from "@phosphor-icons/react";
import Link from "next/link";


const AdminHeader = () => {
    return ( 
        <header className="bg-violet-700 h-20 flex justify-between items-center px-5 text-white">
            <h1 className="text-xl font-medium">Olá, Joaquim!</h1>
            <div className="flex gap-5">
                <Link
                    href="/admin/home"
                    className="flex gap-2 border border-white items-center px-2 py-1 rounded-md"
                >
                    <span><House size={32} weight="fill" /></span>
                    <span>Início</span>
                </Link>
                <Link
                    href="/admin/login"
                    className="flex gap-2 border border-white items-center px-2 py-1 rounded-md"
                >
                    <span><SignOut size={32} weight="fill" /></span>
                    <span>Sair</span>
                </Link>
            </div>
        </header>
     );
}
 
export default AdminHeader;