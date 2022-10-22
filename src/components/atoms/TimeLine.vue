<template>
  <nav class="a-timeline">
    <span class="a-timeline__panel">
      <a href="#">Today</a>
      <a href="#">This week</a>
      <a href="#">This month</a>
    </span>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TimeLine",
});
</script>

<style lang="scss">
.a-timeline {
  display: flex;
  width: 100%;
  background: #2c3e50;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  &__panel a {
    font-size: 18px;
    color: #d8e489;
    opacity: 1;
    text-decoration: none;
    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 0.8;
    }

    &:not(:last-child) {
      margin-right: 10px;
    }
  }
}
</style>
