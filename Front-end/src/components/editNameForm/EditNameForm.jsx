import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserProfile } from "../../redux/selectors/userSelectors"; // Import du sélecteur
import { updateProfile, fetchProfile } from "../../redux/actions/userActions"; // Import des actions


import "./style.scss";

function EditNameForm() {
    const dispatch = useDispatch();
    const profile = useSelector(selectUserProfile);

    const [newFirstName, setNewFirstName] = useState("");
    const [newLastName, setNewLastName] = useState("");
    const [editNameFormError, setEditNameFormError] = useState("");

    useEffect(() => {
        // Récupérer le profil utilisateur à chaque chargement du composant
        dispatch(fetchProfile());
    }, [dispatch]);

    useEffect(() => {
        // Mettre à jour les champs du formulaire avec les données du profil utilisateur
        if (profile) {
            setNewFirstName(profile.body.firstName || '');
            setNewLastName(profile.body.lastName || '');
        }
    }, [profile]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newFirstName === profile.body.firstName && newLastName === profile.lastName) {
            setEditNameFormError("FirstName and LastName are the same as the current ones.");
        } else if (newFirstName.length === 0 || newLastName.length === 0) {
            setEditNameFormError("Inputs can't be empty");
        } else {
            // Mettre à jour le profil utilisateur
            dispatch(updateProfile(newFirstName, newLastName));
            setEditNameFormError("");
        }
    };

    return (
        <form className="new-name-form" onSubmit={handleSubmit}>
            <div className="input-group">
                <div className="input-wrapper">
                    
                    <input
                        type="text"
                        id="firstname"
                        onChange={(e) => setNewFirstName(e.target.value)}
                        value={newFirstName}
                    />
                </div>
                <div className="input-wrapper">
                   
                    <input
                        type="text"
                        id="lastname"
                        onChange={(e) => setNewLastName(e.target.value)}
                        value={newLastName}
                    />
                </div>
            </div>
            <div className="input-group input-center">
                <button type="submit" className="edit-button">
                    Save
                </button>
            </div>
            {editNameFormError && (
                <div className="input-group input-center">
                    <div className="input-new-names input-error">{editNameFormError}</div>
                </div>
            )}
        </form>
    );
}

export default EditNameForm;
