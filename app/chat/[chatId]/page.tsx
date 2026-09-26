"use client";

import { use, useEffect } from "react";

import { LuSend } from "react-icons/lu";

import { useChats } from "@/lib/chatsContext";

export default function Chat({
    params,
}: {
    params: Promise<{ chatId: string }>;
}) {
    const { chatId } = use(params);
    const { setCurrentChat } = useChats();

    useEffect(() => {
        setCurrentChat(chatId);
    }, [chatId, setCurrentChat]);

    return (
        <>
            <div className="flex h-full w-full flex-col items-center justify-center pt-12 pb-10">
                <div className="flex h-full w-full flex-col items-center justify-start"></div>
            </div>
            <form className="absolute bottom-0 flex w-full flex-row items-center justify-around">
                <input
                    type="text"
                    className="h-10 w-18/20 rounded-4xl bg-white px-4 py-2 text-lg text-black shadow-lg transition-all duration-200 focus:rounded-2xl"
                    placeholder="Type your message..."
                    autoComplete="off"
                />
                <button
                    type="submit"
                    className="h-10 w-1/20 cursor-pointer rounded-full bg-black px-4 py-2 font-bold text-white shadow-lg hover:bg-neutral-800"
                >
                    <LuSend size={20} />
                    <span className="sr-only">Send Message</span>
                </button>
            </form>
        </>
    );
}
