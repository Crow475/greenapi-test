"use client";

import { useActionState, useEffect } from "react";
import { useChats, ChatType } from "@/lib/chatsContext";

import { Dialog } from "radix-ui";

import ButtonPrimary from "@/components/atoms/btnPrimary";
import ButtonSecondary from "@/components/atoms/btnSecondary";

import { getNewChat } from "@/functions/getNewChat";

export default function NewChatDialog({
    setIsDialogOpen,
}: {
    setIsDialogOpen: (open: boolean) => void;
}) {
    const [state, submitAction, isPending] = useActionState(getNewChat, {
        chatId: "",
        username: "",
        phoneNumber: 0,
    });
    const { setAllChats, allChats } = useChats();

    useEffect(() => {
        if (
            state &&
            state.chatId &&
            !allChats.some((chat) => chat.chatId === state.chatId)
        ) {
            setAllChats([...allChats, state as ChatType]);
            setIsDialogOpen(false);
        }
    }, [state, allChats, setAllChats, setIsDialogOpen]);

    return (
        <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm" />
            <Dialog.Content className="fixed top-1/4 left-1/3 h-1/2 w-1/3 flex-col items-center justify-center rounded-2xl bg-white p-4">
                <Dialog.Title className="flex w-full flex-row items-center justify-center p-2">
                    <span className="text-2xl font-bold text-black">
                        Start New Chat
                    </span>
                </Dialog.Title>
                <Dialog.Description className="flex w-full flex-col items-center justify-center p-2 text-neutral-700">
                    Enter the phone number of the person you want to chat with.
                </Dialog.Description>
                <form
                    className="relative flex h-[75%] w-full flex-col items-center justify-start"
                    action={submitAction}
                >
                    <div className="flex h-1/2 w-full flex-col items-center justify-center p-2">
                        <label className="flex w-[95%] flex-row items-center justify-between space-x-2">
                            <div className="flex w-1/3 flex-row items-center justify-start">
                                <span className="text-black">Phone Number</span>
                            </div>
                            <input
                                type="text"
                                name="phoneNumber"
                                required
                                className="w-2/3 rounded-lg border border-neutral-400 px-2 py-1 text-black"
                                placeholder="+012345678910"
                            />
                        </label>
                    </div>
                    <div className="absolute bottom-2 flex w-[95%] flex-row items-center justify-between p-2">
                        <Dialog.Close asChild>
                            <ButtonSecondary>Cancel</ButtonSecondary>
                        </Dialog.Close>

                        <ButtonPrimary type="submit" disabled={isPending}>
                            Start Chat
                        </ButtonPrimary>
                    </div>
                </form>
            </Dialog.Content>
        </Dialog.Portal>
    );
}
