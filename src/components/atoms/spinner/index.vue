<template>
  <div class="a-spinner--overlay">
    <div class="a-spinner__dot">
      <span v-for="n in 9" :key="n" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SpinnerContent",
});
</script>

<style lang="scss">
.a-spinner {
  display: flex;
  width: 100%;
  height: 60px;

  &--overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    align-items: center;
    height: auto;
    background: rgba(#0000, 0.7);
  }

  &__dot {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4px;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    margin: 150px auto;

    span {
      display: inline-block;
      width: 6px;
      height: 6px;
      background-color: #e8e9ed;
      border-radius: 50%;
      animation: loading-dots 0.75s ease-in-out 1s infinite;
    }

    @for $i from 1 through 9 {
      span:nth-child(#{$i}) {
        @if $i == 1 {
          animation-delay: 0s;
        } @else if $i == 2 or $i == 4 {
          animation-delay: 0.15s;
        } @else if $i == 3 or $i == 5 or $i == 7 {
          animation-delay: 0.3s;
        } @else if $i == 6 or $i == 8 {
          animation-delay: 0.45s;
        } @else if $i == 9 {
          animation-delay: 0.6s;
        }
      }
    }
  }

  @keyframes loading-dots {
    0% {
      background: #b60081;
    }

    40% {
      background: #f5b0e8;
    }

    50% {
      background: #e8e9ed;
    }
  }
}
</style>
