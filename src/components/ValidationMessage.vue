<template>
  <transition name="slide">
    <div class="invalid-feedback"
         v-show="show"
    >
      {{ message }}
    </div>
  </transition>
</template>

<script>

export default {
    name: 'validation-message',
    props: {
      message: {
        type: String
      },
      show: {
        type: Boolean,
        required: true
      }
    }
}
</script>

<style scoped lang="scss">
  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.3s;
  }
  .slide-enter,
  .slide-leave-to {
    opacity: 0;
  }
  .invalid-feedback {
    display: block;
    top: 0.25rem;
    position: relative;
    margin-top: 0;
  }
</style>


