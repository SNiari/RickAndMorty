import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://rickandmortyapi.com/api/", // Your API base URL
  timeout: 10000 // Adjust as needed
});

export default {
  getFemaleCharacters() {
    return apiClient
      .get("character/?gender=female&species=human")
      .then((response) => response.data.results);
  },
  getCharacters(ids: string) {
    return apiClient.get(`character/${ids}`).then((response) => response.data);
  },
  getEpisodes(ids: string) {
    return apiClient
      .get(`/episode/${ids}`)
      .then((response) =>
        Array.isArray(response.data) ? response.data : [response.data]
      );
  }
};
