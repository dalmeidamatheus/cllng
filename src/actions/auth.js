"use server"

import { cookies } from 'next/headers'

export async function serverLogin(){
    cookies().set("user", "decepticons", {
        maxAge: 60 * 60 * 24 * 7
    })
}

export async function serverLogout(){
    cookies().delete("user")
}