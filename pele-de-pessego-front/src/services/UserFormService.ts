import httpCommon from "../common/http-common";
import UserData from "../types/UserData";

const createUser = (data: UserData) => {
    return httpCommon.post<UserData>("/session/register", data);
};

const UserFormService = {
    createUser
};

export default UserFormService;