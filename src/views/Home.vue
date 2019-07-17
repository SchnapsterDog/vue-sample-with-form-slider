<template>
  <div class="wrapper-page">
    <app-header></app-header>

    <div class="container">

      <introduction></introduction>

      <instruction></instruction>

      <form-slider></form-slider>

    </div>

    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import Introduction from '../components/Introduction'
import Instruction from '../components/Instruction'
import FormSlider from '../components/form/FormSlider'


export default {
  name: 'home',
  components: {
    appHeader: Header,
    appFooter: Footer,
    Introduction,
    Instruction,
    FormSlider
  },
  computed: {
    
  },
  methods: {
    
  },
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss">
</style>