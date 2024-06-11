import axios from "axios";

const api = axios.create({
  baseURL: "https://newsapi.org/v2",
});

// News get by category
export async function getNewsByCategory(category) {
  const response = await api.get(
    `/everything?q=${category}&apiKey=${""}`
  );
  return response.data;
}

// Top News by Country
export async function getTopNewsByCountry(country) {
  const response = await api.get(
    `/top-headlines?country=${country}&apiKey=`
  );
  return response.data;
}


// Search News
export async function searchNews(query) {
  const response = await api.get(
    `/everything?q=${query}&apiKey=`
  );
  return response.data;
}