import { createContext, useEffect, useReducer } from "react";

import AuthReducer from "./AuthReducer";

const initialState = {
    currentUser: JSON.parse(localStorage.getItem("user")) || null
}

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.currentUser))
    }, [state.currentUser])

    return (
        <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}