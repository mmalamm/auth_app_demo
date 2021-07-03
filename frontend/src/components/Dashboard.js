import { useContext } from "react";
import { UserContext } from "../index";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  return <h4>{user.username}'s dashboard</h4>;
};

export default Dashboard;
