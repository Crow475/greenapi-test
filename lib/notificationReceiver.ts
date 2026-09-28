import useSWR from "swr";

import type { NotificationData } from "@/lib/notificationTypes";

const fetcher = async (url: string): Promise<NotificationData> => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch notification data");
    }
    return response.json();
};

export default function useNotificationReceiver({
    idInstance,
    apiTokenInstance,
}: {
    idInstance: string;
    apiTokenInstance: string;
}) {
    const url = `${process.env.NEXT_PUBLIC_API_URI}/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`;

    const { data, error, isLoading } = useSWR<NotificationData>(url, fetcher, {
        refreshInterval: 1000, // Refresh every second
        refreshWhenHidden: true, // Refresh even when the tab is hidden
        dedupingInterval: 500, // Deduplicate requests within 0.5 seconds
    });

    return {
        notification: data,
        isLoading,
        isError: error,
    };
}
