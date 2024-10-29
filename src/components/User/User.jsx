import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { name, phone, email, id } = user;
  return (
    <div className="p-6 border border-slate-700 bg-slate-300 rounded-2xl">
      <h3 className="text-3xl font-semibold">Name: {name}</h3>
      <p className="font-medium">Email: {email}</p>
      <p className="font-medium">Phone: {phone}</p>
      <Link to={`/user/${id}`}>Show Details</Link>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
