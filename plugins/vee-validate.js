import Vue from 'vue';
import VeeValidate from 'vee-validate';
// import VeeValidate, { Validator } from 'vee-validate';
import ko from 'vee-validate/dist/locale/ko';

const config = {
  locale: ko.name,
  dictionary: {
    // reference: [vee-validate/dist/locale/ko](https://github.com/baianat/vee-validate/blob/master/locale/ko.js)
    ko: {
      attributes: {
        ...ko.attributes,
        email: '이메일!'
      },
      messages: {
        ...ko.messages,
        email: (fieldName) => `${fieldName} Some English Message`,
      }
    }
  },
  classes: true,
  classNames: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  },
};

Vue.use(VeeValidate, config);
