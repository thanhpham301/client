export const addUser = (username) => {
  return {
    type: "add_user",
    payload: username,
  };
};

export const delUser = (item) => {
  return {
    type: "del_user",
    payload: item,
  };
};
