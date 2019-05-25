export const type = "findUsers";

const findUsers = name => {
  return {
    type,
    payload: name
  };
};

export default findUsers;
