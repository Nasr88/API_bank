import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProfile } from './redux/actions/userActions';

function AuthChecker({ children }) {
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            dispatch(fetchProfile(token));
        }
    }, [dispatch]);

    return <>{children}</>;
}

export default AuthChecker;
