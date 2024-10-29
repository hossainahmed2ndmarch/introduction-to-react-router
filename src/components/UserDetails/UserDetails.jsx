import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const userDetails = useLoaderData();
  const { name, website } = userDetails;
  return (
    <div>
      <h3 className="text-4xl">Details About User:</h3>
      <h4 className="text-3xl font-semibold">Name: {name}</h4>
      <p>{website}</p>
    </div>
  );
};

export default UserDetails;
