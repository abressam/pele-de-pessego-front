import httpCommon from "../common/http-common";
import UserData from "../types/UserData";
import { setAuthorizationHeader } from "./AuthHeader";

const getUser = () => {
    setAuthorizationHeader(httpCommon);
    return httpCommon.get("/user/info");
};

const createUser = (data: UserData) => {
    return httpCommon.post<UserData>("/session/register", data);
};

const updateUser = (data: UserData) => {
    setAuthorizationHeader(httpCommon);
    return httpCommon.put<UserData>("/user/alter", data);
};

const deleteUser = () => {
    setAuthorizationHeader(httpCommon);
    return httpCommon.delete("/user/remove");
};

const UserFormService = {
    getUser,
    createUser,
    updateUser,
    deleteUser
};

export default UserFormService;