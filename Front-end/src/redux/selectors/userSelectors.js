export const selectUserProfile = (state) => state.user.profile;
export const selectUserAccountData = (id) => {
    return (state) => {
        console.log("account",state);
      // Vérifie si state.account et state.account.data existent avant de tenter d'accéder aux données
      if (state.tans && state.trans.transactions) {
        return state.trans.find((item) => item.userId === id) || null;
      }
      return null;
    };
  };
  
