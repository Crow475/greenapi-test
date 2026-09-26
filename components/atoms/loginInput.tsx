export default function LoginInput({
    id,
    label,
}: {
    id: string;
    label: string;
}) {
    return (
        <label
            className="flex w-full flex-row items-center justify-between space-x-2"
            htmlFor={id}
        >
            <div className="flex w-1/3 flex-row items-center justify-start">
                <code className="rounded-lg bg-neutral-100 px-2 py-1 text-sm text-black">
                    {label}
                </code>
            </div>
            <input
                id={id}
                name={id}
                type="text"
                className="w-[60%] rounded-lg border border-neutral-400 px-2 py-1 text-black"
                required
            />
        </label>
    );
}
