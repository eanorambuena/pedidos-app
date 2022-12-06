import React from 'react'

import { UserContext } from '../providers/UserProvider' 

const useUser = () => {
    const context = React.useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }

    return context;
}

export default useUser