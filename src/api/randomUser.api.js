import axios from "axios";

const randomUserApiUrl = `https://randomuser.me/api/`;

export const getRandomUser = async () => {
  const response = await axios.get(randomUserApiUrl);
  console.log(response.data);
};
