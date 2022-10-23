<template>
  <section class="p-app">
    <div class="p-app__container">
      <Button class="p-app__container--button" />
      <router-view />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/atoms/button/index.vue";

export default defineComponent({
  name: "App",
  components: {
    Button,
  },
});
</script>

<style lang="scss">
.p-app {
  width: 100%;
  height: 100%;

  &__container {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 50px;

    &--button {
      position: absolute;
      right: 100px;
    }
  }
}
</style>
