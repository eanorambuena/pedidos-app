import React from 'react'

import useLocalStorage from '../hooks/useLocalStorage';

export const UserContext = React.createContext(
    {
        user: {
            name: "",
            profileImage: ""
        },
        setUser: () => {}
    }
);

const UserProvider = ({children}) => {
    const [ localUser, setLocalUser ] = useLocalStorage('user', {});
    const [user, setUser] = React.useState(localUser);
    
    const updateUser = (newUser) => {
        setLocalUser(newUser);
        setUser(newUser);
    }

    const value = {user, setUser: updateUser};

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider