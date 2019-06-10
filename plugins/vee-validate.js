// import Vue from 'vue';
// // import VeeValidate from 'vee-validate';
// import VeeValidate, { Validator } from 'vee-validate'
// // import ko from 'vee-validate/dist/locale/ko.js'

// // // 1. custom rule
// // const truthyValidator = {
// //   getMessage(field, args) {
// //     return 'The ' + field + ' value is not truthy.'
// //   },
// //   validate(value, args) {
// //     return !! value
// //   }
// // }
// // Validator.extend('truthy', truthyValidator)
// // let instance = new Validator({trueField: 'truthy'})

// const config = {
//   // locale: ko,
//   // dictionary: {
//   //   ko: {
//   //     // overwriting msg
//   //     // messages: {
//   //     //   email: `field: , Some English Msg`
//   //     // },
//   //     // attributes === fieldName === inputName
//   //     attributes: {
//   //       email: 'E-mail',
//   //     },
//   //   }
//   // },
//   classes: true,
//   classNames: {
//     valid: 'is-valid',
//     invalid: 'is-invalid'
//   },
// }
// // Vue.use(VeeValidate, config);
// Vue.use(VeeValidate, config)
// Validator.localize('ko');

import Vue from 'vue';
import ar from 'vee-validate/dist/locale/ar';
// import ko from 'vee-validate/dist/locale/ko';
import VeeValidate from 'vee-validate';

// // Install the Plugin.
// Vue.use(VeeValidate);

// // Localize takes the locale object as the second argument (optional) and merges it.
// // Validator.localize('ar', ar);
// Validator.localize('ko', ko);

Vue.use(VeeValidate, {
  locale: ar,
  // dictionary: {
  //   en: { attributes: attributesEn },
  //   ar: { messages: messagesAr, attributes: attributesAr }
  // }
});