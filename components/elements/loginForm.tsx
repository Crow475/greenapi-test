import LoginInput from "@/components/atoms/loginInput";
import ButtonPrimary from "@/components/atoms/btnPrimary";

export default function LoginForm() {
    return (
        <div className="flex h-1/2 w-1/3 flex-col items-center justify-between rounded-2xl bg-white pt-10 pb-2 shadow-2xl">
            <h1 className="text-4xl font-black text-black">
                Enter Credentials
            </h1>
            <form className="flex h-full w-full flex-col items-center justify-around px-4 py-4">
                <div className="flex w-[95%] flex-col items-center justify-between space-y-4">
                    <LoginInput id="idInstance" label="idInstance" />
                    <LoginInput
                        id="apiTokenInstance"
                        label="apiTokenInstance"
                    />
                </div>
                <ButtonPrimary type="submit">Submit</ButtonPrimary>
            </form>
        </div>
    );
}
