"use client";

import { useState } from "react";

import { AlertDialog } from "radix-ui";

import { LuPlus, LuSend } from "react-icons/lu";

import NewChatDialog from "@/components/elements/newChatDialog";
import ChatList from "@/components/elements/chatList";

export default function Chat() {
    const [currentChat, setCurrentChat] = useState<string | null>(null);

    return (
        <main className="flex h-svh w-full flex-row items-center justify-center bg-linear-to-br from-emerald-100 via-green-200 to-yellow-100 p-4">
            <div className="flex h-full w-1/4 flex-col items-center justify-start space-y-2 rounded-2xl bg-white p-4 shadow-2xl">
                <div className="flex w-full flex-row items-center justify-center">
                    <div className="flex w-11/12 flex-row items-center justify-center">
                        <h1 className="text-2xl font-bold text-black">Chats</h1>
                    </div>
                    <div className="flex w-1/12 flex-row items-center justify-center">
                        <AlertDialog.Root>
                            <AlertDialog.Trigger asChild>
                                <button className="cursor-pointer rounded-lg bg-black p-1 font-bold text-white hover:bg-neutral-800">
                                    <LuPlus size={20} />
                                    <span className="sr-only">
                                        start new chat
                                    </span>
                                </button>
                            </AlertDialog.Trigger>
                            <NewChatDialog />
                        </AlertDialog.Root>
                    </div>
                </div>
                <ChatList
                    currentChat={currentChat}
                    setCurrentChat={setCurrentChat}
                />
            </div>
            <div className="relative flex h-full w-3/4 flex-col items-center justify-center pl-4">
                <div className="absolute top-0 flex w-full flex-row items-center justify-around">
                    <div
                        className={`flex w-11/12 flex-row items-center justify-start rounded-2xl bg-white px-4 py-2 shadow-lg ${currentChat ? "opacity-100" : "opacity-0"}`}
                    >
                        <h2 className="text-2xl font-bold text-black">
                            {currentChat
                                ? `${currentChat}`
                                : "No Chat Selected"}
                        </h2>
                    </div>
                    <div className="flex w-1/12 flex-row items-center justify-center">
                        <button className="cursor-pointer rounded-2xl bg-white p-3 text-white shadow-lg hover:bg-neutral-200">
                            <span className="font-bold text-black">
                                Log out
                            </span>
                        </button>
                    </div>
                </div>
                <div className="flex h-full w-full flex-col items-center justify-center pt-12 pb-10">
                    <div className="flex h-full w-full flex-col items-center justify-start"></div>
                </div>
                <form
                    className={`absolute bottom-0 w-full flex-row items-center justify-around ${currentChat ? "flex" : "hidden"}`}
                >
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
            </div>
        </main>
    );
}
