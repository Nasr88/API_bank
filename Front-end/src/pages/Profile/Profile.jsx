import React from 'react';
import { useSelector } from 'react-redux';
import { fetchProfile } from '../../redux/actions/uerActions';
import { useDispatch } from 'react-redux';

const  Profile = ()=>{
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.user.profile);
    
    React.useEffect(() => {
        dispatch(fetchProfile());
      }, [dispatch]);
    
    return (<>{profile?.username}</>)
}
export default Profile;