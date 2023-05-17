export const orderService = async (item) => {
  console.log(item);
  const requesOptions = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(item),
  };
  const response = await fetch(
    "http://localhost:8080/api/v1/ordered",
    requesOptions
  );
  console.log(response);
  const { data } = await response.json();
  console.log(data);
  return data;
};
