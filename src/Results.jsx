import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            location={`${pet.city}, ${pet.state}`}
            key={pet.id}
          />
          // Could also use the spread operator to ...pet to set all properties
        ))
      )}
    </div>
  );
};

export default Results;
