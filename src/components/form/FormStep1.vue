<template>
  <div class="form-step">
    <h2 class="h2">Personal Details</h2>
    <div class="row row-min mb-30">
      <div class="col-md-6 col-min">
        <input type="email" 
               class="form-control"
               placeholder="Email"
               name="Email" 
               :class="{ 'is-invalid': errors.has('Email') }" 
               v-validate="'required|email'" 
               ref="Email"
        >
        <validation-message :message="errors.first('Email')" :show="errors.has('Email')"></validation-message>
      </div>
      <div class="col-md-6 col-min">
        <input type="email" 
               class="form-control"
               placeholder="Repeat the email"
               name="Repeat the email" 
               :class="{ 'is-invalid': errors.has('Repeat the email') }" 
               v-validate="'required|confirmed:Email'"
               ref="Repeat the email"
        >
        <validation-message :message="errors.first('Repeat the email')" :show="errors.has('Repeat the email')"></validation-message>
      </div>
    </div>
    <div class="row row-min mb-30">
      <div class="col-md-6 col-min">
        <input type="text" 
               class="form-control"
               placeholder="First Name"
               name="Name" 
               :class="{ 'is-invalid': errors.has('Name') }" 
               v-validate="'required'" 
               ref="Name"
        >
        <validation-message :message="errors.first('Name')" :show="errors.has('Name')"></validation-message>
      </div>
      <div class="col-md-6 col-min">
        <input type="text" 
               class="form-control"
               placeholder="Last Name"
               name="Last Name" 
               :class="{ 'is-invalid': errors.has('Last Name') }" 
               v-validate="'required'" 
               ref="Last Name"
        >
        <validation-message :message="errors.first('Last Name')" :show="errors.has('Last Name')"></validation-message>
      </div>
    </div>
    <div class="row row-min mb-30">
      <div class="col-md-6 col-min">
        <select class="custom-select-dop form-control" name="'Gender'"
                :class="{ 'is-invalid': errors.has('Gender') }"
                v-validate="'required'"
        >
          <option class="option-custom" 
                  value="" disabled
                  >Gender
          </option>
          <option class="option-custom" 
                  value="Male">
                    Mr.
          </option>
          <option class="option-custom"
                  value="Female">
                    'Mrs.
          </option>
        </select>
        <validation-message :message="errors.first('Gender')" :show="errors.has('Gender')"></validation-message>
      </div>
      <div class="col-md-6 col-min">
        <select class="custom-select-dop form-control"
                name="Country"
                :class="{ 'is-invalid': errors.has('Country') }"
                v-validate="'required'"
                ref="country"
        >
          <option class="option-custom" 
                  value="" disabled>
                    Country
          </option>
          <option class="option-custom" value="Spain">Germany</option>
          <option class="option-custom" value="Portugal">Austria</option>
        </select>
        <validation-message :message="errors.first('Country')" :show="errors.has('Country')"></validation-message>
      </div>
    </div>

    
  </div>
</template>

<script>
import ValidationMessage from '../ValidationMessage'

export default {
  name: 'form-step-1',
  data(){
    return {
     
    }
  },
  components: {
    ValidationMessage
  },
  computed: {
    
  },
  methods: {
    
  }
}
</script>

<style scoped lang="scss">
  .checkbox-wrapper {
    display: flex;
    align-items: center;
  }
</style>