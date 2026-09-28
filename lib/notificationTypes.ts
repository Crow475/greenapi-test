interface NotificationData {
    receiptId: number;
    body: {
        typeWebhook: string;
        instanceData: {
            idInstance: number;
            wid: string;
            typeInstance: string;
        };
        timestamp: number;
        idMessage: string;
        [key: string]: unknown; // Additional properties depending on the type of notification
    };
}

interface RecievedMessageNotification extends NotificationData {
    body: {
        typeWebhook: "incomingMessageReceived";
        instanceData: {
            idInstance: number;
            wid: string;
            typeInstance: string;
        };
        timestamp: number;
        idMessage: string;
        senderData: {
            chatId: string;
            chatType: string;
            sender: string;
            chatName: string;
            senderName: string;
            senderType: string;
            senderContactName: string;
            senderPhoneNumber: number;
        };
        messageData: {
            typeMessage: string;
            [key: string]: unknown; // Additional properties depending on the type of message
        };
    };
}

interface OutgoingMessageReceivedNotification extends NotificationData {
    body: {
        typeWebhook: "outgoingMessageReceived" | "outgoingAPIMessageReceived";
        instanceData: {
            idInstance: number;
            wid: string;
            typeInstance: string;
        };
        timestamp: number;
        idMessage: string;
        senderData: {
            chatId: string;
            chatType: string;
            sender: string;
            chatName: string;
            senderName: string;
            senderType: string;
            senderContactName: string;
            senderPhoneNumber: number;
        };
        messageData: {
            typeMessage: string;
            [key: string]: unknown; // Additional properties depending on the type of message
        };
    };
}

type TextMessageContent = {
    typeMessage: "textMessage";
    textMessageData: {
        textMessage: string;
    };
};

type LocalNotification = {
    receiptId: number;
    typeWebhook: string;
    chatId?: string;
    idMessage?: string;
    timestamp: number;
    typeLocal: "incoming" | "outgoing";
    messageContent: string;
};

export type {
    NotificationData,
    RecievedMessageNotification,
    OutgoingMessageReceivedNotification,
    TextMessageContent,
    LocalNotification,
};
