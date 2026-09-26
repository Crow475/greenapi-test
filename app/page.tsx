import LoginForm from "@/components/elements/loginForm";
import LoginErrorBanner from "@/components/elements/loginErrorBanner";

import ErrorCodes from "@/lib/errorCodes";

export default async function Home({
    searchParams,
}: {
    searchParams: Promise<{
        [key: string]: string | string[] | undefined;
    }>;
}) {
    const params = await searchParams;
    const error = params.error as string | undefined;

    return (
        <main className="flex h-svh w-full flex-col items-center justify-center bg-linear-to-br from-emerald-400 via-blue-400 to-purple-500">
            {error && Object.keys(ErrorCodes.login).includes(error) && (
                <LoginErrorBanner errorCode={error} />
            )}
            <LoginForm />
            <div className="absolute bottom-2 flex w-full flex-col items-center justify-center">
                <span className="text-sm text-neutral-200">
                    A test task for the position of forntend React developer at
                    GreenAPI.
                </span>
                <span className="text-sm text-neutral-200">
                    By Artem Vorontsov
                </span>
            </div>
        </main>
    );
}
