import React from 'react'
import { Navigate } from 'react-router-dom'

import useUser from '../hooks/useUser';

const Protected = ({element}) => {
    const { user } = useUser();
    return (
        user.name ? element : <Navigate to="/"/>
    )
}

export default Protected