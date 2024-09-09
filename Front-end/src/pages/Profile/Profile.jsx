import React, { useEffect } from 'react';
import {useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile } from '../../redux/actions/userActions';
import { selectUserAccountData } from '../../redux/selectors/userSelectors';
import EditNameForm from '../../components/editNameForm/EditNameForm';
import { selectUserProfile } from '../../redux/selectors/userSelectors';
import AccountCard from '../../components/accountCard/AccountCard';
import AccountCardData from '../../data/AccountCardData.json';

function Profile() {
    const dispatch = useDispatch();
    const navigate =  useNavigate();
    const profile = useSelector(selectUserProfile);
    const id= profile?.body?.id;
    console.log("profile user id:",id);
    // const userId = profile.body.id;
    // console.log("userId:",userId)
     const accountData = useSelector(selectUserAccountData(id));
     console.log("accountData",accountData)
    
    useEffect(() => {
        dispatch(fetchProfile());
      }, [dispatch]);
     

    useEffect(() => {
      // Vérifiez si le token est présent dans le localStorage
      const token = localStorage.getItem('token');
      if (token) {
          // Si le token existe, dispatch une action pour récupérer le profil de l'utilisateur
          dispatch(fetchProfile(token));
      }else{navigate("/sign-in"); }
  }, [dispatch]);
      

  return(
  
        <main className="main bg-dark">
            <div className="header">
              <h1>
                Welcome back
              </h1>
              <EditNameForm />
            </div>
			      <h2 className="sr-only">Accounts</h2>
			 {/* Return items from json file with map */}
       {AccountCardData.map((data) => (
                    /* Return account component */
                    <AccountCard 
                        key={data.id}
                        title={data.title}
                        amount={data.amount}
                        description={data.description}
                    />
                ))}
        </main>
    
)
}

export default Profile;


