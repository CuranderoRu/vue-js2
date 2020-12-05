<template>
  <form class="contact-form">
    <span>Contact us</span>
    <label for="input_name">
      Your name
      <input
        type="text"
        id="input_name"
        placeholder="Ivan"
        required
        :class="input_name_class"
        v-model="input_name_value"
      />
    </label>
    <label for="input_phone">
      Your phone number
      <input
        type="text"
        id="input_phone"
        placeholder="+7(000)000-0000"
        required
        :class="input_phone_class"
        v-model="input_phone_value"
      />
    </label>
    <label for="input_email">
      Your contact e-mail
      <input
        type="text"
        id="input_email"
        placeholder="my@mail.com"
        required
        :class="input_email_class"
        v-model="input_email_value"
      />
    </label>
    <label>Your message:</label>
    <textarea 
      id="input_content" 
      cols="50" 
      rows="10"
      v-model="input_textarea_value"
    ></textarea>
    <input id="input_submit" type="submit" value="Send" v-on:click.prevent="handleEvent" />
  </form>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  data() {
    return {
      input_name_class: "",
      input_name_value: "",
      input_phone_class: "",
      input_phone_value: "",
      input_email_class: "",
      input_email_value: "",
      input_textarea_value: "",
    };
  },
  methods: {
    ...mapActions('products', ['postMessage']),
    check(_value, _re) {
      return _re.test(_value);
    },
    handleEvent(e) {
      const { input_name_value,
              input_phone_value,
              input_email_value,
              input_textarea_value
            } = this;
      let noErrors = true;
      if (this.check(input_name_value, /^[A-Za-zА-Яа-яЁё\ ]+$/)) {
        this.input_name_class = "";
      } else {
        this.input_name_class = "incorrect_input";
        noErrors = false;
      }
      if (
        this.check(
          input_phone_value,
          /\+[\d]{1}\([\d]{2,3}\)[\d]{2,3}-[\d]{2,3}-[\d]{2,3}$/
        )
      ) {
        this.input_phone_class = "";
      } else {
        this.input_phone_class = "incorrect_input";
        noErrors = false;
      }
      if (
        this.check(
          this.input_email_value,
          /^[\w]{1}[\w-\.]*@[\w-\.]+\.[a-z]{2,4}$/i
        )
      ) {
        this.input_email_class = "";
      } else {
        this.input_email_class = "incorrect_input";
        noErrors = false;
      }
      if(noErrors){
        this.postMessage({
              "name": input_name_value,
              "phone": input_phone_value,
              "email": input_email_value,
              "text": input_textarea_value
            });
      }
    },
  },
};
</script>

<style>
</style>