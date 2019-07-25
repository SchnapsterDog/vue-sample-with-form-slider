<template>
  <div id="form-slider"
       class="form-slider container-min mt-50">
    <div class="form_content">
      <swiper :options="swiperOption" 
              @slideChange="slideChange($event)"
              class="mt-15 swiper-form-slider"
              ref="formSwiper"
      >
        <swiper-slide>
          <form-step-1 v-if="!isNotFirstStep"></form-step-1>
        </swiper-slide>
        <swiper-slide>
          <form-step-2 v-if="isNotFirstStep"></form-step-2>
        </swiper-slide>
        <div class="swiper-pagination swiper-pagination-cont" slot="pagination"></div>
      </swiper>

      <div class="wrapper_button_next">
       <button v-if="!isNotFirstStep"
               class="btn btn-blue"
               @click="nextSlide()"
       >
          <img class="arrow_left">
          <span class="weiter_btn">
            <span>Next</span>
          </span>
        </button>
        <button v-else
               class="btn btn-blue"
               @click="prevSlide()"
       >
          <img class="arrow_left">
          <span class="weiter_btn">
            <span>Back</span>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import FormStep1 from '../form/FormStep1'
import FormStep2 from '../form/FormStep2'

export default {
  name: 'form-slider',
  components: {
    FormStep1, 
    FormStep2 
  },
  data () {
    return {
      isNotFirstStep: false,
      swiperOption: {
        simulateTouch: false,
        autoHeight: true,
        speed: 700,
        spaceBetween: 25,
        slidesPerView: 1,
        allowTouchMove: false,
        breakpoints: {
          '767': {
            slidesPerView: 1
          }
        },
        pagination: {
          el: '.swiper-pagination',
        },
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.formSwiper.swiper
    },
    currentForm () {
      const slide = this.$refs.formSwiper.$children[this.swiper.activeIndex]
      return slide.$children[0]
    }
  },
  methods: {
    nextSlide () {
      this.currentForm.$validator.validateAll()
        .then(valid => {
          if (valid) {
            setTimeout(() => {
              this.swiper.slideNext()
              this.scrollTo('#philips-forms')
            })
          } 
         
        });
    },
    prevSlide () {
      this.swiper.slidePrev()
    },
    slideChange () {
      this.isNotFirstStep = this.swiper.activeIndex !== 0
    }
  },
  mounted () {}
}
</script>

<style scoped lang="scss">

</style>