import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function proxy(request: NextRequest) {
    const cookieStore = await cookies();
    const idInstance = cookieStore.get("idInstance");
    const apiTokenInstance = cookieStore.get("apiTokenInstance");

    if (!idInstance || !apiTokenInstance) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    const instanceStatusResponse = await fetch(
        `${process.env.API_URI}/waInstance${idInstance.value}/getStateInstance/${apiTokenInstance.value}`,
    );
    console.log("Checked in proxy function");
    console.log(request.url);

    if (!instanceStatusResponse.ok) {
        const responseURL = new URL("/", request.url);
        responseURL.searchParams.set("error", "INVALID_INSTANCE");

        return NextResponse.redirect(responseURL);
    }

    const instanceStatusData = await instanceStatusResponse.json();

    if (instanceStatusData.stateInstance !== "authorized") {
        const responseURL = new URL("/", request.url);
        responseURL.searchParams.set("error", "UNAUTHORIZED_INSTANCE");

        return NextResponse.redirect(responseURL);
    }

    return NextResponse.next();
}

export const config = {
    matcher: "/chat/:path*",
};
