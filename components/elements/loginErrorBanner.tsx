import Link from "next/link";

import { LuCircleAlert, LuX } from "react-icons/lu";

import ErrorCodes from "@/lib/errorCodes";

export default function LoginErrorBanner({ errorCode }: { errorCode: string }) {
    return (
        <div className="absolute top-2 flex w-1/2 flex-row items-center justify-between rounded-lg bg-white px-4 py-2 shadow-lg">
            <div className="flex w-[2.5%] flex-row items-center justify-center">
                <LuCircleAlert size={20} className="text-red-600" />
            </div>
            <span
                className="flex w-[95%] flex-row items-center justify-center text-center text-sm font-bold text-red-600"
                role="alert"
            >
                {ErrorCodes.login[errorCode as keyof typeof ErrorCodes.login]}
            </span>
            <Link
                href="/"
                className="flex w-[2.5%] flex-row items-center justify-center"
            >
                <LuX size={20} className="text-black" />
                <span className="sr-only">close</span>
            </Link>
        </div>
    );
}
