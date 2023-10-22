<template>
    <div class="px-2 text-white">
      <figure
        v-for="character in characters"
        :key="character.id"
        @click="characterClicked(character)"
        class="flex gap-2 my-2 bg-gray-800"
      >
        <img :src="character.image" :alt="character.name" class="w-48" />
        <div class="flex flex-col">
          <p class="font-black">{{ character.name }}</p>
          <span class="text-gray-500 text-sm">Dernière localisation connue</span>
          <div>{{ character.location.name }}</div>
        </div>
      </figure>
    </div>
  </template>
  
  <script>
  export default {
    props: ["characters"],
    methods: {
    },
    components: {
    },
  };
  </script>