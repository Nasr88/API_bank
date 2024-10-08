import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserAction } from '../../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();// Utilisation de useNavigate pour la redirection
    const { loading, user, error } = useSelector((state) => state.auth);//re-render the component whenever the selected part of the state changes

    const handleSubmit = (e) => {
        e.preventDefault();
        if(rememberMe){ 
            localStorage.setItem("userEmail", email)
            localStorage.setItem("remeberMe", true)

         } else {
            localStorage.removeItem("userEmail");
            localStorage.removeItem("remeberMe");
        };
        dispatch(loginUserAction({ email, password }, navigate));
    };
    /**
	 Lorsque l'utilisateur clique sur la case à cocher, la valeur de la case à cocher est définie à l'opposé de ce qu'elle était
     auparavant.
	 */
    useEffect(()=>{
       const savedEmail =  localStorage.getItem("userEmail");
       if (savedEmail){
        setRememberMe(true);
        setEmail(savedEmail);
       }
    },[])
	const handleRememberMe = () => {
		setRememberMe(!rememberMe);
	};

    return (
        <div>
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-wrapper">
						<label htmlFor="username">Username</label>
						<input type="text" id="username" value={email} onChange={(e) => setEmail(e.target.value)} />
					</div>
					<div className="input-wrapper">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
					</div>
					<div className="input-remember">
						<input type="checkbox" id="remember-me" checked={rememberMe} onChange={handleRememberMe} />
						<label htmlFor="remember-me">Remember me</label>
					</div>
                <button type="submit" className="sign-in-button">Sign In</button>
            </form>
            {loading && <p className="input-remember ">Loading...</p>}
            {user && <p className="input-remember ">Welcome, {user.firstName}!</p>}
            {error && <p className="input-remember input-error">Error: {error}</p>}
        </div>
    );
};

export default Login;
