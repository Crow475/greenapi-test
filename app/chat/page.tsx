import { LuArrowLeft } from "react-icons/lu";

export default function NoChat() {
    return (
        <div className="flex h-full w-full flex-col items-center justify-center pt-12 pb-10">
            <div className="flex h-full w-full flex-col items-center justify-center">
                <h2 className="text-2xl font-bold text-black">
                    Select a chat to start messaging
                </h2>
                <LuArrowLeft size={40} className="mt-4 text-black" />
            </div>
        </div>
    );
}
