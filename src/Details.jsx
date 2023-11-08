import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>{id}</h2>
      <Link to="/">Back</Link>
    </div>
  );
};

export default Details;
