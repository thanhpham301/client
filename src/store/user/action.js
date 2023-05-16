export const addUser = (username) => {
  return {
    type: "add_user",
    payload: username,
  };
};
