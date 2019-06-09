<template>
<div>
  <!-- handling syntax -->
  <section class="syntax">
    <h2>syntax</h2>
    <div class="multiple-syntax single-error">
      <h3>multiple syntax, single error</h3>
      <p>syntax https://baianat.github.io/vee-validate/guide/rules.html</p>
      <p>email</p>
      <input v-validate="'required|email'" name="email" type="text">
      <p>{{ errors.first('email') }}</p>
    </div>
    <div class="syntax-parameter">
      <h3>syntax parameter</h3>
      <p>syntax parameter list list https://github.com/baianat/vee-validate/blob/master/locale/ko.js</p>
      <p>between: (field, [min, max])</p>
        <input v-validate="'required|between:1,11'" name="fieldName2" type="text" placeholder="1~11사이 숫자 입력">
        <p>{{ errors.first('fieldName2') }}</p>
    </div>
  </section>
  <section class="diplay-erros">
    <!-- errors.first api사용하면 편함 -->
    <h3>single error msg, rule: 'required|alpha'</h3>
      <input v-validate="'required|alpha'" name="singleErr" type="text">
      <p>{{errors.first('singleErr')}}</p>
    <h3>multiple error msg, rule: 'required|alpha|min:5|max:10'</h3>
      <input v-validate.continues="'required|alpha|min:5|max:10'" name="multiErr" type="text">
      <ul>
        <li v-for="(err, idx) in errors.collect('multiErr')" :key="idx"><p>{{ err }}</p></li>
      </ul>
    <h3>all error msg</h3>
    <h4>flat list of errors: errors.all()</h4>
      <ul>
        <li v-for="(error, idx) in errors.all()" :key="idx"><p>{{ error }}</p></li>
      </ul>
    <h4>grouped by field name: errors.collect() -> group</h4>
      <ul>
        <li v-for="(group, groupIdx) in errors.collect()" :key="groupIdx">
          <p>group: {{group}}</p>
          <ul>
            <li v-for="(err, idx) in group" :key="idx" ><p>{{ err }}</p></li>
          </ul>
        </li>
      </ul>
  </section>
</div>
</template>
<script>

export default {
  name: 'TestValidate',
  components: {
  },
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style>
input:focus {
  outline: none;
}
.is-invalid {
  border: 1px solid red;
}
.is-invalid + p {
  color: red;
}
/* input[aria-invalid="true"] {
  color: red;
  border: 10px solid blue;
  outline: 10px solid red;
}
input[aria-invalid="false"] {
  color: white;
  border: 10px solid red;
  outline: 10px solid blue;
}
input[type='text'] {
  background: green;
} */
.invalid {
  color: red;
}
</style>
