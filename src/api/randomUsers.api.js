import axios from "axios";

const randomUserApiUrl = `https://randomuser.me/api/`;

export const getRandomUsers = async (numberOfResults, cancelToken) => {
  try {
    const response = await axios.get(
      `${randomUserApiUrl}?results=${numberOfResults}`,
      { cancelToken }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
