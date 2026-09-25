import LoginForm from "@/components/elements/loginForm";

export default function Home() {
    return (
        <main className="flex h-svh w-full flex-col items-center justify-center bg-linear-to-br from-emerald-400 via-blue-400 to-purple-500">
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
