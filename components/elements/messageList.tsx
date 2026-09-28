import type { LocalNotification } from "@/lib/notificationTypes";

import { ScrollArea } from "radix-ui";
import MessaageBubble from "@/components/atoms/messageBubble";

export default function MessageList({
    messages,
}: {
    messages: LocalNotification[];
}) {
    return (
        <ScrollArea.Root className="flex h-full w-full flex-col items-center justify-start overflow-hidden">
            <ScrollArea.Viewport className="flex h-full w-full flex-col items-center justify-start">
                <ul className="flex h-full w-[98%] flex-col items-center justify-start py-2">
                    {messages.map((message) => (
                        <MessaageBubble
                            key={message.receiptId}
                            timestamp={message.timestamp}
                            type={
                                message.typeLocal === "incoming"
                                    ? "incoming"
                                    : "outgoing"
                            }
                            messageContent={message.messageContent}
                        />
                    ))}
                </ul>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar
                orientation="vertical"
                className="w-2 bg-transparent"
            >
                <ScrollArea.Thumb className="relative flex w-1 rounded-full bg-white" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner className="w-2 bg-transparent" />
        </ScrollArea.Root>
    );
}
