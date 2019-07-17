<template>
  <div class="container">
    <header class="flexi-header p-30 mt-20">
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
              <a class="nav-link active"
                 @click.prevent>
                Link 1
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link"
                 href="#"
                 
              >
                Link 2
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link"
                 href="#"
              >
                Link 3
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link border-none"
                 href="#"
              >
                Link 4
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header><!-- /header -->
  </div><!-- /container -->
</template>

<script>
export default {
  name: 'Header',
  props: {
    hideMenu: Boolean
  },
  data () {
    return {
      isMobile: false
    }
  },
  methods: {
    toggleClass() {
      this.isMobile =! this.isMobile
    }
  }
}
</script>

<style lang="scss">
</style>
