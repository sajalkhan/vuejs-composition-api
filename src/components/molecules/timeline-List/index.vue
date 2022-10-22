<template>
  <div v-for="item in posts" :key="item.id" :class="className">
    <TimeLineItem :title="item.title" :date="item.created.format('Do MMM')" />
  </div>
</template>

<script lang="ts">
import moment from "moment";
import props from "./props";

import { defineComponent, computed } from "vue";
import { today, ThisWeek, ThisMonth } from "@/mocks";
import TimeLineItem from "@/components/atoms/timeLine-item/index.vue";

const className = "m-timelineList";

export default defineComponent({
  name: "TimeLineList",
  components: { TimeLineItem },
  props,
  setup(props) {
    const posts = computed(() => {
      return [today, ThisWeek, ThisMonth].filter((post) => {
        switch (props.currentPeriod) {
          case "Today":
            return post.created.isAfter(moment().subtract(1, "day"));

          case "This Week":
            return post.created.isAfter(moment().subtract(1, "week"));

          case "This Month":
            return post.created.isAfter(moment().subtract(1, "month"));

          default:
            return false;
        }
      });
    });

    return {
      posts,
      className,
    };
  },
});
</script>

<style lang="scss">
.m-timelineList {
  display: flex;
  flex-direction: column;
}
</style>
