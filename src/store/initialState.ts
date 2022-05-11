interface IUserState {
    login: string,
    role: string
}

export const UserInitialState: IUserState = {
    login: '',
    role: ''
}