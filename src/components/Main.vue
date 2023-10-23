<template>
  <div class="container mx-auto">
    <CharacterList :characters="characters" @character-clicked="showCharacterEpisodes" />
    <CharacterModal ref="characterModal" />
  </div>
</template>

<script>
import api from "../rick-morti.api";
import CharacterList from "./CharacterList.vue";
import CharacterModal from "./CharacterModal.vue";

export default {
  data() {
    return {
      characters: [],
    };
  },
  methods: {
    fetchCharacters() {
      // Effectuez ici une requête Axios pour récupérer la liste des personnages de sexe féminin et de l'espèce humaine.
      api
        .getFemaleCharacters()
        .then((response) => {
          this.characters = response;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    showCharacterEpisodes(character) {
      const baseUrlLenght = "https://rickandmortyapi.com/api/episode/".length;
      const ids = character.episode.map((link) =>
        link.substring(baseUrlLenght)
      );
      api
        .getEpisodes(ids)
        .then((response) => {
          this.$refs.characterModal.openModal(character, response);
        })
        .catch((error) => {
          this.$refs.characterModal.openModal(character, []);
        });
    },
  },
  mounted() {
    this.fetchCharacters();
  },
  components: {
    CharacterList,
    CharacterModal,
  },
};
</script>

<style scoped>
</style>