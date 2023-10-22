<template>
  <div class="container mx-auto">
      <h2>Liste des personnages</h2>
      <ul>
        <li v-for="character in characters" :key="character.id">
          {{ character.name }}
        </li>
      </ul>
    </div>
</template>
  
  <script>
  import axios from "axios";
  
  const CHARACTER_API_URL ="https://rickandmortyapi.com/api/character/?gender=female&species=human";
  const EPISODE_API_BASE_URL = "https://rickandmortyapi.com/api/episode/";
  
  export default {
    data() {
      return {
        characters: [], // Initialise un tableau vide pour stocker les personnages
      };
    },
    methods: {
      fetchCharacters() {
        // Récupère la liste des personnages de sexe féminin et de l'espèce humaine depuis l'API
        axios
          .get(CHARACTER_API_URL)
          .then((response) => {
            this.characters = response.data.results; // Stocke les personnages dans la variable "characters"
            console.log(this.characters); 
          })
          .catch((error) => {
            console.error(error);
          });
      },
      showCharacterEpisodes(character) {
        console.log(character.episode);
        const baseUrlLenght = EPISODE_API_BASE_URL.length;
        // Extrait les ID des épisodes à partir des liens dans la propriété "episode" du personnage
        const ids = character.episode.map((link) =>
          link.substring(baseUrlLenght)
        );
        // Récupère les informations des épisodes à partir de leurs ID
        
      },
    },
    mounted() {
      this.fetchCharacters(); // Appelle la fonction pour récupérer les personnages lors de la création du composant
    },
    components: {
    },
  };
  </script>
  
  <style scoped>
  </style>
  