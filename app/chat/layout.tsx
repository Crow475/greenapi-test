"use client";

import { AlertDialog } from "radix-ui";

import { LuPlus } from "react-icons/lu";

import { logout } from "@/functions/logout";

import { ChatsContextProvider } from "@/lib/chatsContext";
import ChatHeader from "@/components/elements/chatHeader";
import NewChatDialog from "@/components/elements/newChatDialog";
import ChatList from "@/components/elements/chatList";

export default function ChatLayout({ children }: LayoutProps<"/chat">) {
    return (
        <ChatsContextProvider>
            <main className="flex h-svh w-full flex-row items-center justify-center bg-linear-to-br from-emerald-100 via-green-200 to-yellow-100 p-4">
                <div className="flex h-full w-1/4 flex-col items-center justify-start space-y-2 rounded-2xl bg-white p-4 shadow-2xl">
                    <div className="flex w-full flex-row items-center justify-center">
                        <div className="flex w-11/12 flex-row items-center justify-center">
                            <h1 className="text-2xl font-bold text-black">
                                Chats
                            </h1>
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
                    <ChatList />
                </div>
                <div className="relative flex h-full w-3/4 flex-col items-center justify-center pl-4">
                    <div className="absolute top-0 flex w-full flex-row items-center justify-around">
                        <ChatHeader />
                        <div className="flex w-1/12 flex-row items-center justify-center">
                            <button
                                className="cursor-pointer rounded-2xl bg-white p-3 text-white shadow-lg hover:bg-neutral-200"
                                onClick={() => logout()}
                            >
                                <span className="font-bold text-black">
                                    Log out
                                </span>
                            </button>
                        </div>
                    </div>
                    {children}
                </div>
            </main>
        </ChatsContextProvider>
    );
}
