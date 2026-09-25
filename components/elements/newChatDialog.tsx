import { AlertDialog } from "radix-ui";

import ButtonPrimary from "@/components/atoms/btnPrimary";
import ButtonSecondary from "@/components/atoms/btnSecondary";

export default function NewChatDialog() {
    return (
        <AlertDialog.Portal>
            <AlertDialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm" />
            <AlertDialog.Content className="fixed top-1/4 left-1/3 h-1/2 w-1/3 flex-col items-center justify-center rounded-2xl bg-white p-4">
                <AlertDialog.Title className="flex w-full flex-row items-center justify-center p-2">
                    <span className="text-2xl font-bold text-black">
                        Start New Chat
                    </span>
                </AlertDialog.Title>
                <AlertDialog.Description className="flex w-full flex-col items-center justify-center p-2 text-neutral-700">
                    Enter the phone number of the person you want to chat with.
                </AlertDialog.Description>
                <form className="relative flex h-[75%] w-full flex-col items-center justify-start">
                    <div className="flex h-1/2 w-full flex-col items-center justify-center p-2">
                        <label className="flex w-[95%] flex-row items-center justify-between space-x-2">
                            <div className="flex w-1/3 flex-row items-center justify-start">
                                <span className="text-black">Phone Number</span>
                            </div>
                            <input
                                type="text"
                                className="w-2/3 rounded-lg border border-neutral-400 px-2 py-1 text-black"
                                placeholder="1234567890"
                            />
                        </label>
                    </div>
                    <div className="absolute bottom-2 flex w-[95%] flex-row items-center justify-between p-2">
                        <AlertDialog.Cancel asChild>
                            <ButtonSecondary>Cancel</ButtonSecondary>
                        </AlertDialog.Cancel>
                        <AlertDialog.Action asChild>
                            <ButtonPrimary type="submit">
                                Start Chat
                            </ButtonPrimary>
                        </AlertDialog.Action>
                    </div>
                </form>
            </AlertDialog.Content>
        </AlertDialog.Portal>
    );
}
