"use client";

import { useState } from "react";

import { Dialog } from "radix-ui";
import { LuPlus } from "react-icons/lu";

import NewChatDialog from "@/components/elements/newChatDialog";

export default function NewChatButton() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <Dialog.Trigger asChild>
                <button className="cursor-pointer rounded-lg bg-black p-1 font-bold text-white hover:bg-neutral-800">
                    <LuPlus size={20} />
                    <span className="sr-only">start new chat</span>
                </button>
            </Dialog.Trigger>
            <NewChatDialog setIsDialogOpen={setIsDialogOpen} />
        </Dialog.Root>
    );
}
