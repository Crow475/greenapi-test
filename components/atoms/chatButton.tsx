import { LuUser } from "react-icons/lu";

export default function ChatButton({
    chatId,
    chatName,
    setCurrentChat,
    currentChat,
}: {
    chatId: string;
    chatName: string;
    setCurrentChat: (chatId: string) => void;
    currentChat: string | null;
}) {
    return (
        <li className="flex w-full flex-row items-center justify-center">
            <button
                className={`flex w-[95%] cursor-pointer flex-row items-center justify-between border border-neutral-200 px-2 py-1 transition-all duration-200 ${currentChat === chatId ? "rounded-2xl bg-neutral-100 shadow-sm" : "rounded-4xl bg-neutral-50 shadow-none"}`}
                onClick={() => setCurrentChat(chatId)}
            >
                <div className="flex h-10 w-10 flex-row items-center justify-center rounded-full bg-amber-200 text-black">
                    <LuUser size={22} />
                </div>
                <div className="flex w-10/12 flex-row items-center justify-start">
                    <span className="text-black">{chatName}</span>
                </div>
            </button>
        </li>
    );
}
