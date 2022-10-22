<template>
  <Navbar @setPeriod="setPeriod" :currentPeriod="currentPeriod" />
  <TimeLineList :currentPeriod="currentPeriod" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Navbar from "@/components/atoms/navbar/index.vue";
import TimeLineList from "@/components/molecules/timeline-List/index.vue";

const className = "o-timeLineDetails";
type period = "Today" | "This Week" | "This Month";

export default defineComponent({
  name: "TimeLineDetails",
  components: {
    Navbar,
    TimeLineList,
  },
  setup() {
    const currentPeriod = ref<period>("Today");

    const setPeriod = (period: period) => {
      currentPeriod.value = period; // to update ref value use variable.value
    };

    return {
      className,
      setPeriod,
      currentPeriod,
    };
  },
});
</script>

<style lang="scss">
.o-timeLineDetails {
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
