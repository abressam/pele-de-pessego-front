export default interface SignInData {
    jwt(arg0: string, jwt: any): unknown;
    user: any;
    email: string;
    password: string;
}