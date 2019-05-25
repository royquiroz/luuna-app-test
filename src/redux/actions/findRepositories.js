export const type = "findRepositories";

const findRepositories = text => {
  return {
    type,
    payload: text
  };
};

export default findRepositories;
