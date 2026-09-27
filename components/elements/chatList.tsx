"use client";

import { useEffect } from "react";

import { ScrollArea } from "radix-ui";

import { useChats, ChatType } from "@/lib/chatsContext";

import ChatButton from "@/components/atoms/chatButton";

export default function ChatList({ savedChats }: { savedChats?: ChatType[] }) {
    const { currentChat, allChats, setAllChats } = useChats();

    useEffect(() => {
        if (savedChats) {
            setAllChats(savedChats);
        }
    }, [savedChats, setAllChats]);

    return (
        <ScrollArea.Root className="flex h-full w-full flex-col items-center justify-start overflow-hidden rounded-2xl border border-neutral-200">
            <ScrollArea.Viewport className="flex h-full w-full flex-col items-center justify-start">
                <ul className="flex w-[98%] flex-col items-center justify-start space-y-3 py-3">
                    {allChats.map((Chat) => (
                        <ChatButton
                            key={Chat.chatId}
                            chatId={Chat.chatId}
                            chatName={
                                Chat.username
                                    ? Chat.username
                                    : Chat.phoneNumber.toString()
                            }
                            currentChat={currentChat}
                        />
                    ))}
                </ul>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar
                orientation="vertical"
                className="w-2 bg-neutral-100"
            >
                <ScrollArea.Thumb className="relative flex w-1 rounded-full bg-neutral-200" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner className="w-2 bg-neutral-100" />
        </ScrollArea.Root>
    );
}
