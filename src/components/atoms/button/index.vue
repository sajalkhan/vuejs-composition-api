<template>
  <router-link class="a-button" to="/posts/new"> New Posts </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const className = "a-button";
export default defineComponent({
  name: "ButtonComponent",
  setup() {
    return {
      className,
    };
  },
});
</script>

<style lang="scss">
.a-button {
  text-decoration: none;
  font-size: 15px;
  text-align: center;
  padding: 5px;
  width: 100px;
  border-radius: 5px;
  color: #ffff;
  background: rgb(100, 210, 107);
}
</style>
