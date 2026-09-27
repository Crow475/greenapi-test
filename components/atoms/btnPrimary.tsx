export default function ButtonPrimary({
    children,
    className,
    ...props
}: {
    children: React.ReactNode;
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={`cursor-pointer rounded-lg bg-black px-4 py-2 font-bold text-white hover:bg-neutral-800 disabled:cursor-not-allowed disabled:bg-neutral-600 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
