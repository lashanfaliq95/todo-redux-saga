const fetchText = async () => {
  const { data } = await fetch(
    "https://reqres.in/api/users/2 "
  ).then(async response => response.json());
  return data ? data.email : null;
};

export default fetchText;
