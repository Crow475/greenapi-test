export default function MessageBubble({
    type,
    messageContent,
    timestamp,
}: {
    type: "incoming" | "outgoing";
    messageContent: string;
    timestamp: number;
}) {
    const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
    const formattedTime = date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });

    return (
        <li
            className={`flex w-full flex-row items-center px-2 py-0.5 ${type === "incoming" ? "justify-start" : "justify-end"}`}
        >
            <div
                className={`flex max-w-1/2 min-w-18 flex-col items-center justify-center rounded-2xl px-3 py-1 text-lg shadow-sm ${type === "incoming" ? "bg-neutral-100 text-black" : "bg-black text-white"}`}
            >
                <p className="flex w-full px-1 pt-1 text-left text-pretty wrap-anywhere">
                    {messageContent}
                </p>
                <time
                    dateTime={date.toISOString()}
                    className={`flex w-full flex-row items-center justify-end`}
                >
                    <span className="mx-0.5 text-[8px] text-neutral-400">
                        {formattedTime}
                    </span>
                </time>
            </div>
        </li>
    );
}
