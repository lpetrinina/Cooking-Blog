import { request } from "../utils/requester";

const baseURL = 'http://localhost:3030/users';

// use hook on event
export const useLogin = () => {

    const login = async (email, password) => {

        const authData = await request('POST', `${baseURL}/login`, { email, password });

        return authData;
    }

    return {
        login,
    }
}

// use hook on event
export const useRegister = () => {

    const register = async (username, email, password) => {

        const authData = await request('POST', `${baseURL}/register`, { username, email, password });

        return authData;
    }

    return {
        register
    }
}