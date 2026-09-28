"use server";

export default async function deleteNotification({
    apiTokenInstance,
    idInstance,
    receiptId,
}: {
    apiTokenInstance: string;
    idInstance: string;
    receiptId: number;
}) {
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
