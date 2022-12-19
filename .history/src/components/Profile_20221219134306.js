// import the useContext hook
import React, { useContext } from "react";
// import the UserContext we created
import { UserContext } from "../context/user";
import Interests from "./Interests";

function Profile({ user, theme }) {
  // call useContext with our UserContext
  const user = useContext(UserContext);
  
  if (!user) return <h2>Please Login To View Profile</h2>;
  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <Interests interests={user.interests} theme={theme} />
    </div>
  );
}

export default Profile;