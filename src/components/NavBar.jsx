"use client"

import { serverLogout } from "@/actions/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavBar(){
    const { push } = useRouter()

    function logout(){
        serverLogout()
        push("/login")
    }

    return (
        <nav className="flex flex-col items-center justify-center bg-slate-900 p-4">
          <div className="mb-4">
            <Link href="/">
              <h1 className="text-3xl font-bold text-white">Challenge Decepticons</h1>
            </Link>
          </div>
          <div className="flex justify-center gap-4">
            <Link href="#desafio" className="text-white">
              desafio
            </Link>
            <Link href="#solucao" className="text-white">
              solução
            </Link>
            <Link href="#video" className="text-white">
              video
            </Link>
          </div>
        </nav>
      );
}