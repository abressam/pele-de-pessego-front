import httpCommon from "../common/http-common";
import SignInData from "../types/SignInData";

const login = (data: SignInData) => {
    const url = `/session/login?email=${encodeURIComponent(data.email)}&password=${encodeURIComponent(data.password)}`;
    return httpCommon.get(url);
};

const SignInService = {
    login
};

export default SignInService;