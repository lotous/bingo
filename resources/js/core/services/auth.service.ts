import { AxiosAdapter } from '..';
import { AxiosResponse } from "axios";

const axiosClient = new AxiosAdapter( process.env.REACT_APP_API_URL );

type LoginPayload = {
    email: string;
    password: string;
};

type ForgotPasswordPayload = {
    email: string;
};

type ResetPasswordPayload = {
    token: string | null;
    email: string;
    password: string;
    password_confirmation: string;
};

type UpdatePasswordPayload = {
    current_password: string;
    password: string;
    password_confirmation: string;
};

type RegisterUserPayload = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

type SendEmailVerificationPayload = {
    email: string;
};

type UpdateUserPayload = {
    name: string;
    email: string;
};

const AuthService = {

    /**
     * Api login request
     * @param payload
     */
    login: async ( payload: LoginPayload ): Promise<void> => {
        await axiosClient.get( '/sanctum/csrf-cookie' );
        await axiosClient.post( '/login', payload );
    },

    /**
     * Api logout request
     */
    logout: async (): Promise<void> => {
        await axiosClient.post( '/logout' );
    },

    /**
     * Api forgot password request
     * @param payload
     */
    forgotPassword: async ( payload: ForgotPasswordPayload ): Promise<void> => {
        await axiosClient.get( '/sanctum/csrf-cookie' );
        await axiosClient.post( '/forgot-password', payload );
    },

    /**
     * Api get user request
     */
    getAuthUser: async (): Promise<AxiosResponse> => {
        return await axiosClient.get( 'api/user' );
    },

    /**
     * Api reset password request
     * @param payload
     */
    resetPassword: async ( payload: ResetPasswordPayload ): Promise<void> => {
        await axiosClient.get( '/sanctum/csrf-cookie' );
        await axiosClient.post( '/reset-password', payload );
    },

    /**
     * Api update password request
     * @param payload
     */
    updatePassword: async ( payload: UpdatePasswordPayload ): Promise<void> => {
        await axiosClient.put( '/user/password', payload );
    },

    /**
     * Api register user request
     * @param payload
     */
    registerUser: async ( payload: RegisterUserPayload ): Promise<void> => {
        await axiosClient.get( '/sanctum/csrf-cookie' );
        await axiosClient.post( '/register', payload );
    },

    /**
     * Api send verification request
     * @param payload
     */
    sendVerification: async ( payload: SendEmailVerificationPayload | Record<string, unknown> ): Promise<void> => {
        await axiosClient.post( '/email/verification-notification', payload );
    },

    /**
     * Api update user request
     * @param payload
     */
    updateUser: async ( payload: UpdateUserPayload ): Promise<void> => {
        await axiosClient.put( '/user/profile-information', payload );
    },
};

export { AuthService };
