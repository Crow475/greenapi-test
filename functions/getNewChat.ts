"use server";

import type { ChatType } from "@/lib/chatsContext";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import * as z from "zod";

export async function getNewChat(
    _prevState: { chatId: string; username: string; phoneNumber: number },
    formData: FormData,
): Promise<ChatType> {
    const phoneNumber = formData.get("phoneNumber") as string;

    const cookieStore = await cookies();

    const idInstance = cookieStore.get("idInstance")?.value;
    const apiTokenInstance = cookieStore.get("apiTokenInstance")?.value;

    if (!idInstance || !apiTokenInstance) {
        redirect("/");
    }

    const schema = z.e164();

    const result = schema.safeParse(phoneNumber);

    if (!result.success) {
        redirect("/chat?error=INVALID_PHONE_NUMBER");
    }

    const requestBody = JSON.stringify({
        phoneNumber: parseInt(phoneNumber.replace("+", "")),
    });

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URI}/waInstance${idInstance}/checkAccount/${apiTokenInstance}`,
        {
            method: "POST",
            body: requestBody,
        },
    );

    const data = await response.json();

    if (!data.exist) {
        redirect("/chat?error=ACCOUNT_DOES_NOT_EXIST");
    }

    const existingChats: ChatType[] = cookieStore.get("allChats")?.value
        ? JSON.parse(cookieStore.get("allChats")!.value)
        : [];

    const newChat: ChatType = {
        chatId: data.chatId,
        username: data.username,
        phoneNumber: data.phoneNumber,
    };

    if (!existingChats.some((chat) => chat.chatId === newChat.chatId)) {
        const updatedChats = [...existingChats, newChat];

        cookieStore.set("allChats", JSON.stringify(updatedChats));
    }

    return newChat;
}
