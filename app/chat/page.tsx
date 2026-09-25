import { AlertDialog } from "radix-ui";

import { LuPlus, LuSend } from "react-icons/lu";

import NewChatDialog from "@/components/elements/newChatDialog";

export default function Chat() {
    return (
        <main className="flex h-svh w-full flex-row items-center justify-center bg-linear-to-br from-emerald-100 via-green-200 to-yellow-100 p-4">
            <div className="flex h-full w-1/4 flex-col items-center justify-between rounded-2xl bg-white p-4 shadow-2xl">
                <div className="flex w-full flex-row items-center justify-center">
                    <div className="flex w-11/12 flex-row items-center justify-center">
                        <h1 className="text-2xl font-bold text-black">Chats</h1>
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
            </div>
            <div className="relative flex h-full w-3/4 flex-col items-center justify-center pl-4">
                <form className="absolute bottom-0 flex w-full flex-row items-center justify-around">
                    <input
                        type="text"
                        className="h-10 w-18/20 rounded-full bg-white px-4 py-2 text-lg text-black shadow-lg"
                        placeholder="Type your message..."
                        autoComplete="off"
                    />
                    <button
                        type="submit"
                        className="h-10 w-1/20 cursor-pointer rounded-full bg-black px-4 py-2 font-bold text-white shadow-lg hover:bg-neutral-800"
                    >
                        <LuSend size={20} />
                        <span className="sr-only">Send Message</span>
                    </button>
                </form>
            </div>
        </main>
    );
}
