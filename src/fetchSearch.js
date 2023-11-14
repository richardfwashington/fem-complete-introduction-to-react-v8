async function fetchSearch({ queryKey }) {
  const { animal, location, breed } = queryKey[1];

  const res = await fetch(
    `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );

  if (!res.ok) {
    throw new Error(`per search not OK ${animal}, ${location}, ${breed}`);
  }

  return res.json();
}

export default fetchSearch;
