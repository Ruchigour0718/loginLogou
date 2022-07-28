import React, { useState } from "react";
import Login from "../Login";
import Logout from "../Logout";

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      {isLoggedIn ? <Logout onClick={onClick} /> : <Login onClick={onClick} />}
    </div>
  );
};

export default Dashboard;
