<script setup>
import { RouterLink, RouterView } from "vue-router";
import Main from "@/components/Main.vue";
</script>

<template>
  <header>
    <div class="container mx-auto">
      <div class="flex items-center">
        <Main />
      </div>
    </div>
  </header>
  <RouterView />
</template>

<style>
@import "@/assets/app.css";
</style>


