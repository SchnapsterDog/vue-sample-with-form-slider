<template>
  <div  id="instruction"
        class="instruction">
    <div class="container-min">
      <h2 class="h2">Lorem Ipsum</h2>
      <p class="text mb-25">
        It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div><!-- /container-min -->
    <div class="row">
      <div class="col">
        <div class="section_step">
          <div class="big_numeral">1</div>
          <div class="inner-section_step">
            <div class="min-text color-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="section_step">
          <div class="big_numeral">2</div>
          <div class="inner-section_step">
            <div class="min-text color-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'instruction',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped lang="scss">
  @media (max-width: 767.98px) {
    .instruction {
      .row {
        .col {
          &:not(:first-child) {
            margin-top: 15px;
          }
        }
      }
    }
  }
</style>
