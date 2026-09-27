import { LuArrowLeft } from "react-icons/lu";

import ErrorCodes from "@/lib/errorCodes";

import ChatErrorBanner from "@/components/elements/chatErrorBanner";

export default async function NoChat({
    searchParams,
}: {
    searchParams: Promise<{
        [key: string]: string | string[] | undefined;
    }>;
}) {
    const params = await searchParams;
    const error = params.error as string | undefined;

    return (
        <div className="flex h-full w-full flex-col items-center justify-center pt-12 pb-10">
            <div className="flex h-full w-full flex-col items-center justify-center">
                {!error && (
                    <>
                        <h2 className="text-2xl font-bold text-black">
                            Select a chat to start messaging
                        </h2>
                        <LuArrowLeft size={40} className="mt-4 text-black" />
                    </>
                )}
                {error && (
                    <ChatErrorBanner
                        error={
                            ErrorCodes.chat[
                                error as keyof typeof ErrorCodes.chat
                            ] || "An unknown error occurred."
                        }
                    />
                )}
            </div>
        </div>
    );
}
