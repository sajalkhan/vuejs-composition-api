<template>
  <div :class="className">
    <p class="a-timeline-item__title">{{ title }}</p>
    <p class="a-timeline-item__date">{{ date }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import props from "./props";

const className = "a-timeline-item";

export default defineComponent({
  name: "TimeLineItem",
  props,
  setup() {
    return {
      className,
    };
  },
});
</script>

<style lang="scss">
.a-timeline-item {
  display: flex;
  justify-content: flex-start;
  padding-left: 5px;
  align-items: center;
  margin-top: 2px;
  border-radius: 2px;
  background: rgb(226, 192, 19);

  &__date {
    font-weight: bold;
    margin-left: 10px;
  }
}
</style>
