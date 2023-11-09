const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];
  const apiRes = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!apiRes.ok) {
    throw new Error(`Pet details/{id} fetch not OK`);
  }

  return apiRes.json();
};

export default fetchPet;
