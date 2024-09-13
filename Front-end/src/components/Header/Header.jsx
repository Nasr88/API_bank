import React, { useEffect } from 'react';
import { NavLink, Link,useNavigate } from "react-router-dom";
import logo from "../../assets/argentBankLogo.png";
import { useDispatch, useSelector } from 'react-redux';
import { selectUserProfile } from '../../redux/selectors/userSelectors'; // Import du sélecteur
import { fetchProfile } from '../../redux/actions/userActions';
import { logout } from '../../redux/actions/userActions'; // Importer l'action de déconnexion

function Header() {
    const dispatch = useDispatch();
    const navigate =  useNavigate();
    
    const profile = useSelector(selectUserProfile);

    useEffect(() => {
        dispatch(fetchProfile());
      }, [dispatch]);
	  useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            dispatch(fetchProfile(token));
        }
    }, [dispatch]);

  const handleLogout = () => {
    // Vider le cache local
    localStorage.clear();
    sessionStorage.clear();

    // Déclencher l'action de déconnexion
    dispatch(logout());

    // Rediriger l'utilisateur vers la page de connexion ou la page d'accueil
    navigate("/login"); 
};



return(
    <nav className="main-nav">
			<Link className="main-nav-logo" to="/">
				<img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
				<h1 className="sr-only">Argent Bank </h1>
			</Link>
            <div>
				{!profile && (
					<NavLink className="main-nav-item" to="/login">
						<i className="fa fa-user-circle"></i>
						Sign In
					</NavLink>
				)}
                {profile  && (
					<NavLink className="main-nav-item" to="/profile">
						<i className="fa fa-user-circle"></i>
						{!profile.body.firstName  && "Profile"}
						{profile.body.firstName  && profile.body.firstName }
					</NavLink>
				)}
				{profile && (
					<NavLink  className="main-nav-item" to="/" onClick={handleLogout}>
						<i className="fa fa-sign-out"></i>
						Sign Out
					</NavLink>
				)}
                </div>
    </nav>
)
}

export default Header;


