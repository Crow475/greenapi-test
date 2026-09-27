"use client";

import { useState } from "react";

import { Dialog } from "radix-ui";

import NewChatDialog from "@/components/elements/newChatDialog";
import ButtonPrimary from "@/components/atoms/btnPrimary";

export default function ChatListPlaceholder() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <div className="flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
            <span className="font-bold text-black">No chats to display.</span>
            <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <Dialog.Trigger asChild>
                    <ButtonPrimary
                        onClick={() => setIsDialogOpen(true)}
                        className="mt-6"
                    >
                        Start New Chat
                    </ButtonPrimary>
                </Dialog.Trigger>
                <NewChatDialog setIsDialogOpen={setIsDialogOpen} />
            </Dialog.Root>
        </div>
    );
}
