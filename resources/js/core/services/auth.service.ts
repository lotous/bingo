import {AxiosAdapter} from '..';

let axiosClient = new AxiosAdapter(process.env.REACT_APP_API_URL);

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
    async login(payload: LoginPayload) {
        await axiosClient.get('/sanctum/csrf-cookie');
        await axiosClient.post('/login', payload);
    },
    async logout() {
        return await axiosClient.post('/logout');
    },
    async forgotPassword(payload: ForgotPasswordPayload) {
        await axiosClient.get('/sanctum/csrf-cookie');
        await axiosClient.post('/forgot-password', payload);
    },
    async getAuthUser() {
        return await axiosClient.get('api/user');
    },
    async resetPassword(payload: ResetPasswordPayload) {
        await axiosClient.get('/sanctum/csrf-cookie');
        await axiosClient.post('/reset-password', payload);
    },
    async updatePassword(payload: UpdatePasswordPayload) {
        await axiosClient.put('/user/password', payload);
    },
    async registerUser(payload: RegisterUserPayload) {
        await axiosClient.get('/sanctum/csrf-cookie');
        await axiosClient.post('/register', payload);
    },
    async sendVerification(payload: SendEmailVerificationPayload | {}) {
        await axiosClient.post('/email/verification-notification', payload);
    },
    async updateUser(payload: UpdateUserPayload) {
        await axiosClient.put('/user/profile-information', payload);
    },
};

export { AuthService };
