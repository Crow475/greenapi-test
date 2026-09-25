import { ScrollArea } from "radix-ui";

import ChatButton from "@/components/atoms/chatButton";

export default function ChatList({
    currentChat,
    setCurrentChat,
}: {
    currentChat: string | null;
    setCurrentChat: (chatId: string) => void;
}) {
    return (
        <ScrollArea.Root className="flex h-full w-full flex-col items-center justify-start overflow-hidden rounded-2xl border border-neutral-200">
            <ScrollArea.Viewport className="flex h-full w-full flex-col items-center justify-start">
                <ul className="flex w-[98%] flex-col items-center justify-start space-y-3 py-3">
                    <ChatButton
                        chatId="chat1"
                        chatName="Chat 1"
                        setCurrentChat={setCurrentChat}
                        currentChat={currentChat}
                    />
                    <ChatButton
                        chatId="chat2"
                        chatName="Chat 2"
                        setCurrentChat={setCurrentChat}
                        currentChat={currentChat}
                    />
                    <ChatButton
                        chatId="chat3"
                        chatName="Chat 3"
                        setCurrentChat={setCurrentChat}
                        currentChat={currentChat}
                    />
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
