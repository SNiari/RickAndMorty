<template>
  <div class="container mx-auto">
<<<<<<< HEAD
<<<<<<< HEAD
      <CharacterList :characters="characters" />
=======
=======
>>>>>>> a2ec3a25ce5edfedc93de17e0baa42f0f0f2de0d
      <h2>Liste des personnages</h2>
      <ul>
        <li v-for="character in characters" :key="character.id">
          {{ character.name }}
        </li>
      </ul>
<<<<<<< HEAD
>>>>>>> a2ec3a2 (feat: Ajout de l'affichage de la liste des personnages dans le template)
=======
>>>>>>> a2ec3a25ce5edfedc93de17e0baa42f0f0f2de0d
    </div>
</template>
  
  <script>
  import axios from "axios";
<<<<<<< HEAD
<<<<<<< HEAD
  import CharacterList from "./CharacterList.vue";
=======
>>>>>>> a2ec3a2 (feat: Ajout de l'affichage de la liste des personnages dans le template)
=======
>>>>>>> a2ec3a25ce5edfedc93de17e0baa42f0f0f2de0d
  
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
<<<<<<< HEAD
<<<<<<< HEAD
        CharacterList,
=======
>>>>>>> a2ec3a2 (feat: Ajout de l'affichage de la liste des personnages dans le template)
=======
>>>>>>> a2ec3a25ce5edfedc93de17e0baa42f0f0f2de0d
    },
  };
  </script>
  
  <style scoped>
  </style>
  