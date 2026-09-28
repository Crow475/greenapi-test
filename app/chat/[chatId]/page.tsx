"use client";

import { use, useEffect, useActionState } from "react";

import { LuSend } from "react-icons/lu";
import { LuLoaderCircle } from "react-icons/lu";

import sendMessage from "@/functions/sendMessage";
import { useChats } from "@/lib/chatsContext";
import { useNotification } from "@/lib/notificationContext";

import MessageList from "@/components/elements/messageList";

export default function Chat({
    params,
}: {
    params: Promise<{ chatId: string }>;
}) {
    const { chatId } = use(params);
    const { setCurrentChat } = useChats();

    const { localNotificationStore, notification } = useNotification();
    const messages = localNotificationStore.filter(
        (notification) => notification.chatId === chatId,
    );

    const [state, submitAction, isPending] = useActionState(sendMessage, {
        chatId: chatId,
        message: "",
        messageId: "",
    });

    useEffect(() => {
        setCurrentChat(chatId);
    }, [chatId, setCurrentChat]);

    return (
        <>
            <div className="flex h-full w-full flex-col items-center justify-center pt-12 pb-10">
                <div className="flex h-full w-full flex-col items-center justify-start">
                    <MessageList messages={messages} />
                </div>
            </div>
            <form
                className="absolute bottom-0 flex w-full flex-row items-center justify-around"
                action={submitAction}
            >
                <input type="hidden" name="chatId" value={chatId} />
                <input
                    type="text"
                    name="message"
                    maxLength={4096}
                    className="h-10 w-18/20 rounded-4xl bg-white px-4 py-2 text-lg text-black shadow-lg transition-all duration-200 focus:rounded-2xl"
                    placeholder="Type your message..."
                    autoComplete="off"
                />
                <button
                    type="submit"
                    disabled={isPending}
                    className="h-10 w-1/20 cursor-pointer rounded-full bg-black px-4 py-2 font-bold text-white shadow-lg hover:bg-neutral-800 disabled:cursor-not-allowed"
                >
                    {isPending ? (
                        <LuLoaderCircle size={20} className="animate-spin" />
                    ) : (
                        <LuSend size={20} />
                    )}
                    <span className="sr-only">Send Message</span>
                </button>
            </form>
        </>
    );
}
