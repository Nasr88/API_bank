import React, { useEffect } from 'react';
import { NavLink, Link,useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { selectUserProfile } from '../../redux/selectors/userSelectors'; // Import du sélecteur
import { fetchProfile } from '../../redux/actions/uerActions';


function Header() {
    const dispatch = useDispatch();

    
    const profile = useSelector(selectUserProfile);

    useEffect(() => {
        dispatch(fetchProfile());
      }, [dispatch]);





return(
  
            <div>
			
                {profile  && (
					<NavLink className="main-nav-item" to="/profile">
						<i className="fa fa-user-circle"></i>
						{!profile.body.firstName  && "Profile"}
						{profile.body.firstName  && profile.body.firstName }
					</NavLink>
				)}
			
                </div>
    
)
}

export default Header;


