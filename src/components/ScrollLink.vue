<template>
  <a class="nav-link border-none"
     @click.prevent="scroll"
     :href="href"
  >
      {{ linkName }} 
  </a>
  
</template>

<script>
export default {
  name: 'ScrollLink',
  props: {
    href: {
      type: String
    },
    linkName: {
      type: String,
      default: () => {
        return 'Sample Link';
      }
    }
},
  methods: {
    scroll() {
      document.querySelector(this.href)
              .scrollIntoView({ behavior: 'smooth'})
    }
  }
}
</script>

<style lang="scss">
</style>
