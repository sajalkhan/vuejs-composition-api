<template>
  <section class="p-main">
    <div class="p-main__container">
      <TimeLineDetails />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TimeLineDetails from "@/components/organisms/timeline-details/index.vue";

export default defineComponent({
  name: "App",
  components: {
    TimeLineDetails,
  },
});
</script>

<style lang="scss">
.p-main {
  height: 100%;
  width: 100%;

  &__container {
    padding: 50px 100px;
  }
}
</style>
