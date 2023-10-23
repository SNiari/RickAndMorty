<template>
  <div
    class="fixed inset-0 flex items-center justify-center z-50 w-full h-full overflow-y-auto"
    v-if="isOpen"
  >
    <div class="fixed inset-0 bg-black opacity-50"></div>
    <div
      class="absolute bg-white w-1/2 rounded-lg shadow-lg flex flex-col"
      style="height: 80%"
    >
      <div class="relative">
        <img
          :src="character.image"
          alt="Character Image"
          class="w-50 rounded-t-lg"
          
        />
        <h1 class="text-4xl font-semibold absolute bottom-0 left-3 text-white">
          {{ character.name }}
        </h1>
      </div>
      <div
        v-if="!episodes.length"
        class="flex flex-col flex-auto justify-center items-center"
      >
        <span class="text-2xl">No episodes</span>
      </div>
      <div v-if="episodes.length" class="flex flex-col flex-auto p-2 overflow-y-auto">
        <div v-for="episode in episodes" :key="episode.id">
          <div>{{ episode.name }}</div>
          <div>{{ episode.episode }}</div>
          <span>{{ episode.air_date }}</span>
          <div v-if="loadingCharacters">
            <span>Loading....</span>
          </div>
          <div v-if="!loadingCharacters" class="flex flex-wrap gap-1">
            <img
              v-for="character in charactersByEpisodeId[episode.id]"
              :key="character.id"
              :src="character.image"
              alt="Character Image"
              class="w-10 h-10"
            />
          </div>
        </div>
      </div>
      <button
        @click="closeModal"
        class="mt-4 bg-blue-500 text-white py-2 px-4 rounded-b"
      >
        Close
      </button>
    </div>
  </div>
</template>




<script>
import api from "../rick-morti.api";
import CharacterStatus from "./CharacterStatus.vue";
export default {
  data() {
    return {
      isOpen: false,
      loadingCharacters: true,
      episodes: [],
      character: null,
      charactersByEpisodeId: {},
    };
  },
  methods: {
    openModal(character, episodes) {
      this.character = character;
      this.episodes = episodes;
      this.isOpen = true;
      this.loadAllCharacterImage(episodes);
    },
    loadAllCharacterImage(episodes) {
      this.loadingCharacters = true;
      const requests = episodes.map(({ id, characters }) => {
        const ids = characters
          .map((character) =>
            character.substring(
              "https://rickandmortyapi.com/api/character/".length
            )
          )
          .join(",");

        return api
          .getCharacters(ids)
          .then((response) => {
            this.charactersByEpisodeId[id] = response;
          })
          .catch((error) => {
            console.error(error);
          });
      });

      Promise.all(requests).then(() => {
        console.log("loaded all images");
        console.log(this.charactersByEpisodeId);
        this.loadingCharacters = false;
      });
    },
    closeModal() {
      this.isOpen = false;
    },
  },
  components: {
    CharacterStatus,
  },
};
</script>
