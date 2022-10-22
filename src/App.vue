<template>
  <section class="p-main">
    <div class="p-main__container">
      <TimeLine />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TimeLine from "./components/atoms/TimeLine.vue";

export default defineComponent({
  name: "App",
  components: {
    TimeLine,
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
