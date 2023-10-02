"use client"

import Image from "next/image";
import loginimage from "@/images/login.jpg"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { serverLogin } from "@/actions/auth";

export default function Login() {
    const [user, setUser] = useState("")
    const { push } = useRouter()

    function login(e) {
        e.preventDefault()
        if (user === "decepticons") {
            serverLogin()
            push("/")
        } else {
            toast.error("Código errado", {
                style: {
                    backgroundColor: '#333',
                    color: '#fff'
                }
            })
        }
    }

    return (
        <div className="flex h-screen">
            <aside className="hidden md:flex">
                <Image className="h-full w-full object-cover" src={loginimage} alt="" />
            </aside>

            <main className="container m-auto max-w-md p-6 flex flex-col items-center justify-center h-screen">
                <h1 className="text-2xl font-bold text-center">Challenge Decepticons</h1>
                <p className="mt-4 text-center text-lg">Venha conhecer nossa solução</p>
                <form onSubmit={login} className="flex flex-col items-center mt-8">
                    <label htmlFor='text' className="text-center mb-4">Código para liberar entrada</label>
                    <input
                        className="bg-slate-600 p-1 rounded"
                        type="text"
                        id="user"
                        value={user}
                        onChange={e => setUser(e.target.value)}
                    />
                    <div className="flex justify-center mt-4">
                        <button className="btn p-4 rounded">Entrar</button>
                    </div>
                </form>
            </main>


        </div>
    )
}