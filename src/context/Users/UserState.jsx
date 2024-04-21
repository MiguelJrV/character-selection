import React, { useReducer, createContext } from "react";
import UserReducer from "./UserReducer";
import UserContext from "./UserContext";
import axios from "axios";

const UserState = (props) => { // Add props as a parameter

    const initialState = {
        users: [],
        selectedUser: null
    };

    const [state, dispatch] = useReducer(UserReducer, initialState);

    const getUser = async () => {
        try {
            const res = await axios.get('https://reqres.in/api/users');
            dispatch({
              type:"GET_USERS",
               payload:res.data.data
            })
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const getProfile = async (id) => {
        try {
            const res = await axios.get(`https://reqres.in/api/users/${id}`);
           dispatch({
             type:"GET_PROFILE",
             payload:res.data.data
           })
        } catch (error) {
            console.error("Error fetching user profile:", error);
        }
    };

    return (
        <UserContext.Provider value={{
            users: state.users,
            selectedUser: state.selectedUser,
            getUser,
            getProfile
        }}>
            {props.children} 
        </UserContext.Provider>
    );
}

export default UserState;


