import axios from "axios";

const base_url = "https://api.github.com/search";

export const searchUsers = user => {
  return axios
    .get(`${base_url}/users?q=${user}`)
    .then(data => {
      return {
        data: data.data
      };
    })
    .catch(err => {
      return {
        error: err
      };
    });
};

export const searchRepositories = repository => {
  return axios
    .get(`${base_url}/repositories?q=${repository}`)
    .then(data => {
      return {
        data: data.data
      };
    })
    .catch(err => {
      return {
        error: err
      };
    });
};
