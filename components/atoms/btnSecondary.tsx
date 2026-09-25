export default function ButtonSecondary({
    children,
    className,
    ...props
}: {
    children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={`cursor-pointer rounded-lg bg-neutral-200 px-4 py-2 font-bold text-black hover:bg-neutral-300 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
