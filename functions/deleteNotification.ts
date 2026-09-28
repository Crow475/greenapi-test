"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function deleteNotification({
    receiptId,
}: {
    receiptId: number;
}) {
    const cookieStore = await cookies();

    const idInstance = cookieStore.get("idInstance")?.value;
    const apiTokenInstance = cookieStore.get("apiTokenInstance")?.value;

    if (!idInstance || !apiTokenInstance) {
        redirect("/");
    }

    const requestURL = `${process.env.NEXT_PUBLIC_API_URI}/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`;

    const response = await fetch(requestURL, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error("Failed to delete notification");
    }

    const data = await response.json();

    if (!data.result) {
        console.error("Failed to delete notification:", data);
    }
}
