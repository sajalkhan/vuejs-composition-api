<template :class="className">
  <nav class="a-navBar__period">
    <a
      href="#"
      v-for="period in periods"
      :key="period"
      :data-test="period"
      :class="{ 'is-active': period === currentPeriod }"
      @click="$emit('setPeriod', period)"
    >
      {{ period }}
    </a>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import props from "./props";

const className = "a-navBar";
type period = "Today" | "This Week" | "This Month";

export default defineComponent({
  name: "NavBar",
  props,
  emits: ["setPeriod"],
  setup() {
    const periods: period[] = ["Today", "This Week", "This Month"];

    return {
      periods,
      className,
    };
  },
});
</script>

<style lang="scss">
.a-navBar {
  &__period {
    width: 100%;
    background: #2c3e50;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    > a {
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
}

.is-active {
  text-decoration: underline !important;
  text-underline-offset: 6px;
}
</style>
