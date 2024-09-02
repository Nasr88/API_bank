import React, { useEffect } from 'react';
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/argentBankLogo.png";
import { useDispatch, useSelector } from 'react-redux';
// import { selectUserFirstName } from '../../redux/selectors/userSelectors'; // Import du sélecteur
import { fetchProfile } from '../../redux/actions/uerActions';
import { logout } from '../../redux/actions/authActions'; // Importer l'action de déconnexion

function Header() {
    const dispatch = useDispatch();
    //  const userFirstName = useSelector(selectUserFirstName); // Utilisation du sélecteur

    // console.log("user first name:",userFirstName);
    
    const profile = useSelector((state) => state.user.profile);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout()); // Déclencher l'action de déconnexion
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

return(
    <nav className="main-nav">
			<Link className="main-nav-logo" to="/">
				<img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
				<h1 className="sr-only">Argent Bank </h1>
			</Link>
            <div>
				{!profile.body.firstName && (
					<NavLink className="main-nav-item" to="/login">
						<i className="fa fa-user-circle"></i>
						Sign In
					</NavLink>
				)}
                {profile.body.firstName  && (
					<NavLink className="main-nav-item" to="/profile">
						<i className="fa fa-user-circle"></i>
						{!profile.body.firstName  && "Profile"}
						{profile.body.firstName  && profile.body.firstName }
					</NavLink>
				)}
				{profile.body.firstName  && (
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


