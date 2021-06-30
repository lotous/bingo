
import { IUser, SET_USER, UserAction, UserState } from "../../types/user-types";

export const USER_INITIAL_STATE: UserState = {
    id: 1,
    first_name: "",
    last_name: "",
    email: "",
    is_verified: false,
    is_github_account: false,
};

const userReducer = (
    state: UserState = USER_INITIAL_STATE,
    action: UserAction
): UserState => {
    switch (action.type) {
        case SET_USER:
            const newUser: IUser = {
                id: action.user.id,
                first_name: action.user.first_name,
                last_name: action.user.last_name,
                email: action.user.email,
            }
            return {
                ...state,
                user: state.user.concat(newUser),
            }
    }
    return state
}

export default userReducer
