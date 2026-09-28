"use client";

import { createContext, useContext, useEffect, useState } from "react";

import {
    NotificationData,
    RecievedMessageNotification,
    OutgoingMessageReceivedNotification,
    TextMessageContent,
    LocalNotification,
} from "@/lib/notificationTypes";

import { useChats } from "@/lib/chatsContext";
import useNotificationReceiver from "@/lib/notificationReceiver";

import deleteNotification from "@/functions/deleteNotification";

const NotificationContext = createContext<{
    notification: NotificationData | undefined;
    isLoading: boolean;
    isError: Error | undefined;
    localNotificationStore: LocalNotification[];
    setLocalNotificationStore: React.Dispatch<
        React.SetStateAction<LocalNotification[]>
    >;
}>({
    notification: undefined,
    isLoading: false,
    isError: undefined,
    localNotificationStore: [],
    setLocalNotificationStore: () => {},
});

function NotificationContextProvider({
    children,
    idInstance,
    apiTokenInstance,
}: {
    children: React.ReactNode;
    idInstance: string;
    apiTokenInstance: string;
}) {
    const { notification, isLoading, isError } = useNotificationReceiver({
        idInstance,
        apiTokenInstance,
    });

    const [localNotificationStore, setLocalNotificationStore] = useState<
        LocalNotification[]
    >([]);

    return (
        <NotificationContext.Provider
            value={{
                notification,
                isLoading,
                isError,
                localNotificationStore,
                setLocalNotificationStore,
            }}
        >
            <NotificationController
                idInstance={idInstance}
                apiTokenInstance={apiTokenInstance}
            />
            {children}
        </NotificationContext.Provider>
    );
}

function useNotification() {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error(
            "useNotification must be used within a NotificationContextProvider",
        );
    }

    return context;
}

function NotificationController({
    idInstance,
    apiTokenInstance,
}: {
    idInstance: string;
    apiTokenInstance: string;
}) {
    const { allChats } = useChats();
    const { notification, setLocalNotificationStore } = useNotification();

    useEffect(() => {
        const UnInterestingNotifications = [
            "stateInstanceChanged",
            "quotaExceeded",
            "outgoingMessageStatus",
        ];

        if (notification) {
            if (
                UnInterestingNotifications.includes(
                    notification.body.typeWebhook,
                )
            ) {
                // Delete notification if it is not relevant to the app
                deleteNotification({
                    apiTokenInstance,
                    idInstance,
                    receiptId: notification.receiptId,
                }).catch((error) => {
                    console.error("Error deleting notification:", error);
                });
                return;
            }

            if (notification.body.typeWebhook === "incomingMessageReceived") {
                const messageNotification =
                    notification as RecievedMessageNotification;
                const chatId = messageNotification.body.senderData.chatId;

                // Delete notification from the queue
                deleteNotification({
                    apiTokenInstance,
                    idInstance,
                    receiptId: notification.receiptId,
                }).catch((error) => {
                    console.error("Error deleting notification:", error);
                });

                // If the chatId is not in the list of allChats, do not add it to the local store
                if (!allChats.some((chat) => chat.chatId === chatId)) {
                    return;
                }

                // Save only text messages to the local store
                if (
                    messageNotification.body.messageData.typeMessage ===
                    "textMessage"
                ) {
                    const data: TextMessageContent = messageNotification.body
                        .messageData as TextMessageContent;

                    setLocalNotificationStore((prevStore) => [
                        ...prevStore,
                        {
                            receiptId: messageNotification.receiptId,
                            typeWebhook: messageNotification.body.typeWebhook,
                            chatId: chatId,
                            idMessage: messageNotification.body.idMessage,
                            timestamp: messageNotification.body.timestamp,
                            typeLocal: "incoming",
                            messageContent: data.textMessageData.textMessage,
                        },
                    ]);
                }

                return;
            }

            if (
                notification.body.typeWebhook === "outgoingMessageReceived" ||
                notification.body.typeWebhook === "outgoingAPIMessageReceived"
            ) {
                const messageReceivedNotification =
                    notification as OutgoingMessageReceivedNotification;
                const chatId =
                    messageReceivedNotification.body.senderData.chatId;

                // Delete notification from the queue
                deleteNotification({
                    apiTokenInstance,
                    idInstance,
                    receiptId: notification.receiptId,
                }).catch((error) => {
                    console.error("Error deleting notification:", error);
                });

                // If the chatId is not in the list of allChats, do not add it to the local store
                if (!allChats.some((chat) => chat.chatId === chatId)) {
                    return;
                }

                if (
                    messageReceivedNotification.body.messageData.typeMessage ===
                    "textMessage"
                ) {
                    const data: TextMessageContent = messageReceivedNotification
                        .body.messageData as TextMessageContent;

                    setLocalNotificationStore((prevStore) => [
                        ...prevStore,
                        {
                            receiptId: messageReceivedNotification.receiptId,
                            typeWebhook:
                                messageReceivedNotification.body.typeWebhook,
                            chatId: chatId,
                            idMessage:
                                messageReceivedNotification.body.idMessage,
                            timestamp:
                                messageReceivedNotification.body.timestamp,
                            typeLocal: "outgoing",
                            messageContent: data.textMessageData.textMessage,
                        },
                    ]);
                }

                return;
            }
        }
    }, [
        notification,
        allChats,
        idInstance,
        apiTokenInstance,
        setLocalNotificationStore,
    ]);

    return null;
}

export { NotificationContextProvider, useNotification };
