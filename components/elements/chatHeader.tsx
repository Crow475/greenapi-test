"use client";

import Link from "next/link";

import { LuX } from "react-icons/lu";

import { useChats } from "@/lib/chatsContext";

export default function ChatHeader() {
    const { currentChat, setCurrentChat, allChats } = useChats();

    const chatName = currentChat
        ? allChats.find((chat) => chat.chatId === currentChat)?.username ||
          allChats.find((chat) => chat.chatId === currentChat)?.phoneNumber
        : null;

    return (
        <div
            className={`flex w-11/12 flex-row items-center justify-between rounded-2xl bg-white px-4 py-2 shadow-lg ${currentChat ? "opacity-100" : "opacity-0"}`}
        >
            <h2 className="text-2xl font-bold text-black">
                {currentChat ? `${chatName}` : "No Chat Selected"}
            </h2>
            <Link
                href="/chat"
                className="rounded-lg bg-white p-1 text-black transition-all duration-200 hover:bg-neutral-100"
                onNavigate={() => setCurrentChat("")}
            >
                <LuX size={24} />
                <span className="sr-only">Close Chat</span>
            </Link>
        </div>
    );
}
