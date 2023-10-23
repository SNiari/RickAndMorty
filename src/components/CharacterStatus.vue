<template>
  <div class="flex items-center gap-1">
    <span :class="statusClass"></span>
    <span class="text-sm">{{ status }}</span>
  </div>
</template>

<script>
export default {
  props: ["status"],
  computed: {
    statusClass() {
      return {
        "bg-green-500": this.status === "Alive",
        "bg-red-500": this.status === "Dead",
        "w-2 h-2 rounded-full inline": true,
      };
    },
  },
};
</script>