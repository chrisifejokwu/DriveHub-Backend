interface LoginRequest {
    body: {
        email: string;
        password: string;
    };
}
interface LoginResponse {
    message: string;
    token?: string;
}
declare const _default: {
    loginUser: (req: LoginRequest, res: {
        json: (data: LoginResponse) => void;
        status: (code: number) => {
            json: (data: {
                message?: string;
                error?: string;
            }) => void;
        };
    }) => Promise<void>;
};
export default _default;
//# sourceMappingURL=authController.d.ts.map