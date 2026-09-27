"use client";

import { logout } from "@/functions/logout";

export default function LogOutButton() {
    return (
        <button
            className="cursor-pointer rounded-2xl bg-white p-3 text-white shadow-lg hover:bg-neutral-200"
            onClick={() => logout()}
        >
            <span className="font-bold text-black">Log out</span>
        </button>
    );
}
