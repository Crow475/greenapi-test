import { cookies } from "next/headers";

import { ChatsContextProvider } from "@/lib/chatsContext";
import { NotificationContextProvider } from "@/lib/notificationContext";
import ChatHeader from "@/components/elements/chatHeader";
import NewChatButton from "@/components/elements/newChatButton";
import LogOutButton from "@/components/elements/logOutButton";
import ChatList from "@/components/elements/chatList";
import ChatListPlaceholder from "@/components/elements/chatListPlaceholder";

export default async function ChatLayout({ children }: LayoutProps<"/chat">) {
    const cookieStore = await cookies();

    const idInstance = cookieStore.get("idInstance")?.value;
    const apiTokenInstance = cookieStore.get("apiTokenInstance")?.value;
    const allChats = cookieStore.get("allChats")?.value
        ? JSON.parse(cookieStore.get("allChats")!.value)
        : [];

    return (
        <ChatsContextProvider>
            <NotificationContextProvider
                apiTokenInstance={apiTokenInstance!}
                idInstance={idInstance!}
            >
                <main className="flex h-svh w-full flex-row items-center justify-center bg-linear-to-br from-emerald-100 via-green-200 to-yellow-100 p-4">
                    <div className="flex h-full w-1/4 flex-col items-center justify-start space-y-2 rounded-2xl bg-white p-4 shadow-2xl">
                        <div className="flex w-full flex-row items-center justify-center">
                            <div className="flex w-11/12 flex-row items-center justify-center">
                                <h1 className="text-2xl font-bold text-black">
                                    Chats
                                </h1>
                            </div>
                            <div className="flex w-1/12 flex-row items-center justify-center">
                                <NewChatButton />
                            </div>
                        </div>
                        {allChats.length > 0 ? (
                            <ChatList savedChats={allChats} />
                        ) : (
                            <ChatListPlaceholder />
                        )}
                    </div>
                    <div className="relative flex h-full w-3/4 flex-col items-center justify-center pl-4">
                        <div className="absolute top-0 flex w-full flex-row items-center justify-around">
                            <ChatHeader />
                            <div className="flex w-1/12 flex-row items-center justify-center">
                                <LogOutButton />
                            </div>
                        </div>
                        {children}
                    </div>
                </main>
            </NotificationContextProvider>
        </ChatsContextProvider>
    );
}
