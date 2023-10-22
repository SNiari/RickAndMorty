<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <header>
    <div class="container mx-auto">
      <div class="flex items-center">
        <img
        class="logo"
        src="@/assets/logo.svg"
        width="125"
        height="125"
        />

        <HelloWorld msg="You did it!" />
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/app.css";
</style>
