import httpCommon from "../common/http-common";
import SignInData from "../types/SignInData";

const login = (data: SignInData) => {
    return httpCommon.post<SignInData>("/session/login", data);
};

const SignInService = {
    login
};

export default SignInService;