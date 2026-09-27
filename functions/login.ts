"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(idInstance: string, apiTokenInstance: string) {
    const cookieStore = await cookies();

    cookieStore.set("idInstance", idInstance);
    cookieStore.set("apiTokenInstance", apiTokenInstance);
    cookieStore.set("allChats", JSON.stringify([]));

    redirect("/chat");
}
