import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex h-svh w-full flex-col items-center justify-center space-y-2 bg-white">
            <h1 className="text-8xl font-black text-black">404</h1>
            <span className="text-3xl font-bold text-black">Oops!</span>
            <span className="text-lg text-black">
                The page you are looking for does not exist.
            </span>
            <Link
                href="/"
                className="mt-4 rounded-lg bg-black px-4 py-2 font-bold text-white hover:bg-neutral-800"
            >
                Go back to Home
            </Link>
        </main>
    );
}
