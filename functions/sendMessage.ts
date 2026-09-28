"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function sendMessage(
    _prevState: { chatId: string; message: string; messageId: string },
    formData: FormData,
): Promise<{ chatId: string; message: string; messageId: string }> {
    const cookieStore = await cookies();

    const idInstance = cookieStore.get("idInstance")?.value;
    const apiTokenInstance = cookieStore.get("apiTokenInstance")?.value;

    const chatId = formData.get("chatId") as string;
    const message = formData.get("message") as string;

    if (!idInstance || !apiTokenInstance) {
        redirect("/");
    }

    const requestBody = JSON.stringify({
        chatId: chatId,
        message: message,
    });

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URI}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
        {
            method: "POST",
            body: requestBody,
        },
    );

    const data = await response.json();

    if (response.ok) {
        return {
            chatId: chatId,
            message: message,
            messageId: data.idMessage,
        };
    }

    return {
        chatId: chatId,
        message: message,
        messageId: "",
    };
}
