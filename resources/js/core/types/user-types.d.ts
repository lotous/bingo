export const SET_USER: string = 'SET_USER';

interface IUser {
    id: number
    first_name: string
    last_name: string
    email: string
}

type UserState = {
    user: IUser[]
}

type UserAction = {
    type: string
    user: IUser
}

type DispatchType = ( args: UserAction ) => UserAction
