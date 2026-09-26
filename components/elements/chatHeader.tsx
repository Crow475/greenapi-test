import { useChats } from "@/lib/chatsContext";

export default function ChatHeader() {
    const { currentChat } = useChats();

    return (
        <div
            className={`flex w-11/12 flex-row items-center justify-start rounded-2xl bg-white px-4 py-2 shadow-lg ${currentChat ? "opacity-100" : "opacity-0"}`}
        >
            <h2 className="text-2xl font-bold text-black">
                {currentChat ? `${currentChat}` : "No Chat Selected"}
            </h2>
        </div>
    );
}
