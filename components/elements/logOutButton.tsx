"use client";

import { useState, useEffect } from "react";

import { logout } from "@/functions/logout";

export default function LogOutButton() {
    const [logoutClicked, setLogoutClicked] = useState(false);

    useEffect(() => {
        if (logoutClicked) {
            localStorage.removeItem("localNotificationStore");
        }
    }, [logoutClicked]);

    return (
        <button
            className="cursor-pointer rounded-2xl bg-white p-3 text-white shadow-lg hover:bg-neutral-200"
            onClick={() => {
                logout();
                setLogoutClicked(true);
            }}
        >
            <span className="font-bold text-black">Log out</span>
        </button>
    );
}
