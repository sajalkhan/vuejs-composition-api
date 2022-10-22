<template :class="className">
  <nav class="a-timeline__period">
    <a
      href="#"
      v-for="period in periods"
      :key="period"
      :class="{ 'is-active': period === currentPeriod }"
      @click="setPeriod(period)"
    >
      {{ period }}
    </a>
  </nav>

  <div v-for="item in posts" :key="item.id" class="a-timeline__details">
    <p class="a-timeline__details--title">{{ item.title }}</p>
    <p class="a-timeline__details--date">{{ item.created.format("Do MMM") }}</p>
  </div>
</template>

<script lang="ts">
import moment from "moment";
import { defineComponent, ref, computed } from "vue";
import { today, ThisWeek, ThisMonth } from "../../mocks";

const className = "a-timeline";
type period = "Today" | "This Week" | "This Month";

export default defineComponent({
  name: "TimeLine",

  setup() {
    const periods: period[] = ["Today", "This Week", "This Month"];
    const currentPeriod = ref<period>("Today");

    const setPeriod = (period: period) => {
      currentPeriod.value = period; // to update ref value use variable.value
    };

    const posts = computed(() => {
      return [today, ThisWeek, ThisMonth].filter((post) => {
        switch (currentPeriod.value) {
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
      periods,
      setPeriod,
      className,
      currentPeriod,
    };
  },
});
</script>

<style lang="scss">
.a-timeline {
  display: flex;
  flex-direction: column;

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

  &__details {
    display: flex;
    justify-content: flex-start;
    padding-left: 5px;
    align-items: center;
    margin-top: 2px;
    border-radius: 2px;
    background: rgb(226, 192, 19);

    &--date {
      font-weight: bold;
      margin-left: 10px;
    }
  }
}

.is-active {
  text-decoration: underline !important;
  text-underline-offset: 6px;
}
</style>
