export const getOrdersService = async () => {
  const response = await fetch("http://localhost:8080/api/v1/admin");
  const { data } = await response.json();
  return data;
};
