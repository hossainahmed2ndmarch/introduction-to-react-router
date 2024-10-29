import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { title, id } = post;

  const navigate = useNavigate()

  const handleSeeDetail =()=>{
   navigate(`/post/${id}`)
  }
  return (
    <div className="bg-slate-400 rounded-2xl p-4 border border-black">
      <h2 className="text-xl font-bold">Post ID: {id}</h2>
      <h3 className="text-2xl font-bold">{title}</h3>
      <Link to={`/post/${id}`}>Show details</Link>
      <button onClick={handleSeeDetail}>See details</button>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
