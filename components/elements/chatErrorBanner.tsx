import Link from "next/link";

import { LuCircleAlert } from "react-icons/lu";

export default function ChatErrorBanner({ error }: { error: string }) {
    return (
        <div className="flex h-1/2 w-1/2 flex-col items-center justify-around rounded-2xl bg-white px-4 py-2 shadow-lg">
            <div className="flex w-full flex-row items-center justify-center">
                <LuCircleAlert size={30} className="text-red-600" />
            </div>
            <span className="flex w-full flex-row items-center justify-center text-center text-xl font-bold text-red-600">
                {error}
            </span>
            <Link
                href="/chat"
                className="flex w-1/3 flex-row items-center justify-center rounded-lg bg-black px-4 py-2 text-white shadow-lg hover:bg-neutral-800"
            >
                Cancel
            </Link>
        </div>
    );
}
