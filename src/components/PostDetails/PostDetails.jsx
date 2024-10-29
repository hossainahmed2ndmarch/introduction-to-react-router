import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
 const postDetails = useLoaderData();
 const navigate = useNavigate();
 const {id, title, body}=postDetails

 const handleGoBack =()=>{
  navigate(-1)
 }
 return (
  <div className="bg-slate-400 rounded-2xl p-4 border border-black">
      <h2 className="text-xl font-bold">Post ID: {id}</h2>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p>{body}</p>
      <button onClick={handleGoBack}>Go back</button>
    </div>
  );

};

export default PostDetails;