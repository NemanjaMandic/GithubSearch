import { get } from "./network";

const BASE_URL = `https://api.github.com/users`;

export const fetchUsers = () => {
  return get(BASE_URL);
};

export const searchUsers = name => {
  return get(`${BASE_URL}/${name}`);
};
