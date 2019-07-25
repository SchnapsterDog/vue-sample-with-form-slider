<template>
  <div class="container">
    <header id="header"
            class="flexi-header p-30 mt-20">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a href="#" target="_blank" class="navbar-brand custom-link">
          Rampit LLC Sample
        </a>
        <a class="dropdown-toggle header_btn arrow-none"
           href="#" 
           id="navbarDropdown" 
           role="button" 
           data-toggle="dropdown" 
           aria-haspopup="true" 
           aria-expanded="false"
           v-if="!hideMenu"
           @click="toggleClass()"
        >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </a>
        <div class="dropdown-menu dropdown-menu-header ml-auto" 
             :class="{'mobile-dropdown': this.isMobile}"
             v-if="!hideMenu" 
             aria-labelledby="navbarDropdown"  
        >
          <ul class="navbar-nav">
            <li class="nav-item">
               <scroll-link :href="'#footer'"
                            :linkName="'Sample Link 1'"
               ></scroll-link>
            </li>
            <li class="nav-item">
               <scroll-link :href="'#header'"
                            :linkName="'Sample Link 2'"
               ></scroll-link>
            </li>
            <li class="nav-item">
               <scroll-link :href="'#footer'"
                            :linkName="'Sample Link 3'"
               ></scroll-link>
            </li>
            <li class="nav-item">
              <scroll-link :href="'#footer'"
                            :linkName="'Sample Link 4'"
               ></scroll-link>
            </li>
          </ul>
        </div>
      </nav>
    </header><!-- /header -->
  </div><!-- /container -->
</template>

<script>
import ScrollLink from './ScrollLink'

export default {
  name: 'Header',
  props: {
    hideMenu: Boolean
  },
  components: {
    ScrollLink
  },
  data () {
    return {
      isMobile: false
    }
  },
  methods: {
    scrollTo(selector) {
      document.querySelector(selector).scrollIntoView({ behavior: 'smooth'})
    },
    toggleClass() {
      this.isMobile =! this.isMobile
    }
  }
}
</script>

<style lang="scss">
</style>
