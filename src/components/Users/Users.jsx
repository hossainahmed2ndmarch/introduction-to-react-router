import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
 const users = useLoaderData();
 
 return (
  <div>
   <h3 className="text-3xl">Our Users: {users.length}</h3>
   <div className="grid md:grid-cols-3 gap-6 mt-10">
    {
     users.map(user => <User key={user.id} user={user}></User>)
    }
   </div>
  </div>
 );
};

export default Users;