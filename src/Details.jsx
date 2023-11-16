import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ErrorBoundary from "./ErrorBoundary";
import fetchPet from "./fetchPet";
import Carousel from "./Carousel";

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["petDetails", id], fetchPet);

  if (results.isError) {
    return <p>Oh no!</p>;
  }

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">👀</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <h1>{pet.name}</h1>
      <h2>
        {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
      </h2>
      <button>Adapt {pet.name}</button>
      <p>{pet.description}</p>
      <Link to="/">Back</Link>
    </div>
  );
};

function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}

export default DetailsErrorBoundary;
