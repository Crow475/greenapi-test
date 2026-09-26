"use client";

import { createContext, useContext, useState } from "react";

const ChatsContext = createContext<{
    currentChat: string | null;
    setCurrentChat: (chatId: string) => void;
    allChats: string[];
    setAllChats: (chats: string[]) => void;
}>({
    currentChat: null,
    setCurrentChat: () => {},
    allChats: [],
    setAllChats: () => {},
});

function ChatsContextProvider({ children }: { children: React.ReactNode }) {
    const [currentChat, setCurrentChat] = useState<string | null>(null);
    const [allChats, setAllChats] = useState<string[]>([]);

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

export { ChatsContextProvider, useChats };
