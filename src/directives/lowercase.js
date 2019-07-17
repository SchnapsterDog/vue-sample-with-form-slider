import Vue from 'vue'

Vue.directive('lowercase', {
  update: function (el) {
    if (!el.value) {
      return ''
    }
    el.value = el.value.toLowerCase()
  }
})