import axios from "axios";

const endpoint = process.env.REACT_APP_API_ENDPOINT;
const apiKey = process.env.REACT_APP_API_KEY;

export const fetchRecipeApi = async (query: string, resultCount: number) => {
  return await axios.get(
    `${endpoint}/recipes/complexSearch?apiKey=${apiKey}&query=${query}&number=${resultCount}`
  );
};

export const fetchFoodApi = async (query: string, resultCount: number) => {
  return await axios.get(
    endpoint +
      "/food/menuItems/search?apiKey=" +
      apiKey +
      "&query=" +
      query +
      "&number=" +
      resultCount
  );
};

export const fetchFoodDetailApi = async (id: number) => {
  return await axios.get(
    `${endpoint}/recipes/${id}/information?apiKey=${apiKey}`
  );
};
