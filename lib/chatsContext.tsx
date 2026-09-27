"use client";

import { createContext, useContext, useState } from "react";

type ChatType = {
    chatId: string;
    username: string;
    phoneNumber: number;
};

const ChatsContext = createContext<{
    currentChat: string | null;
    setCurrentChat: (chatId: string) => void;
    allChats: ChatType[];
    setAllChats: (chats: ChatType[]) => void;
}>({
    currentChat: null,
    setCurrentChat: () => {},
    allChats: [],
    setAllChats: () => {},
});

function ChatsContextProvider({ children }: { children: React.ReactNode }) {
    const [currentChat, setCurrentChat] = useState<string | null>(null);
    const [allChats, setAllChats] = useState<ChatType[]>([]);

    return (
        <ChatsContext.Provider
            value={{ currentChat, setCurrentChat, allChats, setAllChats }}
        >
            {children}
        </ChatsContext.Provider>
    );
}

function useChats() {
    const context = useContext(ChatsContext);
    if (!context) {
        throw new Error("useChats must be used within a ChatsContextProvider");
    }
    return context;
}

export { ChatsContextProvider, useChats, type ChatType };
