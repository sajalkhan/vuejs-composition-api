<template>
  <div class="p-home">
    <Suspense>
      <template #default>
        <TimeLineDetails />
      </template>
      <template #fallback>
        <Spinner />
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TimeLineDetails from "@/components/organisms/timeline-details/index.vue";
import Spinner from "@/components/atoms/spinner/index.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    TimeLineDetails,
    Spinner,
  },
});
</script>

<style lang="scss">
.p-home {
  padding: 50px 100px;
}
</style>
