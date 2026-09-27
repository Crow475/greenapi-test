const ErrorCodes = {
    login: {
        INVALID_INSTANCE: "Invalid instance. Please check your credentials.",
        UNAUTHORIZED_INSTANCE:
            "Unauthorized instance. Please check your instance's status.",
    },
    chat: {
        INVALID_PHONE_NUMBER: "Invalid phone number format. Please try again.",
        ACCOUNT_DOES_NOT_EXIST:
            "The account does not exist. Please check the phone number.",
    },
};

export default ErrorCodes;
